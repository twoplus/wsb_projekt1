import $ from 'jquery';
import { Calendar } from '../views/calendar';

export const home = () => {
  const fragment = $(new DocumentFragment());

  
  fragment
    .append(`
    <div id="wySPAcarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#wySPAcarousel" data-slide-to="0" class="active"></li>
    <li data-target="#wySPAcarousel" data-slide-to="1"></li>
    <li data-target="#wySPAcarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#wySPAcarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#wySPAcarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  <div id="cal></div>
    `);
    const calendar = new Calendar();
    fragment.find("#cal").append(calendar.build(2));
    const prev = $(`<li class="prev">&#10094;</li>`);
        // this.next = $(`<li class="next">&#10095;</li>`);
    prev.on("click", () => {  $("#cal").remove().calendar.build(0) } );
        // this.next.on("click", () => {  this.build(5) });
    fragment.find(".first").prepend(prev);
        // this.fragment.find(".second").prepend(this.next);



    fragment.append(`

    <div class="container pt-5 pb-5">
      <div class="row">
        <div class="col-sm-12 col-lg-4  stretch">
          <div  class="shadow rounded">
            <img  src="https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="card-img-top" alt="...">
            <p class="p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        
        <div class="col-sm-12 col-lg-4  stretch">   
            <div class="shadow rounded">
            <img  src="https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="card-img-top" alt="...">
            <p class="p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        
        <div class="col-sm-12 col-lg-4  stretch">
            <div class="shadow rounded">
            <img  src="https://images.unsplash.com/photo-1553653924-39b70295f8da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="card-img-top" alt="...">
            <p class="p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        
      </div>

    </div>
 
  `)
  return Promise.resolve(fragment);
};
