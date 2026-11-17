import { Flame } from 'lucide-react';

/** Sello circular rojo con texto en arco. Decorativo (el significado ya está en el texto de la sección). */
export default function CircularBadge({ top, bottom, className = '' }) {
  return (
    <div aria-hidden="true" className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow">
        <circle cx="100" cy="100" r="98" fill="#ad121b" />
        <circle cx="100" cy="100" r="92" fill="none" stroke="#f5b71a" strokeWidth="1.5" strokeDasharray="1 5" strokeLinecap="round" />
        <defs>
          <path id="badge-top" d="M 34,100 A 66,66 0 0 1 166,100" />
          <path id="badge-bottom" d="M 16,100 A 84,84 0 0 0 184,100" />
        </defs>
        <text fill="#fff" fontFamily="'Bebas Neue', Impact, sans-serif" fontSize="22" letterSpacing="2" textAnchor="middle" style={{ textTransform: 'uppercase' }}>
          <textPath href="#badge-top" startOffset="50%">{top}</textPath>
        </text>
        <text fill="#fff" fontFamily="'Bebas Neue', Impact, sans-serif" fontSize="22" letterSpacing="2" textAnchor="middle" style={{ textTransform: 'uppercase' }}>
          <textPath href="#badge-bottom" startOffset="50%">{bottom}</textPath>
        </text>
      </svg>
      <Flame className="absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 fill-gold text-gold" />
    </div>
  );
}