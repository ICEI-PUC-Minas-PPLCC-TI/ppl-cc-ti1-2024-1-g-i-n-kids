$(document).ready(function () {
    $('#tituloTarefa').on('input', function () {
        var tituloTarefa = $(this).val();

        tituloTarefa = tituloTarefa
            .toLowerCase()
            .replace(/(?:^|\s)\S/g, function (a) {
                return a.toUpperCase();
            });

        $(this).val(tituloTarefa);
    });
});
