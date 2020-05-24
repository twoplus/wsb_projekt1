import $ from 'jquery';

// spodziewamy sie funkcji click, ktora bedzie wywolywana przez element anchor
// chcemy, aby klikniecie w element anchor powodowalo nawigacje do innej sciezki
export const updateBtn = (direction, action) => {
  const btns = [[],[]];
  const updateBtn = $('<li class="nav-item"></li>');
  const anchor = $('<a class="btn text-secondary"></a>');
  anchor.text(text).on('click', action);
  if(text === "Koszyk") {
    anchor.append('<i class="fa fa-shopping-bag" aria-hidden="true"></i>');
    anchor.on('click', click);
  } 
    
  

//document.crea

  updateBtn.append(anchor);

  return updateBtn;
};