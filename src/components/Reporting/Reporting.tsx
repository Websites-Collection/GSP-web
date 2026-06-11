import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/utils/animations";

const reportRows = [
  { label: "Prospects Sourced", value: 1240, color: "bg-azure-400" },
  { label: "Valid Contacts", value: 1086, color: "bg-leaf-400" },
  { label: "Outreach Sent", value: 3210, color: "bg-gold-400" },
  { label: "Replies Received", value: 142, color: "bg-azure-400" },
  { label: "Appointments Booked", value: 24, color: "bg-leaf-400" },
];

const max = Math.max(...reportRows.map((r) => r.value));

export default function Reporting() {
  return (
    <section id="reporting" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            <motion.span variants={fadeUp} className="eyebrow">
              Transparent Reporting
            </motion.span>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              You see exactly what&apos;s{" "}
              <span className="text-gradient">happening every week.</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={0.2} className="mt-5 text-base leading-relaxed text-slate-400">
              Every client receives a weekly report showing prospects sourced, contacts
              verified, outreach sent, replies received, and appointments booked. No vanity
              metrics—just the numbers that show whether the pipeline is working.
            </motion.p>
            <motion.ul variants={fadeUp} custom={0.3} className="mt-6 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> Delivered weekly, every Monday
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> Full pipeline visibility, stage by stage
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> No spin—just real, auditable numbers
              </li>
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            custom={0.2}
            className="glass-card p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Weekly Pipeline Report
                </p>
                <p className="mt-1 text-sm font-semibold text-white">June 8 – June 14</p>
              </div>
              <span className="rounded-full border border-leaf-400/30 bg-leaf-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-leaf-400">
                On Track
              </span>
            </div>

            <div className="space-y-5">
              {reportRows.map((row, i) => (
                <div key={row.label}>
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{row.label}</span>
                    <span className="font-semibold text-white">{row.value.toLocaleString()}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(row.value / max) * 100}%` }}
                      viewport={viewportOnce}
                      transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${row.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
