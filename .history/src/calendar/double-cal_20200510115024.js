import $ from 'jquery';
import { singleCal } from './single-cal';


export const DoubleCal = () => {
    
    `
<div class="row justify-content-center my-5">
<div class="row col-lg-6 col-12 cal-wrap">


</div>
</div>
<div id="tst"></div>
`
navbar.find('ul').append(navItems);

return navbar;
};
// import $ from 'jquery';
// import { Cart } from "./cart";

// export const itSpaCart = () => {
//   const cart = new Cart();
//   const fragment = $(new DocumentFragment());

//   cookieStore.addEventListener('change', (event) => {
//       // jesli zaistniala zmiana w cookies,
//       // ponownie pobieram zawartosc kosza
//       const nowaZawartosc = cart.get();

//       // ...i poprawiam wyswietlane przez kosz informacje
//       // TODO: zaktualizuj to co wyswietla obecnie koszyk
//   });

//   // return fragment;
// };

import $ from 'jquery';
import { routeChange } from '../router/route-change';
import { routes } from '../router/routes';
import { navItem } from './nav-item';
import logo from '../assets/spa_logo.png';

export const nav = () => {
 
  const navbar = $(`
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
  const navItems = routes.map(route => {
    const { name, path } = route;
    return navItem(name, () => navbar.trigger(routeChange, { path: path }));
  });

  navbar.find('ul').append(navItems);
  
  return navbar;
};