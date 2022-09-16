// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables

var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","j","w","x","y","z"];
var numbers= ["1","2","3","4","5","6","7","8","9"];
var special=["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// console.log(this)
// need a function for length of password 
// need function to be between 8-128 and must be returned to top of function
// then function for other yes or no promts to build critria
// debug length
// parseint was messing up length for some reason
// 

function lengthOfPassword(){
  
  var characters=( prompt("How many characters, must be between 8-128 characters.") );

  if (!characters){
        if(confirm("enter valid number")) lengthOfPassword();
      } else if(characters < 8 || characters> 128){
        if(confirm("enter valid number")) lengthOfPassword();
      } else if (characters >= 8 || characters <= 128);
  
  return characters;
}



//  need to have have promt send yes or no info to data and run it through
//  for loop to create password from given true or false critria
//  dont forget need length in criatia for passowrd 

function generatePassword(){
  var lengthPass= lengthOfPassword();

  var useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
  console.log(useUpperCaseLtrs)
  var useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  console.log(useLowerCaseLtrs)
  var useNumbers = confirm("Do you want to use numbers in the password?");
  console.log(useNumbers)
  var  useSpecial = confirm("Do you want to use special characters in the password?")
  console.log(useSpecial)

  if (!useLowerCaseLtrs && !useUpperCaseLtrs && !useNumbers && !useSpecial){
       if(confirm("Sorry, please select at last one critria")) generatePassword();
  } 


  var promptData=[];

  if (useUpperCaseLtrs){
    promptData.push(...upperCase);
  } if (useLowerCaseLtrs){
    promptData.push(...lowerCase);
  } if (useNumbers){
    promptData.push(...numbers);
  } if (useSpecial){
    promptData.push(...special);
  } 

  
  
  var password = "";
     
  console.log(promptData);
  // console.log(password);

  // this loop takes the a random character from data eact time

  for(var i=0; i< lengthPass; i++) {
    password += promptData [Math.floor(Math.random() * promptData.length)];
  } 
  

  
 
  return password;



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
