import { FaWhatsapp } from 'react-icons/fa6';
import { SITE } from '../data/site';
import { whatsappUrl } from '../utils/whatsapp';

/** variant "nav": compacto para el header. variant "hero": grande con el número. */
export default function WhatsAppButton({ variant = 'hero', className = '' }) {
  const base =
    'inline-flex items-center bg-gold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-gold-soft active:scale-95';

  if (variant === 'nav') {
    return (
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir por WhatsApp"
        className={`${base} gap-3 rounded-2xl px-4 py-2 ${className}`}
      >
        <FaWhatsapp aria-hidden="true" className="h-8 w-8" />
        <span className="flex flex-col leading-none">
          <span className="text-[11px] font-medium uppercase text-brasa-deep">Pedir por</span>
          <span className="font-display text-xl tracking-wide">WhatsApp</span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pedir por WhatsApp al ${SITE.phoneDisplay}`}
      className={`${base} animate-pulse-ring gap-4 rounded-2xl px-6 py-4 ${className}`}
    >
      <FaWhatsapp aria-hidden="true" className="h-12 w-12 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-sm font-semibold uppercase">Pedir por WhatsApp</span>
        <span className="mt-1 font-display text-4xl tracking-wide sm:text-5xl">
          {SITE.phoneDisplay}
        </span>
      </span>
    </a>
  );
}