"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "./ui/Button";
import { navLinks } from "@/lib/data";
import { useBriefModal } from "./BriefModalContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useBriefModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-950/80 backdrop-blur-xl"
          : "bg-gradient-to-b from-navy-950/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#" className="flex items-center gap-3">
          <video
            src="/images/logo-animation.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-sm font-bold uppercase tracking-wider sm:text-base">
            Global Solution
            <span className="block text-[10px] font-medium tracking-[0.2em] text-gold sm:text-xs">
              PARTNERS
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-foreground/80 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="primary" onClick={open} icon={<ArrowRight className="h-4 w-4" />}>
            Request Intelligence Brief
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy-950/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-foreground/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="primary"
            className="mt-5 w-full"
            onClick={() => {
              setMobileOpen(false);
              open();
            }}
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Request Intelligence Brief
          </Button>
        </div>
      )}
    </header>
  );
}
