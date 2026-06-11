import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/animations";

const differentiators = [
  {
    title: "Specialized, Not Generic",
    body: "We focus on retirement-focused financial professionals and pension specialists, so messaging and targeting are built for your market from day one.",
  },
  {
    title: "Full-Pipeline Ownership",
    body: "Research, verification, outreach, qualification, and booking run as one connected system, not four separate vendors you have to manage.",
  },
  {
    title: "US & UK Coverage",
    body: "Active campaigns in the US with growing capability across the UK retirement adviser and pension review market.",
  },
  {
    title: "Data Quality First",
    body: "Every contact is verified before outreach. We'd rather send fewer messages to the right people than flood inboxes with bad data.",
  },
  {
    title: "Transparent & Disciplined",
    body: "Weekly reporting, honest expectations, and no inflated promises. You always know exactly where your pipeline stands.",
  },
  {
    title: "Built to Scale With You",
    body: "Start with lead intelligence or a full appointment system, then expand into CRM and workflow automation as you grow.",
  },
];

export default function WhyUs() {
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
            Why Global Solutions Partner
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            A full-pipeline partner,{" "}
            <span className="text-gradient">not another lead vendor.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i * 0.08}
              className="glass-card p-7"
            >
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
