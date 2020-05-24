import $ from 'jquery';
import { servePaths } from '../common/serve-paths';
import { localStore } from '../common/local-store';


export const booking = () => {
  const fragment = $(new DocumentFragment());

  const myOrder = localStore.read();
  //console.log("order:", myOrder.start)
  // let z = localStore.read();
  // console.log(z);
  return servePaths.reDirect("booking").then(items => {
    fragment.append(`<br><br><div class="container addhere"></div>
    <div class="container pay">
    
    </div>`);
    let tot = 0;
    if(items.length != 0){
      fragment.find(".addhere").append(`<br><br><p class="display-4 text-center">Twój koszyk jest pusty</p>`);
      fragment.find(".addhere").append(`<div class="row"><div class="btn btn-start offset-5 col-2 btn-primary">Zarezerwuj pobyt</div></div>`);
      fragment.find(".btn-start").on("click", () => {location.})
    } else {
      
      items.forEach(element => {
        tot += parseInt(element.price);
        fragment.find(".addhere").append(`
      <div class="row mr-1">
          <div class="media col-12 bg-lite m-1">
            <div class="media-body  m-1 ">
              <h5 class="mt-1">${element.name} - <span class="text-primary">${element.price}zł</span></h5>
            </div>
            <div class="m-2">
              <a class="btn btn-danger btn-del" href="#" role="button"><i class="fa fa-trash" aria-hidden="true"></i></a>
            </div>
          </div>
      </div>
        
        `);
      });
    }

    // fragment.find(".pay").append(`
    // <div class="row mr-1 mb-4">
    //   <div class="media col-12  m-1">
    //     <div class="media-body  m-1 ">
    //       <p class="lead m-1">Dodaj zabieg do zamówienia<a class="btn btn-primary btn-add float-right" href="#" role="button"><i class="fa fa-plus" aria-hidden="true"></i></a></p>
    //     </div>
    //   </div>
    // </div>
    // `);
    // if(items.length > 0){
      
    //   fragment.find(".pay").append(`
    //   <p class="lead">Do zapłaty: ${tot}zł<a class="btn btn-success btn-pay float-right" href="#" role="button">Zapłać</a></p>
    //   <br><br>`);
    // }

    return fragment
    
  });
};
