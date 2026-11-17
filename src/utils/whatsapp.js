import { SITE } from '../data/site';

/**
 * Link directo a WhatsApp con mensaje prellenado.
 * TODO (pendiente): confirmar el número final y el mensaje por defecto en src/data/site.js
 */
export const whatsappUrl = (message = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(message)}`;
