let form = document.getElementById('form');
console.log(form);

function sumbitPress(event) {
    event.preventDefault();

    let imie = document.querySelector('[name="fname"]');
    let nazwisko = document.querySelector('[name="lname"]');
    console.log(`Imie: ${imie.value}, Nazwisko: ${nazwisko.value}`);
};

form.addEventListener('submit', sumbitPress);