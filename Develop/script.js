// Assignment Code
var generateBtn = document.querySelector("#generate");


// GIVEN I need a new secure password.

var password = "";
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specArr = ['!', '@', '#', '$', '%'];
var userArr = [];

// //////////

// Write a password

function writePassword() {

  var length = prompt('Length?');

  var isLower = confirm('Would you like lowercase characters?');
  var isHigher = confirm('Would you like uppercase characters?');

  var isNum = confirm('Would you like numbers?');
  var isSpec = confirm('Would you like special characters?');

  // update user array based on Y and N

  if (isLower == true) {
    for (var i = 0; i < lowerArr.length; i++) {
      userArr.push(lowerArr[i]);
    }
    console.log(userArr);
  }
  if (isHigher == true) {
    for (var i = 0; i < upperArr.length; i++) {
      userArr.push(upperArr[i]);
    }
    console.log(userArr)
  }
  if (isNum == true) {
    for (var i = 0; i < numArr.length; i++) {
      userArr.push(numArr[i]);
    }
    console.log(userArr);
  }
  if (isSpec == true) {
    for (var i = 0; i < specArr.length; i++) {
      userArr.push(specArr[i]);
    }
    console.log(userArr);
  }
  password = '';
  for (var x = 0; x < parseInt(length); x++) {

    password += userArr[Math.floor(Math.random() * (userArr.length - 1 - 0) + 0)];

  }
  console.log(password);

  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Write password to the #password input


function generatePassword() {
  return 'generatepwfx';
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);