"use client";

import {
  Layers,
  Clock,
  Users,
  Target,
  TrendingUp,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import StatCard from "./ui/StatCard";
import { metrics } from "@/lib/data";

const icons = [Layers, Clock, Users, Target, TrendingUp, ShieldCheck, Rocket];

export default function MetricsBar() {
  return (
    <section className="relative -mt-10 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-4 overflow-x-auto rounded-2xl p-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-7">
          {metrics.map((metric, i) => (
            <StatCard
              key={metric.label}
              icon={icons[i]}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              format={metric.format as "k" | undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
