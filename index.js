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

let bOp = parseFloat(b.join(''));
    if(index < 1) {
      let aOp = parseFloat(a.join(''));
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
   a.length = 0;
   b.length = 0;
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
displayText.innerText = "Created by JaviDev98"; //Default message

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

let point = document.querySelector("#point");
point.addEventListener('click', function () {operator == null ? a.push(".") : b.push(".")});

let clear = document.querySelector("#clear");
clear.addEventListener('click',function () {a.length = 0; b.length = 0; operator = null; result = 0; index = 0; display.innerText = "Created by JaviDev98";})

let equals = document.querySelector("#equals");
equals.addEventListener('click', function() { index < 1 ? operate(a,b,operator) : operate(result,b,operator)});
//equals.addEventListener('click', function() { b});
equals.addEventListener('click', function(){display.innerText = result;});

//all of the operators

let sumButton = document.querySelector("#add");
sumButton.addEventListener('click',function() {operator = "+"});

let negatorButton = document.querySelector("#negator");
negatorButton.addEventListener('click',negate);
negatorButton.addEventListener('click', displayNumbers);
let beenUsed = null;
function negate() {
  if (operator == null) {
    if (beenUsed == null) {
      a.unshift("-");
      beenUsed++;
    } else {
      a.splice(0, 1);
      beenUsed = null;
    }
  } else {
    if (beenUsed == null) {
      b.unshift("-");
      beenUsed++;
    } else {
      b.splice(0, 1);
      beenUsed = null;
    }
  }
};

let moduloButton = document.querySelector("#modulo");
moduloButton.addEventListener('click',function() {operator = "%"});

let divideButton = document.querySelector("#divide");
divideButton.addEventListener('click',function() {operator = "/"});

let multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener('click',function() {operator = "*"});

let subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener('click',function() {operator = "-"})

