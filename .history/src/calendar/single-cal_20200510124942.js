import $ from 'jquery';

export const SingleCal = () => {
const fragment = $(new DocumentFragment());
const cal = `
<div class="cal cal-1 col-6">
    <div class="month">
        <ul class="first">
            <li class="mid my1">
                <span>Month</span><br>
                <span>Year</span>
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
`
fragment.append(cal);
return fragment;
}
