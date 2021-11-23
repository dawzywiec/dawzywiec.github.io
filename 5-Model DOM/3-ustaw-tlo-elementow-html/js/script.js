let btnElement = document.querySelector('button');
let fisrtPElement = document.querySelectorAll('p')[0];
let secondPElement = document.querySelectorAll('p')[1];

function ustawKoloryParagrafow(event) {
    fisrtPElement.style.backgroundColor = 'red';
    secondPElement.style.backgroundColor = 'yellow';
};

btnElement.addEventListener('click', ustawKoloryParagrafow);