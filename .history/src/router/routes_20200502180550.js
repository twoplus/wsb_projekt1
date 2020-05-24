import { home, rooms, treatments, booking } from '../views';

export const routes = [
  { name: 'Strona Główna', path: '/', data: {}, component: home },
  { name: 'Pokoje', path: '/rooms', data: {}, component: rooms },
  { name: 'Zabiegci', path: '/treatments', data: {}, component: treatments },
  { name: 'Koszyk', path: '/booking', data: {}, component: booking }
];
