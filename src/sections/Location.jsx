import { ArrowRight, MapPin, Clock } from 'lucide-react';
import SectionCard from '../components/SectionCard';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import { location } from '../data/location';
import { SITE } from '../data/site';

export default function Location() {
  const { map } = location;
  return (
    <SectionCard id="ubicacion" labelledBy="location-title" className="bg-cream text-ink">
      <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:p-6 lg:pl-12">
        <div className="lg:py-4">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-bold uppercase text-brasa">
              {location.eyebrow}
              <ArrowRight aria-hidden="true" className="h-4 w-4 text-gold" />
            </p>
            <SectionTitle
              id="location-title"
              lead={location.titleLead}
              accent={location.titleAccent}
              className="mt-4 text-5xl"
            />
          </Reveal>

          <Reveal delay={150} className="mt-6 flex items-start gap-3">
            <MapPin aria-hidden="true" className="mt-1 h-7 w-7 shrink-0 fill-brasa/20 text-brasa" />
            <address className="text-lg font-semibold not-italic leading-snug">
              {SITE.address.line1}
              <br />
              {SITE.address.line2}
            </address>
          </Reveal>

          <Reveal delay={280} className="mt-6 flex items-start gap-3">
            <Clock aria-hidden="true" className="mt-1 h-7 w-7 shrink-0 text-brasa" />
            <div>
              <p className="text-xs font-bold uppercase text-brasa">{location.hoursLabel}</p>
              <p className="text-lg font-semibold">{SITE.hours.range}</p>
              <p className="font-bold text-brasa">{SITE.hours.note}</p>
            </div>
          </Reveal>
        </div>

        {/* Mapa real de Google Maps (iframe). La URL se cambia en src/data/location.js */}
        <Reveal
          direction="right"
          delay={150}
          className="relative min-h-[300px] overflow-hidden rounded-2xl border border-black/10 lg:min-h-[400px]"
        >
          <iframe
            title={map.title}
            src={map.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </Reveal>
      </div>
    </SectionCard>
  );
}