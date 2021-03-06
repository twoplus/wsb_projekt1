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
      const myOrdFin = localStore.read();
      console.log(myOrdFin.length);
      if(!isEmptyObject(myOrdFin)){
        $(".drawer").text("hej")
      } else {
        $(".drawer").text("Koszyk jest pusty")
      }
      
  })
    anchor.on("mouseleave", () => {$("drawer").toggleClass("d-none");})
  } 
    
  

//document.crea

  navItem.append(anchor);

  return navItem;
};
