import logo from '../assets/logo.jpg';

export default function Logo({ className = '' }) {
  return (
    <a
      href="#inicio"
      aria-label="Polleria Don Tomy, ir al inicio"
      className={`inline-block ${className}`}
    >
      <img
        src={logo}
        alt="Logo de Polleria Don Tomy"
        className="h-14 w-auto rounded-md object-contain sm:h-16"
      />
    </a>
  );
}