import $ from 'jquery';

// spodziewamy sie funkcji click, ktora bedzie wywolywana przez element anchor
// chcemy, aby klikniecie w element anchor powodowalo nawigacje do innej sciezki
export const navItem = (text, click) => {
  const navItem = $('<li class="nav-item"></li>');
  const anchor = $('<a class="btn text-secondary"></a>');
  if(text == "Koszyk") {
    anchor.append('<i class="fa fa-shopping-bag" aria-hidden="true"></i>Koszyk');
    anchor.on('click', click);
  } else {
    anchor.text(text).on('click', click);
  }

//document.crea

  navItem.append(anchor);

  return navItem;
};
