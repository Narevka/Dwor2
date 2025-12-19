'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { RoomAdminModal } from '@/components/shared/RoomAdminModal';

interface ReservationData {
  arrival?: string;
  departure?: string;
  guests?: number;
  roomId?: string;
}

interface ReservationModalContextType {
  isOpen: boolean;
  openModal: (data?: ReservationData) => void;
  closeModal: () => void;
}

const ReservationModalContext = createContext<ReservationModalContextType | null>(null);

/**
 * Provider dla modalu rezerwacji
 * Umieść w głównym layoucie aplikacji
 */
export function ReservationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reservationData, setReservationData] = useState<ReservationData>({});

  const openModal = useCallback((data?: ReservationData) => {
    setReservationData(data || {});
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Resetuj dane po zamknięciu
    setTimeout(() => setReservationData({}), 300);
  }, []);

  return (
    <ReservationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <RoomAdminModal
        isOpen={isOpen}
        onClose={closeModal}
        arrival={reservationData.arrival}
        departure={reservationData.departure}
        guests={reservationData.guests}
        roomId={reservationData.roomId}
      />
    </ReservationModalContext.Provider>
  );
}

/**
 * Hook do używania modalu rezerwacji
 * 
 * @example
 * const { openModal } = useReservationModal();
 * 
 * // Otwórz pusty modal
 * openModal();
 * 
 * // Otwórz z wstępnymi danymi
 * openModal({ arrival: '2024-12-20', departure: '2024-12-22', guests: 2 });
 */
export function useReservationModal() {
  const context = useContext(ReservationModalContext);
  
  if (!context) {
    throw new Error('useReservationModal must be used within ReservationModalProvider');
  }
  
  return context;
}


