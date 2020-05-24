import $ from 'jquery';
//ROZGRZEBANE

export const treatItem = (text, action) => {
  const treatItem = $('<li class="nav-item"></li>');
  const anchor = $('<a class="btn text-secondary"></a>');
  anchor.text(text).on('click', action);


  treatItem.append(anchor);

  return treatItem;
};
