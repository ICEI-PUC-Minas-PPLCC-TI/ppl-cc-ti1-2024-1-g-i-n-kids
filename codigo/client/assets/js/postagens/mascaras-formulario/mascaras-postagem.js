$(document).ready(function () {
    $('#nome-autor').on('input', function () {
        var nomeAutor = $(this).val();

        nomeAutor = nomeAutor.replace(/[0-9]/g, '');

        nomeAutor = nomeAutor
            .toLowerCase()
            .replace(/(?:^|\s)\S/g, function (a) {
                return a.toUpperCase();
            });

        $(this).val(nomeAutor);
    });
});
