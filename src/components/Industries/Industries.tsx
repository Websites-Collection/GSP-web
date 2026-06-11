import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/animations";

const primaryMarkets = [
  { name: "Financial Advisors", region: "US & UK" },
  { name: "Pension Review Specialists", region: "UK Expansion" },
  { name: "Retirement Professionals", region: "US & UK" },
  { name: "Teachers Retirement Specialists", region: "US" },
  { name: "Real Estate", region: "US" },
];

const growthMarkets = ["HVAC", "Cleaning Services", "Roofing", "Local Service Businesses"];

export default function Industries() {
  return (
    <section id="industries" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            Who We Serve
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Specialized for retirement &amp; financial markets.{" "}
            <span className="text-gradient">Expanding with purpose.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.2} className="mt-5 text-base text-slate-400">
            Our core expertise is in retirement-focused financial services across the US,
            with active expansion into the UK pension and adviser market. We selectively
            extend our system to service businesses ready for a disciplined pipeline.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-16 grid gap-6 lg:grid-cols-5"
        >
          {primaryMarkets.map((market, i) => (
            <motion.div
              key={market.name}
              variants={fadeUp}
              custom={i * 0.08}
              className="glass-card flex flex-col justify-between p-6"
            >
              <h3 className="text-base font-semibold text-white">{market.name}</h3>
              <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-azure-400/30 bg-azure-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-azure-400">
                {market.region}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Growth Markets
          </motion.p>
          <motion.div variants={fadeUp} custom={0.1} className="flex flex-wrap justify-center gap-3">
            {growthMarkets.map((market) => (
              <span
                key={market}
                className="rounded-full border border-leaf-400/20 bg-leaf-400/5 px-5 py-2 text-sm font-medium text-leaf-400"
              >
                {market}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
