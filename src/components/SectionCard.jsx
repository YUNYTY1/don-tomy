/** Contenedor de sección tipo "tarjeta" redondeada con los márgenes laterales del diseño. */
export default function SectionCard({ id, labelledBy, className = '', children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`mx-auto mt-2 w-[calc(100%-1.5rem)] max-w-[1360px] scroll-mt-4 overflow-hidden rounded-3xl sm:w-[calc(100%-2.5rem)] lg:w-[calc(100%-4rem)] ${className}`}
    >
      {children}
    </section>
  );
}
