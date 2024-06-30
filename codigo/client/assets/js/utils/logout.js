$(document).ready(function () {
    $('#logout').click(function () {
        localStorage.removeItem('userId');
    });
});
