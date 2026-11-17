export default function NavBar({ links, activeId, onNavigate, orientation = 'horizontal' }) {
  const isHorizontal = orientation === 'horizontal';
  return (
    <nav aria-label="Principal">
      <ul className={isHorizontal ? 'flex items-center gap-8' : 'flex flex-col gap-1'}>
        {links.map((link) => {
          const active = link.id === activeId;
          return (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={onNavigate}
                aria-current={active ? 'true' : undefined}
                className={`block font-display text-lg uppercase tracking-wide transition-colors hover:text-gold ${
                  isHorizontal
                    ? `border-b-2 pb-1 ${active ? 'border-gold text-gold' : 'border-transparent text-white'}`
                    : `rounded-lg px-3 py-2 text-xl ${active ? 'bg-black/20 text-gold' : 'text-white'}`
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
