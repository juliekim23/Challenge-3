// Assignment code here
var start = window.prompt ("How many characters would you like your password to contain?")
if (start === " " || start < 8 || start > 128) {
    window.prompt("Password must be 8 - 128 characters.");
    start;
  }


lowerCase = window.confirm("Include lower-case characters?")
upperCase = window.confirm("Include upper-case characters?")
specialC = window.confirm("Include special characters?")
numbers = window.confirm("Include numbers?")

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  generatePassword() {

  }
  };
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];