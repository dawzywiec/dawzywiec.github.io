let liczby = [1, 2, 3, 4, 5, 6];

let suma = 0;
let mnozenie = liczby[0];

for (let i = 0; i < liczby.length; i++) {
    suma += liczby[i];
    mnozenie *= liczby[i];
};

console.log("Suma tablicy: " + suma);
console.log("Mnozenie tablicy: " + mnozenie);