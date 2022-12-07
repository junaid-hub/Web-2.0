//// JavaScript has seven primitives: String, Number,
//// BigInt, Boolean, Symbol, undefined, and null



                    //// STRINGS ////

let st1 = 'Hello World';    //single quote
let st2 = "Hello Universe"; //double 

let a_var = 'Junaid'
let nam = `My name is ${a_var}` // backtick 
console.log(nam)

//// Escape Chatacters

let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str21 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str21);

let str3 = "New \nline.";   // new line
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);


                    //// NUMEBRS ////
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let bin = 0b101     // binary number
let oct = 0o10      // octal number
let hex = 0x3E8     // hexa number


                    //// BigInt ////

let bigNr = 90071992547409920n; // 'n' at last show it is a bigInt
// normal integer can not be added to bigInt

                    //// Boolean ////
let bool1 = false;
let bool2 = true;

                    //// Symbol ////
// each symbol is unique
let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);
let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two Symbols are the same:", sym1 === sym2);                    

                    //// Undefined //// and //// Null ////
// manually assigning undefined is a bad practice
// If one variable is undefined, and your own variable is manually set to
// undefined, they will be considered equal.

let terribleThingToDo = undefined;
let lastName;
console.log("Same undefined:", lastName === terribleThingToDo);
let betterOption = null;
console.log("Same null:", lastName === betterOption);