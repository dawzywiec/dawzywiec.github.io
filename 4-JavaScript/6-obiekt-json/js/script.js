let jsonPracownicy = {
    "pracownicy": [{
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
};

console.log(jsonPracownicy); //Wyświetlenie obiektu jsonPracownicy

jsonPracownicy.pracownicy.forEach(function (element, index) {
    console.log("Element z indeksem: " + index + ", to: " + element.firstName + " " + element.lastName)
})