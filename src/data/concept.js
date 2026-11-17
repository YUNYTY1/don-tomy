import { Flame, CookingPot, Users } from 'lucide-react';
import wokImg from '../assets/concept-wok.jpg';
import polloImg from '../assets/concept-pollo.jpg';

export const concept = {
  eyebrow: 'Nuestro concepto',
  titleLead: 'Tradición de pollería,',
  titleAccent: 'pasión chifa',
  // Los fragmentos con bold se separan para no usar HTML dentro de strings
  paragraph1: [
    { text: 'En ' },
    { text: 'Don Tomy', bold: true },
    { text: ' fusionamos lo mejor de dos mundos que los peruanos amamos: el ' },
    { text: 'pollo a la brasa jugoso y bien dorado', bold: true },
    { text: ', con el inconfundible sabor del wok chifa.' },
  ],
  paragraph2:
    'Cada plato es preparado al momento, con fuego, técnica y los mejores ingredientes para que disfrutes una experiencia única en cada bocado.',
  features: [
    { icon: Flame, title: 'Recetas\nde familia', text: 'Más de 10 años de experiencia' },
    { icon: CookingPot, title: 'Sabor que\nenamora', text: 'Porciones abundantes y llenas de sabor' },
    { icon: Users, title: 'Hecho para\ncompartir', text: 'Ideal para reuniones y momentos especiales' },
  ],
  images: {
    wok: { src: wokImg, alt: 'Wok con salteado chifa de carne y verduras sobre el fuego' },
    pollo: { src: polloImg, alt: 'Pollo a la brasa dorado sobre las brasas' },
  },
  badge: { top: 'Pollo a la brasa', bottom: '& Comida chifa' },
};
