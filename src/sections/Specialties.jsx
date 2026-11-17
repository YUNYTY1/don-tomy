import SectionCard from '../components/SectionCard';
import SectionTitle from '../components/SectionTitle';
import Eyebrow from '../components/Eyebrow';
import SpecialtyCard from '../components/SpecialtyCard';
import GoldButton from '../components/GoldButton';
import Reveal from '../components/Reveal';
import { specialties } from '../data/specialties';

export default function Specialties() {
  return (
    <SectionCard id="especialidades" labelledBy="specialties-title" className="bg-brasa">
      <div className="px-4 py-8 sm:px-8 lg:px-8 lg:py-9">
        <Reveal className="text-center">
          <Eyebrow tone="light">{specialties.eyebrow}</Eyebrow>
          <SectionTitle
            id="specialties-title"
            lead={specialties.titleLead}
            accent={specialties.titleAccent}
            leadClass="text-cream"
            accentClass="text-gold"
            inline
            className="mt-3 text-4xl sm:text-5xl lg:text-6xl"
          />
        </Reveal>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {specialties.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.id}
              delay={i * 100}
              className="last:col-span-2 sm:last:col-span-1"
            >
              <SpecialtyCard {...item} className="h-full" />
            </Reveal>
          ))}
        </ul>

        <Reveal direction="zoom" delay={300} className="mt-6 text-center">
          <GoldButton href={specialties.cta.href}>{specialties.cta.label}</GoldButton>
        </Reveal>
      </div>
    </SectionCard>
  );
}