//Zmienna z miastami:
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

//boduwanie funkcji:
function budowanieListy(parametr) {

    let ulElement = document.createElement('ul'); //budowanie ul

    let liElement = document.createElement('li'); //budowanie pojedynczego li

    let liElementText = document.createTextNode(""); //budowanie tresci li

    for (let i = 0; i < parametr.length; i++) {

        liElement = document.createElement('li'); //budowanie li
        liElementText = document.createTextNode(`${parametr[i]}`); //budowanie tresci li
        liElement.appendChild(liElementText); //dodawanie tresci li do li
        liElement.setAttribute("class", "city"); //dodawanie klasy do li
        ulElement.appendChild(liElement); // dodawanie li do ul
    };

    let body = document.getElementsByTagName("body")[0]; // ----------> Czemu kod nie zadziała bez "[0]"?
    return body.appendChild(ulElement);
};

budowanieListy(cities);