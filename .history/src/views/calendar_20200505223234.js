import $ from 'jquery';
import { localStore } from '../common/local-store';

export class Calendar  {
    constructor(){
        this.date = new Date();
        //this.today = {month: this.date.getMonth(), day: this.date.getDate(), year: this.date.getFullYear};
        localStore.write(4);//blad 9
        this.pin = localStore.read();
        
        //this.selectedMonth = localStore.read();//today.month;
        //console.info(this.selectedMonth);

        // this.months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
        // this.currentMonth = this.months[this.selectedMonth];
        // this.nextMonth = this.months[parseInt(this.selectedMonth) + 1 > 11 ? (parseInt(this.selectedMonth) + 1) - 12 : parseInt(this.selectedMonth) + 1];
        // this.getAllDays = (y,m) => {
        //     return new Date(y, (m + 1), 0).getDate();
        // };
        // this.getFirstDay = (y,m) => {
        //     let first = new Date(y,m,1).getDay()
        //     first = first > 0 ? first -= 1 : first = 6;
        //     return first;
        // };
    };
    
    

    build(x) {
        this.fragment = $(new DocumentFragment());
        //this.d = new Date(x[0],x[1],x[2]);
        x === undefined? this.d = new Date(1979,10,1): this.d = new Date(x.y,x.m,x.d);
        
        this.selectedMonth = this.d.getMonth(); //this.pin;
        this.selectedYear = this.d.getFullYear();

        this.months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
        this.currentMonth = this.months[this.selectedMonth];
        this.nextMonth = this.months[parseInt(this.selectedMonth) + 1 > 11 ? (parseInt(this.selectedMonth) + 1) - 12 : parseInt(this.selectedMonth) + 1];
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
        <div class="cal cal-1 col-6">
            <div class="month">
                <ul class="first">
                    
                    <li class="mid cur">
                        ${this.currentMonth}<br>
                        <span>${this.selectedYear}</span>
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
        <div class="cal cal-2 col-6">
            <div class="month">
                <ul class="second">
                    
                    <li class="mid nex">
                    ${this.nextMonth}<br>
                        <span>${this.selectedYear}</span>
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
        <div id="tst"></div>
        `);
        this.update = 
        this.reload = (x) => {
            $(".set-one").empty()
            $(".set-two").empty();
            [...Array(this.getFirstDay(2020,parseInt(x))).keys()].forEach( () => {
                $(".set-one").append(`<li><span class="leer"></span></li>`); 
            });
            [...Array(this.getAllDays(2020,parseInt(x))).keys()].forEach(element => {
                $(".set-one").append(`<li>${element+1}</li>`); 
            });
        }
        this.prev = $(`<li class="prev">&#10094;</li>`);
        this.next = $(`<li class="next">&#10095;</li>`);
        this.prev.on("click", () => { this.reload(4) });
        this.next.on("click", () => {  $(".cal-2").find(".day").empty() });
        this.fragment.find(".first").prepend(this.prev);
        this.fragment.find(".second").prepend(this.next);
        
        [...Array(this.getFirstDay(2020,parseInt(this.selectedMonth))).keys()].forEach( () => {
            this.fragment.find(".set-one").append(`<li><span class="leer"></span></li>`); 
        });
        
        [...Array(this.getAllDays(2020,parseInt(this.selectedMonth))).keys()].forEach(element => {
            this.fragment.find(".set-one").append(`<li>${element+1}</li>`); 
        });

        [...Array(this.getFirstDay(2020,parseInt(this.selectedMonth)+1)).keys()].forEach( () => {
            this.fragment.find(".set-two").append(`<li><span class="leer"></span></li>`); 
            });
        
        [...Array(this.getAllDays(2020,parseInt(this.selectedMonth)+1)).keys()].forEach(element => {
            this.fragment.find(".set-two").append(`<li>${element+1}</li>`); 
        });
        
        
        return this.fragment;
    }
    
};