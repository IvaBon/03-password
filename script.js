// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables

var upperCase=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase=["abcdefghijklmnopqrstuvwxyz"];
var numbers= ["123456789"];
var special=["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


// need a function for length of password 
// need function to be between 8-128 and must be returned to top of function
// then function for other yes or no promts to build critria
// 

function lengthOfPassword(){
  var characters=parseInt( prompt("How many characters, must be between 8-128 characters.") );
  console.log(characters)
  if (!characters){
        alert("Input correct value");
      } else if(characters < 8 || characters> 128){
        alert("Must be betweeen 8 and 128");
      } else if (characters >= 8 || characters <= 128);
  
  return parseInt(lengthOfPassword);
}

//  need to have have promt send yes or no info to data and run it through
//  for loop to create password from given true or false critria

function critriaPass(){
  var useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
  console.log(useUpperCaseLtrs)
  var useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  console.log(useLowerCaseLtrs)
  var useNumbers = confirm("Do you want to use numbers in the password?");
  console.log(useNumbers)
  var  useSpecial = confirm("Do you want to use special characters in the password?")
  console.log(useSpecial)

  var promptData=[];

  if (useUpperCaseLtrs){
    promptData.push(...upperCase);
  } if (useLowerCaseLtrs){
    promptData.push(...lowerCase);
  } if (useNumbers){
    promptData.push(...numbers);
  }if (useSpecial){
    promptData.push(...special);
  }
 
  









}






// // function for if person wants uppercase in password
// function useUpperCase(){
//   useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
//   console.log(useUpperCaseLtrs)
//   if (useUpperCaseLtrs && finalPassword < numOfCharacters){
//     var characters = Math.floor(Math.random()* useUpperCaseLtrs.length)
//     finalPassword = finalPassword + useUpperCaseLtrs[characters]
//   }
// }

// // function for if person wants lowercase in password
// function useLowerCase(){
//   useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
//   console.log(useLowerCaseLtrs)
// // function for if person wants numbers in password
// }
// function numbers(){
//   useNumbers = confirm("Do you want to use numbers in the password?");
//   console.log(useNumbers)
// }
// // function for if person wants special characters in password
// function special(){
//   useSpecial = confirm("Do you want to use special characters in the password?")
//   console.log(useSpecial)
// }


function generatePassword() {
  console.log("start here");
  lengthOfPassword();
  critriaPass();



  return "finalpassword"
}







// Write password to the #password input
function writePassword() {
  console.log("button clicked");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
