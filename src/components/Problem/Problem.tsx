import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/animations";

const points = [
  {
    title: "You don't have a lead problem.",
    body: "Most pipelines fail at follow-up and qualification, not at the top of the funnel. Bought lead lists go cold, contacts go unverified, and reps spend hours chasing dead ends.",
  },
  {
    title: "Retirement advisors face a unique gap.",
    body: "Compliance constraints, long sales cycles, and a need for trust mean generic outreach simply doesn't convert for pension review and retirement-focused professionals.",
  },
  {
    title: "A full-stack system is the fix.",
    body: "Verified data, multi-channel outreach, structured qualification, and calendar booking need to work together — not as four disconnected vendors.",
  },
];

export default function Problem() {
  return (
    <section className="relative bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            The Real Problem
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Most businesses don&apos;t need more leads.{" "}
            <span className="text-gradient">They need a working pipeline.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              custom={i * 0.1}
              className="glass-card p-8"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-sm font-bold text-gold-400">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{point.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
