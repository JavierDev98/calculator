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

let result;
let a;
let b;
let operator;
let index = 0; //index indicates if the function has already been used.
function operate(a,b,operator) {
    if(index < 1) {
        if(operator === "+") {
            result = add(a,b);
            index++;
        }
        else if(operator === "-") {
          result = subtract(a,b);
          index++;
        }
        else if(operator === "*") {
          result = multiply(a,b);
          index++;
        }
        else if(operator === "/") {
          result = divide(a,b);
          index++;
        }
    }
   else {
    if(operator === "+") {
        result = add(result,b);
    }
    else if(operator === "-") {
      result = subtract(result,b);
    }
    else if(operator === "*") {
      result = multiply(result,b);
    }
    else if(operator === "/") {
      result = divide(result,b);
    }
   }
  return result;
}


function cleanMemory() {
    index = 0;
    result = 0;
}
//Functionality for display and all of the buttons.
let displayText = document.createElement("p");
displayText.classList.add("displayText");
displayText.innerText = "Created by JaviDev98";

let display = document.querySelector("#display");
display.innerHTML = displayText.innerText;

let buttonOne = document.querySelector("#one");
buttonOne.addEventListener('click',function() {display.innerText = "1";});
buttonOne.addEventListener('click', function () {operator == null ? a = 1 : b = 1});
let buttonTwo = document.querySelector("#two");

buttonTwo.addEventListener('click',function() {display.innerText = "2";;});
buttonTwo.addEventListener('click', function () {operator == null ? a = 2 : b = 2});

let buttonThree = document.querySelector("#three");
buttonThree.addEventListener('click',function() {display.innerText = "3"});
buttonThree.addEventListener('click', function () {operator == null ? a = 3 : b = 3});

let buttonFour = document.querySelector("#four");
buttonFour.addEventListener('click',function() {display.innerText = "4"});
buttonFour.addEventListener('click', function () {operator == null ? a = 4 : b = 4});

let buttonFive = document.querySelector("#five");
buttonFive.addEventListener('click',function() {display.innerText = "5"});
buttonFive.addEventListener('click', function () {operator == null ? a = 5 : b = 5});

let buttonSix = document.querySelector("#six");
buttonSix.addEventListener('click',function() {display.innerText = "6"});
buttonSix.addEventListener('click', function () {operator == null ? a = 6 : b = 6});

let buttonSeven = document.querySelector("#seven");
buttonSeven.addEventListener('click',function() {display.innerText = "7"});
buttonSeven.addEventListener('click', function () {operator == null ? a = 7 : b = 7});

let buttonEight = document.querySelector("#eight");
buttonEight.addEventListener('click',function() {display.innerText = "8"});
buttonEight.addEventListener('click', function () {operator == null ? a = 8 : b = 8});

let buttonNine = document.querySelector("#nine");
buttonNine.addEventListener('click',function() {display.innerText = "9"});
buttonNine.addEventListener('click', function () {operator == null ? a = 9 : b = 9});

let equals = document.querySelector("#equals");
equals.addEventListener('click', operate(a,b,operator));
equals.addEventListener('click', function()  {display.innerText = operate(a,b,operator)});

let sum = document.querySelector("#add");
sum.addEventListener('click',function() {operator = "+"});

