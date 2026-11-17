import { ChevronRight } from 'lucide-react';

export default function GoldButton({ href, children, external = true, className = '' }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`inline-flex items-center justify-center gap-3 rounded-xl bg-gold px-6 py-3 text-sm font-bold uppercase text-ink transition-colors hover:bg-gold-soft ${className}`}
    >
      {children}
      <ChevronRight aria-hidden="true" className="h-4 w-4" />
    </a>
  );
}
