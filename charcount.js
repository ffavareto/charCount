function charCount(str) {
    let result = {};
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            if (result[char] > 0) {
                result[char]++
            } else {
                result[char] = 1
            }
        }
    }
    return result;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numerico (0-9)
        !(code > 64 && code < 91) && // letra maiúscula (A-Z)
        !(code > 96 && code < 123)) { // letra miníscula (a-z)
      return false;
    }
    return true;
}
