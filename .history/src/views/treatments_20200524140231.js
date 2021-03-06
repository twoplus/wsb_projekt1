import $ from 'jquery';
import { servePaths } from '../common/serve-paths';
import { localStore } from '../common/local-store';

export const treatments = () => {
  const fragment = $(new DocumentFragment());

  return servePaths.reDirect("treatments").then(items => {
    const myOrder = localStore.read();
    const trts =  [];
    fragment.append(`<br><br><div class="prz-fixed d-flex flex-column p-3">
    <h3 class="text-center">Zamów zabiegi </h3>
    
    <p class="text-center s-count text-success">Wybranych: <span >${!!myOrder.treatments?myOrder.treatments.length:0}</span></p>
    <a class="btn btn-success btn-nex text-white">Dalej</a>
    </div>
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
        $(".s-count").text("Wybranych: "+myOrder.treatments.length);
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
