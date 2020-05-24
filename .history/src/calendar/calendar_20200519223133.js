import $ from 'jquery';
import { localStore } from '../common/local-store';
import { DoubleCal } from '../calendar/double-cal';

export class Calendar  {
    constructor(){
        this.date = new Date();
        
        localStore.write(4);//blad 9
        this.pin = this.date.getMonth();//localStore.read();
        this.today = [this.date.getDate(),this.date.getMonth(),this.date.getFullYear()]
        
        this.getAllDays = (y,m) => {
          return new Date(y, (m + 1), 0).getDate();
        };

        this.getFirstDay = (y,m) => {
            let first = new Date(y,m,1).getDay()
            first = first > 0 ? first -= 1 : first = 6;
            return first;
        };

        this.months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
        this.viewedMonth = {m: false, y: false};
        
        this.getM = (x) => {
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

        this.from = false;
        this.fromSet = false;
        this.formM = false;
        this.to = false;
        this.toSet = false;
        this.toM = false;
       
        this.cleanPin = (x,y,u) => {
          let s = x;
          while (s < y) {
            //console.log("removing from ", s, " to ", y)
            const tr = $(u+ " >.d:nth-child("+s+")");
            $(tr).removeClass("rev");
            s++
          }
        }

        this.endPin = (y,u,x,z,q) => {//this.endPin( this.from, this.fromSet, to, empties, lis.length);
          //let i = this.from+1;
          if(u == ".set-two" && this.fromSet == ".set-one") {
              y = 0;
              let cLis = $(".set-one li")
              let cLids = $(".set-two li.d")
              cLis = cLis.length;
              cLids = cLids.length;
              this.endPin(this.from, ".set-one", 31,cLids, cLis, 0)
          }
          
          this.cleanPin((y+1),(q+z+1),u);
          
            let i = y+1;
            while (i <= x) {
              const fr = u + " li:nth-child("+(i+z)+")";
              
              $(fr).addClass("rev");
              i++;
            }
        }
        
        
        this.startPin = (x) => {// x is the clicked day
          
          
          const clickedDay = parseInt($(x).text());
          const clickedParent = $(x).parent().attr("class");
          
          const lis = $(".set-one li.d");
          const sLis = $(".set-two li.d");
          const all_lis = $(".set-one li");
          const sAll_lis = $(".set-two li");
          //const empties = all_lis.length - lis.length; //potentially redundant
          const sEmpties = sAll_lis.length - sLis.length; //potentially redundant
          const pickle = {
              one: {
                days: lis.length, 
                lis: all_lis.length,
                clickedD: clickedParent == "set-one"? clickedDay: null
              }, 
              two: {
                days: sLis.length, 
                lis: sAll_lis.length,
                clickedD: clickedParent == "set-two"? clickedDay: null
              }
          }  
          
          
          // IF START DATE IS SET AND END DATE IS NOT AND THE CLICKED DAY IS NOT BELOW START DATE THEN ADD LISTENERS
          if( !!!this.to) {//(this.from < clickedDay)
             //MARK THE CLICKED DAY
            $(x).toggleClass("reserve");

            if (!!this.from) {//IF START DATE IS SET SAVE END DATE
              
              this.to = clickedDay;//IF CLICKED THE 2ND TIME SET THE END DATE
              this.toSet = "."+clickedParent; //IF CLICKED THE 2ND TIME SET THE PARENT SET
              
              if( (this.fromSet == this.toSet && this.to <= this.from) || (this.fromSet == ".set-two" && this.toSet == ".set-one") ) {
                this.reSet();
              }
              alert("YOU SELECTED "+ this.from+","++" - "+this.to)
            } else {// SET START DATE
              
              const crCal = $(".cal-1:nth-child(1)").find("."+clickedParent)
              const test = !!crCal.length>0 ? 1 : 2;
              const mCheck = $(".my"+test+" span:nth-child(1)").text();
              const selectedMon = this.months.indexOf(mCheck);
              const yCheck = parseInt($(".my"+test+" span:nth-of-type(2)").text()); //
              const dateCk = this.dateLockCheck()
              console.log("check ",mCheck)
              if( yCheck >= this.today[2] &&
                (( selectedMon == this.today[1] && clickedDay >= this.today[0]) 
                || (selectedMon != this.today[1] ))
              //&& !!(dateCk[0] >= this.today[1])
              ) {
                //SET START DATE HERE
                console.log("www",!!(this.months.indexOf(dateCk[0]) >= this.today[1]));
                this.from = clickedDay;
                this.fromM = mCheck;
                this.fromSet = "."+clickedParent;
                //LISTEN FOR MOUSE ENTER
                //HELPER FUNCTION 1 ADDING LISTENERS FROM START TILL END OF MONTH
              //REQUIRES FROM, SET, ALL DAYS, EMPTIES
              const help1 = (from, fromset,pikl) => {
                //from,fromset,pickle
                console.log("adding 1",this.from,this.fromSet,this.fromSet ==".set-one"? pickle.one : pickle.two)
             
                this.cleanPin((from+1),(pikl.lis+1),fromset);
                
                let i = from;
                while (i <= pikl.lis) {
                
                  const fr = fromset + " li:nth-child("+(i+(pikl.lis-pikl.days))+")";
                  
                  $(fr).on("mouseenter", () => { 
                    
                    const zto = parseInt($(fr).text());
                    console.log("hover",zto);
                    if(!!zto) {
                      this.cleanPin(1,pickle.two.lis,".set-two");
                    }
                    this.endPin( this.from, fromset, zto, pikl.lis-pikl.days, pikl.lis);
                  })
                  
                  i++;
                }
              }
              //HELPER FUNCTION 2 ADDING LISTENERS TO ALL DAYS IN SET TWO
              //REQUIRES EMPTIES AND ALL DAYS IN SET TWO
              const help2 = (pickle2) => {
                console.log("adding 2 listening all days in TWo")
                //REQUIRES pickle.two
                let j = 0;
                const end = pickle2.lis + 1;
                while(j < end) { 
                  const sfr = ".set-two li:nth-child("+j+")";
                  const sto = parseInt($(sfr).text());
                  $(sfr).on("mouseenter", () => { 
                    
                    this.endPin( 1, ".set-two", sto, sEmpties, sLis.length);
                    help3(this.from,".set-one",pickle.one);
                    //this.endPin( this.from, ".set-two", sto, sEmpties, sLis.length);
                  })
                  j++;
                }
              }
              //HELPER FUNCTION 3 FILLING DAYS IN SET ONE FROM START TILL END IF HOVER IN SET TWO
              //REQUIRES START DAY, ALL DAYS IN SET ONE, EMPTIES IN SET ONE
              const help3 = (from3,fromset3,pikl3) => {
                console.log("adding 3",this.from,this.fromSet,pickle.one)
                // help1(this.from,".set-one",pickle.one);
                let j = from3 + (pikl3.lis-pikl3.days)  ;
                const end = parseInt(pikl3.lis) +1;
                console.log("end from help3",j,end,fromset3)
                
                while(j < end) { 
                  const cfr = ".set-one li:nth-child("+j+")";
                  
                  $(cfr).addClass("rev");
                  j++;
                }
              }
                //ADD LISTENERS TO DAYS ABOVE START DATE 
                //IF START DATE IS IN SET-TWO GRAB START DATE AND ADD LISTENERS TO ABOVE DAYS ONLY
                if(this.fromSet==".set-two"){
                  
                  help1(this.from,this.fromSet,this.fromSet ==".set-one"? pickle.one : pickle.two)
                  
                } else {
                  
                  help1(this.from,this.fromSet,this.fromSet ==".set-one"? pickle.one : pickle.two)
                  help2(pickle.two)
                }
              } else {
                this.reSet();
              }
            }
            //console.log("SUMMARY AFTER CLICKING: start date ", this.from, this.fromSet," end date ",this.to,this.toSet)
          } else {
            this.reSet();
          }

        }
        this.reSet = () => {
          //resetting calendar to current view
          this.reload(0);
          this.reload(1);
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
                  const day = $(`<li class="d">${element+1}</li>`);
                  day.on("click",  () => {this.startPin($(day))} );
                  $(tr).append(day); 
              });
             
          }
        }
        this.markToday = () => {
          const todayNo = (setname) => {
            const dd = $(setname + " .d");
            const li = $(setname + " li");
            const shiftDay = (li.length - dd.length) + parseInt(this.today[0]);
            return shiftDay;
          }
          const fMonth = $(".my1 span:nth-of-type(1)").text();
          const sMonth = $(".my2 span:nth-of-type(1)").text();
          const crMonth = this.getM(this.today[1]);
          if ( fMonth == crMonth || sMonth == crMonth) {
            const calSet = fMonth == crMonth ? ".set-one": ".set-two"; 
            $(calSet + " .d:nth-child("+todayNo(calSet)+")").addClass("today")
          }
        }
        this.dateLockCheck = () => {
          const cm = this.months.indexOf( $(".my1 span:nth-child(1)").text() );
          const cy =  parseInt( $(".my1 span:nth-of-type(2)").text() );
          return [cm,cy];
          
        }
        this.reload = (x) => {//PREVIOUS OR NEXT MONTH
          
          this.pin += x === 0 ? -1: 1;
          this.loadD(this.pin);
          this.loadMY(this.pin);
          this.markToday();
          this.from =false; 
          this.to = false;
          this.toSet = false;
          //PROTECT FROM VIEWING PAST DATES
          const check = this.dateLockCheck();
          if( (check[0] == this.today[1] && check[1] == this.today[2]) ) 
          {
            $(".prev").hide();
          } else {
            $(".prev").show();
          }
          
        }
        
    };

    run() {
      setTimeout( () => { 
        this.reload(0); 
        this.reload(1);
        console.log(this.today)
      }
        ,100)//HELPER TO RELOAD ONLY AFTER FULLY CONSTRUCTED
    }

    build(x) {
        //BUILD THE CALENDAR STRUCTURE
        const fragment = $(new DocumentFragment());
        const d = this.date;
        
        const sMonth = d.getMonth(); //this.pin;
        const sYear = d.getFullYear();
        this.pin = sMonth;

        const calfrag = $(new DocumentFragment());
        calfrag.append(DoubleCal);
        
        fragment.append(calfrag);

        this.prev = $(`<li class="prev">&#10094;</li>`);
        this.next = $(`<li class="next">&#10095;</li>`);
        this.prev.on("click", () => { this.reload(0) });
        this.next.on("click", () => { this.reload(1) });
        fragment.find(".first").prepend(this.prev);
        fragment.find(".second").prepend(this.next);
        
        return fragment;
    }
};