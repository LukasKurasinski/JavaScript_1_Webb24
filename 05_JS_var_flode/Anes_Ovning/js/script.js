let a;

console.log("Power 10,2");
console.log(Math.pow(10,2));

console.log("Power 10, -2");
console.log(Math.pow(10,-2));

console.log("Power 10,a");
console.log(Math.pow(10, a));


//Random

let myRandom = Math.random()*10;

console.log("Random");
console.log(Math.random());

console.log("Random 0-10");
console.log(Math.random()*10);

console.log("Random 0-100");
console.log(Math.random()*100);

console.log("Random 50-100");
console.log(50 + Math.random()*50);

console.log("Random 0-10  " + myRandom);
console.log(Math.round(myRandom));

console.log("Random 0-10 Ceiling ");
console.log(Math.ceil(myRandom));

console.log("Random 0-10 Floor ");
console.log(Math.floor(myRandom));

//Absolute

console.log("Absolute -2");
console.log(Math.abs(-2));

console.log("Absolute 2");
console.log(Math.abs(2));

console.log("Max 1,3,5");
console.log(Math.max(1,3,5));

console.log("Min 1,3,5");
console.log(Math.min(1,3,5));

//Absolute with pow and sqrt

console.log("Math.sqrt(Math.pow(2,2))");
console.log(Math.sqrt(Math.pow(2,2)));

//parse int

let b = 5;
let c = "5";

console.log("Parse int 5 + `5`");
console.log(b + Number.parseInt(c));


//Date and time

let currentDate = new Date;

console.log("Current Time");
console.log(currentDate);

console.log("Current Date");
console.log(currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear());

console.log("Current Time in Hours");
console.log(currentDate.getHours() + " Hours");

console.log("Current Time in Minutes");
console.log(currentDate.getMinutes() + " Minutes");

console.log("Current Time in Seconds");
console.log(currentDate.getSeconds() + " Seconds");

//Convert integer to String

let d = 5;
console.log("Number.toString(5)");

if(d.isInteger){
    let convertedNumber = d.toString();
    console.log(convertedNumber);
}

else { 
    console.log(d);
}