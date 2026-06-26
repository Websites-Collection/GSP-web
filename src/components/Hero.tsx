"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Radar, Send, ListChecks, CalendarCheck2 } from "lucide-react";
import Button from "./ui/Button";
import GlassCard from "./ui/GlassCard";
import { useBriefModal } from "./BriefModalContext";

const engineItems = [
  { icon: Radar, label: "Prospect Discovery" },
  { icon: Send, label: "Outreach Automation" },
  { icon: ListChecks, label: "Lead Qualification" },
  { icon: CalendarCheck2, label: "Appointment Routing" },
];

export default function Hero() {
  const { open } = useBriefModal();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-skyline.jpg"
          alt="City skyline at dusk"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-neon">
            Agentic Growth Intelligence &bull; UK &amp; USA
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your Pipeline
            <span className="text-neon">.</span>
            <br />
            Automated. Qualified. Delivered
            <span className="text-neon">.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg font-medium text-foreground/85">
            The system the highest-paid independent brokers run — without the
            headcount.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/65">
            We identify, contact, and qualify high-intent prospects across key
            verticals using agentic AI, multi-channel outreach, and proven
            appointment-setting workflows — so your team can focus on
            closing.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="primary"
              onClick={open}
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Activate My Pipeline
            </Button>
            <Button
              variant="secondary"
              href="#how-it-works"
              icon={<PlayCircle className="h-4 w-4" />}
            >
              See How It Works
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <GlassCard className="mx-auto max-w-md p-6 sm:p-8" glow="gold">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Global Solution Partners
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              Intelligence Engine
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {engineItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-60" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon" />
                  </span>
                  <item.icon className="h-4 w-4 text-electric" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-foreground/85">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <p className="mt-4 text-xs text-foreground/50">
              Live agentic monitoring across every active campaign.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
