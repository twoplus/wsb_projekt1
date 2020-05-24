import $ from 'jquery';
import { servePaths } from '../common/serve-paths';
import { localStore } from '../common/local-store';
import { readRoom } from './readroom';

export const booking = () => {
  const fragment = $(new DocumentFragment());
  
  return servePaths.reDirect("rooms").then(data => { 
    const myOrderFin = localStore.read();
    
    fragment.append(`<br><br><div class="container addhere"></div>
    <div class="container pay"></div>`);
    
    const serach = (roo) => {
            return roo.id == myOrderFin.room? roo: false;
    }
    const bookedRoom = data.filter(serach)[0]
    console.log(bookedRoom)
    if(!!!myOrderFin){//items.length != 0
      fragment.find(".addhere").append(`<br><br><p class="display-5 text-center">Twój koszyk jest pusty</p>`);
      fragment.find(".addhere").append(`<div class="row m-5"><div class="btn btn-start offset-md-4 col-12 col-md-4 btn-primary">Zarezerwuj pobyt</div></div><div id="tst"></div>`);
      fragment.find(".btn-start").on("click", () => {location.pathname = '/'})
    } else {
      let total = 0;
      if(!!myOrderFin.room) {
        total += parseInt(bookedRoom.price);
        fragment.find(".addhere").append(`<div class="row mx-5  d-flex justify-content-between alert myro alert-secondary">${bookedRoom.name}  - 
        ${myOrderFin.start.day} ${myOrderFin.start.month} ${myOrderFin.start.year} -> ${myOrderFin.end.day} ${myOrderFin.end.month} ${myOrderFin.end.year}
         - cena: ${bookedRoom.price}zł
        <a class="btn btn-danger btn-del-r text-white"  role="button"><i class="fa fa-trash" aria-hidden="true"></i></a>
        </div>`)

      };
      
      myOrderFin.treatments.forEach(
        (treat) => {
          fragment.find(".addhere").append(`<div class="row mx-5  d-flex justify-content-between alert alert-secondary" data="${treat[0]}">${treat[1]} cena: ${treat[2]}zł
          <a class="btn btn-danger btn-del text-white"  role="button"><i class="fa fa-trash" aria-hidden="true"></i></a>
          </div>`)
        }
      )

      myOrderFin.treatments.forEach(
        tr => {
          total += parseInt(tr[2]);
        }
      )
        
      
      fragment.find(".addhere").append(`<div class="row mx-5  d-flex justify-content-between alert alert-info">
      Dodaj nowy zabieg
      <a class="btn btn-primary btn-add" href="#" role="button"><i class="fa fa-plus" aria-hidden="true"></i></a>
      </div>`)
      fragment.find(".addhere").append(`<div class="row mx-5 alert d-flex justify-content-between ">
      Razem do zapłaty ${total}zł
      <a class="btn btn-success btn-pay" href="#" role="button">Przejdź do kasy</a>
      </div>`)
      //Remove  Treatments
      fragment.find(".btn-del").on("click",(event) => {
        console.log("kasuje")
        myOrderFin.treatments =[];
        localStore.write(myOrderFin);
        location.pathname = "/booking";
      })
      //Remove Room
      fragment.find(".btn-del-r").on("click",(event) => {
        console.log("kasuje")
        delete myOrderFin.room;
        localStore.write(myOrderFin);
        location.pathname = "/booking";
      })
      //Add new treatments 
      fragment.find(".btn-del-r").on("click",(event) => {
        console.log("kasuje")
        delete myOrderFin.room;
        localStore.write(myOrderFin);
        location.pathname = "/booking";
      })
      fragment.find(".btn-del-r").on("click",(event) => {
        console.log("kasuje")
        delete myOrderFin.room;
        localStore.write(myOrderFin);
        location.pathname = "/booking";
      })
    }


    return fragment;
  } );

   

}




      
      
      //console.log(outroom)
    //   fragment.find(".addhere").append(`<div class="row mx-5 alert d-flex justify-content-between alert myro alert-secondary">zupa
    // </div>`)
      

     //const newrr = [...allrooms];
     //console.log(allrooms)
      //<a class="btn btn-danger btn-del" href="#" role="button"><i class="fa fa-trash" aria-hidden="true"></i></a>

      // items.forEach(element => {
      //   console.log(element)
      //   fragment.find(".addhere").append(`
      // <div class="row mr-1">
      //     <div class="media col-12 bg-lite m-1">
      //       <div class="media-body  m-1 ">
      //         <h5 class="mt-1">${element.name} - <span class="text-primary">${element.price}zł</span></h5>
      //       </div>
      //       <div class="m-2">
      //         <a class="btn btn-danger btn-del" href="#" role="button"><i class="fa fa-trash" aria-hidden="true"></i></a>
      //       </div>
      //     </div>
      // </div>
        
      //   `);
     //});

      
      // fragment.find(".addhere").append(`<div class="row mx-5 alert d-flex justify-content-between alert alert-secondary">${myOrderFin.room} ${myOrderFin.start.day} ${myOrderFin.start.month} - ${myOrderFin.end.day} ${myOrderFin.end.month}
      // <a class="btn btn-danger btn-del" href="#" role="button"><i class="fa fa-trash" aria-hidden="true"></i></a>
      // </div>`)
      // myOrderFin.treatments.forEach(
      //   (id) => {
      //     fragment.find(".addhere").append(`<div class="row mx-5 alert d-flex justify-content-between alert alert-secondary">${id} 
      //     <a class="btn btn-danger btn-del" href="#" role="button"><i class="fa fa-trash" aria-hidden="true"></i></a>
      //     </div>`)
      //   }
      // )
      // fragment.find(".addhere").append(`<div class="row mx-5 alert d-flex justify-content-between alert alert-info">
      // Dodaj nowy zabieg
      // <a class="btn btn-primary btn-add" href="#" role="button"><i class="fa fa-plus" aria-hidden="true"></i></a>
      // </div>`)
      
    //}
    
    
    
    //return Promise.resolve(fragment);
    
  //});
//};

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
  
  
  // items.forEach(element => {
  //   tot += parseInt(element.price);
  //   fragment.find(".addhere").append(`
  // <div class="row mr-1">
  //     <div class="media col-12 bg-lite m-1">
  //       <div class="media-body  m-1 ">
  //         <h5 class="mt-1">${element.name} - <span class="text-primary">${element.price}zł</span></h5>
  //       </div>
  //       <div class="m-2">
  //         <a class="btn btn-danger btn-del" href="#" role="button"><i class="fa fa-trash" aria-hidden="true"></i></a>
  //       </div>
  //     </div>
  // </div>
    
  //   `);
  // });