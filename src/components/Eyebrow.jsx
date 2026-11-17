/** Etiqueta pequeña sobre un título. tone "red" (fondo crema) o "light" (fondo rojo, centrada con líneas). */
export default function Eyebrow({ children, tone = 'red' }) {
  if (tone === 'light') {
    return (
      <p className="flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-wide text-white">
        <span aria-hidden="true" className="h-0.5 w-6 bg-gold" />
        {children}
        <span aria-hidden="true" className="h-0.5 w-6 bg-gold" />
      </p>
    );
  }
  return (
    <p className="text-sm font-bold uppercase tracking-wide text-brasa">
      {children}
      <span aria-hidden="true" className="mt-1 block h-0.5 w-8 bg-gold" />
    </p>
  );
}
