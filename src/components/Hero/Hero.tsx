import { motion } from "framer-motion";
import { fadeUp, fadeIn, staggerContainer } from "@/utils/animations";
import PipelineDashboard from "./PipelineDashboard";

const trustBadges = [
  "US & UK Campaigns",
  "Verified Prospect Data",
  "CRM-Ready Workflows",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink-950 pb-24 pt-36 lg:pb-32 lg:pt-44"
    >
      {/* Background image layer */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/background.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-ink-950/40 to-ink-950" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 -z-10 bg-animated-grid opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      {/* Glow accents */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-60 -z-10 h-96 w-96 rounded-full bg-azure-500/10 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} custom={0} className="eyebrow">
            Appointment Generation Systems
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Stop Buying Leads.{" "}
            <span className="text-gradient">Start Receiving Qualified Appointments.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            We build full-stack appointment-generation systems for financial advisors,
            retirement professionals, pension review specialists, and select service
            businesses across the US and UK&mdash;from verified prospect data to a booked
            calendar slot.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#cta" className="btn-primary">
              Request My Pipeline Brief
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#solution" className="btn-secondary">
              See How It Works
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          >
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf-500 shadow-glow-green" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="relative"
        >
          <PipelineDashboard />
        </motion.div>
      </div>
    </section>
  );
}
