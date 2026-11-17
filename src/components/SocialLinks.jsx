export default function SocialLinks({ items }) {
  return (
    <ul className="flex items-center gap-3">
      {items.map(({ label, icon: Icon, href }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gold text-ink transition-colors hover:bg-gold-soft"
          >
            <Icon aria-hidden="true" className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
