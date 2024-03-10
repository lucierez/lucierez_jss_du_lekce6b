const cislo1 = Number(prompt("Zadej první číslo:"))
const cislo2 = Number(prompt("Zadej druhé číslo:"))
const cislo3 = Number(prompt("Zadej třetí číslo:"))

const hodnota = (cislo1, cislo2, cislo3) => {
  if (cislo1 > cislo2 && cislo1 > cislo3) {
    return cislo1;
  } else if (cislo2 > cislo1 && cislo2 > cislo3) {
    return cislo2;
  } else {
    return cislo3;
  }
};

document.body.innerHTML = 'Největší hodnota ze zadaných čísel je: ' + hodnota

