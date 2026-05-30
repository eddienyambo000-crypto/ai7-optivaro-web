import { CalendarDays, Eye, MapPin, Phone } from "lucide-react";
import { getBookings } from "@/lib/bookings";

export default function AdminPage() {
  const bookings = getBookings();

  return (
    <main className="min-h-screen bg-mist px-4 py-10 text-ink sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-[2rem] bg-navy p-6 text-white shadow-glow sm:flex-row sm:items-center">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan">
              <Eye aria-hidden="true" />
            </div>
            <h1 className="font-display text-4xl font-bold tracking-[-0.03em]">EVC Booking Admin</h1>
            <p className="mt-2 text-white/65">Mock in-memory appointment requests.</p>
          </div>
          <a
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-5 text-sm font-extrabold text-navy shadow-gold transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:translate-y-0"
          >
            Back to site
          </a>
        </div>

        {bookings.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-clinic">
            <p className="font-display text-2xl font-bold tracking-[-0.03em] text-navy">No bookings yet</p>
            <p className="mt-3 text-slate-600">Submit the landing page booking form to populate this admin view.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {bookings.map((booking) => (
              <article key={booking.id} className="rounded-[1.7rem] border border-slate-200 bg-white p-5 shadow-clinic">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-[-0.03em] text-navy">
                      {booking.patientName}
                    </h2>
                    <p className="mt-1 text-sm font-bold text-cyan">{booking.service}</p>
                  </div>
                  <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-navy">
                    New
                  </span>
                </div>
                <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
                  <p className="flex items-center gap-2">
                    <Phone aria-hidden="true" size={16} className="text-cyan" />
                    {booking.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin aria-hidden="true" size={16} className="text-cyan" />
                    {booking.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <CalendarDays aria-hidden="true" size={16} className="text-cyan" />
                    {booking.preferredDate}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
