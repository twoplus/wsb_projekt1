import $ from 'jquery';
import { localStore } from '../common/local-store';
import { DoubleCal } from '../calendar/double-cal';

export class Calendar  {
    constructor(){
        this.date = new Date();
        
        localStore.write(4);//blad 9
        //this.pin = localStore.read();

        this.getAllDays = (y,m) => {
          return new Date(y, (m + 1), 0).getDate();
        };
        this.getFirstDay = (y,m) => {
            let first = new Date(y,m,1).getDay()
            first = first > 0 ? first -= 1 : first = 6;
            return first;
        };
        this.getM = (x) => {
            this.months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
            const rev = [...this.months];
            rev.reverse();
            const out = x >= 0 ? this.months[x%12] : rev[(Math.abs(x)-1)%12];
            return out;
        }
        this.getY = (x,y) => {
            return parseInt(y+(x/12));
        }
        this.loadMY = (x) => {
          $(".my1 span:nth-of-type(1)").empty().append(this.getM(x));
          $(".my1 span:nth-of-type(2)").empty().append(this.getY(x,2020));
          $(".my2 span:nth-of-type(1)").empty().append(this.getM(x+1));
          $(".my2 span:nth-of-type(2)").empty().append(this.getY(x+1,2020));
        }
        this.startPin = (x) => {
          //const sPin = $(".cal-1").find("reserve").first();
          $(x).toggleClass("reserve"); 
          const from = $(x).text();
          const
          console.log(from);
          $(".set-one li:nth-child("+from+")").on("mouseenter", () => { $(".set-one li:nth-child(3)").toggleClass("reserve") })
        }
        this.loadD = (x) => {
          const trg = [".set-one", ".set-two"];
          for (const tr of trg ) {
              $(tr).empty();
              let p = tr === ".set-one" ? 0 : 1;
              [...Array(this.getFirstDay(2020,(x + p))).keys()].forEach( () => {
                  $(tr).append(`<li><span class="leer"></span></li>`); 
              });
              
              [...Array(this.getAllDays(2020,(x + p))).keys()].forEach(element => {
                  const day = $(`<li>${element+1}</li>`);
                  day.on("click",  () => {this.startPin($(day))} );
                  //day.on("mouseenter", () => { $(day).toggleClass("reserve") } );
                  $(tr).append(day); 
              });
              //$(dayLi).toggleClass("reserve"); console.log($(dayLi).text());
          }
        }

        this.reload = (x) => {
          console.log("--->",this.pin);
          this.pin += x === 0 ? -1: 1;
          this.loadD(this.pin);
          this.loadMY(this.pin);
        }
        
    };
    
    

    build(x) {
        const fragment = $(new DocumentFragment());
        
        const d = this.date;
        
        const sMonth = d.getMonth(); //this.pin;
        const sYear = d.getFullYear();
        this.pin = sMonth;

        const calfrag = $(new DocumentFragment());
        calfrag.append(DoubleCal);
        calfrag.find(".my1 span:nth-of-type(1)").first().empty().append(this.getM(sMonth));
        calfrag.find(".my1 span:nth-of-type(2)").first().empty().append(this.getY(sMonth,sYear));
        calfrag.find(".my2 span:nth-of-type(1)").first().empty().append(this.getM(sMonth+1));
        calfrag.find(".my2 span:nth-of-type(2)").first().empty().append(this.getY(sMonth+1,sYear));
        fragment.append(calfrag);

        this.prev = $(`<li class="prev">&#10094;</li>`);
        this.next = $(`<li class="next">&#10095;</li>`);
        this.prev.on("click", () => { this.reload(0) });
        this.next.on("click", () => { this.reload(1) });
        fragment.find(".first").prepend(this.prev);
        fragment.find(".second").prepend(this.next);
        
        [...Array(this.getFirstDay(2020,parseInt(sMonth))).keys()].forEach( () => {
          fragment.find(".set-one").append(`<li class="leer"><span></span></li>`); 
        });

        [...Array(this.getAllDays(2020,parseInt(sMonth))).keys()].forEach(element => {
           const dayLi = $(`<li>${element+1}</li>`);
           dayLi.on("click", () => {  $(dayLi).toggleClass("reserve") })
           fragment.find(".set-one").append(dayLi); 
        });
        
        [...Array(this.getAllDays(2020,parseInt(sMonth)+1)).keys()].forEach(element => {
           fragment.find(".set-two").append(`<li>${element+1}</li>`); 
        });
        
        
        return fragment;
    }
    
};






      //this.sMonth = localStore.read();//today.month;
        //console.info(this.sMonth);

        // this.months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
        // this.currentMonth = this.months[this.sMonth];
        // this.nextMonth = this.months[parseInt(this.sMonth) + 1 > 11 ? (parseInt(this.sMonth) + 1) - 12 : parseInt(this.sMonth) + 1];
        // this.getAllDays = (y,m) => {
        //     return new Date(y, (m + 1), 0).getDate();
        // };
        // this.getFirstDay = (y,m) => {
        //     let first = new Date(y,m,1).getDay()
        //     first = first > 0 ? first -= 1 : first = 6;
        //     return first;
        // };




// import $ from 'jquery';

// // spodziewamy sie funkcji click, ktora bedzie wywolywana przez element anchor
// // chcemy, aby klikniecie w element anchor powodowalo nawigacje do innej sciezki
// export const updateBtn = (direction, action) => {
//   const btns = [[".first",`<li class="prev">&#10094;</li>`],[".second",`<li class="next">&#10095;</li>`]];
//   //direction ? : ;
//   const updateBtn = $('<li class="nav-item"></li>');
//   const anchor = $('<a class="btn text-secondary"></a>');
//   anchor.text(text).on('click', action);
//   if(text === "Koszyk") {
//     anchor.append('<i class="fa fa-shopping-bag" aria-hidden="true"></i>');
//     anchor.on('click', click);
//   } 
    
  

// //document.crea

//   updateBtn.append(anchor);

//   return updateBtn;
// };
      // (`
        // <div class="row justify-content-center my-5">
        // <div class="row col-lg-6 col-12 cal-wrap">
        // <div class="cal cal-1 col-6">
        //     <div class="month">
        //         <ul class="first">
                    
        //             <li class="mid my1">
        //                 <span>${this.currentMonth}</span><br>
        //                 <span>${this.sYear}</span>
        //             </li>
        //         </ul>
        //     </div>
        //     <div class="week">
        //         <ul>
        //             <li>PN</li>
        //             <li>WT</li>
        //             <li>ŚR</li>
        //             <li>CZ</li>
        //             <li>PT</li>
        //             <li>SB</li>
        //             <li>ND</li>
        //         </ul>
        //     </div>
        //     <div class="day">
        //         <ul class="set-one">
        //         </ul>
        //     </div>
        // </div>
        // <div class="cal cal-2 col-6">
        //     <div class="month">
        //         <ul class="second">
                    
        //             <li class="mid my2">
        //                 <span>${this.nextMonth}</span><br>
        //                 <span>${this.sYear}</span>
        //             </li>
        //         </ul>
        //     </div>
        //     <div class="week">
        //         <ul>
        //             <li>PN</li>
        //             <li>WT</li>
        //             <li>ŚR</li>
        //             <li>CZ</li>
        //             <li>PT</li>
        //             <li>SB</li>
        //             <li>ND</li>
        //         </ul>
        //     </div>
        //     <div class="day">
        //         <ul class="set-two">
        //         </ul>
        //     </div>
        // </div>
        // </div>
        // </div>
        // <div id="tst"></div>
        // `);