// Assignment code here

//asigning the global variables:
var number = "123456789";
var specialCharacter = '!/"#$%$%&`()*+.,:;<>=?@ [ ]^,-{}|~;';
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

//this variable will be result from user input
var selectedCharacters = "";

// Write password to the #password input
function writePassword() {
  //call the password length function here: if statement- incase the user inputs an invalid option
  var length = passwordLength();
  if (length < 8 || length > 128) {
    window.alert(
      "Your password length must be between 8-128 characters. Please try again."
    );
    return passwordLength();
  }
  //calling the other functions to check if user wants special characters, numbers, uppercase letters and lowercase letters
  confirmSpecialCharacter();
  confirmNumber();
  confirmLowerCase();
  confirmUpperCase();

  if (selectedCharacters === null || selectedCharacters === "") {
    window.alert(
      "You must select at least one character type. Please try again."
    );
    return writePassword();
    //I returned the function, because I felt the user might not want to click "generate password" again
  }

  //password is the result of generate password function with an argument of length
  var password = generatePassword(length);

  //this is code that was already provided
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  selectedCharacters = "";
}

//generate password function with length as an argument--(So that the computer knows how long to make the password
function generatePassword(length) {
  var ranPassword = "";
  //for loop to generate new password
  for (var i = 0; i < length; i++) {
    ranPassword =
      ranPassword +
      selectedCharacters.charAt(
        Math.floor(Math.random() * selectedCharacters.length)
      );
  }
  return ranPassword;
}

//create a function to get the length of password from the user
var passwordLength = function () {
  var length = window.prompt(
    "How long would you like your password to be? Please choose a number between 8 and 128."
  );
  return length;
};

//function to prompt user for if they want a special character
function confirmSpecialCharacter() {
  var specialCharUse = window.confirm(
    'Would you like to include a special character? Click "ok" if yes.'
  );
  if (specialCharUse) {
    selectedCharacters += specialCharacter;
  }
}

//function to prompt user if they want a number
function confirmNumber() {
  var numberUse = window.confirm(
    'Would you like to include a number? Click "ok" if yes.'
  );
  if (numberUse) {
    selectedCharacters += number;
  }
}
//function to prompt user if they want lowercase letters
function confirmLowerCase() {
  var lowerCaseUse = window.confirm(
    'Would you like to include lowercase letters? Click "ok" if yes.'
  );
  if (lowerCaseUse) {
    selectedCharacters += lowerCase;
  }
}
//function to promp user if they want uppercase letters
function confirmUpperCase() {
  var upperCaseUse = window.confirm(
    'Would you like to include uppercase letters? Click "ok" if yes.'
  );
  if (upperCaseUse) {
    selectedCharacters += upperCase;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
