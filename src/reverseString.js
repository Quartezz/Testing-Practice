function reverseString(string) {
    return string.split('').filter(char => char !== ' ').reverse().join('');
}

module.exports = reverseString;