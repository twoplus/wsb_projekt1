

export const calendar = (x) => {

    const cal = `
    <div class="cal-wrap ">
    <div class="cal">
        <div class="month">
            <ul>
                <li class="prev">&#10094;</li>
                <li class="next">&#10095;</li>
                <li class="mid">
                    Kwiecień<br>
                    <span >2017</span>
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
                <li>${x}</li>
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
    `;
    return cal;
};