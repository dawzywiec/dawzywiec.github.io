/* 
1. Czy wpisany tekst ma min 4 znaki
2. Nie może miec spacji
3. Nie może mieć wielkich liter
4. *Musi mieć znak specjalny
5. Jak pole jest nie zwalidowane to dodaj mu czerowną ramkę
6. Jak pole jest nie zwalidowane to w paragrafie pod formularzem dodaj informacje która walidacja nie przeszła
 */

$('#form-button').click(function (event) {
    event.preventDefault();
    let errorsList = document.getElementById('errors-list');
    errorsList.innerHTML = '';
    let lenght = document.getElementById('name-input').value.length;
    if (lenght < 4) {
        let newLi = document.createElement('li');
        newLi.innerText = 'Min 4 znaki!';
        document.getElementById('errors-list').appendChild(newLi);
    }
    let spaces = document.getElementById('name-input').value.indexOf(' ');
    if (spaces >= 0) {
        let newLi = document.createElement('li');
        newLi.innerText = 'Bez spacji!';
        document.getElementById('errors-list').appendChild(newLi);
    }
    let upper = document.getElementById('name-input').value.split('');
    console.log(upper);
    for (let i = 0; i < upper.lenght; i++) {
        if (upper[i] == upper[i].toUpperCase) {
            console.log('cos robi')
            console.log(upper[i])
            let newLi = document.createElement('li');
            newLi.innerText = 'Tylko małe litery!';
            document.getElementById('errors-list').appendChild(newLi);
        }
    }
})