$(document).ready(function () {
    $('#nome').on('input', function () {
        var nome = $(this).val();

        nome = nome.replace(/[0-9]/g, '');

        nome = nome.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
            return a.toUpperCase();
        });

        $(this).val(nome);
    });

    $('#telefone').on('input', function () {
        var telefone = $(this).val().replace(/\D/g, '');
        telefone = telefone.slice(0, 14);

        var telefone_formatado = '';

        if (telefone.length > 0) {
            telefone_formatado = '(' + telefone.slice(0, 2) + ')';

            if (telefone.length > 2) {
                telefone_formatado += ' ' + telefone.slice(2, 7);

                if (telefone.length > 7) {
                    telefone_formatado += '-' + telefone.slice(7, 11);
                }
            }
        }

        $(this).val(telefone_formatado);
    });
});
