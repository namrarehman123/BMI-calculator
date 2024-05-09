#! /usr/bin/env node
import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operator",
    type: "list",
    name: "operator",
    Choice: ["addition","subtraction","multiplication","division"],
  
  },
]);
if (answer.operator==="addition") {
console.log(answer.firstNumber+answer.secondNumber)
}else if(answer.operator==="subtraction") {
  console.log(answer.firstNumber-answer.secondNumber)
  } else if(answer.operator==="multiplication") {
    console.log(answer.firstNumber*answer.secondNumber) 
    } else if(answer.operator==="division") {
      console.log(answer.firstNumber /answer.secondNumber)
    }else{
        console.log( 'please select a valid operator')
    }