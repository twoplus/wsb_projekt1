import $ from 'jquery';

export const calendar = () => {
    const fragment = $(new DocumentFragment());
    const date = new Date();
    const today = {month: date.getMonth(), day: date.getDate(), year: date.getFullYear};
    const selectedMonth = today.month;
    const months = ["Styczeń", "Luty", "Marzec", "Kiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    const currentMonth = months[selectedMonth];
    const nextMonth = months[selectedMonth+1];


    const getAllDays = (y,m) => {
        return new Date(y, (m + 1), 0).getDate();
    };
    const getFirstDay = (y,m) => {
        const first = new Date(y,m,1).getDay()
        return first - 1;
    };
    
    
    fragment.append(`
    <div class="row justify-content-center my-5">
    <div class="row col-lg-6 col-12 cal-wrap">
    <div class="cal col-6">
        <div class="month">
            <ul>
                <li class="prev">&#10094;</li>
                <li class="mid">
                    ${currentMonth}<br>
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
            <ul>
                <li class="next">&#10095;</li>
                <li class="mid">
                ${nextMonth}<br>
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
    `);
    fragment.find()

    [...Array(getFirstDay(2020,4)).keys()].forEach( () => {
      fragment.find(".set-one").append(`<li><span class="leer"></span></li>`); 
     });

    [...Array(getAllDays(2020,4)).keys()].forEach(element => {
       fragment.find(".set-one").append(`<li>${element+1}</li>`); 
    });
    [...Array(getFirstDay(2020,4+1)).keys()].forEach( () => {
        fragment.find(".set-two").append(`<li><span class="leer"></span></li>`); 
       });
  
      [...Array(getAllDays(2020,4+1)).keys()].forEach(element => {
         fragment.find(".set-two").append(`<li>${element+1}</li>`); 
      });
    return fragment;
};