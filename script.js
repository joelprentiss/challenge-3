// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = numCharacters;
  var numberBank =["0123456789"] ;
  var charactersSpecial =["!@#$%^&*()"];
    if (passwordLength < 8){ window.alert("Must be at least 8 characters")
}else if (uppercase) { toUppeCase(randomCharacter) 
}else if (specialCharacter) { charactersSpecial[Math.floor(Math.random() * charactersSpecial.length)]
} else if (numbers){ numberBank[Math.floor(Math.random()* numberBank.length)]
}
  passwordText.value

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

    var numCharacters = window.prompt("How many Characters?", "8-32");
    var uppercase= window.confirm("Include uppercase/lowercase?");
    var specialCharacter =window.confirm("Include special characters?");
    var numbers = window.confirm("Include numbers?");
    
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    var randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
}

  // Your CODE goes 
  
  // PsuedoCode
  // prompt = length
    // let pwdLength = prompt("how many characters")
    // console.log(pwdLength)
  // confirm - lowercase, uppercase, numeric, special characters
    // let numbers  =  confirm("DO you want numbers");
      // console.log(numbers);
  // create var to hold anser to prompt/confirm 
  // function to validate user answrs
  // if and equalaity operators 
   // if(numbers){

  //  } 

  // List of numbers, special chars, uppercase and lowercase
    // array
    // combine all arrays in 1 array
    // Randomly choose characters
    // create a string set equal to password var
    // array method to check if something is in array
  // generate random password
  // return password
