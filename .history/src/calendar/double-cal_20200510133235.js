import $ from 'jquery';
import { SingleCal } from './single-cal';


export const DoubleCal = () => {
const fragment = $(new DocumentFragment());
const fragment2 = $(new DocumentFragment());
const doubleCalendar = `
<div class="row justify-content-center my-5">
<div class="row col-lg-6 col-12 cal-wrap">

</div>
</div>
<div id="tst"></div>
`;
fragment.append(doubleCalendar);
const cal1 = SingleCal;
const cal2 = SingleCal;

const month1Ul = $('<ul class="first"></ul>');
const month2Ul = $('<ul class="second"></ul>');
const ulMid1 = $('<li class="mid my1"><span>Month</span><br><span>Year</span></li>');
const ulMid2 = $('<li class="mid my2"><span>Month</span><br><span>Year</span></li>');

month1Ul.append(ulMid1);
month2Ul.append(ulMid2);
fragment2.append(SingleCal);
fragment2.find(".month").append("<p>zupa</p>");//month1Ul);
//cal2.append(month2Ul);

fragment.find('.cal-wrap').append(fragment2);
// fragment.find('.month').append(month1Ul);
// fragment.find('.cal-wrap').append(cal2);
// fragment.find('.month').append(month2Ul);
//fragment.find('.cal-wrap').append(cal2);

return fragment;
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
// import $ from 'jquery';

// // spodziewamy sie funkcji click, ktora bedzie wywolywana przez element anchor
// // chcemy, aby klikniecie w element anchor powodowalo nawigacje do innej sciezki
// export const navItem = (text, click) => {
//   const navItem = $('<li class="nav-item"></li>');
//   const anchor = $('<a class="btn text-secondary"></a>');
//   anchor.text(text).on('click', click);
//   if(text === "Koszyk") {
//     anchor.append('<i class="fa fa-shopping-bag" aria-hidden="true"></i>');
//     anchor.on('click', click);
//   } 
    
  

// //document.crea

//   navItem.append(anchor);

//   return navItem;
// };