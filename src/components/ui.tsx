import { hasText } from "@/content/site";

export function Container({
  children,
  className = "",
  width = "default",
}: {
  children: React.ReactNode;
  className?: string;
  width?: "default" | "wide";
}) {
  const max = width === "wide" ? "max-w-[1360px]" : "max-w-[1120px]";
  return (
    <div className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`text-[0.72rem] uppercase tracking-[0.22em] text-bronze ${className}`}
    >
      {children}
    </p>
  );
}

export function Value({
  value,
  fallback = "To be confirmed",
  pendingClassName = "italic text-muted",
}: {
  value: string;
  fallback?: string;
  pendingClassName?: string;
}) {
  if (!hasText(value)) {
    return <span className={pendingClassName}>{fallback}</span>;
  }
  return <>{value.trim()}</>;
}

const buttonBase =
  "inline-flex items-center justify-center px-6 py-3.5 text-[0.98rem] tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px]";

export function buttonClass(
  variant: "primary" | "secondary" | "secondary-light" | "ghost",
) {
  if (variant === "primary") {
    return `${buttonBase} bg-olive text-ivory hover:bg-olive-deep focus-visible:outline-bronze`;
  }
  if (variant === "secondary-light") {
    return `${buttonBase} border border-ivory/45 text-ivory hover:bg-ivory hover:text-charcoal focus-visible:outline-ivory`;
  }
  if (variant === "ghost") {
    return `${buttonBase} border border-line text-charcoal hover:border-charcoal focus-visible:outline-bronze`;
  }
  return `${buttonBase} border border-charcoal/25 text-charcoal hover:border-charcoal focus-visible:outline-bronze`;
}
