import { useEffect, useRef, useState } from 'react';

/**
 * Envuelve cualquier bloque y lo anima cuando entra en pantalla.
 * direction: 'up' | 'left' | 'right' | 'zoom'   delay: milisegundos
 */
export default function Reveal({
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ '--reveal-delay': `${delay}ms` }}
      className={`reveal reveal-${direction} ${visible ? 'is-visible' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}