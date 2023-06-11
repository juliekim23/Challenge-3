



var playGame = function (){
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
            condition;
        }   

        console.log (start)
    function writePassword(){
        //var password = generatePassword()
  
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
        password.length = start;
       
    
    }
    writePassword()
}


//var index = Math.floor(Math.random() * lowerCasedCharacters.length);

playGame()