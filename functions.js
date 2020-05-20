function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}

function subtract(firstNumber, secondNumber) {
   // A1: a number
   // A2: a number
   // R: a number
   return secondNumber - firstNumber;
}

function multiply(firstNumber, secondNumber) {
   // A1: a Number
   // A2: a Number
   // R: a Number
   return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
   // A1: a Number
   // A2: a Number
   // R: a Number
   return firstNumber / secondNumber;
}

function Increment(firstNumber) {
   // A1: a Number
   // R: a Number added buy 1 using +
   return ++firstNumber;
}

function Decrement(firstNumber) {
   // A1: a Number
   // R: a Number subtracted by 1 using -
   return --firstNumber;
}

function multiplyDecimal(firstNumber, secondNumber) {
   // A1: a decimal number
   // A2: a decimal number
   // R: a decimal number
   return firstNumber * secondNumber;
}

function divideDecimal(firstNumber, secondNumber) {
   // A1: a decimal Number
   // A2: a decimal Number
   // R: a decimal Number
   return firstNumber / secondNumber;
}

function Concatenating(firstNumber, secondNumber) {
   // A1: a number or word
   // A2: a number or word
   // R: a number or word
   // Concatenation does not add spaces between concatenated strings
   return firstNumber + " " + secondNumber;
}

function concatenatingPlusEquals(firstNumber, secondNumber) {
   // A1: a number or word
   // A2: a number or word
   // R: a number or word
   // Concatenation does not add spaces between concatenated strings
   return (firstNumber += secondNumber);
}

function ConcatenatingStringsVariables(myName, myHobby) {
   // A1: My name
   // A2: My favorite hobby
   // R: Concatenated both words into sentence using operator (+)

   return "Hello my name is " + myName + " and I like " + myHobby + ".";
}

function findLengthString(input1) {
   // input1: String
   // R: The number of characters in varible

   input1 = input1.length;
   return input1;
}

function bracketNotation(input1) {
   // input1: Word or number
   // R: Beginning character of input
   // Bracket reads from 0
   input1 = input1[0];
   return input1;
}

function bracketNotationNth(input1, inputNumber) {
   // input1: Character
   // inputNumber: position of character you are looking for
   // R: Position of inputNumber
   // Bracket reads from 0
   input1 = input1[inputNumber];
   return input1;
}

function bracketNotationLast(input) {
   // input1: Character
   // R: Last position of input
   // Bracket reads from 0
   input = input[input.length - 1];
   return input;
}

function bracketNotationNth2Last(input, inputNumber) {
   // input1: Character
   // R: Position of Nth from end of character

   input = input[input.length - inputNumber];
   return input;
}

function arrayPush(inputPush) {
   var array1 = ["10,55,23"];
   array1.push(inputPush);
   return arr1;
}

function arrayPop() {
   // R: Last position

   var array2 = [10, 55, 23];
   var removedVar = array2.pop();
   return removedVar;
}

function arrayShift() {
   // R: Element at the end of the array

   var array3 = [10, 55, 23];
   var removedVar = array3.shift();
   return removedVar;
}

function arrayUnshift() {
   // R: Element at the beginning of array

   var array4 = [10, 55, 23];
   var removedVar = array4.shift();
   return removedVar;
}

function shoppingList(item1, numItems) {
   // R: both items in shopping list

   var myShoppingList = [];
   myShoppingList.push(item1, numItems);
   return myShoppingList;
}

function standInLine(nextInLine, inLine) {
   // array5: Line
   // inLine: Disired number to put in line
   // R: Array with new number in line, nextInLine stored in console

   var array5 = [1, 2, 3, 4, 5];
   console.log(array5);

   array5.push(nextInLine);
   console.log(array5);

   array5.shift(inLine);
   return array5;
}
