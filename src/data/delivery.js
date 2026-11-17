import { Bike, ShoppingBag, MapPin } from 'lucide-react';
import deliveryImg from '../assets/delivery.jpg';

export const delivery = {
  image: deliveryImg,
  imageAlt: 'Repartidor de Don Tomy en moto con mochila térmica durante la noche',
  eyebrow: 'Rápido, seguro y calientito',
  titleLead: 'Te llevamos',
  titleAccent: 'el sabor a casa',
  features: [
    { icon: Bike, title: 'Delivery\nexpress', text: 'Rápido y seguro' },
    { icon: ShoppingBag, title: 'Empaques\ntérmicos', text: 'Para que llegue siempre caliente' },
    { icon: MapPin, title: 'Cobertura\nen Ate', text: 'Llegamos a tu puerta' },
  ],
  card: {
    lead: 'Pide por',
    accent: 'WhatsApp',
    cta: 'Pedir ahora',
  },
};
