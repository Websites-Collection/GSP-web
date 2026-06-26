"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone, CheckCircle2 } from "lucide-react";
import Button from "./ui/Button";
import { trustPoints } from "@/lib/data";
import { useBriefModal } from "./BriefModalContext";

export default function FinalCTA() {
  const { open } = useBriefModal();

  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-grid relative overflow-hidden rounded-3xl border border-gold/20 bg-navy-900 p-10 text-center sm:p-16"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 glow-gold">
            <AlertTriangle className="h-6 w-6 text-gold" />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Competitors
            <br />
            <span className="text-gradient-gold">Are Already Running This.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-foreground/65">
            The businesses winning right now are not waiting for referrals.
            They are using intelligent systems to find, qualify, and convert
            opportunities before their competitors even see them.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" onClick={open}>
              Request My Intelligence Brief
            </Button>
            <Button variant="outline" href="#contact" icon={<Phone className="h-4 w-4" />}>
              Talk to VBS Directly
            </Button>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-foreground/60 sm:flex-row sm:gap-8">
            {trustPoints.map((point) => (
              <span key={point} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-neon" />
                {point}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
