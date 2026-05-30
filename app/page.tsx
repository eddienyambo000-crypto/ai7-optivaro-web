"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  Eye,
  Glasses,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { BookingForm } from "@/components/BookingForm";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
};

const frames = [
  {
    title: "Crystal Clear Acetate Frames",
    tone: "from-cyan/20 via-white to-slate-100",
    detail: "Lightweight clarity with premium lens compatibility.",
  },
  {
    title: "Gold-Accented Aviators",
    tone: "from-gold/35 via-white to-cyan/10",
    detail: "Polished metal lines for a confident everyday fit.",
  },
  {
    title: "Modern Black Cat-Eye",
    tone: "from-navy/20 via-white to-slate-100",
    detail: "Sharp silhouette with boutique retail finishing.",
  },
];

const services = [
  "Digital visual acuity screening",
  "Prescription review and lens guidance",
  "Frame fitting with clinic-side support",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/82 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="flex items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
            aria-label="Eye Vision Center home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-cyan shadow-glow">
              <Eye aria-hidden="true" size={23} />
            </span>
            <span className="font-display text-xl font-bold tracking-[-0.03em] text-navy">EVC</span>
          </a>

          <div className="hidden items-center gap-8 rounded-full border border-slate-200 bg-white/90 px-6 py-3 text-sm font-bold text-slate-600 shadow-[0_10px_30px_rgba(7,20,47,0.06)] md:flex">
            <a className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-navy" href="#services">
              Services
            </a>
            <a className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-navy" href="#frames">
              Frames
            </a>
            <a className="transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-navy" href="#locations">
              Locations
            </a>
          </div>

          <a
            href="#booking"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gold px-5 text-sm font-extrabold text-navy shadow-gold transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(245,185,66,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:translate-y-0"
          >
            Book Exam
          </a>
        </nav>
      </header>

      <section
        id="hero"
        className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(0,215,255,0.16),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(245,185,66,0.18),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)] px-4 pb-16 pt-32 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(rgba(7,20,47,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(7,20,47,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.86fr]">
          <motion.div {...fadeUp}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-white/80 px-4 py-2 text-sm font-bold text-midnight shadow-[0_10px_35px_rgba(0,215,255,0.12)]">
              <Sparkles aria-hidden="true" size={16} className="text-cyan" />
              Premium eye care in Kigali and Nyamata
            </div>
            <h1 className="max-w-4xl font-display text-[clamp(3.2rem,9vw,6.5rem)] font-bold leading-[0.91] tracking-[-0.03em] text-navy">
              Helping You See Life in High-Def.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Precision eye care and curated frames in Kigali & Nyamata.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gold px-7 py-4 text-base font-extrabold text-navy shadow-gold transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_45px_rgba(245,185,66,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold active:translate-y-0"
              >
                Book Your 24/7 Appointment
                <ArrowRight aria-hidden="true" size={19} />
              </a>
              <a
                href="#frames"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-navy/15 bg-white px-7 py-4 text-base font-extrabold text-navy shadow-[0_14px_40px_rgba(7,20,47,0.08)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:border-cyan hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan active:translate-y-0"
              >
                View Frames
              </a>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-[2.4rem] border border-white/80 bg-white/74 p-4 shadow-clinic backdrop-blur-xl">
              <div className="overflow-hidden rounded-[1.8rem] bg-navy p-5 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-cyan">Next available</p>
                    <p className="mt-1 font-display text-3xl font-bold tracking-[-0.03em]">Today</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-gold">
                    <Eye aria-hidden="true" size={28} />
                  </div>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div key={service} className="rounded-3xl border border-white/10 bg-white/[0.07] p-4">
                      <BadgeCheck className="mb-3 text-cyan" aria-hidden="true" size={20} />
                      <p className="text-sm leading-6 text-white/76">{service}</p>
                    </div>
                  ))}
                  <div className="rounded-3xl bg-gold p-4 text-navy">
                    <p className="text-sm font-black uppercase tracking-[0.14em]">Exam fee</p>
                    <p className="mt-3 font-display text-3xl font-bold tracking-[-0.03em]">5,000 RWF</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-cyan">How it works</p>
              <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-bold leading-[0.98] tracking-[-0.03em] text-navy">
                Clear pricing. Easy booking. Clinic payment.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Book online", "Send your request anytime from your phone."],
                ["02", "Confirm on WhatsApp", "The clinic team confirms your time and service."],
                ["03", "Pay at clinic", "Comprehensive Eye Exam: 5,000 RWF."],
              ].map(([step, title, copy]) => (
                <div key={step} className="rounded-[1.7rem] border border-slate-200 bg-mist p-5 shadow-[0_14px_40px_rgba(7,20,47,0.06)]">
                  <p className="font-display text-sm font-bold text-cyan">{step}</p>
                  <h3 className="mt-5 font-display text-xl font-bold tracking-[-0.03em] text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="frames" className="bg-mist px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-cyan">Curated frames</p>
            <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-none tracking-[-0.03em] text-navy">
              Eyewear that feels medical-grade and boutique.
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {frames.map((frame, index) => (
              <motion.article
                key={frame.title}
                {...fadeUp}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-clinic"
              >
                <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${frame.tone}`}>
                  <div className="absolute inset-x-8 top-1/2 h-8 -translate-y-1/2 rounded-full border-[10px] border-navy/80 shadow-[0_0_0_9px_rgba(0,215,255,0.10)]" />
                  <div className="absolute left-1/2 top-1/2 h-16 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-[8px] border-navy/70" />
                  <Glasses className="relative z-10 text-navy transition-[transform,opacity] duration-300 group-hover:scale-110" size={82} />
                  <span className="absolute bottom-4 translate-y-4 rounded-full bg-navy px-4 py-2 text-sm font-extrabold text-white opacity-0 shadow-glow transition-[transform,opacity] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Try in Clinic
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-navy">{frame.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{frame.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-cyan">Full-stack booking</p>
              <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-none tracking-[-0.03em] text-navy">
                Request care in under a minute.
              </h2>
            </div>
            <div className="rounded-full border border-slate-200 bg-mist px-5 py-3 text-sm font-bold text-slate-600">
              Online booking, pay at the clinic
            </div>
          </div>
          <BookingForm />
        </motion.div>
      </section>

      <footer id="locations" className="bg-navy px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-cyan">
                <Eye aria-hidden="true" size={23} />
              </span>
              <span className="font-display text-2xl font-bold tracking-[-0.03em]">Eye Vision Center</span>
            </div>
            <p className="mt-5 max-w-md leading-8 text-white/68">
              Clinical precision, curated eyewear, and quick WhatsApp-first service for Rwanda's busiest patients.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [Building2, "Contact", "+250 788 000 000", "hello@evc.rw"],
              [Clock3, "Operating Hours", "Mon - Sat", "8:00 AM - 7:00 PM"],
              [MapPin, "Locations", "Kigali City Clinic", "Nyamata City Clinic"],
            ].map(([Icon, title, lineOne, lineTwo]) => {
              const FooterIcon = Icon as typeof Building2;
              return (
                <div key={title as string} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <FooterIcon aria-hidden="true" className="text-gold" size={22} />
                  <h3 className="mt-5 font-display text-lg font-bold">{title as string}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">{lineOne as string}</p>
                  <p className="text-sm leading-7 text-white/68">{lineTwo as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </footer>
    </main>
  );
}
