function isValidURL(url) {
    var valid =
        /^(ftp|http|https):\/\/[^ "]+$/.test(url) ||
        /^data:image\/(jpeg|png|gif|bmp|webp);base64,[A-Za-z0-9+/=]+$/.test(
            url
        );
    return valid;
}
