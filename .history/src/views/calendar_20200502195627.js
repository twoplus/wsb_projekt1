

export const calendar = (x) => {
    const date = new Date();
    const today = {month: date.getMonth(), day: date}
    const months = ["Styczeń", "Luty", "Marzec", "Kiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    const currentMonth = months[date.getMonth()];
    const nextMonth = months[date.getMonth()+1];
    x = {heute: 3};
    const cal = `
    <div class="row justify-content-center my-5">
    <div class="row col-lg-6 col-10 cal-wrap">
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
            <ul>
                <li>${x.heute}</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li class="heute">10</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
            </ul>
        </div>
    </div>
    <div class="cal col-6">
        <div class="month">
            <ul>
                
                <li class="next">&#10095;</li>
                <li class="mid">
                ${months[date.getMonth()+2]}<br>
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
            <ul>
                <li>${x.heute}</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li class="pin">10</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
            </ul>
        </div>
    </div>
    </div>
    </div>
    `;
    return cal;
};