function ciag(n) {

    if (n >= 0) {
        let wynik = 0;
        for (let i = n; i > 0; i--) {
            wynik += i;
        };
        console.log("Wynik dla " + n + ". liczby ciągu wynosi: " + wynik + ".");
    } else {
        console.log("Liczba: " + n + ", jest mniejsza niż 0.");
    }

};

let n = 5;
ciag(n);