$(document).ready(function () {
    $('#nome').on('input', function () {
        var nome = $(this).val();

        nome = nome.replace(/[0-9]/g, '');

        nome = nome.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        });

        $(this).val(nome);
    });
});
