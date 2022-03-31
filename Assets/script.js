// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var optionChar = []
  passwordText.value = password;

}
// Asks for password length
function generatePassword() {
    var passwordLength = prompt ("How long would you like the password to be?");
    var length = parseInt(passwordLength);

    if (isNaN(passwordLength)) {
      alert("This is not a number, please type a number.");
      generatePassword()
    } 
      else if (passwordLength < 8 || passwordLength > 128 ) {
      alert("Password needs to be between the number 8 and 128.");
      generatePassword()
    }
      else {
  }
    

    // Ask for lowercase letters
  var passwordLowercase = confirm ("Would you like to include lowercase letters in your password?");
    if (passwordLowercase) {
      optionChar = optionChar.concat(lowercase)
    }
    

    // Ask for Uppercase letter
  var passwordUppercase = confirm ("Click ok if you like to include uppercase letters?");
    if (passwordUppercase) {
      optionChar = optionChar.concat(uppercase)
    }
    

    // Request a numeric integar
  var passwordNumber = confirm ("Click ok if you like to include numberic integars.");
    if (passwordNumber) {
      optionChar = optionChar.concat(numberChars)
    }
    

    // Asking for special characters
  var characters = confirm ("Click if you would like to inclue special characters.");
    if(characters) { 
      optionChar = optionChar.concat(specialChars)
    }
  }
  //Make possible Array
  var posPassword = [];

  

  var randomChar = optionChar[Math.floor(Math.random() * optionChar.length)];
  posPassword.push(randomChar);
  
  //loop
  for (let index = 0; index < passwordLength; index++) {
    pickedChar.push(randomSelected(posPassword));  
  };
  
  console.log(pickedChar)
  //generatePassword()

  //Concat information


