// Assignment code here

//asigning the arrays:
var number = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '"','#', '$','%','$','%','&','`','(',')','*','+',',','.',':',';','<','>','=','?','@', '[', ']','^','-','\'','{','}','|','~','\\'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','t', 'u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//these are variables that will result from user input
var selectedCharacters = ''
var password = ''

function generatePassword () {
   passwordLength();
   confirmSpecialChar();
   confirmNumber();
   confirmLowerCase();
   confirmUpperCase();
}

//create a function to get the length of password from the user
function passwordLength () {
  var length = window.prompt('How long would you like your password to be? Please choose a number between 8 and 128.');
   if (length >= 8 && length <= 128) {
      window.alert =('Your password will be' + length + ' long.')
    } 
    if (length < 8|| length > 128) {
      window.alert('Your password length must be between 8-128 characters. Please try again.');
    } 
    else {
      window.alert('Your password length must be entered as a number, and between 8 and 128');
    }
};

//prompt user for if they want a special character
function confirmSpecialChar () {
    var specialCharUse = window.confirm('Would you like to include a special character? Click "ok" if yes.');
    if (specialCharUse) {
      selectedCharacters += specialChar
    } 
};

//prompt user if they want a number
function confirmNumber () {
    var numberUse = window.confirm('Would you like to include a number? Click "ok" if yes.');
    if (numberUse) {
      selectedCharacters += number
    }
};
//prompt user if they want lowercase letters
function confirmLowerCase () {
    var lowerCaseUse = window.confirm('Would you like to include lowercase letters? Click "ok" if yes.');
    if (lowerCaseUse) {
      selectedCharacters += lowerCase
    }
};
//promp user if they want uppercase letters
function confirmUpperCase () {
    var upperCaseUse = window.confirm('Would you like to include uppercase letters? Click "ok" if yes.')
    if (upperCaseUse) {
      selectedCharacters += upperCase
    }
};



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

