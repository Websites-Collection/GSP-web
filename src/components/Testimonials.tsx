"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="results" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Brokers.
            <br />
            <span className="text-gradient-gold">Proven Results.</span>
          </h2>
        </div>

        <div className="mt-12 hidden grid-cols-3 gap-6 md:grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard {...testimonials[index]} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="glass-panel rounded-full p-2 hover:border-gold/40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="glass-panel rounded-full p-2 hover:border-gold/40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <GlassCard glow="gold" className="flex h-full flex-col gap-4 p-7">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-foreground/80">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-auto">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-xs text-foreground/50">{role}</p>
      </div>
    </GlassCard>
  );
}
