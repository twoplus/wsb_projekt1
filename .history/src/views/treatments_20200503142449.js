import $ from 'jquery';
import { servePaths } from '../common/serve-paths';

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  return servePaths.reDirect("treatments").then(items => {
    fragment.append(`<br><br><div class="tre"></div>`);
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
      
      <a class="btn btn-primary " href="#" role="button">Rezerwuj</a>
      </div>
      
      
      `);
    });


    return fragment
    // .append('<h2>Rooms</h2>')
    // .append(`<p>Pierwszy pokoj: ${pokoje[0].name}</p>`)
    // .append(`<p>Pokoi powinno byc ${pokoje.length}.</p>`);
  });
};
