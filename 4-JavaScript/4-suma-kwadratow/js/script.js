function sumaKwadratow(parametr) {
    let wynikSumyKwadratow = 0;
    for (let i = 0; i < parametr.length; i++) {
        wynikSumyKwadratow += Math.pow(parametr[i], 2);
    };
    console.log(wynikSumyKwadratow);
};


let tablica = [0, 1, 2, 3, 4, 5];
sumaKwadratow(tablica);