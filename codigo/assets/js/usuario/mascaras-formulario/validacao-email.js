function isValidEmail(email) {
    if (!email) return false;

    if (email.length < 5 || email.length > 254) {
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        return false;
    }

    return true;
}