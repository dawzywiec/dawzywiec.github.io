function ciag(n) {

    if (n == 0) {
        return console.log(0);
    } else if (n == 1 || n == 2) {
        return console.log(1);
    } else if (n > 2) {
        let liczba1 = 1;
        let liczba2 = 1;
        let wynik = 0;
        wynik = liczba1 + liczba2;
        for (let i = 0; i < n - 3; i++) {
            liczba1 = wynik;
            wynik = wynik + liczba2;
            liczba2 = liczba1;
        }
        return console.log(wynik);
    };
};

let n = 8; //Należy wpisac poszukiwana liczbę ciagu.
ciag(n);