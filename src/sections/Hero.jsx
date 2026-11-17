import { useEffect, useState } from 'react';
import Feature from '../components/Feature';
import WhatsAppButton from '../components/WhatsAppButton';
import { hero } from '../data/hero';

const INTERVAL_MS = 5500;
const delay = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  const { slides } = hero;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchX, setTouchX] = useState(null);

  const go = (index) => setCurrent((index + slides.length) % slides.length);

  // Avance automático (se pausa con el mouse encima y respeta "reducir movimiento")
  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => setCurrent((c) => (c + 1) % slides.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, current, slides.length]);

  // Deslizar con el dedo en celular
  const onTouchStart = (e) => setTouchX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1));
    setTouchX(null);
  };

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      aria-roledescription="carrusel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className="relative isolate overflow-hidden bg-ink pb-16 pt-32 sm:pt-36 lg:min-h-[760px] lg:pb-24"
    >
      {/* Imágenes del carrusel (fundido cruzado + zoom lento) */}
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={i !== current}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
          className={`absolute inset-0 -z-20 h-full w-full animate-ken-burns object-cover object-[70%_center] transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90 lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/40 lg:to-transparent"
      />

      <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl">
          <p
            style={delay(100)}
            className="inline-block animate-fade-up rounded-full border border-gold/70 px-6 py-2 text-sm uppercase text-gold"
          >
            {hero.badge}
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-display uppercase leading-[0.9] tracking-wide text-5xl sm:text-7xl lg:text-8xl"
          >
            <span style={delay(250)} className="block animate-fade-up text-white">
              {hero.titleLead}
            </span>
            <span style={delay(400)} className="block animate-fade-up text-gold">
              {hero.titleAccent}
            </span>
          </h1>

          <p style={delay(550)} className="mt-4 animate-fade-up font-script text-2xl text-white sm:text-3xl">
            {hero.script}
          </p>

          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            {hero.features.map((f, i) => (
              <li key={f.title} style={delay(700 + i * 130)} className="animate-fade-up">
                <Feature {...f} variant="hero" />
              </li>
            ))}
          </ul>

          <div style={delay(1100)} className="mt-8 animate-fade-up">
            <WhatsAppButton variant="hero" />
          </div>
        </div>
      </div>

      {/* Indicadores del carrusel */}
      <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 sm:right-10 lg:right-16">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Ir a la imagen ${i + 1} de ${slides.length}`}
            aria-current={i === current}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-gold' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}