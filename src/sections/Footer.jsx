import { MapPin, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import Logo from '../components/Logo';
import SocialLinks from '../components/SocialLinks';
import Reveal from '../components/Reveal';
import { NAV_LINKS } from '../data/navigation';
import { footer } from '../data/footer';
import { SITE } from '../data/site';
import { whatsappUrl } from '../utils/whatsapp';

export default function Footer() {
  const col = 'lg:border-l lg:border-white/10 lg:pl-8';
  return (
    <footer
      id="contacto"
      className="mx-auto mb-3 mt-2 w-[calc(100%-1.5rem)] max-w-[1360px] scroll-mt-4 overflow-hidden rounded-3xl bg-coal sm:w-[calc(100%-2.5rem)] lg:w-[calc(100%-4rem)]"
    >
      <div className="grid gap-8 p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-[1.3fr_0.9fr_1.1fr_1fr] lg:px-10">
        <Reveal>
          <Logo />
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/80">{footer.description}</p>
          <div className="mt-4">
            <SocialLinks items={footer.socials} />
          </div>
        </Reveal>

        <Reveal as="nav" delay={120} aria-label="Enlaces rápidos" className={col}>
          <h2 className="font-display text-lg uppercase tracking-wide text-white">{footer.quickLinksTitle}</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/85">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={l.href} className="transition-colors hover:text-gold">{l.label}</a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={240} className={col}>
          <h2 className="font-display text-lg uppercase tracking-wide text-white">{footer.contactTitle}</h2>
          <ul className="mt-3 space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <FaWhatsapp aria-hidden="true" className="h-6 w-6 shrink-0 text-gold" />
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white transition-colors hover:text-gold">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="h-6 w-6 shrink-0 text-gold" />
              <address className="not-italic">{SITE.address.line1}<br />{SITE.address.line2}</address>
            </li>
            <li className="flex items-start gap-3">
              <Clock aria-hidden="true" className="h-6 w-6 shrink-0 text-gold" />
              <span>{SITE.hours.range}<br />Todos los días</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={360} className={col}>
          <h2 className="font-display text-lg uppercase tracking-wide text-white">{footer.followTitle}</h2>
          <p className="mt-3 text-sm text-white/85">{footer.followText}</p>
          <div className="mt-4">
            <SocialLinks items={footer.socials} />
          </div>
        </Reveal>
      </div>

      <p className="bg-brasa px-4 py-3 text-center text-xs text-white">
        © {new Date().getFullYear()} {footer.copyright}
      </p>
    </footer>
  );
}