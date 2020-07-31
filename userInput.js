var fs = require('fs');

//Module Wrapper Function that required (exports, require, module, _filename)
const greeting = require('./greetings');

//Display greeting 
console.log(greeting); 

//Declare first variable as inquirer1 and the inquirer module
var inquirer = require("inquirer");
//Declare a second inquirer variable to ask the user additional questions


//While in the inquirer module the user is prompted for inputs (username, password and to confirm password)
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    },
    {
      type: "email",
      message: "What is your email address?",
      name: "email"
    },
    {
      type: "email",
      message: "Please confirm your email address:",
      name: "confirm email"
    },
    {
    type: "input",
    message: "What is your current street address?",
    name: "address"
    },
    {
    type: "input",
    message: "What is your current city?",
    name: "city"
    },
    {
    type: "input",
    message: "What is your zip code?",
    name: "zip code"
    },
    {
    type: "input",
    message: "What is your occupation?",
    name: "occupation"
    },
    {
    type: "input",
    message: "What is the name of your employer?",
    name: "employer"
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: [
        "email",
        "phone",
        "SMS (data rates may apply)"
      ]
    },
    {
      type: "list",
      message: "Please select a subscription level:",
      name: "level",
      choices: [
        "Free Forever",
        "Pro",
        "Enterprise"
      ]
    }


  ])

  //After the user inputs a function is required to run with response as the parameter 
    .then(function(userQuestions) {
  
  //If the user passwords match, then a success log will display and a text file named userPassword will be created and the user's password will be stored in this file
    if (userQuestions.confirm === userQuestions.password) {
      console.log("Thanks for signing up!");
    }
  //If the user passwords do not match, then an error log will display 
    else {
      console.log("You forgot your password already? Please retry.");
    }
  
    fs.writeFile('userPassword.txt', JSON.stringify(userQuestions.password), function(err){
   }
    
          
);

    
});
