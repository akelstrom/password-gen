// Assignment code here

//asigning the arrays:
var number = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"','#', '$','%','$','%','&','`','(',')','*','+',',','.',':',';','<','>','=','?','@', '[', ']','^','-','\'','{','}','|','~','\\'];
var alphaLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','t', 'u','v','w','x','y','z'];
var alphaUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//these are variables that will result from user input
var confirmNumberLength = ''
var confirmSpecialCharacters = ''
var conifrmNumericCharacter = ''
var confirmAlphaLower = ''
var confirmAlphaUpper = ''

//create a function to get the length of password from the user
//prompt user for if they want a special character
//prompt user if they want a number
//prompt user if they want lowercase letters
//promp user if they want uppercase letters


//start function () {
function generatePassword () {
  
}
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

