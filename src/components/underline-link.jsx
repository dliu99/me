import Link from "next/link";

export default function UnderlineLink({ href, children, className = "", ...props }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-primary bg-gradient-to-r from-primary to-primary bg-no-repeat [background-position:0_99%] [background-size:100%_0.05em] motion-safe:transition-all motion-safe:duration-200 hover:[background-size:100%_0.1em] focus:[background-size:100%_0.1em] ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
} 