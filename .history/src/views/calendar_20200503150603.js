import $ from 'jquery';

export const calendar = (x) => {
    const fragment = $(new DocumentFragment());
    const date = new Date();
    const today = {month: date.getMonth(), day: date.getDate()};
    const selectedMonth = today.month;
    const months = ["Styczeń", "Luty", "Marzec", "Kiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    const currentMonth = months[selectedMonth];
    const nextMonth = months[selectedMonth+1];
    const getAllDays = () => {
        
    }
    const days_set_one = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,"."];
    x = {heute: 3};
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
            <ul class="set-one">
            </ul>
        </div>
    </div>
    </div>
    </div>
    `);
    days_set_one.forEach(element => {
       fragment.find(".set-one").append(`<li>${element}</li>`); 
    });
    return fragment;
};