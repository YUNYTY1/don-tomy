import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import WhatsAppButton from '../components/WhatsAppButton';
import useActiveSection from '../hooks/useActiveSection';
import { NAV_LINKS, SECTION_IDS } from '../data/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="relative mx-auto w-[calc(100%-1.5rem)] max-w-[1360px] sm:w-[calc(100%-2.5rem)] lg:w-[calc(100%-4rem)]">
        <div className="flex items-center justify-between gap-4 rounded-b-3xl bg-brasa px-5 py-3 shadow-lg shadow-black/30">
          <Logo />

          <div className="hidden xl:block">
            <NavBar links={NAV_LINKS} activeId={activeId} />
          </div>

          <div className="flex items-center gap-3">
            <WhatsAppButton variant="nav" className="hidden sm:inline-flex" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="menu-movil"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/70 text-gold xl:hidden"
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <div
            id="menu-movil"
            className="absolute inset-x-0 top-full mt-2 rounded-3xl bg-brasa p-4 shadow-xl shadow-black/40 xl:hidden"
          >
            <NavBar
              links={NAV_LINKS}
              activeId={activeId}
              orientation="vertical"
              onNavigate={() => setOpen(false)}
            />
            <WhatsAppButton variant="nav" className="mt-3 w-full justify-center sm:hidden" />
          </div>
        )}
      </div>
    </header>
  );
}
