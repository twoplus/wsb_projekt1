import $ from 'jquery';
import { servePaths } from '../common/serve-paths';
import { localStore } from '../common/local-store';

export const readroom = () => {
  const fragment = $(new DocumentFragment());

  return servePaths.reDirect("rooms").then(items => {

    const myDates = localStore.read();
    fragment.append(`<br><br><h3 class="text-center">
    Dziala
    </h3><div class="container"></div>`);
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
          console.log(event)
          const roomId = event.target.attributes.data.value;
          myDates.room = roomId;
          localStore.write(myDates);
          location.pathname = "/treatments";
        } else {
          location.pathname = "/";
        }
      }
      );

    return fragment;
  });
};
