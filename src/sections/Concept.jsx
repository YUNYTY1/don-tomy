import SectionCard from '../components/SectionCard';
import SectionTitle from '../components/SectionTitle';
import Eyebrow from '../components/Eyebrow';
import Feature from '../components/Feature';
import CircularBadge from '../components/CircularBadge';
import Reveal from '../components/Reveal';
import { concept } from '../data/concept';

export default function Concept() {
  const { images } = concept;
  return (
    <SectionCard id="nosotros" labelledBy="concept-title" className="bg-cream text-ink">
      <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:gap-10 lg:p-5 lg:pl-12">
        <div className="lg:py-6">
          <Reveal>
            <Eyebrow>{concept.eyebrow}</Eyebrow>
            <SectionTitle
              id="concept-title"
              lead={concept.titleLead}
              accent={concept.titleAccent}
              className="mt-6 text-5xl sm:text-6xl"
            />
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed">
              {concept.paragraph1.map((part, i) =>
                part.bold ? <strong key={i}>{part.text}</strong> : <span key={i}>{part.text}</span>,
              )}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed">{concept.paragraph2}</p>
          </Reveal>

          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {concept.features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={250 + i * 120}>
                <Feature {...f} variant="concept" />
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Collage en diagonal: wok arriba, pollo abajo */}
        <Reveal
          direction="right"
          delay={150}
          className="relative aspect-[4/5] min-h-[340px] overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-auto"
        >
          <img
            src={images.wok.src}
            alt={images.wok.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover [clip-path:polygon(0_0,100%_0,100%_32%,0_65%)]"
          />
          <img
            src={images.pollo.src}
            alt={images.pollo.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover [clip-path:polygon(0_65%,100%_32%,100%_100%,0_100%)]"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <line x1="0" y1="65" x2="100" y2="32" stroke="#f5b71a" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          </svg>
          <CircularBadge
            top={concept.badge.top}
            bottom={concept.badge.bottom}
            className="absolute left-1/2 top-[48.5%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 sm:h-36 sm:w-36 lg:h-40 lg:w-40"
          />
        </Reveal>
      </div>
    </SectionCard>
  );
}