$(document).ready(function () {

    // NAWIGACJA
    let nav = false;
    $('.basic-nav-button').click(function () {
        $('.basic-nav-button').toggleClass('bg-blue nav-button-display-none');
        $('.basic-nav-list').toggleClass('bg-blue basic-nav-open');
        if (nav === false) {
            nav = true;
        } else {
            nav = false;
        }
    })

    // WALIDACJA FORMULARZA 1
    $('#form-button').click(function (event) {
        event.preventDefault();
        let formField = document.getElementsByClassName('form-field');
        let allFormFields = true;
        for (let i = 0; i < formField.length; i++) {
            if (formField[i].value === '') {
                formField[i].classList.add('empty');
                allFormFields = false;
            } else {
                formField[i].classList.remove('empty');
            }
        }
        let formAlert = document.querySelector('.form-alert')
        if (allFormFields === false) {
            formAlert.classList.remove('p-display-none');
            formAlert.classList.add('empty');
            formAlert.innerText = 'Uzupełnij wymagane pola!';
        } else {
            let formData = {
                name: document.getElementById('input-name').value,
                email: document.getElementById('input-email').value,
                service: document.getElementById('input-services').value,
                phone: document.getElementById('input-phone').value,
                date: document.getElementById('input-date').value,
                time: document.getElementById('input-time').value,
                text: document.getElementById('input-text').value,
            }
            fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    method: 'POST',
                    body: JSON.stringify(formData)
                })
                .then(res => res.json())
                .then(resJSON => {
                    formAlert.innerText = `Gratulacje ${document.getElementById('input-name').value}, zostałeś zapisany!`;
                    formAlert.classList.remove('empty');
                })
        }
    })

    // WALIDACJA FORMULARZA 2
    $('#form-button2').click(function (event) {
        event.preventDefault();
        let formField2 = document.getElementsByClassName('form-field2');
        console.log(formField2);
        let allFormFields2 = true;
        console.log(allFormFields2);
        for (let i = 0; i < formField2.length; i++) {
            if (formField2[i].value === '') {
                formField2[i].classList.add('empty');
                allFormFields2 = false;
            } else {
                formField2[i].classList.remove('empty');
            }
        }
        let formAlert2 = document.querySelector('.form-alert2')
        if (allFormFields2 === false) {
            formAlert2.classList.remove('p-display-none');
            formAlert2.classList.add('empty');
            formAlert2.innerText = 'Uzupełnij wymagane pola!';
        } else {
            let formData2 = {
                name: document.getElementById('input-name2').value,
                email: document.getElementById('input-email2').value,
                text: document.getElementById('input-text2').value,
            }
            fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    mode: 'cors',
                    method: 'POST',
                    body: JSON.stringify(formData2)
                })
                .then(res => res.json())
                .then(resJSON => {
                    formAlert2.innerText = `Gratulacje ${document.getElementById('input-name2').value}, wiadomość została wysłana!`;
                    formAlert2.classList.remove('empty');
                })
        }
    })
})