export default function SpecialtyCard({ title, description, image, alt, className = '' }) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-cream/70 bg-brasa-dark transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 ${className}`}
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <h3 className="whitespace-pre-line font-display text-2xl uppercase leading-none tracking-wide text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/90">{description}</p>
      </div>
    </article>
  );
}