function add(num1, num2)
{
    return num1+num2;
}

function subtract(num1,num2)
{
    return num1-num2;
    
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    return num1/num2;
}

function operate(num1, operator, num2)
{
    switch(operator)
    {
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "*":
            return multiply(num1, num2)
        case "/":
            return divide(num1, num2)

        default:
            return null
    }
    

}

function parseEquation(equation)
{
    let ans = [];
    let current = ""
    let numberPattern = /^[+-]?(\d+(\.\d*)?|\.\d+)$/;
    let operators = /[+\-*/=]|clear/;

    for(let i =0; i < equation.length; i++)
    {
        if(numberPattern.test(equation[i]))
        {
          
            current += equation[i]
        }
        else if(operators.test(equation[i]))
        {
            ans.push(current)
            ans.push(equation[i])

            current = "";
            
        }

    }

    if(current != "")
    {
        ans.push(current)


    }
    return ans;


}


function buttonPress()
{
const btns = document.querySelectorAll("button");


const text = document.querySelector(".text");

btns.forEach((button)=>
{
    button.addEventListener("click", () =>{
        if(button.id == "one")
        {
            text.textContent += "1";
            
        }
        else if(button.id == "two")
        {
            text.textContent +="2";
        }
        else if(button.id == "+")
        {
            text.textContent += "+"
        }
        else if(button.id == "=")
        {
            let val = text.textContent
           
            let parsed = parseEquation(val)

            let calculate = (operate(parseInt(parsed[0]), parsed[1], parseInt(parsed[2])))



     



            console.log(calculate)
           //compute
        }
    
    });

});

}

buttonPress()


