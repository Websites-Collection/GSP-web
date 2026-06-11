import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/animations";

const offers = [
  {
    name: "Lead Intelligence Only",
    tagline: "For teams with existing sales infrastructure",
    description:
      "Verified prospect data delivered on a recurring basis, ready for your in-house sales and outreach team to action.",
    features: [
      "Verified contact & firm data",
      "ICP-matched targeting",
      "Recurring data delivery",
      "CRM-ready formatting",
    ],
    cta: "Request My Pipeline Brief",
    highlight: false,
  },
  {
    name: "Appointment Growth System",
    tagline: "Full-service appointment generation",
    description:
      "We run the entire pipeline—research, verification, outreach, and qualification—and deliver booked appointments directly to your calendar.",
    features: [
      "Everything in Lead Intelligence",
      "Multi-channel outreach campaigns",
      "Structured qualification workflows",
      "Calendar booking integration",
      "Weekly performance reporting",
    ],
    cta: "Request My Pipeline Brief",
    highlight: true,
  },
  {
    name: "AI CRM & Workflow Setup",
    tagline: "Backend system for lead and appointment management",
    description:
      "We build and configure the CRM and automation backbone so every lead, reply, and booking is tracked, routed, and reported automatically.",
    features: [
      "CRM setup & configuration",
      "Pipeline automation workflows",
      "Lead routing & notifications",
      "Reporting dashboards",
    ],
    cta: "Request My Pipeline Brief",
    highlight: false,
  },
];

export default function Offers() {
  return (
    <section id="offers" className="relative bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            What We Offer
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Choose the level of <span className="text-gradient">support you need.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {offers.map((offer, i) => (
            <motion.div
              key={offer.name}
              variants={fadeUp}
              custom={i * 0.1}
              className={`relative flex flex-col p-8 ${
                offer.highlight
                  ? "glass-card border-gold-400/30 shadow-glow lg:-translate-y-4"
                  : "glass-card"
              }`}
            >
              {offer.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-950">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{offer.name}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-azure-400">
                {offer.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {offer.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-leaf-500"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-8 w-full text-center ${
                  offer.highlight ? "btn-primary" : "btn-secondary"
                }`}
              >
                {offer.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
