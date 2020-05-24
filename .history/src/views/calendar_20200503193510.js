import $ from 'jquery';
import { localStore } from '../common/local-store';

export class Calendar  {
    constructor(){
        
    };

    build() {
        this.fragment = $(new DocumentFragment());
        this.date = new Date();
        this.today = {month: date.getMonth(), day: date.getDate(), year: date.getFullYear};
        localStore.write(2);//blad 9
        //console.log(localStore.read());
        this.selectedMonth = localStore.read();//today.month;
        console.info(selectedMonth);

        this.months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
        this.currentMonth = months[selectedMonth];
        this.nextMonth = months[parseInt(selectedMonth) + 1 > 11 ? (parseInt(selectedMonth) + 1) - 12 : parseInt(selectedMonth) + 1];
        
        
        

        this.getAllDays = (y,m) => {
            return new Date(y, (m + 1), 0).getDate();
        };
        this.getFirstDay = (y,m) => {
            let first = new Date(y,m,1).getDay()
            first = first > 0 ? first -= 1 : first = 6;
            return first;
        };
        
        
        this.fragment.append(`
        <div class="row justify-content-center my-5">
        <div class="row col-lg-6 col-12 cal-wrap">
        <div class="cal col-6">
            <div class="month">
                <ul class="first">
                    
                    <li class="mid">
                        ${this.currentMonth}<br>
                        <span >2020</span>
                    </li>
                </ul>
            </div>
            <div class="week">
                <ul>
                    <li>PN</li>
                    <li>WT</li>
                    <li>ŚR</li>
                    <li>CZ</li>
                    <li>PT</li>
                    <li>SB</li>
                    <li>ND</li>
                </ul>
            </div>
            <div class="day">
            <ul class="set-one">
            </div>
        </div>
        <div class="cal col-6">
            <div class="month">
                <ul class="second">
                    
                    <li class="mid">
                    ${this.nextMonth}<br>
                        <span >2020</span>
                    </li>
                </ul>
            </div>
            <div class="week">
                <ul>
                    <li>PN</li>
                    <li>WT</li>
                    <li>ŚR</li>
                    <li>CZ</li>
                    <li>PT</li>
                    <li>SB</li>
                    <li>ND</li>
                </ul>
            </div>
            <div class="day">
                <ul class="set-two">
                </ul>
            </div>
        </div>
        </div>
        </div>
        <div id="test"></div>
        `);
        
        this.prev = $(`<li class="prev">&#10094;</li>`);
        this.next = $(`<li class="next">&#10095;</li>`);
        this.prev.on("click", () => { localStore.write(0); } );
        next.on("click", () => { alert("go right") });
        fragment.find(".first").prepend(prev);
        fragment.find(".second").prepend(next);
        
        [...Array(getFirstDay(2020,parseInt(selectedMonth))).keys()].forEach( () => {
            fragment.find(".set-one").append(`<li><span class="leer"></span></li>`); 
        });
        console.warn(getFirstDay(2020,parseInt(selectedMonth)));
        [...Array(getAllDays(2020,parseInt(selectedMonth))).keys()].forEach(element => {
            fragment.find(".set-one").append(`<li>${element+1}</li>`); 
        });
        [...Array(getFirstDay(2020,parseInt(selectedMonth)+1)).keys()].forEach( () => {
            fragment.find(".set-two").append(`<li><span class="leer"></span></li>`); 
            });
        
            [...Array(getAllDays(2020,parseInt(selectedMonth)+1)).keys()].forEach(element => {
            fragment.find(".set-two").append(`<li>${element+1}</li>`); 
            });

        
        return fragment;
    }
    
};