import $ from 'jquery';
import { servePaths } from '../common/serve-paths';
import { localStore } from '../common/local-store';

export const rooms = () => {
  const fragment = $(new DocumentFragment());

  return servePaths.reDirect("rooms").then(items => {
    // items.forEach(element => {
    //   fragment.append(`<div class="jumbotron">
    //   <h3 class="display-4">${element.name}</h3>
    //   <hr class="my-4">
    //   <p class="lead">Beds: ${element.beds} Guests: ${element.guests} Price: ${element.price}</p>
      
    //   <a class="btn btn-primary btn-lg" href="#" role="button">Book</a>
    //   </div>`);
    // });
    const myDates = localStore.read();
    fragment.append(`<br><br><div class="container"></div>`);
    items.forEach(element => {
      fragment.find(".container").append(`
      <div class="row m-3">
        <div class="row bord col-12">
        <div class="img col-12 col-md-3">
          <img  src="https://images.unsplash.com/photo-1531853121101-cb94c8ed218d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" class="size-64 mr-3" alt="...">
          
          </div>

          <div class="media-body col-12 col-md-9">
          <div class="row p-3 justify-content-end">
              <span class="text-muted px-3">Liczba łóżek: ${element.beds} &#9 Liczba gości: ${element.guests} &#9 Cena: ${element.price}zł</span>
              <div class="btn addToOrder btn-primary" data="${element.id}" role="button">Rezerwuj</div>
            </div>
            <div class="row desc px-3">
              <h5 class="mt-1">${element.name}</h5>
              <p >${element.desc}</p>
            </div>
            
          </div>
          
          
        </div>
      </div>
      `);
    });
    fragment.find(".addToOrder").on("click", (event) => {
        if(!!myDates){
          console.log(event.target)
          const trt = event.target
          myDates.room = "";
        } else {
          location.pathname = "/";
        }
      }
      );

    return fragment;
    // .append('<h2>Rooms</h2>')
    // .append(`<p>Pierwszy pokoj: ${pokoje[0].name}</p>`)
    // .append(`<p>Pokoi powinno byc ${pokoje.length}.</p>`);
  });
};
