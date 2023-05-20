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
        else if(operator === "%") {
          result = CalcModulo(a,b);
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
    else if(operator === "%") {
      result = modulo(result,b);
    }
   }
  return result;
}

//Functionality for display and all of the buttons.
let displayText = document.createElement("p");
displayText.classList.add("displayText");
displayText.innerText = "Created by JaviDev98";

let display = document.querySelector("#display");
display.innerHTML = displayText.innerText;

let buttonOne = document.querySelector("#one");
buttonOne.addEventListener('click', function () {operator == null ? a.push(1) : b.push(1)});
buttonOne.addEventListener('click',function() {a.join(','); b.join(''); 
if(index < 1) {display.innerText = a.join('');} else {display.innerText = b.join('')}});


let buttonTwo = document.querySelector("#two");
buttonTwo.addEventListener('click', function () {operator == null ? a.push(2) : b.push(2)});
buttonTwo.addEventListener('click',function() {a.join(','); b.join(''); 
if(index < 1) {display.innerText = a.join('');} else {display.innerText = b.join('')}});


let buttonThree = document.querySelector("#three");
buttonThree.addEventListener('click', function () {operator == null ? a.push(3) : b.push(3)});
buttonThree.addEventListener('click',function() {a.join(','); b.join(''); 
if(index < 1) {display.innerText = a.join('');} else {display.innerText = b.join('')}});


let buttonFour = document.querySelector("#four");
buttonFour.addEventListener('click', function () {operator == null ? a.push(4) : b.push(4)});
buttonFour.addEventListener('click',function() {a.join(','); b.join(''); 
if(index < 1) {display.innerText = a.join('');} else {display.innerText = b.join('')}});


let buttonFive = document.querySelector("#five");
buttonFive.addEventListener('click', function () {operator == null ? a.push(5) : b.push(5)});
buttonFive.addEventListener('click',function() {a.join(','); b.join(''); 
if(index < 1) {display.innerText = a.join('');} else {display.innerText = b.join('')}});


let buttonSix = document.querySelector("#six");
buttonSix.addEventListener('click', function () {operator == null ? a.push(6) : b.push(6)});
buttonSix.addEventListener('click',function() {a.join(','); b.join(''); 
if(index < 1) {display.innerText = a.join('');} else {display.innerText = b.join('')}});


let buttonSeven = document.querySelector("#seven");
buttonSeven.addEventListener('click', function () {operator == null ? a.push(7) : b.push(7)});
buttonSeven.addEventListener('click',function() {a.join(','); b.join(''); 
if(index < 1) {display.innerText = a.join('');} else {display.innerText = b.join('')}});


let buttonEight = document.querySelector("#eight");
buttonEight.addEventListener('click', function () {operator == null ? a.push(8) : b.push(8)});
buttonEight.addEventListener('click',function() {a.join(','); b.join(''); 
if(index < 1) {display.innerText = a.join('');} else {display.innerText = b.join('')}});


let buttonNine = document.querySelector("#nine");
buttonNine.addEventListener('click', function () {operator == null ? a.push(9) : b.push(9)});
buttonNine.addEventListener('click',function() {a.join(','); b.join(''); 
if(index < 1) {display.innerText = a.join('');} else {display.innerText = b.join('')}});


let clear = document.querySelector("#clear");
clear.addEventListener('click',function () {a = []; b = []; operator = null; result = 0; index = 0; display.innerText = "Created by JaviDev98";})

let equals = document.querySelector("#equals");
equals.addEventListener('click', operate(a,b,operator));
equals.addEventListener('click', function()  {display.innerText = operate(a,b,operator)});

let sum = document.querySelector("#add");
sum.addEventListener('click',function() {operator = "+"});

let negator = document.querySelector("#negator");

let modulo = document.querySelector("#modulo");