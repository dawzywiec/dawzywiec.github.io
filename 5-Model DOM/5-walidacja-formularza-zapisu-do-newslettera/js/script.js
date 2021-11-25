let submitForm = document.getElementById('form');
let wszystkieZgody = document.getElementById('wszystkie-zgody');
let errorList = document.getElementById('errors-list');

function validate(event) {
    errorList.innerHTML = '';
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let zgoda1 = document.getElementById('zgoda-1');
    let zgoda2 = document.getElementById('zgoda-2');

    if (name.value.trim() === '') {
        let tworzenieLi = document.createElement('li');
        errorList.appendChild(tworzenieLi);
        tworzenieLi.innerText = 'Brak imienia i nazwiska';
        event.preventDefault();
    };
    if (email.value.trim() === '') {
        let tworzenieLi = document.createElement('li');
        errorList.appendChild(tworzenieLi);
        tworzenieLi.innerText = 'Brak adresu e-mail';
        event.preventDefault();
    } else if (!email.value.includes('@')) {
        console.log('brak @');
        let tworzenieLi = document.createElement('li');
        errorList.appendChild(tworzenieLi);
        tworzenieLi.innerText = 'Błędny adres e-mail - musi zawierać @';
        event.preventDefault();
    };

    if (!zgoda1.checked) {
        let tworzenieLi = document.createElement('li');
        errorList.appendChild(tworzenieLi);
        tworzenieLi.innerText = 'Brak potwierdzenia zgody 1';
        event.preventDefault();
    };

    // if (!zgoda2.checked) {
    //     let tworzenieLi = document.createElement('li');
    //     errorList.appendChild(tworzenieLi);
    //     tworzenieLi.innerText = 'Brak potwierdzenia zgody 2';
    //     event.preventDefault();
    // };
};

function zaznaczWszystkie(event) {
    let zgoda1 = document.getElementById('zgoda-1');
    let zgoda2 = document.getElementById('zgoda-2');
    zgoda1.checked = event.target.checked;
    zgoda2.checked = event.target.checked;
    zgoda1.disabled = event.target.checked;
    zgoda2.disabled = event.target.checked;
}

submitForm.addEventListener('submit', validate);
wszystkieZgody.addEventListener('change', zaznaczWszystkie);