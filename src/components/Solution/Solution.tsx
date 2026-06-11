import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/animations";

const steps = [
  {
    title: "Research",
    description:
      "We map your ideal customer profile and target market across the US and UK, identifying the firms and decision-makers worth pursuing.",
  },
  {
    title: "Verify",
    description:
      "Every contact is checked for accuracy and deliverability before it ever enters an outreach sequence—no recycled or guessed data.",
  },
  {
    title: "Outreach",
    description:
      "Multi-channel sequences (email, LinkedIn, and phone where appropriate) engage prospects with messaging tailored to your positioning.",
  },
  {
    title: "Qualify",
    description:
      "Replies are triaged through a structured qualification workflow so only genuinely interested prospects move forward.",
  },
  {
    title: "Book",
    description:
      "Qualified prospects are routed directly into your calendar—ready for a discovery call with full context attached.",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-animated-grid opacity-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            How It Works
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            A five-step system that turns{" "}
            <span className="text-gradient">cold data into booked calls.</span>
          </motion.h2>
        </motion.div>

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-gold-400/40 via-azure-400/30 to-leaf-400/40 lg:left-1/2 lg:block" />

          <div className="space-y-10 lg:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                custom={i * 0.1}
                className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="glass-card p-8">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-400/30 bg-gold-400/10 text-lg font-bold text-gold-400">
                        {i + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
