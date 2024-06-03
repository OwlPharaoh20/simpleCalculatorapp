//Javascript function to build a simple calculator app, 
//1. Declare the function and the parameters 
//2. write the logic in the code block using if,else, else if statements 
//3. Use Console. log to call the function with dynamic parameters 

//Declare function for simpleCalculator
function simpleCalculator (num1, num2, operation) {

    //write the application logic. 
let result ; 
if (operation === "add")
    {result = num1 + num2; }
else if (operation === "Subtract")
    {result = num1 - num2; }
else if (operation === "multiply")
    {result = num1 * num2; }
else if (operation === "divide")
    //Check if num2 is not 0, cos you cant divide any number by zero. pro knowledge 

    {if (num2 !== 0 ) {
        result = num1 / num2; 
    } else  {
        return "Error: Division by Zero ";
    }
}

else {
    return "Error: Invalid Operation";
}

return result; 
};

console.log(simpleCalculator (20, 5, "divide"));





