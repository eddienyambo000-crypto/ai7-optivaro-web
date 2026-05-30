"use server";

import { addBooking } from "@/lib/bookings";

export type BookingActionState = {
  ok: boolean;
  message: string;
  booking?: {
    id: string;
    patientName: string;
    phone: string;
    location: string;
    preferredDate: string;
    service: string;
    createdAt: string;
  };
};

const locations = ["Kigali City", "Nyamata City"] as const;
const services = ["Eye Exam", "Frame Fitting"] as const;

export async function createBooking(formData: FormData): Promise<BookingActionState> {
  const patientName = String(formData.get("patientName") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const location = String(formData.get("location") ?? "");
  const preferredDate = String(formData.get("preferredDate") ?? "");
  const service = String(formData.get("service") ?? "");

  if (!patientName || !phone || !location || !preferredDate || !service) {
    return {
      ok: false,
      message: "Please complete every field before submitting.",
    };
  }

  if (!locations.includes(location as (typeof locations)[number])) {
    return {
      ok: false,
      message: "Please choose a valid clinic location.",
    };
  }

  if (!services.includes(service as (typeof services)[number])) {
    return {
      ok: false,
      message: "Please choose a valid service.",
    };
  }

  const booking = addBooking({
    patientName,
    phone,
    location: location as "Kigali City" | "Nyamata City",
    preferredDate,
    service: service as "Eye Exam" | "Frame Fitting",
  });

  return {
    ok: true,
    message: "Appointment Request Received! Our team will confirm via WhatsApp shortly.",
    booking,
  };
}
