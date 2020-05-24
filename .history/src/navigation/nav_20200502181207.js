import $ from 'jquery';
import { routeChange } from '../router/route-change';
import { routes } from '../router/routes';
import { navItem } from './nav-item';
import logo from '../assets/spa_logo.png';

export const nav = () => {
  // const navbar = $(`
  //   <nav class="navbar navbar-expand navbar-dark bg-dark">
  //     <span class="navbar-brand">Androgene</span>
  //     <ul class="navbar-nav mr-auto"></ul>
  //   </nav>
  // `);
  const navbar = $(`
  <nav class="navbar justify-content-between fixed-top bg-white">
  <span class="d-flex wy-logo">
    <img src="${logo}" alt="ss">
    <h3>WY&#x2022;SPA</h3>
  </span>
    <ul class="nav">
    
    </ul>
    <span class="nav-item"><a></span>
  </nav>
`);
  // chcemy zbudowac tablice elementow navItem z odpowiednimi nazwami i callbackami
  const navItems = routes.map(route => {
    const { name, path } = route;
    return navItem(name, () => navbar.trigger(routeChange, { path: path }));
  });

  navbar.find('ul').append(navItems);
  
  return navbar;
};
