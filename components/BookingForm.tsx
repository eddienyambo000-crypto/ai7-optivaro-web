"use client";

import { useMemo, useState, useTransition } from "react";
import { CalendarCheck, CheckCircle2, MapPin, MessageCircle, UserRound } from "lucide-react";
import { createBooking, type BookingActionState } from "@/app/actions";

type LocalBooking = NonNullable<BookingActionState["booking"]>;

export function BookingForm() {
  const [state, setState] = useState<BookingActionState | null>(null);
  const [bookings, setBookings] = useState<LocalBooking[]>([]);
  const [isPending, startTransition] = useTransition();
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);

  function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await createBooking(formData);
      setState(result);
      if (result.ok && result.booking) {
        setBookings((current) => [result.booking!, ...current]);
      }
    });
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <form
        action={handleSubmit}
        className="rounded-[2rem] border border-white/70 bg-white p-5 shadow-clinic sm:p-7"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan/10 text-midnight">
            <CalendarCheck aria-hidden="true" size={22} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-navy">
              Request an appointment
            </h3>
            <p className="text-sm text-slate-500">Fast confirmation via WhatsApp.</p>
          </div>
        </div>

        <div className="grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-navy">
            Patient Name
            <span className="relative">
              <UserRound className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                required
                name="patientName"
                placeholder="Your full name"
                className="w-full rounded-2xl border border-slate-200 bg-mist py-3.5 pl-11 pr-4 text-base outline-none transition-[border-color,box-shadow,transform] duration-300 focus:border-cyan focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,215,255,0.14)]"
              />
            </span>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-navy">
            Phone Number (WhatsApp)
            <span className="relative">
              <MessageCircle className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                required
                name="phone"
                type="tel"
                placeholder="+250 7XX XXX XXX"
                className="w-full rounded-2xl border border-slate-200 bg-mist py-3.5 pl-11 pr-4 text-base outline-none transition-[border-color,box-shadow,transform] duration-300 focus:border-cyan focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,215,255,0.14)]"
              />
            </span>
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-navy">
              Select Location
              <select
                required
                name="location"
                defaultValue=""
                className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3.5 text-base outline-none transition-[border-color,box-shadow,transform] duration-300 focus:border-cyan focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,215,255,0.14)]"
              >
                <option value="" disabled>
                  Choose clinic
                </option>
                <option>Kigali City</option>
                <option>Nyamata City</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-navy">
              Preferred Date
              <input
                required
                name="preferredDate"
                type="date"
                min={today}
                className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3.5 text-base outline-none transition-[border-color,box-shadow,transform] duration-300 focus:border-cyan focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,215,255,0.14)]"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-navy">
            Service
            <select
              required
              name="service"
              defaultValue=""
              className="w-full rounded-2xl border border-slate-200 bg-mist px-4 py-3.5 text-base outline-none transition-[border-color,box-shadow,transform] duration-300 focus:border-cyan focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,215,255,0.14)]"
            >
              <option value="" disabled>
                Select service
              </option>
              <option>Eye Exam</option>
              <option>Frame Fitting</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-gold px-6 py-4 text-base font-extrabold text-navy shadow-gold transition-[opacity,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_45px_rgba(245,185,66,0.36)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending request..." : "Book Your Appointment"}
        </button>

        {state && (
          <div
            role="status"
            className={`mt-5 flex items-start gap-3 rounded-2xl border p-4 text-sm font-semibold ${
              state.ok
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
          >
            <CheckCircle2 aria-hidden="true" className="mt-0.5 shrink-0" size={18} />
            <span>{state.message}</span>
          </div>
        )}
      </form>

      <aside className="rounded-[2rem] border border-cyan/20 bg-navy p-5 text-white shadow-glow sm:p-7">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan">
            <MapPin aria-hidden="true" size={22} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-[-0.03em]">Live booking feed</h3>
            <p className="text-sm text-white/65">Recent requests from this session.</p>
          </div>
        </div>

        <div className="space-y-3">
          {bookings.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-sm leading-7 text-white/70">
              Submit the form to see the mock backend flow populate this dashboard.
            </div>
          ) : (
            bookings.map((booking) => (
              <div key={booking.id} className="rounded-3xl border border-white/10 bg-white/[0.07] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-bold">{booking.patientName}</p>
                  <span className="rounded-full bg-cyan/15 px-3 py-1 text-xs font-bold text-cyan">
                    {booking.service}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/70">{booking.phone}</p>
                <p className="mt-1 text-sm text-white/70">
                  {booking.location} - {booking.preferredDate}
                </p>
              </div>
            ))
          )}
        </div>
      </aside>
    </div>
  );
}
