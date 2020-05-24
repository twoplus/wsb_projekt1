import $ from 'jquery';

import { treatItem } from './item';


export const nav = () => {

  const t = $(`
  <nav class="navbar justify-content-end justify-content-md-between fixed-top bg-white">
  <span class="d-flex wy-logo">
    <img src="${logo}" alt="ss">
    <h3>WY&#x2022;SPA</h3>
  </span>
  <span ><a class="btn ham text-secondary"><i class="fa fa-bars" aria-hidden="true"></i></a></span>
    <ul class="nav">
    
    </ul>
    
  </nav>
`);
  // chcemy zbudowac tablice elementow navItem z odpowiednimi nazwami i callbackami
  const treatItems = routes.map(route => {
    const { name, path } = route;
    return navItem(name, () => navbar.trigger(routeChange, { path: path }));
  });

  navbar.find('ul').append(navItems);
  
  return navbar;
};