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
    if(num2 == 0)
    {
        return "INVALID"
    }
  
    return Math.round((num1 /num2) * 100)/100
}

function operate(num1, operator, num2)
{
    if(isNaN(parseInt(num1)) || isNaN(parseInt(num2))) // if num1 cannot be parsed
    {
        return "INVALID";

    }
    else {
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
    }
 

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
            return "INVALID"
    }
    

}

function convertString(equation)
{
    if(equation.length < 3)
    {
        return "INVALID"
    }

    const parsed = []
    const operators = ["+", "-", "/", "*"]
    let operator = ""

    for(let i =0; i < equation.length; i++)
    {
        if(operators.includes(equation[i]))
        {
            operator = equation[i]

        }
    }

    if(operator == "")
    {
        return "No operator"

    }

    let split = equation.split(operator) // [5, 3]

    if(isNaN(parseInt(split[0])) || isNaN(parseInt(split[1])))
    {
        return "INVALID"
    }

    parsed.push(parseInt(split[0]))
    parsed.push(operator)
    parsed.push(parseInt(split[1]))


    return parsed;

}


function clickButton()
{
    const digits = document.querySelectorAll("button")
    const calcDisplay = document.querySelector(".text")

    let buttonValues = ""
    let calculation = 0
    let totalOperators = 0


    digits.forEach((button)=>
    {
        button.addEventListener("click", ()=>
        {
            if(button.className == "equals")
            {
        
                const converted = convertString(buttonValues)

                if(converted === "INVALID")
                {
                   
                    calcDisplay.textContent = "INVALID"
                    buttonValues = ""
                    calculation = 0

    
                }
                else 
                {
                    
                

                
                if(calculation == 0)
                {
                    calculation = operate(converted[0], converted[1], converted[2])
                    calcDisplay.textContent = calculation
                    
                }
                else if (calculation > 0){
                    
                    converted[0] = calculation
                    console.log(converted)
                    calculation = operate(calculation, converted[1], converted[2])
                    calcDisplay.textContent = calculation
            
                  
                }
                buttonValues = calculation
            }


            }
            else if(button.className == "number" || button.className == "operator")
                {
                    buttonValues += button.textContent
                    calcDisplay.textContent = buttonValues


                    for(let i =0; i < buttonValues.length; i++)
                    {
                        console.log(buttonValues[i])
                        if (/[+\-/*]/.test(buttonValues[i]))
                        {
                            totalOperators +=1;
                        }
                    }

                    if(totalOperators > 1)
                    {

                        const converted = convertString(buttonValues)

                        if(converted === "INVALID")
                        {
                           
                            calcDisplay.textContent = "INVALID"
                            buttonValues = ""
                            calculation = 0
        
            
                        }
                                    
                if(calculation == 0)
                    {
                        calculation = operate(converted[0], converted[1], converted[2])
                        calcDisplay.textContent = calculation
                        
                    }
                    else if (calculation > 0){
                        
                        converted[0] = calculation
                        console.log(converted)
                        calculation = operate(calculation, converted[1], converted[2])
                        calcDisplay.textContent = calculation
                
                      
                    }
                    buttonValues = calculation
                    totalOperators = 0

                    }
           
                        
         
    
                }
            else if(button.className == "clear")
            {
                buttonValues = ""
                calculation = 0
                calcDisplay.textContent = ""

            }
    
            
            
        });

    });

}



clickButton()




