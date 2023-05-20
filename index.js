function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}


function divide(a,b) {
    return a / b;
}

function CalcModulo(a,b) {
  return a % b;
}


let result;
let a = [];
let b = [];

let operator;
let index = 0; //index indicates if the function has already been used.
function operate(a,b,operator) {
  let aOp = parseInt(a.join(''));
  let bOp = parseInt(b.join(''));
  b.length = 0;
    if(index < 1) {
        if(operator === "+") {
            result = add(aOp,bOp);
            
        }
        else if(operator === "-") {
          result = subtract(aOp,bOp);
          
        }
        else if(operator === "*") {
          result = multiply(aOp,bOp);
        
        }
        else if(operator === "/") {
          result = divide(aOp,bOp);
        
        }
        else if(operator === "%") {
          result = CalcModulo(aOp,bOp);
        }
    }
   else {
    if(operator === "+") {
        result = add(result,bOp);
    }
    else if(operator === "-") {
      result = subtract(result,bOp);
    }
    else if(operator === "*") {
      result = multiply(result,bOp);
    }
    else if(operator === "/") {
      result = divide(result,bOp);
    }
    else if(operator === "%") {
      result = modulo(result,bOp);
    }
   }
   index++;
 
  return result;
}

//Functionality for display and all of the buttons.

function displayNumbers() {
  if(operator == null) {
    display.innerText = a.join('');
  } 
  else {
    display.innerText = b.join('');
}
}

let displayText = document.createElement("p");
displayText.classList.add("displayText");
displayText.innerText = "Created by JaviDev98";

let display = document.querySelector("#display");
display.innerHTML = displayText.innerText;

let buttonZero = document.querySelector("#zero");
buttonZero.addEventListener('click', function () {operator == null ? a.push(0) : b.push(0)});
buttonZero.addEventListener('click', displayNumbers);

let buttonOne = document.querySelector("#one");
buttonOne.addEventListener('click', function () {operator == null ? a.push(1) : b.push(1)});
buttonOne.addEventListener('click', displayNumbers);


let buttonTwo = document.querySelector("#two");
buttonTwo.addEventListener('click', function () {operator == null ? a.push(2) : b.push(2)});
buttonTwo.addEventListener('click', displayNumbers);


let buttonThree = document.querySelector("#three");
buttonThree.addEventListener('click', function () {operator == null ? a.push(3) : b.push(3)});
buttonThree.addEventListener('click', displayNumbers);


let buttonFour = document.querySelector("#four");
buttonFour.addEventListener('click', function () {operator == null ? a.push(4) : b.push(4)});
buttonFour.addEventListener('click', displayNumbers);

let buttonFive = document.querySelector("#five");
buttonFive.addEventListener('click', function () {operator == null ? a.push(5) : b.push(5)});
buttonFive.addEventListener('click', displayNumbers);


let buttonSix = document.querySelector("#six");
buttonSix.addEventListener('click', function () {operator == null ? a.push(6) : b.push(6)});
buttonSix.addEventListener('click', displayNumbers);


let buttonSeven = document.querySelector("#seven");
buttonSeven.addEventListener('click', function () {operator == null ? a.push(7) : b.push(7)});
buttonSeven.addEventListener('click', displayNumbers);


let buttonEight = document.querySelector("#eight");
buttonEight.addEventListener('click', function () {operator == null ? a.push(8) : b.push(8)});
buttonEight.addEventListener('click', displayNumbers);


let buttonNine = document.querySelector("#nine");
buttonNine.addEventListener('click', function () {operator == null ? a.push(9) : b.push(9)});
buttonNine.addEventListener('click', displayNumbers);


let clear = document.querySelector("#clear");
clear.addEventListener('click',function () {a = []; b = []; operator = null; result = 0; index = 0; display.innerText = "Created by JaviDev98";})

let equals = document.querySelector("#equals");
equals.addEventListener('click', function() { index < 1 ? operate(a,b,operator) : operate(result,b,operator)});
equals.addEventListener('click', function(){display.innerText = result;});

let sum = document.querySelector("#add");
sum.addEventListener('click',function() {operator = "+"});

let negator = document.querySelector("#negator");

let modulo = document.querySelector("#modulo");