'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface TopographicBackgroundProps {
  /** Kolor linii topograficznych (hex string) */
  lineColor?: string;
  /** Kolor tła (hex string) */
  backgroundColor?: string;
  /** Szybkość animacji (0.01 = wolna, 0.1 = szybka) */
  speed?: number;
  /** Skala wzoru (mniejsza = większe linie) */
  scale?: number;
  /** Grubość linii (0.05 - 0.2) */
  lineThickness?: number;
  /** Liczba "poziomów" topograficznych */
  levels?: number;
  /** Dodatkowa klasa CSS */
  className?: string;
}

// Shader szumu Perlina 3D - klasyczny algorytm
const noiseShader = `
  //
  // Description : Array and textureless GLSL 2D/3D/4D simplex 
  //               noise functions.
  //      Author : Ian McEwan, Ashima Arts.
  //  Maintainer : stegu
  //     Lastmod : 20110822 (ijm)
  //     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
  //               Distributed under the MIT License. See LICENSE file.
  //               https://github.com/ashima/webgl-noise
  // 

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
    return mod289(((x*34.0)+10.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) { 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    // Permutations
    i = mod289(i); 
    vec4 p = permute( permute( permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }
`;

// Vertex shader - przekazuje pozycję fragmentu
const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader - generuje topograficzne linie
const fragmentShader = `
  ${noiseShader}
  
  uniform float time;
  uniform float scale;
  uniform float levels;
  uniform float lineThickness;
  uniform vec3 lineColor;
  uniform vec2 resolution;
  
  varying vec2 vUv;
  
  void main() {
    // Responsywna skala - ZWIĘKSZONA na mobile żeby było więcej linii
    // 800px+ = normalna skala (1.0), poniżej 800px = zwiększona (do 2.2)
    float screenFactor = 1.0 + (1.0 - clamp(resolution.x / 800.0, 0.0, 1.0)) * 1.2;
    
    // Używamy współrzędnych z uwzględnieniem proporcji ekranu
    vec2 pos = vUv * vec2(resolution.x / resolution.y, 1.0) * 8.0 * scale * screenFactor;
    
    // Oblicz szum Perlina z animacją w czasie
    float noise = snoise(vec3(pos, time));
    
    // Normalizuj szum z zakresu [-1, 1] do [0, 1]
    noise = (noise + 1.0) / 2.0;
    
    // Posteryzacja - tworzymy "poziomy" wysokości
    float scaledNoise = noise * levels;
    
    // Używamy fract() aby uzyskać tylko część ułamkową - to daje nam odległość od najbliższej linii
    float fractPart = fract(scaledNoise);
    
    // Linie są tam gdzie fractPart jest blisko 0 lub 1
    float distToLine = min(fractPart, 1.0 - fractPart);
    
    // Jeśli za daleko od linii, nie rysuj
    if (distToLine > lineThickness) {
      discard;
    }
    
    // Antyaliasing - płynne wygaszanie na krawędziach linii
    float alpha = 1.0 - smoothstep(0.0, lineThickness, distToLine);
    
    gl_FragColor = vec4(lineColor, alpha * 0.35);
  }
`;

export function TopographicBackground({
  lineColor = '#5eead4', // turkusowy/teal
  backgroundColor = '#0f172a', // ciemny granat (slate-900)
  speed = 0.02,
  scale = 1.0,
  lineThickness = 0.1,
  levels = 10.0,
  className = '',
}: TopographicBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameIdRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check WebGL support - fallback dla starych urządzeń
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebglSupported(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Intersection Observer - renderuj tylko gdy widoczne
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Start gdy 10% widoczne
    );
    observer.observe(container);

    // Scena Three.js
    const scene = new THREE.Scene();
    
    // Kamera ortograficzna - płaska projekcja bez perspektywy
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera.position.z = 1;

    // Renderer WebGL z przezroczystością + optymalizacje
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: false, // Wyłączone dla performance (było true)
      powerPreference: 'high-performance', // Preferuj performance nad battery
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Obniżone z 2 do 1.5
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Konwertuj kolor hex na RGB dla shadera
    const color = new THREE.Color(lineColor);

    // Materiał z naszymi shaderami
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        scale: { value: scale },
        levels: { value: levels },
        lineThickness: { value: lineThickness },
        lineColor: { value: new THREE.Vector3(color.r, color.g, color.b) },
        resolution: { value: new THREE.Vector2(width, height) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    });

    // Płaszczyzna pokrywająca całą kamerę
    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Zegar do animacji
    const clock = new THREE.Clock();
    let frameCount = 0;
    const TARGET_FPS = 25; // Zamiast 60fps = oszczędność 58% CPU!
    const FRAME_INTERVAL = Math.floor(60 / TARGET_FPS); // Render co ~2-3 klatki

    // Pętla renderowania - TYLKO gdy widoczne na ekranie
    function animate() {
      frameIdRef.current = requestAnimationFrame(animate);
      
      frameCount++;
      
      // Skip frames dla reduced FPS (60fps → 25fps)
      if (frameCount % FRAME_INTERVAL !== 0) return;
      
      // Renderuj tylko gdy element widoczny (Intersection Observer)
      if (!isVisible) return;
      
      // Aktualizuj czas w shaderze
      material.uniforms.time.value = clock.getElapsedTime() * speed;
      
      renderer.render(scene, camera);
    }
    animate();

    // Obsługa zmiany rozmiaru okna
    function handleResize() {
      if (!container || !rendererRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      rendererRef.current.setSize(newWidth, newHeight);
      material.uniforms.resolution.value.set(newWidth, newHeight);
    }
    window.addEventListener('resize', handleResize);

    // Cleanup przy odmontowaniu komponentu
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameIdRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [lineColor, speed, scale, lineThickness, levels, isVisible]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ backgroundColor }}
      aria-hidden="true"
    >
      {/* Fallback dla urządzeń bez WebGL (stare przeglądarki/urządzenia) */}
      {!webglSupported && (
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                ${lineColor}20 0px,
                ${lineColor}20 2px,
                transparent 2px,
                transparent 15px
              )`,
            }}
          />
        </div>
      )}
    </div>
  );
}

