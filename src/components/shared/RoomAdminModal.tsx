'use client';

import { useEffect, useRef, useId, useCallback } from 'react';
import { X } from 'lucide-react';

interface RoomAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Opcjonalne: wstępna data przyjazdu (YYYY-MM-DD) */
  arrival?: string;
  /** Opcjonalne: wstępna data wyjazdu (YYYY-MM-DD) */
  departure?: string;
  /** Opcjonalne: liczba gości */
  guests?: number;
  /** Opcjonalne: ID pokoju do filtrowania */
  roomId?: string;
}

/**
 * Modal z pełnym formularzem rezerwacji RoomAdmin
 * Otwiera się po kliknięciu przycisku "Rezerwuj"
 */
export function RoomAdminModal({
  isOpen,
  onClose,
  arrival,
  departure,
  guests,
  roomId
}: RoomAdminModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const reactId = useId();
  const iframeId = `ra-modal-${reactId.replace(/:/g, '-')}`;

  // Parametry RoomAdmin
  const facilityHash = '6ab76737953f246ebb7b9de126773ef1a31b6b8f';
  
  // Style widgetu - eleganckie, pasujące do strony
  const style = {
    color_accent: '#a5823c',        // Ciemny złoty - elegancki
    color_bg: '#ffffff',            // Białe tło w modal
    color_panel_header: '#fdfaf5',  // Kremowy nagłówek
    color_panel_body: '#ffffff',    // Białe panele
    rounded_corners: true
  };

  // Budowanie URL iframe
  let iframeSrc = `https://roomadmin.pl/widget/reservation-v2/start?fh=${facilityHash}&style=${encodeURIComponent(JSON.stringify(style))}&lang=pl`;
  
  // Dodanie wstępnych dat jeśli podane
  if (arrival) {
    iframeSrc += `&arrival=${arrival}`;
  }
  if (departure) {
    iframeSrc += `&departure=${departure}`;
  }
  if (guests) {
    iframeSrc += `&rooms[0][numberOfGuests]=${guests}`;
  }
  
  // Filtrowanie po pokoju
  if (roomId) {
    const filter = { room_id_in: [roomId] };
    iframeSrc += `&filter=${encodeURIComponent(JSON.stringify(filter))}`;
  }

  // Zamknięcie na Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  // Zamknięcie po kliknięciu w tło
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Blokuj scroll strony
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Przywróć scroll
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (!isOpen) return;
    
    const iframe = iframeRef.current;
    if (!iframe) return;

    function raMessageReceiver(event: MessageEvent) {
      if (!iframe) return;
      
      if (event.data.height) {
        // Pozwalamy iframe rosnąć - modal ma scroll
        iframe.style.height = (event.data.height + 20) + 'px';
      }

      // Obsługa scrollowania do góry w modalu
      if (event.data.event && event.data.event.name === 'widget.scrollup.requested') {
        try {
          iframe.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (e) {
          // Ignoruj błędy
        }
      }

      // Sukces rezerwacji
      if (event.data.event && event.data.event.name === 'reservation.submit.success') {
        console.log('Rezerwacja złożona:', event.data.event.data?.reservation);
        // Można tu dodać powiadomienie lub analytics
      }
    }

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

    window.addEventListener('message', raMessageReceiver, false);
    iframe.addEventListener('load', setup);
    const interval = setInterval(setup, 1000);

    return () => {
      window.removeEventListener('message', raMessageReceiver);
      iframe.removeEventListener('load', setup);
      clearInterval(interval);
    };
  }, [isOpen, iframeId]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal container */}
      <div 
        className="relative w-full max-w-4xl max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gradient-to-r from-primary-50 to-white">
          <div>
            <h2 id="modal-title" className="text-xl md:text-2xl font-serif font-bold text-gray-900">
              Rezerwacja online
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Dwór Bartnika - wybierz termin i pokój
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
            aria-label="Zamknij"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content - iframe z scrollem */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 md:p-6 bg-white min-h-0">
          <iframe
            ref={iframeRef}
            id={iframeId}
            src={iframeSrc}
            style={{
              width: '100%',
              height: '600px',
              border: 'none',
              padding: 0,
              minHeight: '400px'
            }}
            title="Formularz rezerwacji - Dwór Bartnika"
          />
        </div>

        {/* Footer - opcjonalny */}
        <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 text-center">
          <p className="text-xs text-gray-400">
            Bezpieczna rezerwacja przez RoomAdmin.pl • Bezpłatne odwołanie do 14 dni przed przyjazdem
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoomAdminModal;


