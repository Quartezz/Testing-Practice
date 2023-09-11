function caesarCipher(str, shift) {
    // Create an empty string to store the result
    let result = '';
  
    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Get the current character
      let char = str[i];
  
      // Check if the character is a letter (a-zA-Z)
      if (/[a-zA-Z]/.test(char)) {
        // Determine whether it's an uppercase or lowercase letter
        const isUpperCase = char === char.toUpperCase();
  
        // Convert the character to its ASCII code
        const charCode = char.charCodeAt(0);
  
        // Apply the Caesar cipher shift to the ASCII code
        const shiftedCharCode = ((charCode - (isUpperCase ? 65 : 97) + shift) % 26) + (isUpperCase ? 65 : 97);
  
        // Convert the shifted ASCII code back to a character
        char = String.fromCharCode(shiftedCharCode);
      }
  
      // Add the character to the result string
      result += char;
    }
  
    return result;
  }

  module.exports = caesarCipher;
  