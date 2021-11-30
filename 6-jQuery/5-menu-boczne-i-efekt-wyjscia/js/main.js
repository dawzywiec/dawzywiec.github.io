$(document).ready(function () {

    $('h2').click(function () {
        $('nav').toggleClass('schowane')
    });

    $('a').click(function (par) {
        par.preventDefault();

        $('body').fadeOut(2000, function () {
            window.location.href = $(par.target).attr('href');
        })
    });
});