import $ from 'jquery';

export const cartDrawer = (event) => {
  const navItem = $('<li class="nav-item"></li>');
  const anchor = $('<a class="btn text-secondary"></a>');
  anchor.text(text).on('click', click);
  if(text === "Koszyk") {
    anchor.append('<i class="fa fa-shopping-bag" aria-hidden="true"></i>');
    anchor.on('click', click);
    anchor.on('mouseenter', (event) => { console.log(event.target)})
  } 
    
  

//document.crea

  navItem.append(anchor);

  return cartDrawer;
};