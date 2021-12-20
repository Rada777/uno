function KolorKarty(num) {
  let color;
  if (num % 14 === 13) {
    return 'czarny';
  }
  switch (Math.floor(num / 14)) {
    case 0:
    case 4:
      color = 'czerwony';
      break;
    case 1:
    case 5:
      color = 'zolty';
      break;
    case 2:
    case 6:
      color = 'zielony';
      break;
    case 3:
    case 7:
      color = 'niebieski';
      break;
  }
  return color;
}
​
function TypKarty(num) {
  switch (num % 14) {
    case 10: //Karta blok (blokuje przeciwnika)
      return 'Blok';
    case 11: //Karta reverse (zmiana kolejnosci)
      return 'Reverse';
    case 12: //Karta +2
      return 'Dobierz2';
    case 13: //Karta +4 lub Karta zmiany koloru
      if (Math.floor(num / 14) >= 4) {
        return 'Dobierz4';
      } else {
        return 'ZmianaKoloru';
      }
    default:
      return 'Numer ' + (num % 14);
  }
}
ReactDOM.render(document.getElementById('root')
);
