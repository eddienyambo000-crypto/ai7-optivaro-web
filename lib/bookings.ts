export type Booking = {
  id: string;
  patientName: string;
  phone: string;
  location: "Kigali City" | "Nyamata City";
  preferredDate: string;
  service: "Eye Exam" | "Frame Fitting";
  createdAt: string;
};

type BookingStore = {
  bookings: Booking[];
};

const globalForBookings = globalThis as typeof globalThis & {
  evcBookingStore?: BookingStore;
};

export const bookingStore =
  globalForBookings.evcBookingStore ??
  (globalForBookings.evcBookingStore = {
    bookings: [],
  });

export function addBooking(input: Omit<Booking, "id" | "createdAt">) {
  const booking: Booking = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  bookingStore.bookings.unshift(booking);
  return booking;
}

export function getBookings() {
  return bookingStore.bookings;
}
