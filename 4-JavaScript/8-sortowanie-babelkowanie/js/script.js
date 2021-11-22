let tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
console.log(tablica);

function sortowanieTablicy(tablicaDoSortowania) {
    for (let i = 0; i < tablicaDoSortowania.length; i++) {
        for (let j = 0; j < tablicaDoSortowania.length; j++) {
            if (tablicaDoSortowania[j] > tablicaDoSortowania[j + 1]) {
                let temp = tablicaDoSortowania[j + 1];
                tablicaDoSortowania[j + 1] = tablicaDoSortowania[j];
                tablicaDoSortowania[j] = temp;
            }
        };
    };
    return console.log(tablicaDoSortowania);
};

sortowanieTablicy(tablica);