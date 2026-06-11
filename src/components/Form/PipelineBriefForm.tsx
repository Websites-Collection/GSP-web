import { FormEvent, useState } from "react";

const industries = [
  "Financial Advisor",
  "Retirement / Pension Specialist",
  "Real Estate",
  "HVAC",
  "Cleaning Services",
  "Roofing",
  "Other",
];

const regions = ["United States", "United Kingdom", "Both US & UK", "Other"];

export default function PipelineBriefForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Request failed");
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass-card flex flex-col items-center justify-center p-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-leaf-400/30 bg-leaf-400/10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5l4.5 4.5L19 7" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">Request received.</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-400">
          Thank you for requesting your pipeline brief. Our team will review your details and
          reach out within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card grid grid-cols-1 gap-5 p-6 sm:grid-cols-2 sm:p-8">
      <Field label="Full Name" name="fullName" required />
      <Field label="Business Name" name="businessName" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" type="tel" required />

      <SelectField label="Industry" name="industry" options={industries} />
      <SelectField label="Target Country / Region" name="region" options={regions} />

      <Field label="Monthly Appointment Goal" name="appointmentGoal" type="number" placeholder="e.g. 20" />

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-400">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your current pipeline and goals..."
          className="w-full resize-none rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
          {status === "submitting" ? "Submitting..." : "Request My Pipeline Brief"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-center text-sm text-red-400">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white focus:border-gold-400/50 focus:outline-none focus:ring-1 focus:ring-gold-400/30"
      >
        <option value="" disabled className="bg-ink-900">
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-ink-900">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
