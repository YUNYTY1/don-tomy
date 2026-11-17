/**
 * Bloque ícono + título + texto, con 3 variantes:
 *  - hero: ícono en círculo dorado, texto claro
 *  - concept: ícono en círculo rojo, sobre fondo crema
 *  - delivery: ícono dorado simple, texto claro
 */
export default function Feature({ icon: Icon, title, text, variant = 'hero' }) {
  if (variant === 'concept') {
    return (
      <div className="flex flex-col items-start gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brasa text-brasa">
          <Icon aria-hidden="true" className="h-6 w-6" />
        </span>
        <div>
          <h3 className="whitespace-pre-line font-display text-xl uppercase leading-none text-ink">{title}</h3>
          <p className="mt-2 text-xs text-neutral-700">{text}</p>
        </div>
      </div>
    );
  }

  if (variant === 'delivery') {
    return (
      <div className="flex items-start gap-3 sm:flex-col sm:gap-2">
        <Icon aria-hidden="true" className="h-9 w-9 shrink-0 text-gold" strokeWidth={1.5} />
        <div>
          <h3 className="whitespace-pre-line font-display text-xl uppercase leading-none text-white">{title}</h3>
          <p className="mt-1 text-xs text-white/80">{text}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/80 bg-black/30 text-gold">
        <Icon aria-hidden="true" className="h-6 w-6" />
      </span>
      <div>
        <h3 className="whitespace-pre-line font-display text-xl uppercase leading-none text-white">{title}</h3>
        <p className="mt-1 text-xs text-white/85">{text}</p>
      </div>
    </div>
  );
}
