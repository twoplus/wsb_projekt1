import $ from 'jquery';
import { servePaths } from '../common/serve-paths';
import { localStore } from '../common/local-store';

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  return servePaths.reDirect("treatments").then(items => {
    const myOrder = localStore.read();
    const trts =  [];
    fragment.append(`<br><br>
    <h3 class="text-center">Zamów jeden z zabiegów <a class="btn btn-secondary btn-nex text-white">Dalej</a></h3>
    <p>Wbrałeś </p>
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
      
      <div class="btn btn-bt btn-primary" data="${element.id}" data2="${element.price}" role="button">Rezerwuj</div>
      </div>
      
      
      `);
    });
    fragment.find(".btn-nex").on("click", () => {location.pathname = '/booking'})
    fragment.find(".btn-bt").on("click", (event) => {
      
      if(!!myOrder) {
        const treatId = event.target.attributes.data.value;
        const treatName = event.target.parentElement.children[0].outerText;
        const treatPrice = event.target.attributes.data2.value;
        console.log(treatName)
        trts.indexOf(treatId) < 0 ? trts.push([treatId,treatName,treatPrice]) : false;
        myOrder.treatments = trts;
        localStore.write(myOrder);
        
      } else {
        location.pathname = "/";
      }
    })
    return fragment
    // .append('<h2>Rooms</h2>')
    // .append(`<p>Pierwszy pokoj: ${pokoje[0].name}</p>`)
    // .append(`<p>Pokoi powinno byc ${pokoje.length}.</p>`);
  });
};
