import inquirer from "inquirer";
let answers = await inquirer.prompt([{
        name: "num1",
        type: "number",
        message: "Enter your first number:"
    },{
        name: "num2",
        type: "number",
        message: "Enter your second number:"
    },{
        name: "operator",
        type: "list",
        choices:["addition","subtraction","multipilication","division"],
        message: " you select operator:"
    }
]);
if (answers.operator==="addition"){
    console.log(`The sum of two numbers = ${answers.num1+answers.num2}`)
}
else if (answers.operator==="subtraction"){
    console.log(`The difference of two numbers = ${answers.num1-answers.num2}`)
} 
else if (answers.operator==="multipilication"){
    console.log(`The multiple of two numbers = ${answers.num1*answers.num2}`)
}
 else if (answers.operator==="division"){
    console.log(`The division of two numbers = ${answers.num1/answers.num2}`)
}