"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { useBriefModal } from "./BriefModalContext";
import Button from "./ui/Button";
import { countryOptions, industryOptions, leadGoalOptions } from "@/lib/data";

export default function BriefModal() {
  const { isOpen, close } = useBriefModal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    close();
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/85 px-4 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-panel relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-navy-900 p-6 sm:p-8"
          >
            <button
              aria-label="Close"
              onClick={handleClose}
              className="absolute right-4 top-4 text-foreground/50 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-neon" />
                <h3 className="text-xl font-bold">Request Received</h3>
                <p className="text-sm text-foreground/65">
                  Your request has been received. Our team will review your
                  business and prepare your pipeline intelligence brief.
                </p>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold">Request Intelligence Brief</h3>
                <p className="mt-2 text-sm text-foreground/60">
                  Tell us about your business and we&apos;ll prepare your
                  pipeline intelligence brief.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Full Name" name="fullName" required />
                    <Field label="Business Name" name="businessName" required />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" required />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <SelectField label="Country" name="country" options={countryOptions} />
                    <SelectField label="Industry" name="industry" options={industryOptions} />
                  </div>
                  <SelectField
                    label="Monthly Lead Goal"
                    name="leadGoal"
                    options={leadGoalOptions}
                  />
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-foreground/60">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-gold/50"
                    />
                  </div>

                  <Button type="submit" variant="primary" className="mt-2 w-full">
                    Request My Intelligence Brief
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-foreground/60">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-gold/50"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-foreground/60">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none focus:border-gold/50"
      >
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-navy-900">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
