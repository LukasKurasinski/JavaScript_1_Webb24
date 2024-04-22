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

//String length

let myName = "Anes";
let school = "Grit Academy"
let emptyString  = "";
let notAString = false;

console.log(`The name ${myName.toUpperCase()} is ${myName.length} characters long`);
console.log(`The name${emptyString} is ${emptyString.length} characters long`)
console.log(`The name ${notAString} is ${notAString.length} characters long`)

let lastName = "Brkic";
let fullName;

fullName = myName + " " + lastName;
console.log(fullName.toUpperCase());

//String Concatenate

console.log('5+"5"');
console.log('5' + 5);
console.log('5 + 5');
console.log(5 + 5);

//Cases

console.log('hello!'.toUpperCase());
console.log('GREETINGS!'.toLowerCase());

//Substring and slice

let message = "Hello From JavaScript my Friends";
console.log(message.substring(0,22));
console.log(message.slice(22));

let messageForSlicing = 'No, please dont slice me!';
console.log(messageForSlicing);
let slicedMessage = messageForSlicing.slice(11);
console.log(slicedMessage);

//Trim

let badInputText = '    Hello    ';
let trimmedText = badInputText.trim();
console.log(trimmedText);

//Split

let numberPhrase = 'Zero,   One,   Two,   Three,   Four,   Five,   Six,   Seven,   Eight,   Nine';
let numberPhraseSplit = numberPhrase.split(',');
console.log(numberPhrase);

for (let i = 0; i < numberPhraseSplit.length; i++) {

    numberPhraseSplit[i] = numberPhraseSplit[i].trim();
    
}

console.log(numberPhraseSplit);

//Join

let numberPhraseJoin = numberPhraseSplit.join(', ');
console.log('joining number data split with (, ) ');
console.log(numberPhraseJoin);

//Replace

let stringBefore = '50%';
let stringAfter = stringBefore.replace('%', '$');
console.log(stringAfter);

//Uppgift

let txt1 = '  Skärmskydd , 499'
let txt2 = 'Mobiltelefon ,299'
let txt3 = ' Telefonfodral, 89'
let txt4 = 'Laptop,      799'
let txt5 = 'Hörlurar  , 199'