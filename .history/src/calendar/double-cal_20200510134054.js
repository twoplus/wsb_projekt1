import $ from 'jquery';
import { SingleCal } from './single-cal';


export const DoubleCal = () => {
const fragment = $(new DocumentFragment());
const fragment2 = $(new DocumentFragment());
const fragment3 = $(new DocumentFragment());
const doubleCalendar = `
<div class="row justify-content-center my-5">
<div class="row col-lg-6 col-12 cal-wrap">

</div>
</div>
<div id="tst"></div>
`;
fragment.append(doubleCalendar);
const cal1 = SingleCal;
const cal2 = SingleCal;

const month1Ul = $('<ul class="first"></ul>');
const month2Ul = $('<ul class="second"></ul>');
const ulMid1 = $('<li class="mid my1"><span>Month1</span><br><span>Year</span></li>');
const ulMid2 = $('<li class="mid my2"><span>Month2</span><br><span>Year</span></li>');

month1Ul.append(ulMid1);
month2Ul.append(ulMid2);
fragment2.append(SingleCal);
fragment2.find(".month").append(month1Ul);
fragment2.find(".day").append(`<ul class="set-one"></ul>`);
fragment3.append(SingleCal);
fragment3.find(".month").append(month2Ul);
fragment3.find(".day").append(`<ul class="set-two"></ul>`);

fragment.find('.cal-wrap').append(fragment2);
fragment.find('.cal-wrap').append(fragment3);

return fragment;
};