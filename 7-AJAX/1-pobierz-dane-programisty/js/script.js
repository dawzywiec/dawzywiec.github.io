const btn = $('#przycisk');
let pobranoDane = 0;

btn.click(function () {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .done(function (data) {
            if (pobranoDane === 0) {
                pobranoDane += 1;
                console.log(data);
                btn.after('<div id="dane-programisty">Pobrano dane: <ul><li>Imię: ' + data.imie + '</li><li>Nazwisko: ' + data.nazwisko + '</li><li>Zawód: ' + data.zawod + '</li><li>Firma: ' + data.firma + '</li></ul></div>');
            } else {
                $('div').remove();
                btn.after('<div id="dane-programisty">Zaktualizowano dane: <ul><li>Imię: ' + data.imie + '</li><li>Nazwisko: ' + data.nazwisko + '</li><li>Zawód: ' + data.zawod + '</li><li>Firma: ' + data.firma + '</li></ul></div>');
            };
        })
        .fail(function (error) {
            console.log('Nie pobrano danych')
        })
})