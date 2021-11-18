function dodawanieMnozenie(parametr) {
    let dodawanie = 0;
    let mnozenie = parametr[0];
    for (let i = 0; i < parametr.length; i++) {
        dodawanie += parametr[i];
        mnozenie *= parametr[i];
    };
    console.log(dodawanie);
    console.log(mnozenie);
};

let liczby = [1, 2, 3, 4, 5, 6];
dodawanieMnozenie(liczby);