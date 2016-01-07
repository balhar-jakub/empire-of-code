function golf(pass) {
    return pass.length > 9 &&
        pass.match(/[a-z]+/) != null &&
        pass.match(/[A-Z]+/) != null &&
        pass.match(/[0-9]+/) != null;
}