function displayMessage(message, alertType) {
    let messageElement = document.getElementById('message');
    messageElement.innerHTML = `<div class="alert alert-${alertType}">${message}</div>`;
}
