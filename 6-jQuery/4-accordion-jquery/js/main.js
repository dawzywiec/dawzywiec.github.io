$(document).ready(function () {

    $('.accordion-item').click(function () {
        $(this).find('.accordion-content').slideToggle(500);
        if ($(this).hasClass('open') === false) {
            $(this).addClass('open');
        } else {
            $(this).removeClass('open');
        }
    });
});