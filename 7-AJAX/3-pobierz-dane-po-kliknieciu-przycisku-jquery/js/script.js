$(document).ready(function () {
    const btn = $('#przycisk');
    btn.click(function () {
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                $(btn).after(`<p class="body">Body: ${data.body}</p>`);
                $(btn).after(`<p class="title">Title: ${data.title}</p>`);
                $(btn).after(`<p class="id">Id: ${data.id}</p>`);
                $(btn).after(`<p class="user-id">User Id: ${data.userId}</p>`);
                $(btn).after('<hr>');
            })
            .fail(function (error) {
                console.error(error);
            });
    });
});