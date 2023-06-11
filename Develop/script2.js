//Array
var all = specialCharacters.concat(lowerCasedCharacters,upperCasedCharacters,numericCharacters);
console.log(all);


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


var getPassword = function (){
    var start = window.prompt ("How many characters would you like your password to contain?");
    if (!start){
        return;
        } else if (start <= 8 || start >= 128){
            var condition = window.alert("Password must be 8 - 128 characters.");
            return;
        } else if (start >= 8 && start<= 128){ 
            var lowerCase = window.confirm("Include lower-case characters?")
            var upperCase = window.confirm("Include upper-case characters?")
            var specialC = window.confirm("Include special characters?")
            var numbers = window.confirm("Include numbers?")
        } else {
            window.alert("Password must be 8 - 128 characters.");
    }
        
// Write password to the #password input
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

        function writePassword() {
            var password = generatePassword()
            passwordText.value = password;
            password.length = start
            var passwordText = document.querySelector("#password");

            function generatePassword () {
            if (!lowerCase){
            var all = specialCharacters + upperCasedCharacters + numericCharacters
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
            var index = Math.floor(Math.random() * all.length);
            var choice = all[index]
            for (let i = 0; i < start; i++) {
               console.log(choice);
                
            }
            
        }
       
    
}
}

getPassword()