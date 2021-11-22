//Budowanie klasy "Książka":
class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    };

    opiszKsiazke() {
        if (this.przeczytana == true) {
            console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana.`)
        } else {
            console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie została przeczytana.`)
        };
    };
};

//Tworzenie 3 instancji:
let ksiazka0 = new Ksiazka("1", "A", false);
let ksiazka1 = new Ksiazka("2", "B", false);
let ksiazka2 = new Ksiazka("3", "C", true);

//Budowanie tablicy z ksiazkami:
let tablicaKsiazek = [];

function dodawanieKsiazkiDoTablicy(parament1) {
    tablicaKsiazek.push(parament1);
};

dodawanieKsiazkiDoTablicy(ksiazka0);
dodawanieKsiazkiDoTablicy(ksiazka1);
dodawanieKsiazkiDoTablicy(ksiazka2);

//Budowanie funkcji, która wywołuje przeczytane książeki.
function iloscPrzeczytanych(parametr) {
    let przeczytano = 0;
    for (let i = 0; i < parametr.length; i++) {
        parametr[i].opiszKsiazke();
        if (parametr[i].przeczytana == true) {
            przeczytano += 1;
        }
    };
    console.log("Łączna ilość przeczytanych książek: " + przeczytano + ".");
};

//Wywołanie funkcji
iloscPrzeczytanych(tablicaKsiazek);