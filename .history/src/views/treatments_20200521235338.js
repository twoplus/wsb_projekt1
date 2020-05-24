import $ from 'jquery';
import { servePaths } from '../common/serve-paths';

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  return servePaths.reDirect("treatments").then(items => {
    fragment.append(`<br><br>
    <h3 class="text-center">Wybierz jeden z zabiegów <a class="btn btn-primary">Dalej</a></h3>
    <div class="container"></div>`);
    items.forEach(element => {
      fragment.find(".container").append(`<div class="jumbotron">
      <h3 class="5">${element.name}</h3>
      <p >${element.desc}</p>
      <hr class="my-4">
      <div class="inline">
        <p>Zakres: ${element.area}</p> 
        <p>Czas zabiegu: ${element.time}min</p> 
        <p>Cena: ${element.price}zł</p>
      </div>
      
      <div class="btn btn-primary"  role="button">Rezerwuj</div>
      </div>
      
      
      `);
    });


    return fragment
    // .append('<h2>Rooms</h2>')
    // .append(`<p>Pierwszy pokoj: ${pokoje[0].name}</p>`)
    // .append(`<p>Pokoi powinno byc ${pokoje.length}.</p>`);
  });
};
