import { home, rooms, treatments, booking } from '../views';

export const routes = [
  { name: 'Oferta', path: '/', data: {}, component: home },
  { name: 'Pokoje', path: '/rooms', data: {}, component: rooms },
  { name: 'Zabiegi', path: '/treatments', data: {}, component: treatments },
  { name: 'Booking', path: '/booking', data: {}, component: booking }
];
