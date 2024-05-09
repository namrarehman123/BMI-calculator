import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operator",
        type: "list",
        name: "operator",
        Choice: ["This is a BML calculator"],
    },
]);
console.log(answer);
