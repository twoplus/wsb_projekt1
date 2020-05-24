import $ from 'jquery';
import { localStore } from '../common/local-store';

// spodziewamy sie funkcji click, ktora bedzie wywolywana przez element anchor
// chcemy, aby klikniecie w element anchor powodowalo nawigacje do innej sciezki
export const navItem = (text, click) => {
  const navItem = $('<li class="nav-item"></li>');
  const anchor = $('<a class="btn text-secondary"></a>');
  anchor.text(text).on('click', click);
  if(text === "Koszyk") {
    anchor.append('<i class="fa fa-shopping-bag" aria-hidden="true"></i>');
    anchor.on('click', click);
    anchor.on('mouseenter', () => {  
      $(".drawer").toggleClass("d-none")
      const myOrderFin = localStore.read();
      if(0==1){
        $(".drawer").text()
      }
      
  })
    anchor.on("mouseleave", () => {$("drawer").toggleClass("d-none");})
  } 
    
  

//document.crea

  navItem.append(anchor);

  return navItem;
};
