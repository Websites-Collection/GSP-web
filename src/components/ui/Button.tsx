import { ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-gold-light via-gold to-gold-dark text-navy-950 glow-gold hover:brightness-110",
  secondary:
    "glass-panel text-foreground hover:border-electric/50 hover:glow-electric",
  outline:
    "border border-white/20 text-foreground hover:border-neon/60 hover:text-neon",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
  className,
  type = "button",
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300",
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
