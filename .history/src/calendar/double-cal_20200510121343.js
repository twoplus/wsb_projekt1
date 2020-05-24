import $ from 'jquery';
import { singleCal } from './single-cal';


export const DoubleCal = () => {
const doubleCalendar = `
<div class="row justify-content-center my-5">
<div class="row col-lg-6 col-12 cal-wrap">


</div>
</div>
<div id="tst"></div>
`;
const spans = 
const navItem = $('<li class="nav-item"></li>');

doubleCalendar.find('cal-wrap').append(singleCal);

return doubleCalendar;
};


// <ul class="first">
// <li class="mid my1">
//     <span>Month</span><br>
//     <span>Year</span>
// </li>
// </ul>
// // import $ from 'jquery';
// // import { Cart } from "./cart";



// // export const itSpaCart = () => {
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

// spodziewamy sie funkcji click, ktora bedzie wywolywana przez element anchor
// chcemy, aby klikniecie w element anchor powodowalo nawigacje do innej sciezki
export const navItem = (text, click) => {
  const navItem = $('<li class="nav-item"></li>');
  const anchor = $('<a class="btn text-secondary"></a>');
  anchor.text(text).on('click', click);
  if(text === "Koszyk") {
    anchor.append('<i class="fa fa-shopping-bag" aria-hidden="true"></i>');
    anchor.on('click', click);
  } 
    
  

//document.crea

  navItem.append(anchor);

  return navItem;
};