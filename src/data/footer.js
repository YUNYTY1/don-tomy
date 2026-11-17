import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { whatsappUrl } from '../utils/whatsapp';

export const footer = {
  description:
    'En Don Tomy, cada plato es preparado con pasión, ingredientes de calidad y el sabor que nos caracteriza.',
  quickLinksTitle: 'Enlaces rápidos',
  contactTitle: 'Contáctanos',
  followTitle: 'Síguenos',
  followText: 'Descubre nuestras promociones y novedades en redes sociales.',
  // TODO: reemplazar por los perfiles reales del negocio
  socials: [
    { label: 'Facebook de Don Tomy', icon: FaFacebookF, href: 'https://www.facebook.com/' },
    { label: 'Instagram de Don Tomy', icon: FaInstagram, href: 'https://www.instagram.com/' },
    { label: 'TikTok de Don Tomy', icon: FaTiktok, href: 'https://www.tiktok.com/' },
    { label: 'WhatsApp de Don Tomy', icon: FaWhatsapp, href: whatsappUrl() },
  ],
  copyright: 'Polleria Don Tomy. Todos los derechos reservados.',
};
