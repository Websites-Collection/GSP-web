import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/animations";
import Counter from "./Counter";

const metrics = [
  { value: 12000, suffix: "+", label: "Qualified Leads Delivered" },
  { value: 3, suffix: "x", label: "Average Appointment Lift" },
  { value: 97, suffix: "%", label: "Client Retention" },
  { value: 48, suffix: "-Hour", label: "Pipeline Activation" },
];

export default function Metrics() {
  return (
    <section className="relative bg-ink-950 py-24 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              custom={i * 0.1}
              className="text-center"
            >
              <p className="text-4xl font-extrabold text-gradient sm:text-5xl">
                <Counter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-slate-400">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={0.4}
          className="mx-auto mt-12 max-w-2xl text-center text-xs text-slate-500"
        >
          Results vary by industry, market, and starting pipeline maturity. Figures represent
          aggregate client outcomes and are not a guarantee of individual performance.
        </motion.p>
      </div>
    </section>
  );
}
