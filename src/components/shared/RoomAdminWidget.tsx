'use client';

import { useEffect, useRef, useId } from 'react';

interface RoomAdminWidgetProps {
  /** Filtrowanie po ID pokoju (opcjonalne) */
  roomId?: string;
  /** Czy pokazać tło w kolorze #cecece (domyślnie true) */
  showBackground?: boolean;
  /** Minimalna wysokość iframe */
  minHeight?: number;
}

/**
 * Komponent widgetu RoomAdmin - formularz rezerwacji
 * 
 * Używa iframe z RoomAdmin.pl do wyświetlania:
 * - Formularza wyboru dat
 * - Listy dostępnych pokoi z cenami
 * - Formularza rezerwacji
 */
export function RoomAdminWidget({ 
  roomId, 
  showBackground = true,
  minHeight = 100 
}: RoomAdminWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // Używamy useId() zamiast Math.random() żeby uniknąć hydration mismatch
  const reactId = useId();
  const iframeId = `ra-reservation-form-v2${reactId.replace(/:/g, '-')}`;

  // Parametry RoomAdmin
  const facilityHash = '6ab76737953f246ebb7b9de126773ef1a31b6b8f';
  
  // Style widgetu (kolory pasujące do strony)
  // Dokumentacja: https://roomadmin.pl - dostępne opcje to tylko:
  // color_accent, color_bg, color_panel_header, color_panel_body, rounded_corners
  const style = {
    color_accent: '#a5823c',        // Ciemny złoty - elegancki, pasuje do strony
    color_bg: '#fdfaf5',            // Kremowe tło
    color_panel_header: '#ffffff',  // Białe nagłówki
    color_panel_body: '#ffffff',    // Białe panele
    rounded_corners: true           // Zaokrąglone rogi
  };

  // Budowanie URL iframe
  let iframeSrc = `https://roomadmin.pl/widget/reservation-v2/start?fh=${facilityHash}&style=${encodeURIComponent(JSON.stringify(style))}&lang=pl`;
  
  // Dodanie filtra pokoju jeśli podany
  if (roomId) {
    const filter = { room_id_in: [roomId] };
    iframeSrc += `&filter=${encodeURIComponent(JSON.stringify(filter))}`;
  }

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Funkcja odbierająca wiadomości z iframe (do dynamicznej wysokości)
    function raMessageReceiver(event: MessageEvent) {
      if (!iframe) return;
      
      // Sprawdzenie czy wiadomość pochodzi z RoomAdmin
      if (event.data.height) {
        iframe.style.height = (event.data.height + 10) + 'px';
      }

      // Obsługa scrollowania do góry po akcji w widgecie
      if (event.data.event && event.data.event.name === 'widget.scrollup.requested') {
        try {
          iframe.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (e) {
          // Ignoruj błędy scrollowania
        }
      }

      // Logowanie udanej rezerwacji (opcjonalne - do analytics)
      if (event.data.event && event.data.event.name === 'reservation.submit.success') {
        console.log('Rezerwacja złożona:', event.data.event.data?.reservation);
      }
    }

    // Funkcja konfigurująca iframe
    function setup() {
      if (!iframe) return;
      try {
        iframe.contentWindow?.postMessage({
          location: window.location.toString(),
          setup: {
            autoHeight: true,
            senderName: iframeId
          }
        }, '*');
      } catch (e) {
        // Ignoruj błędy cross-origin
      }
    }

    // Nasłuchiwanie wiadomości z iframe
    window.addEventListener('message', raMessageReceiver, false);
    
    // Konfiguracja po załadowaniu
    iframe.addEventListener('load', setup);
    
    // Ponowna konfiguracja co sekundę (wymagane przez RoomAdmin)
    const interval = setInterval(setup, 1000);

    // Cleanup
    return () => {
      window.removeEventListener('message', raMessageReceiver);
      iframe.removeEventListener('load', setup);
      clearInterval(interval);
    };
  }, [iframeId]);

  return (
    <section 
      id="boxRezerwacja" 
      className={`w-full ${showBackground ? 'py-6' : ''}`}
      style={showBackground ? { backgroundColor: '#fdfaf5' } : undefined}
    >
      <div className={showBackground ? 'container-custom' : ''}>
        <iframe
          ref={iframeRef}
          id={iframeId}
          src={iframeSrc}
          style={{
            width: '100%',
            height: `${minHeight}px`,
            border: 'none',
            padding: 0
          }}
          title="Formularz rezerwacji - Dwór Bartnika"
        />
      </div>
    </section>
  );
}

export default RoomAdminWidget;
