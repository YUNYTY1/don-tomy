/** Título de sección en fuente display: parte principal + parte con acento de color. */
export default function SectionTitle({
  id,
  lead,
  accent,
  leadClass = 'text-ink',
  accentClass = 'text-brasa',
  inline = false,
  className = '',
}) {
  return (
    <h2
      id={id}
      className={`font-display uppercase leading-[0.95] tracking-wide ${className}`}
    >
      <span className={leadClass}>{lead}</span>{' '}
      <span className={`${inline ? '' : 'block'} ${accentClass}`}>{accent}</span>
    </h2>
  );
}
