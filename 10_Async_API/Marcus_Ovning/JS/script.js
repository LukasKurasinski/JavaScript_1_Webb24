// Övningar
// VANLIGA FUNKTIONER
/////////////////////

/*
Skapa en funktion writeName som tar in ett namn som parameter och skriver ut
det till konsolen när funktionen anropas.
*/

function writeName(x){
    console.log(x)
}

writeName("Hej");

/*
Skapa en funktion area som tar in width och height som parametrar och
returnerar området (area) av en rektangel (width* height).
*/

function area(w,h) {
    return (w * h);
}

let mmmmm = area(200,100);
console.log(mmmmm + " m^2");

/*
Beräkna Summan av Två Tal
*/

function beräkna(x,y){
    return x+y;
}

/*
Konvertera Celsius till Fahrenheit
Formel: Fahrenheit = (Celsius * 1.8) + 32
*/

function convertToFarenheit(c){
    let f = (c * 1.8) + 32;
    return f;
}

let farn = convertToFarenheit(30);
console.log(farn + " farenheit");

/*
Beräkna Area av en Cirkel
*/

const pi = Math.PI;

function beräknaAreaCirkel(radie){
    return pi * radie * radie;
}

let radie = beräknaAreaCirkel(100);
console.log(radie);

/*
Beräkna Kvadraten av Ett Tal
*/

function kvadraten(tal){
    return tal * tal;
}

/*
Räkna Antalet Tecken i En Sträng
*/

function räknaTecken(string){
    let x = string;
    return x.length;
}

let hej = räknaTecken("hejsan");

console.log(hej);

/*
Kontrollera Om Ett Tal är Jämnt eller Udda
*/

function jämtEllerUdda(tal){
    if (tal % 2 !== 0){
        console.log("Ojämt");
    } else {
        console.log("Jämt");
    }
}

jämtEllerUdda(11);

/*
Konvertera Text till Stora Bokstäver
*/

function bigBoyLetters(x){
    return x.toUpperCase();
}

let x = bigBoyLetters("Hejsan");
console.log(x);

let storis = function(x){
    return x.toUpperCase();
}

let storabokis = storis("Hejsan");
console.log(storabokis);

/* 
Arrow

let dubble = function(x) {
    return x * 2;
};
*/

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
////////////////////////////////////////// 
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

/*
Skapa en funktion writeName som tar in ett namn som parameter och skriver ut
det till konsolen när funktionen anropas.
*/

//anonym

let writeNameAnon = function(x){
    console.log(x);
}

writeNameAnon("Hej anonym");

//arrow

let writeNameArrow = (x) => {
        console.log(x);
}

writeNameArrow("Dödsfall arrow")

/*
Skapa en funktion area som tar in width och height som parametrar och
returnerar området (area) av en rektangel (width* height).
*/

function area(w,h) {
    return (w * h);
}


console.log(mmmmm + " m^2");

// Anon

let areaAnon = function(w,h){
    return (w * h);
}

let aareaAnon = areaAnon(10,2);
console.log(aareaAnon + " m^2");

// Arrow

let areaArrow = (w,h) => {
    return (w * h);
}

let aareaArrow = areaArrow(1,5);
console.log(aareaArrow + " m^2");

/*
Beräkna Summan av Två Tal
*/

// Anon

let beräknaSummaAnon = function(x,y){
    return x+y;
}
let summaAnon = beräknaSummaAnon(2,5);
console.log(summaAnon);

//Arrow

let beräknaSummaArrow = (x,y) => {
    return x+y;
}

let summaArrow = beräknaSummaArrow(7,7);
console.log(summaArrow);

/*
Konvertera Celsius till Fahrenheit
Formel: Fahrenheit = (Celsius * 1.8) + 32
*/

// Anon

let convertToFarenheitAnon = function(c){
    let f = (c * 1.8) + 32;
    return f;
}

let farenheitAnon = convertToFarenheitAnon(12);
console.log(farenheitAnon + " farenheit");

// Arrow

let convertToFarenheitArrow = (c) => {
    let f = (c * 1.8) + 32;
    return f;
}

let farenheitArrow = convertToFarenheitArrow(30);
console.log(farenheitArrow)

/*
Beräkna Area av en Cirkel
*/

// ANON

const pi2 = Math.PI;

let beräknaCirkelAnon = function(radie){
    return pi * radie * radie;
}

// ARROW

let beräknaCirkelArrow = (radie) => {
    return pi * radie * radie;
}

let cirkelAnon = beräknaCirkelAnon(20);
let cirkelArrow = beräknaCirkelArrow(30);
console.log(cirkelAnon);
console.log(cirkelArrow);

/*
Beräkna Kvadraten av Ett Tal
*/

// ANON

let kvadratenAnon = function(tal){
    return tal * tal;
}

// ARROW

let kvadratenArrow = (tal) => {
    return tal * tal;
}

/*
Räkna Antalet Tecken i En Sträng
*/

// ANON

let räknaTeckenAnon = function(string){
    let x = string;
    return x.length;
}

// ARROW

let räknaTeckenArrow = (string) => {
    let x = string;
    return x.length;
}

/*
Kontrollera Om Ett Tal är Jämnt eller Udda
*/

// ANON
let jämtEllerUddaAnon = function(tal){
    if (tal % 2 !== 0){
        console.log("Ojämt");
    } else {
        console.log("Jämt");
    }
}

// ARROW

let jämtEllerUddaArrow = (tal) => {
    if (tal % 2 !== 0){
        console.log("Ojämt");
    } else {
        console.log("Jämt");
    }
}

/*
Konvertera Text till Stora Bokstäver
*/

// ANON

let bigBoyLettersAnon = function(x){
    return x.toUpperCase();
}

// ARROW

let bigBoyLettersArrow = (x) => {
    return x.toUpperCase();
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
////////////////////////////////////////// 
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// EXTRAUPPGIFTER

/* 
Skapa en funktion summeraArray som tar en array av tal som argument och
returnerar summan av alla tal i arrayen.
*/

let extraArray = [1,5,8,69,420];

let summeraArray = (array) => {
    let leSum = 0;
    for (let i = 0; i < array.length; i++) {
        leSum += array[i];
    }
    console.log("Summa array: " + leSum)
}

summeraArray(extraArray);

/* 
Skapa en funktion filtreraPositiva som tar en array av tal som argument och
returnerar en ny array med endast de positiva talen.
*/

let extraArray2 = [-11,5,58,-69,-420, 20];

let summeraPositivaArray = (array) => {
    let leSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0){
            leSum += array[i];
        }
    }
    console.log("Summa array: " + leSum)
}

summeraPositivaArray(extraArray2);

/* 
Skapa en funktion dubblaElement som tar en array av tal som argument och
returnerar en ny array där varje tal är dubbelt så stort som i den ursprungliga
arrayen.
*/

let extraArray3 = [5, 13, 69, 40, 420];

let dubblaElement = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let current = (array[i] * 2)
        console.log(current);
        newArray.push(current)
    }
    return newArray;
}
extraArray3 = dubblaElement(extraArray3);

console.log(extraArray3);

// Mid-lektion övn
// Funktion två parametrar, array lenght och maxvärde som kan finnas i vår lista. Sätt in från 0 -> max och längden på det kommer vara parameter

let jagOrkarInte = (längd, maxvärde) => {
    let jagOrkarInteLista = [];
    for (let i = 0; i < längd; i++) {
        let rnd = Math.random();
        rnd = Math.floor((rnd * maxvärde)+1);
        jagOrkarInteLista.push(rnd);
    }
    console.log(jagOrkarInteLista);
    return jagOrkarInteLista;
}

jagOrkarInte(300, 50);


/* 
Skapa en funktion hittaMax som tar en array av tal som argument och
returnerar det största talet i arrayen.
*/

let extraArray4 = [50,15,39,50,2,100,3,51];

let hittaMax = (array) => {
    let current = 0, biggest = 0;
    for (let i = 0; i < array.length; i++) {
        current = array[i];
        if (current > biggest){
            biggest = current;
        }
        console.log(biggest)
    }
}

hittaMax(extraArray4);


///////////////////////
///////////////////////
///////////////////////
///////////////////////
// Genomgång del 2 ////
///////////////////////
///////////////////////

let result = 'Hello world'.toUpperCase().split(' ').reverse().join(" ");
console.log(result);



function add2(a){
    return a + 2;
}

function multiply5(a){
    return a * 5;
}

let result2 = multiply5(add2(10));
console.log(result2);
console.log(multiply5(add2(5)));