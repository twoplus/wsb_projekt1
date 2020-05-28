# IT SPA

Projekt aplikacji Single Page Application dla fikcyjnego ośrodka hotelowego ze SPA o nazwie WY-SPA.

Aplikacja umożliwia: 

- Przeglądanie dostępnych zabiegów
- Dodawanie wybranych zabiegów do koszyka
- Wybór daty przyjazdu i wyjazdu oraz pokoju  
- Podsumowanie składanego zamówienia

Zrealizowane wymagania:
- [x] Po najechaniu koszyka myszką koszyk będzie wyświetlał dodane pokoje i zabiegi.
- [x] Dodawanie wybranych zabiegów do koszyka
- [x] Podsumowanie składanego zamówienia
- [x] Koszyk umożliwia nanoszenie poprawek do zamówienia
- [x] Użytkownik nie może wybrać daty przyjazdu wcześniejszej niż bieżąca
- [x] Wybrana data wyjazdu nie może być dalsza niż rok od daty przyjazdu.
- [x] Wybór daty przyjazdu i wyjazdu oraz pokoju
- [x] koszyk wyświetla podsumowanie zamówienia
- [x] Przeglądanie dostępnych zabiegów
- [x] Do interakcji z serwerem bazy danych wykorzystaj fetch.


## Koszyk

Komponent koszyka, który po najechaniu myszką będzie wyświetla dodane pokoje i zabiegi.
Koszyk musi przetrwać przeładowanie strony, dlatego wykorzystuje LocalStorage.

## Technologie

- HTML, Bootstrap
- CSS, Sass
- JavaScript, jQuery
- ECMAScript 6.

Do interakcji z serwerem bazy danych wykorzystano `fetch`.

