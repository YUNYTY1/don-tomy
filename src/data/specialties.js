import polloImg from '../assets/dish-pollo.png';
import lomoImg from '../assets/dish-lomo.jpg';
import arrozImg from '../assets/dish-arroz.jpg';
import aeropuertoImg from '../assets/dish-aeropuerto.jpg';
import tallarinesImg from '../assets/dish-tallarines.jpg';
import { whatsappUrl } from '../utils/whatsapp';

export const specialties = {
  eyebrow: 'Nuestras especialidades',
  titleLead: 'Los favoritos de',
  titleAccent: 'nuestra casa',
  items: [
    {
      id: 'pollo',
      // CONFIRMAR: en la captura el título y la descripción se ven cortados/ilegibles
      title: 'Pollo a\nla brasa',
      description: 'Jugoso, dorado y toda una experiencia',
      image: polloImg,
      alt: 'Pollo a la brasa dorado y jugoso',
    },
    {
      id: 'lomo',
      title: 'Lomo\nsaltado',
      description: 'Clásico, sabroso y bien peruano',
      image: lomoImg,
      alt: 'Lomo saltado con cebolla, tomate y pimiento',
    },
    {
      id: 'chaufa',
      title: 'Arroz\nchaufa',
      description: 'Aroma, sabor y el toque del wok',
      image: arrozImg,
      alt: 'Plato de arroz chaufa con huevo y verduras',
    },
    {
      id: 'aeropuerto',
      title: 'Aeropuerto',
      description: 'Fusión perfecta para los amantes del sabor',
      image: aeropuertoImg,
      alt: 'Plato aeropuerto con tallarín saltado y papas fritas',
    },
    {
      id: 'tallarines',
      title: 'Tallarines\nsaltados',
      description: 'Salteados al wok con sabor inconfundible',
      image: tallarinesImg,
      alt: 'Tallarines saltados al wok con carne y verduras',
    },
  ],
  cta: {
    label: 'Ver todas nuestras especialidades',
    // TODO: conectar a la carta (PDF o página de menú). Por ahora abre WhatsApp.
    href: whatsappUrl('Hola Don Tomy, quisiera ver la carta completa.'),
  },
};
