import { Flame, CookingPot, Drumstick } from 'lucide-react';
import heroImg from '../assets/hero.jpg';
import heroImg2 from '../assets/hero-2.jpg';
import heroImg3 from '../assets/hero-3.jpg';

export const hero = {
  // Cuando reemplaces las fotos, ajusta también el alt de cada una
  slides: [
    { src: heroImg, alt: 'Pollo a la brasa dorado sobre las llamas y las brasas' },
    { src: heroImg2, alt: 'Wok chifa con salteado de carne y verduras al fuego' },
    { src: heroImg3, alt: 'Platos de la casa: lomo saltado y arroz chaufa' },
  ],
  badge: 'Sabor que une familias',
  titleLead: 'Pollo a la brasa',
  titleAccent: 'y comida chifa',
  script: 'Hecho con pasión, servido con orgullo',
  features: [
    { icon: Flame, title: 'Brasa\nde verdad', text: 'Sabor ahumado inconfundible' },
    { icon: CookingPot, title: 'Wok\nal rojo vivo', text: 'El toque chifa que nos distingue' },
    { icon: Drumstick, title: 'Ingredientes\nde calidad', text: 'Frescos, seleccionados y de confianza' },
  ],
};