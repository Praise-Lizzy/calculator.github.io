 let leftOperand = "";
 let rightOperand = "";
 let result = "";
 let operator = "";
 let calculationhistory = [];

 //get buttons
 let buttons = 
 document.getElementsByTagName("button");
 let displayinput = 
 document.getElementById("display-input");
 let clearButton = 
 document.getElementById("clearAc");
 let displayhistory =
 document.getElementById("displayhistory")
 // console.log(displayhistory)

//add event listener to each button
clearButton.addEventListener("click", () =>{
    displayinput.innerText = "";
    leftOperand = "";
    rightOperand = "";
    result = "";
    operator = "";
    clearButton.innerText = "Ac"
})

function getButtonValue(button){
    console.log(button.innerText);
    if (button.innerText==="0"||
        button.innerText==="1"||
        button.innerText==="2"||
        button.innerText==="3"||
        button.innerText==="4"||
        button.innerText==="5"||
        button.innerText==="6"||
        button.innerText==="7"||
        button.innerText==="8"||
        button.innerText==="9"||
        button.innerText===".")
        //check if operator is set
        if (operator){
            rightOperand += button.innerText
        }
        else{
            leftOperand+=button.innerText;
        }
        else{
            operator=button.innerText;
        }
    displayinput.innerText += button.innerText;
    clearButton.innerText = "c"
}

//get number buttons
let button0 = 
document.getElementById("button0")
let button1 = 
document.getElementById("button1");
let button2 = 
document.getElementById("button2");
let button3 = 
document.getElementById("button3");
let button4 = 
document.getElementById("button4");
let button5 = 
document.getElementById("button5");
let button6 = 
document.getElementById("button6");
let button7 = 
document.getElementById("button7");
let button8 = 
document.getElementById("button8");
let button9 = 
document.getElementById("button9");

//add event listener to each button
button0.addEventListener("click", () =>
getButtonValue(button0));
button1.addEventListener("click", () =>
getButtonValue(button1));
button2.addEventListener("click", ()=> 
getButtonValue(button2));
button3.addEventListener("click", () =>
getButtonValue(button3));
button4.addEventListener("click", () =>
getButtonValue(button4));
button5.addEventListener("click", ()=> 
getButtonValue(button5));
button6.addEventListener("click", () =>
getButtonValue(button6));
button7.addEventListener("click", () =>
getButtonValue(button7));
button8.addEventListener("click", ()=> 
getButtonValue(button8));
button9.addEventListener("click", () =>
getButtonValue(button9));


//get operators
let addButton = 
document.getElementById("add");
let subtractButton = 
document.getElementById("subtract");
let multiplyButton = 
document.getElementById ("multiply");
let divideButton = 
document.getElementById("divide");
let equallButton = 
document.getElementById("equall");

//add click event listener to operator
addButton.addEventListener("click", () =>
getButtonValue(addButton));
subtractButton.addEventListener("click", () =>
getButtonValue(subtractButton));
multiplyButton.addEventListener("click", () =>
getButtonValue(multiplyButton));
divideButton.addEventListener("click", () =>
getButtonValue(divideButton));
equallButton.addEventListener("click", () =>
calculateresult());

//calculate result
function calculateresult(){
    console.log("leftOperand: ", leftOperand);
    console.log("rightOperand: ", rightOperand);
    console.log("operator: ", operator);
    //define result
    let result=0;
    //check operator
    switch(operator)
    {
        case "+":
            result = parseInt(leftOperand) + parseInt(rightOperand);
            break
        case "-":
            result = parseInt(leftOperand) - parseInt(rightOperand);
            break
        case "*":
            result = parseInt(leftOperand) * parseInt(rightOperand);
            break
        case "/":
            result = parseInt(leftOperand) / parseInt(rightOperand);
            break
    }
    calculationhistory.push([leftOperand, operator, rightOperand, "=", result].join(""));
    displayinput.innerText += ("=" + result);
    console.log("result: ", result);
    console.log("calhis", calculationhistory)
}

//get all special operators
let plusminusButton = 
document.getElementById("plus/minus");
let percentButton = 
document.getElementById("percent");
let dotButton = 
document.getElementById("decimal");

//function on percent
function percent(){
    if ( percentButton !== "")
leftOperand= parseFloat(leftOperand/100)
    displayinput.innerText = leftOperand
    console.log ("leftOperand: ", leftOperand)
}

percentButton.addEventListener("click", () =>
percent())
dotButton.addEventListener("click", () =>
getButtonValue(dotButton))

//function for +/-
function plusminus(){
    displayinput.innerText = "-" + displayinput.innerText;
    console.log("-/+: ", plusminus)
}
plusminusButton.addEventListener("click", () =>
plusminus() 
)

 
 ;
//function to display calculation history
function displaycalculationhistory(){
    displayhistory.innerText = '';
    calculationhistory.forEach((calculation) => {
        let p = document.createElement('P');
        p.textContent = calculation;
        displayhistory.appendChild(p); 
        console.log(p)
        // console.log ("calhistory", displaycalculationhistory())  
    })
}
let showcalhis = 
document.getElementById("showcalculationhistory");
showcalhis.addEventListener("click", () =>
displaycalculationhistory());

//function to displaytime
function displaycurrenttime(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes =  currentTime.getMinutes();
    //let seconds = currentTime.getSeconds();
    //let ampm = hours< 12 ? 'AM' : 'PM' ;
    hours = hours % 12;
    if (hours == 0) hours = 12;
    //console.log (padZero(hours)+":" + padZero(minutes) + ":"+ padZero(seconds) + "" + ampm)
    document.getElementById('current-time').innerText = padZero(hours)+":" + padZero(minutes) //+ ":"+
    //padZero(seconds) + "" + ampm;
}
function padZero(number){toString
    return (number < 10 ? '0' : '') + number;
}
setInterval(displaycurrenttime, 1000);
displaycurrenttime();


//function to clear calculator
function clearcalculator(){
    let currentvalule = displayinput.innerText;
    if(displayinput.innerText.length >=1){
        console.log("You called")
        displayinput.innerText= currentvalule.substring(0, currentvalule.length-1)
    }
    if (displayinput.innerText==='') {
        console.log("I am not empty")
        scientificSection.style.display='grid'
    }
    else{
        //scientificSection.style.display='block'
        console.log ('one or more elements not found')
    }
}

let clearcal = 
document.getElementById('clear-calculator');
clearcal.addEventListener('click',() =>
    clearcalculator() )


let scientificSection = document.getElementById('scientific-calculator')


//get buttons
let bracketopen= document.getElementById("(");
bracketopen.addEventListener("click", () => {
    displayinput.innerText += "("; });
let bracketclose = document.getElementById(")");
bracketclose.addEventListener("click", () => {
    displayinput.innerText += ")"; });
let mc = document.getElementById("mc");
mc.addEventListener("click", clearMemory)
let mr = document.getElementById("mr");
mr.addEventListener("click", recallMemory)
let mminus = document.getElementById("m-");
mminus.addEventListener("click", subtractFromMemory)
let mplus = document.getElementById("m+");
mplus.addEventListener("click", addToMemory)
 
let sq = document.getElementById("x2");
sq.addEventListener("click", () =>
square())
let cube = document.getElementById("x3");
cube.addEventListener("click", () =>
getscientificvalue("cube"))
let xy = document.getElementById("xsupy");
xy.addEventListener("click", () =>
displayinput.innerText="",
//ppy = displayinput.innerText,
//displayinput.innerText= Math.pow(x, y));
getscientificvalue("xtothey"))
let ex = document.getElementById("e-to-the-x")
ex.addEventListener("click", () =>
getscientificvalue("etothex"))
let tensupx = document.getElementById("10supx")
tensupx.addEventListener("click", () =>
getscientificvalue("tentothex"))
let onex = document.getElementById("1/x")
onex.addEventListener("click", () =>
  calculateroot("reciprocal"))
let roottwo = document.getElementById("sqr-root1")
roottwo.addEventListener("click", () =>
  calculateroot("squareroot"))
let cuberoot = document.getElementById("cube-root")
cuberoot.addEventListener("click", () =>
  calculateroot("cbrt")
)
cuberoot.addEventListener("click", () =>
getscientificvalue(""))
let sqrroot = document.getElementById("sqr-root")
sqrroot.addEventListener("click", () =>
getscientificvalue("sqr-root"))
let ln = document.getElementById("ln")
ln.addEventListener("click", () =>
getscientificvalue("ln"))
let log = document.getElementById("log")
log.addEventListener("click", () =>
getscientificvalue("log"))
let x = document.getElementById("x!")
x.addEventListener("click", ()=> 
calculateroot("factorial"))
let sin = document.getElementById("sin")
sin.addEventListener("click", () =>
getscientificvalue("sin"))
let cos = document.getElementById("cos")
cos.addEventListener("click", () =>
getscientificvalue("cos"))
let tan = document.getElementById("tan")
tan.addEventListener("click", () =>
getscientificvalue("tan"))
let e = document.getElementById("e")

let EE = document.getElementById("EE")

let Rand = document.getElementById("Rand")
Rand.addEventListener("click", () =>
getscientificvalue("rand"))
let sinh = document.getElementById("sinh")
sinh.addEventListener("click", () =>
getscientificvalue("sinh"))
let cosh = document.getElementById("cosh")
cosh.addEventListener("click", () =>
getscientificvalue("cosh"))
let tanh = document.getElementById("tanh")
tanh.addEventListener("click", () =>
getscientificvalue("tanh"))
let PI = document.getElementById("PI")
PI.addEventListener("click", () =>
getscientificvalue("pi"))
let Rad = document.getElementById("Rad")
Rad.addEventListener("click", () =>
getscientificvalue("rad"))


function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

let firstValue = null;
let secondValue = null;
function getscientificvalue(func){
    let val = parseFloat(displayinput.innerText);
    let x = parseFloat(displayinput.innerText);
    //let y = parseFloat(displayinput.innerText);
    switch (func){
    case "sin":
      if (secondmode){
        displayinput.innerText = (Math.asin(val) * 180 / Math.PI).toFixed(4);
    } else {
        displayinput.innerText = Math.sin(toRadians(val)).toFixed(4);
        //console.log('i am running')
      }
        break
    case "cos":
      if (secondmode){
        displayinput.innerText = (Math.acos(val) * 180 / Math.PI).toFixed(4);
    } else {
      displayinput.innerText = Math.cos(toRadians(val)).toFixed(4);
    }
      break;
    case "tan":
      if (secondmode){
        displayinput.innerText = (Math.atan(val) * 180 / Math.PI).toFixed(4);
    } else {
      displayinput.innerText= Math.tan(toRadians(val)).toFixed(4);
    }
      break;
    case "log":
      if(secondmode){
        // log base 2
        displayinput.innerText = Math.log2(val).toFixed(4);
    } else {
      displayinput.innerText = Math.log10(val).toFixed(4);
    }
      break;
    case "ln":
       if(secondmode){
        // log base y
        let x = firstValue;     // already stored
        let y = secondValue;    // already stored
        if(x <= 0 || y <= 0 || y === 1){
            displayinput.innerText = "Error";
        } else {
            displayinput.innerText = (Math.log(x)/Math.log(y)).toFixed(4);
        }
    } else {
      displayinput.innerText = Math.log(val).toFixed(4);
    }
      break;
    case "sqr-root":
      displayinput.innerText = Math.sqrt(val).toFixed(4);
      break;
    case "pow":
      display.value += "^";
      break;
    case "pi":
      displayinput.innerText += Math.PI.toFixed(4);
      break;
    //case "fact":
      //display.value = factorial(parseInt(val));
      //break;

    // NEW FUNCTIONS
    case "sinh":
      if (secondmode){
        displayinput.innerText = (Math.asinh(val) * 180 / Math.PI).toFixed(4);
    } else {
      displayinput.innerText = Math.sinh(val).toFixed(4);
    }
      break;
    case "cosh":
      if (secondmode){
        displayinput.innerText = (Math.acosh(val) * 180 / Math.PI).toFixed(4);
    } else {
      displayinput.innerText = Math.cosh(val).toFixed(4);
    }
      break;
    case "tanh":
      if (secondmode){
        displayinput.innerText = (Math.atanh(val) * 180 / Math.PI).toFixed(4);
    } else {
      displayinput.innerText = Math.tanh(val).toFixed(4);
    }
      break;
    case "rand":
      displayinput.innerText = Math.random().toFixed(4); // Random between 0 and 1
      break;
    case "rad":
      displayinput.innerText= toRadians(val).toFixed(4);
      break;
    case "square":
      displayinput.innerText= Math.pow(x, 2);
      break;
    case "cube":
      displayinput.innerText= Math.pow(x, 3);
      break;
    case "xtothey":
      //displayinput.innerText= Math.pow(x, y);
      break;
    case "etothex":
      displayinput.innerText= Math.exp(x);
      break;
    case "tentothex":
      displayinput.innerText= Math.pow(10, x);
      break;
  }
}

function square() {
  let x = parseFloat(displayinput.innerText)
  if (isNaN(x)){
    displayinput.innertext= "please enter a valid number"
  }
  else{
    displayinput.innerText= Math.pow(x, 2)
  }
 // return x ** 2; // or Math.pow(x, 2)
}

/*
function cube(y) {
  return y ** 3; // or Math.pow(y, 3)
}

function xToTheY(x, y) {
  return x ** y; // or Math.pow(x, y)
}

function eToTheX(x) {
  return Math.exp(x); // e^x
}

function tenToTheX(x) {
  return 10 ** x; // or Math.pow(10, x)
}*/

let memory = 0; // Memory register
function addToMemory() {
  const value = parseFloat(displayinput.innerText);
  if (!isNaN(value)) {
    memory += value;
    displayinput.innerText = `Memory: ${memory}`;
    displayinput.innerText= "";
    console.log('i am running')
  } else {
    displayinput.innerText = "Enter a valid number";
  }
}
function subtractFromMemory() {
  const value = parseFloat(displayinput.innerText);
  if (!isNaN(value)) {
    memory -= value;
    displayinput.innerText = `Memory: ${memory}`;
    displayinput.innerText = "";
    console.log('subtract from memory')
  } else {
    displayinput.innerText = "Enter a valid number";
  }
}

function recallMemory() {
  displayinput.innerText = memory;
  displayinput.innerText = `Recalled: ${memory}`;
}
function clearMemory() {
  memory = 0;
  displayinput.innerText = "Memory cleared";
}

function reciprocal(x) {
  return 1 / x;
}
function squareRoot(x) {
  return Math.sqrt(x);
}

function calculateroot(operation) {
  //let display = document.getElementById("display");
  let x = parseFloat(displayinput.innerText);

  if (isNaN(x)) {
    displayinput.innerText = "Error";
    return;
  }

  switch (operation) {
    case 'reciprocal': // 1/x
      displayinput.innerText = 1 / x;
      break;

    case 'squareroot': // Square root
      displayinput.innerText = Math.sqrt(x);
      break;

    case 'cbrt': // Cube root
      displayinput.innerText = Math.cbrt(x);
      break;

    case 'factorial': // x!
       let n = parseInt(x);
      if (n < 0 || n != parseFloat(x)) { // Negative or decimal check
        displayinput.innerText = "Error";
      } else {
        displayinput.innerText = factorial(n);
      }
      break;

    default:
      displayinput.innerText= "Error";
  }
}
// Define the factorial function
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
let secondmode=false;
 let second = document.getElementById("second");
 second.addEventListener ("click", togglebutton )

function togglebutton() {
  secondmode = !secondmode;
  document.getElementById("sin").textContent = secondmode ? "sin⁻¹" : "sin";
  document.getElementById("cos").textContent = secondmode ? "cos⁻¹" : "cos";
  document.getElementById("tan").textContent = secondmode ? "tan⁻¹" : "tan";
  document.getElementById("sinh").textContent = secondmode ? "sinh⁻¹" : "sinh";
  document.getElementById("cosh").textContent = secondmode ? "cosh⁻¹" : "cosh";
  document.getElementById("tanh").textContent = secondmode ? "tanh⁻¹" : "tanh";
  document.getElementById("ln").textContent = secondmode ? "logy" : "ln";
  document.getElementById("log").textContent = secondmode ? "log₂" : "log";
  
}
