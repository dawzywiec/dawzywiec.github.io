const wGoreBtn = $('#w-gore');
const wDolBtn = $('#w-dol');
const zbiorP = $('#paragrafy');

function wGore(parametr) {
    let trescOstatniegoP = $('p').last().html();
    zbiorP.prepend('<p>' + trescOstatniegoP + '</p>')
    $('p').last().remove();
};

function wDol(parametr) {
    let trescPierwszegoP = $('p').first().html();
    zbiorP.append('<p>' + trescPierwszegoP + '</p>')
    $('p').first().remove();
};

wGoreBtn.on('click', wGore);
wDolBtn.on('click', wDol);