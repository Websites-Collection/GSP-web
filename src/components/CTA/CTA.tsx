import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/animations";
import PipelineBriefForm from "@/components/Form/PipelineBriefForm";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-animated-grid animate-grid-move opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            Get Started
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Request your <span className="text-gradient">pipeline brief.</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.2} className="mt-5 text-base leading-relaxed text-slate-400">
            Tell us about your business and goals. We&apos;ll review your details and respond
            with a tailored pipeline brief outlining how we&apos;d approach your market.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={0.3}
          className="mt-12"
        >
          <PipelineBriefForm />
        </motion.div>
      </div>
    </section>
  );
}
