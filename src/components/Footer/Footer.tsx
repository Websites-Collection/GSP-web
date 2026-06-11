import Image from "next/image";

const links = [
  { label: "How It Works", href: "#solution" },
  { label: "Offers", href: "#offers" },
  { label: "Industries", href: "#industries" },
  { label: "Reporting", href: "#reporting" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Global Solutions Partner" width={36} height={42} />
          <div>
            <p className="text-sm font-semibold text-white">Global Solutions Partner</p>
            <p className="text-xs text-slate-500">Appointment generation systems. No hype. Just results.</p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-400 hover:text-gold-400">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Global Solutions Partner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
