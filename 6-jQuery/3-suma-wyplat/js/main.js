const przycisk = $('button');

function sumujWyplaty() {
    let sumaWyplat = 0;
    $('.salary').each(function () {
        sumaWyplat += Number($(this).text());
    });
    $('#sum').text(sumaWyplat);
};

przycisk.on('click', sumujWyplaty);