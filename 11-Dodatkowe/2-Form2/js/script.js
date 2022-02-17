let button = document.getElementById('button');

button.addEventListener('click', function (event) {
    event.preventDefault();

    let allInputs = document.getElementsByClassName('input');
    let accept = true;
    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value == '') {
            allInputs[i].classList.add('error');
            accept = false;
            console.log(accept)
        } else {
            allInputs[i].classList.remove('error')
        }
    }

    let tittleInput = document.getElementById('title-input');
    let titleInputLenght = document.getElementById('title-input').value.length;
    if (titleInputLenght < 1) {
        tittleInput.classList.add('error');
        accept = false;
    } else {
        tittleInput.classList.remove('error');
    }

    let authorInput = document.getElementById('author-input')
    let authorInputLenght = document.getElementById('author-input').value.length;
    if (authorInputLenght < 3) {
        authorInput.classList.add('error');
        accept = false;
    } else {
        authorInput.classList.remove('error');
    }
    if (accept == true) {
        console.log('wypełniono poprawnie');
        let data = {
            tytuł: document.getElementById('title-input').value,
            autor: document.getElementById('author-input').value,
            priorytet: document.getElementById('priority-input').value,
            gatunek: document.getElementById('type-input').value,
        }
        console.log(data);
        let table = document.getElementById('table-body');
        let newTr = document.createElement('tr');
        newTr.innerHTML = `<td>` + data.tytuł + `</td><td>` + data.autor + `</td><td>` + data.priorytet + `</td><td>` + data.gatunek + `</td>`;
        table.prepend(newTr);
        let form = document.getElementById('form');
        form.reset();
        window.localStorage.setItem('book', JSON.stringify(data));
    }
})