// Annonyma och arrow funktioner
hejsan = () => "Hejsan Svejsan";
document.getElementById("js1").innerHTML = hejsan();

let hejdå = function(){
    return "Hejdå Bejbå"
};
document.getElementById("js2").innerHTML = hejdå();


// Funktions Övningar

// Write Name
/* function writeName(a){
    console.log(a);
} */
/* let writeName = function(a){
    console.log(a);
} */
writeName = (a) => {console.log(a)}
writeName("Adam");


// Area
/* function area(width, height){
    return width*height;
} */
/* let area = function(width, height){
    return width*height;
} */
area = (width, height) => {return width * height}
console.log(area(10,10))


// Plus
/* function plus(a,b){
    return a + b;
} */
/* let plus = function(a,b){
    return a+b;
} */
plus = (a,b) => {return a + b}
console.log(plus(5,5))


// Celsius to Fahrenheit
/* function celsToFahr(g){
    return (g * 1.8 + 32);
} */
/* let celsToFahr = function(g){
    return (g * 1.8 + 32);
} */
celsToFahr = (g) => {return (g * 1.8 + 32)}
console.log(celsToFahr(20))


// Cirkel Area
/* function areaCirkel(radie){
    return Math.PI * radie * radie
} */
/* let areaCirkel = function(radie){
    return Math.PI * radie * radie
} */
areaCirkel = (radie) => {return Math.PI * radie * radie}
console.log(areaCirkel(15))


// Square root 
/* function square(t){
    return Math.sqrt(t) 
} */
/* let square = function(t){
    return Math.sqrt(t)
} */
square = (t) => {return Math.sqrt(t)}
console.log(square(25))


// String Count
/* function countString(s){
    return s.length
} */
/* let countString = function(s){
    return s.length
} */
countString = (s) => {return s.length}
console.log(countString("asadfg"))


// Even or odd
/* function evenOrOdd(n){
    if (n % 2 === 0) {
        console.log("Even number")
    } else {
        console.log("Odd number")
    }
} */
/* let evenOrOdd = function(n){
    if (n % 2 === 0) {
        console.log("Even number")
    } else {
        console.log("Odd number")
    }
} */
evenOrOdd = (n) => {
    if (n % 2 === 0) {
    console.log("Even number")
} else {
    console.log("Odd number")
}}
evenOrOdd(4)


// Small text to big text
/* function bigLetters(string){
    return string.toUpperCase();
} */
/* let bigLetters = function(string){
    return string.toUpperCase();
} */
bigLetters = (string) => {return string.toUpperCase();}
console.log(bigLetters("hejsan"));


// Convert to arrow function
dubble = (x) => {return x*2}
console.log(dubble(2))