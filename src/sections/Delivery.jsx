import { ChefHat } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import SectionCard from '../components/SectionCard';
import SectionTitle from '../components/SectionTitle';
import Feature from '../components/Feature';
import GoldButton from '../components/GoldButton';
import Reveal from '../components/Reveal';
import { delivery } from '../data/delivery';
import { SITE } from '../data/site';
import { whatsappUrl } from '../utils/whatsapp';

export default function Delivery() {
  return (
    <SectionCard id="delivery" labelledBy="delivery-title" className="relative bg-coal">
      {/* Foto del repartidor, se funde con el fondo oscuro */}
      <Reveal
        direction="left"
        className="relative h-56 sm:h-72 lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[48%]"
      >
        <img
          src={delivery.image}
          alt={delivery.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-coal lg:bg-gradient-to-r lg:from-transparent lg:via-coal/20 lg:to-coal"
        />
      </Reveal>

      <div className="relative z-10 flex flex-col gap-8 p-6 sm:p-10 lg:flex-row lg:items-center lg:py-10 lg:pl-[38%] lg:pr-10">
        <div className="flex-1">
          <Reveal>
            <p className="flex items-center gap-2 text-sm font-medium uppercase text-white">
              <ChefHat aria-hidden="true" className="h-4 w-4 text-gold" />
              {delivery.eyebrow}
            </p>
            <SectionTitle
              id="delivery-title"
              lead={delivery.titleLead}
              accent={delivery.titleAccent}
              leadClass="text-white"
              accentClass="text-gold"
              className="mt-3 text-5xl sm:text-6xl"
            />
          </Reveal>

          <ul className="mt-8 grid gap-5 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/15">
            {delivery.features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={150 + i * 120} className="sm:px-4 sm:first:pl-0">
                <Feature {...f} variant="delivery" />
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal
          direction="right"
          delay={200}
          className="rounded-2xl bg-cream p-6 text-center text-ink lg:w-[300px] lg:shrink-0"
        >
          <p className="font-display text-2xl uppercase leading-none">{delivery.card.lead}</p>
          <p className="font-display text-4xl uppercase leading-none text-brasa">{delivery.card.accent}</p>
          <span className="mx-auto mt-4 flex h-20 w-20 animate-float items-center justify-center rounded-full bg-brasa text-white">
            <FaWhatsapp aria-hidden="true" className="h-11 w-11" />
          </span>
          <p className="mt-4 font-display text-4xl tracking-wide">{SITE.phoneDisplay}</p>
          <GoldButton href={whatsappUrl()} className="mt-4 w-full">
            {delivery.card.cta}
          </GoldButton>
        </Reveal>
      </div>
    </SectionCard>
  );
}