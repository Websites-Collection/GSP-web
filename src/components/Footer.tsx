import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <video
                src="/images/logo-animation.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-sm font-bold uppercase tracking-wider">
                Global Solution
                <span className="block text-[10px] font-medium tracking-[0.2em] text-gold">
                  PARTNERS
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-foreground/60">
              Global Solution Partners builds AI-powered lead generation,
              outreach, and appointment-setting systems for businesses ready
              to scale with precision.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
              Serving the UK &amp; USA
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="mailto:contact@globalsolutionpartners.com"
              className="text-sm font-semibold text-gold hover:text-gold-light"
            >
              contact@globalsolutionpartners.com
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-foreground/40">
          © {new Date().getFullYear()} Global Solution Partners. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
