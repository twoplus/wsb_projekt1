import $ from 'jquery';
import { localStore } from '../common/local-store';

export class Calendar  {
    constructor(){
        this.date = new Date();
        //this.today = {month: this.date.getMonth(), day: this.date.getDate(), year: this.date.getFullYear};
        localStore.write(4);//blad 9
        this.pin = localStore.read();
        
        this.getM = (x) => {
            this.months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
            const out = this.months[x%12];//x > 11 ? x  - 12 : x]; x<0?x+12
            console.log(out);
            //Math.round(((Math.abs(11)/12)*10)/0.8333)
            //(x-12)/12
            return out;
        }
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
    };
    
    

    build(x) {
        this.fragment = $(new DocumentFragment());
        //this.d = new Date(x[0],x[1],x[2]);
        x === undefined? this.d = new Date(): this.d = new Date(x.y,x.m,x.d);
        //this.pin = 4;
        this.sMonth = this.d.getMonth(); //this.pin;
        this.sYear = this.d.getFullYear();
        this.pin = this.sMonth;
        
        this.currentMonth = this.getM(this.pin);
        this.nextMonth = this.getM(this.pin + 1);//this.months[parseInt(this.pin) + 1 > 11 ? (parseInt(this.pin) + 1) - 12 : parseInt(this.pin) + 1];
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
                    
                    <li class="mid my1">
                        <span>${this.currentMonth}</span><br>
                        <span>${this.sYear}</span>
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
                </ul>
            </div>
        </div>
        <div class="cal cal-2 col-6">
            <div class="month">
                <ul class="second">
                    
                    <li class="mid my2">
                        <span>${this.nextMonth}</span><br>
                        <span>${this.sYear}</span>
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
        
        this.reload = (x) => {
            $(".set-one").empty()
            $(".set-two").empty();
            $(".my1").find("span").first().empty();
            $(".my2").find("span").first().empty();
            this.pin += x === 0 ? -1: 1;
            console.log("=",this.pin," ",this.getM(this.pin));
            console.info(this.pin/12);
            const trg = [".set-one", ".set-two"];
            for (const tr of trg ){
                
                let p = tr === ".set-one" ? 0 : 1;
                [...Array(this.getFirstDay(2020,(this.pin + p))).keys()].forEach( () => {
                    $(tr).append(`<li><span class="leer"></span></li>`); 
                });
                
                [...Array(this.getAllDays(2020,(this.pin + p))).keys()].forEach(element => {
                    $(tr).append(`<li>${element+1}</li>`); 
                });
                
            }
            $(".my1").find("span").first().append(this.getM(this.pin));
            //$(".my1 span:nth-child(2)").append(this.getM(this.pin));
            $(".my2").find("span").first().append(this.getM(this.pin+1));
        }
        this.prev = $(`<li class="prev">&#10094;</li>`);
        this.next = $(`<li class="next">&#10095;</li>`);
        this.prev.on("click", () => { this.reload(0) });
        this.next.on("click", () => { this.reload(1) });
        this.fragment.find(".first").prepend(this.prev);
        this.fragment.find(".second").prepend(this.next);
        
        
        [...Array(this.getFirstDay(2020,parseInt(this.sMonth))).keys()].forEach( () => {
            this.fragment.find(".set-one").append(`<li><span class="leer"></span></li>`); 
        });
        
        [...Array(this.getAllDays(2020,parseInt(this.sMonth))).keys()].forEach(element => {
            this.fragment.find(".set-one").append(`<li>${element+1}</li>`); 
        });

        [...Array(this.getFirstDay(2020,parseInt(this.sMonth)+1)).keys()].forEach( () => {
            this.fragment.find(".set-two").append(`<li><span class="leer"></span></li>`); 
            });
        
        [...Array(this.getAllDays(2020,parseInt(this.sMonth)+1)).keys()].forEach(element => {
            this.fragment.find(".set-two").append(`<li>${element+1}</li>`); 
        });
        
        
        return this.fragment;
    }
    
};