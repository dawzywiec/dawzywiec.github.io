//definiowanie przycisku
const przycisk = $('#przycisk');

//definiowanie elementów animacji
const kwadrat = $('.kwadrat');
const czerwonyKwadrat = $('#red');
const niebieskiKwadrat = $('#blue');
const napis = $('#napis');

//budowa animacji
function wcisniecie() {
    kwadrat.animate({
        marginLeft: '100px',
        marginTop: '50px',
        height: '100px',
        width: '100px',
    }, 3000);

    niebieskiKwadrat.animate({
        opacity: '100'
    }, 2000);

    czerwonyKwadrat.animate({
        opacity: '0'
    }, 2000);

    napis.animate({
        opacity: '0'
    }, 5000).animate({
        opacity: '100'
    }, 5000);
};

//wywoałanie animacji
przycisk.on('click', wcisniecie);