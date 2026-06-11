import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { label: "How It Works", href: "#solution" },
  { label: "Offers", href: "#offers" },
  { label: "Industries", href: "#industries" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Global Solutions Partner" width={40} height={46} priority />
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
            Global Solutions Partner
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-gold-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#cta" className="btn-primary">
            Request My Pipeline Brief
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-gold-400"
              >
                {link.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Request My Pipeline Brief
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
