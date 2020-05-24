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


doubleCalendar.find('cal-wrap').append(singleCal);

return doubleCalendar;
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
