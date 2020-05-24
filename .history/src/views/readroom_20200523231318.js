import $ from 'jquery';
import { servePaths } from '../common/serve-paths';
import { localStore } from '../common/local-store';

export const readRoom = () => {
  const fragment = $(new DocumentFragment());
  fragment.append("grucha");
  
  return servePaths.reDirect("rooms").then(items => {

    //const myDates = localStore.read();
    fragment.append(`<br><br><h3 class="text-center">
    Dziala
    </h3><div class="container"></div>`);
    items.forEach(element => {
      fragment.find(".container").append(`
      <div class="row m-3">
        zupa${element.name}
      </div>
      `);
    });
    console.log("works")

   return fragment);
  });
};
