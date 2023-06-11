// Assignment code here
var start = window.prompt ("How many characters would you like your password to contain?")
var lowerCase = window.confirm("Include lower-case characters?")
var upperCase = window.confirm("Include upper-case characters?")
var specialC = window.confirm("Include special characters?")
var numbers = window.confirm("Include numbers?")



var playGame = function (){
  var start = window.prompt ("How many characters would you like your password to contain?");
  if (!userChoice){
    return;
  } else if (start <= 8 || start >= 128){
    window.prompt("Password must be 8 - 128 characters.");
    return;
  } else if (start >= 8 && start<= 128){

}

playGame()
console.log (start.valueOf)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  passwordText.value = password;
  password.length = start

  function generatePassword () {
    var index = Math.floor(Math.random() * all.length);
    var choice = all[index];


    //repeat for start.length

    if (!lowerCase){
      var all = [specialCharacters + upperCasedCharacters + numericCharacters] 
    }
    if (!upperCase){
      var all = [specialCharacters + lowerCasedCharacters + numericCharacters]
    }
    if (!specialC){
      var all = [upperCasedCharacters + lowerCasedCharacters + numericCharacters]
    }
    if (!numbers){
      var all = [lowerCasedCharacters + upperCasedCharacters + specialCharacters]
    }
  }
  
  var passwordText = document.querySelector("#password");




  
}
}
writePassword()
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Array
var all = [specialCharacters + lowerCasedCharacters + upperCasedCharacters + numericCharacters]

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
]