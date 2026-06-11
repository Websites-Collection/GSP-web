import { motion } from "framer-motion";

const stages = ["Sourced", "Verified", "Contacted", "Qualified", "Booked"];

const leadCards = [
  { name: "M. Caldwell · Retirement Advisor", stage: 1, delay: 0 },
  { name: "T. Brennan · Pension Review", stage: 3, delay: 0.6 },
  { name: "S. Whitfield · Financial Advisor", stage: 4, delay: 1.2 },
];

export default function PipelineDashboard() {
  return (
    <div className="relative mx-auto max-w-md animate-float lg:max-w-lg">
      <div className="glass-card overflow-hidden p-5 shadow-2xl shadow-black/40 sm:p-7">
        {/* Window controls */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Live Pipeline
          </span>
        </div>

        {/* Video / brand panel */}
        <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-ink-900">
          <video
            className="h-32 w-full object-cover sm:h-40"
            src="/videos/logo-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Pipeline stages */}
        <div className="relative mb-6">
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="relative flex justify-between">
            {stages.map((stage, i) => (
              <div key={stage} className="flex flex-col items-center gap-2">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0.4 }}
                  animate={{ scale: [0.6, 1.15, 1], opacity: [0.4, 1, 1] }}
                  transition={{
                    duration: 1.6,
                    delay: i * 0.4,
                    repeat: Infinity,
                    repeatDelay: stages.length * 0.4,
                  }}
                  className="h-3 w-3 rounded-full bg-gold-400 shadow-glow"
                />
                <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400 sm:text-[11px]">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead cards moving through stages */}
        <div className="space-y-3">
          {leadCards.map((lead) => (
            <motion.div
              key={lead.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: lead.delay }}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-azure-500/30 to-leaf-500/30 text-xs font-semibold text-white">
                  {lead.name.charAt(0)}
                </span>
                <span className="text-xs font-medium text-slate-200 sm:text-sm">
                  {lead.name}
                </span>
              </div>
              <span className="rounded-full border border-gold-400/30 bg-gold-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-400">
                {stages[lead.stage]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating accent cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="glass-card absolute -right-6 -top-6 hidden w-44 p-4 shadow-xl shadow-black/40 sm:block"
      >
        <p className="text-[10px] uppercase tracking-widest text-slate-400">
          This Week
        </p>
        <p className="mt-1 text-2xl font-bold text-white">+38</p>
        <p className="text-xs text-leaf-500">Booked Appointments</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="glass-card absolute -bottom-6 -left-6 hidden w-48 p-4 shadow-xl shadow-black/40 sm:block"
      >
        <p className="text-[10px] uppercase tracking-widest text-slate-400">
          Reply Rate
        </p>
        <p className="mt-1 text-2xl font-bold text-white">12.4%</p>
        <p className="text-xs text-azure-400">Verified Outreach</p>
      </motion.div>
    </div>
  );
}
