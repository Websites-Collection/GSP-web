import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/animations";

const faqs = [
  {
    question: "Where does your prospect data come from?",
    answer:
      "We source and verify contact and firm data from a combination of licensed providers and direct verification processes. Every contact is checked for accuracy before it enters an outreach sequence.",
  },
  {
    question: "Do you only work with retirement-focused advisors?",
    answer:
      "Retirement professionals, pension review specialists, and teachers retirement advisors are our core focus and where we have the deepest expertise. We also support financial advisors broadly, real estate businesses, and select service businesses such as HVAC, cleaning, and roofing.",
  },
  {
    question: "How do you ensure outreach quality and deliverability?",
    answer:
      "We verify contacts before outreach, use proper sending infrastructure and warm-up practices, and monitor deliverability continuously. Messaging is reviewed for compliance considerations relevant to financial services.",
  },
  {
    question: "Will this integrate with our existing CRM?",
    answer:
      "Yes. Data and appointment information are structured for CRM workflows and can be integrated with platforms such as HubSpot or Pipedrive, plus automation tools like Zapier or Make. We also offer a dedicated CRM & workflow setup service.",
  },
  {
    question: "Can you guarantee a specific number of appointments?",
    answer:
      "We don't make guarantees we can't back up. Results vary by market, offer, and starting pipeline maturity. What we do commit to is a disciplined, transparent process and weekly reporting so you can see exactly what's happening.",
  },
  {
    question: "Which markets and regions do you cover?",
    answer:
      "We run active campaigns in the US and are expanding our UK presence, particularly for retirement advisers and pension specialists. Reach out and we'll confirm coverage for your specific region.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most clients are activated within 48 hours of onboarding completion—data sourcing and campaign setup begin immediately after your pipeline brief is reviewed and approved.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Questions, <span className="text-gradient">answered honestly.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-14 space-y-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={faq.question} variants={fadeUp} custom={i * 0.05} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-gold-400"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
