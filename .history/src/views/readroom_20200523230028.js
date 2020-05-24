import $ from 'jquery';
import { servePaths } from '../common/serve-paths';
import { localStore } from '../common/local-store';

export const readRoom = () => {
  const fragment = $(new DocumentFragment());

  return servePaths.reDirect("rooms").then(items => {

    const myDates = localStore.read();
    fragment.append(`<br><br><h3 class="text-center">
    Dziala
    </h3><div class="container"></div>`);
    items.forEach(element => {
      fragment.find(".container").append(`
      <div class="row m-3">
        $
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
