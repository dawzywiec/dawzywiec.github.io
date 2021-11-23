let btnElement = document.querySelector('button');
let ulElement = document.querySelector('ul');

function dodajLi(event) {
    //Budowanie nowego li
    let newLiElement = document.createElement('li');

    // Dodawanie tekstu do nowego li:
    let allLiElement = document.querySelectorAll('li');
    let itemNumberForNow = allLiElement.length + 1;
    let newLiElementText = document.createTextNode(`Item ${itemNumberForNow}`);
    newLiElement.appendChild(newLiElementText);

    //Dodawanie klasy do nowego li:
    newLiElement.setAttribute('class', 'item');

    //Dodanie li do ul
    ulElement.appendChild(newLiElement);
    console.log(ulElement);
};
btnElement.addEventListener('click', dodajLi);