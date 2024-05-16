let blankRow = function(){
    console.log('');
}

let additive = function(x,y){

    return x+y;  
}
console.log('5 + 3 = ' + additive(5,3));

let additive2 = (x,y) =>{

    return x+y;
}
console.log('7 + 2 = ' + additive2(7,2));

blankRow();

let circleArea = function(diameter){
    radio = diameter/2;
    let area =  radio * radio * Math.PI;
    area = area.toFixed(2);
    return area;
}

console.log('Area of a cricle with 5 in diameter is ' + circleArea(5) + ' cm2');

let circleArea2 = (diameter) =>{
    radio = diameter/2;
    let area =  radio * radio * Math.PI;
    area = area.toFixed(2);
    return area;
}

console.log('Area of a cricle with 10 in diameter is ' + circleArea2(10) + ' cm2');

blankRow();

let toFahrenheit = function(celcius){
    let fahrenheit = (celcius * 1.8) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    return fahrenheit;
}

console.log('30 degrees Celcius is ' + toFahrenheit(30) + ' degrees Fahrenheit');

let toFahrenheit2 = (celcius) =>{
    let fahrenheit = (celcius * 1.8) + 32;
    fahrenheit = fahrenheit.toFixed(2);
    return fahrenheit;
}

console.log('13 degrees Celcius is ' + toFahrenheit2(13) + ' degrees Fahrenheit');

blankRow();

let squareRoot = function(x){
    return Math.sqrt(x);
}

console.log('Square root of 144 is ' + squareRoot(144));

let squareRoot2 = (x) =>{
    return Math.sqrt(x);
}

console.log('Square root of 625 is ' + squareRoot2(625));

blankRow();

let uppercase = function(){
    let text = 'hello world';
    let upper = text.toUpperCase();
    return upper;
}

console.log(uppercase());

let uppercase2 = () =>{
    let text = 'greetings world';
    let upper = text.toUpperCase();
    return upper;
}

console.log(uppercase2());

blankRow();

let double = (x) =>{
    return x*2;
}

console.log('7 * 2 = ' + double(7));

blankRow();

let array = [1,7,3,9,5,7,2,5,4,7];

let findElement = function(x){
    let foundElement = false;
    for (i = 0; i< array.length; i++){
        if(array[i] == x){
            foundElement = true;
        }
    }
    return foundElement;
}

let findElement2 = (x)=>{
    let foundElement = false;
    for (i = 0; i< array.length; i++){
        if(array[i] == x){
            foundElement = true;
        }
    }
    return foundElement;
}

console.log(array);
console.log("Is number 7 in the array: " + findElement(7));
console.log("Is number 3 in the array: " + findElement(6));

blankRow();

let regularArray = [1,2,3,4,5,6,7,8,9];

let doubleArray = function(x){
    let temp = 0;

    for(let i = 0; i< regularArray.length; i++){
        temp = regularArray[i];
        temp = temp * 2;
        regularArray[i] = temp; 
    }
    return regularArray;
}


console.log(regularArray);
console.log(doubleArray());
console.log(doubleArray());
console.log(doubleArray());
console.log(doubleArray());
console.log(doubleArray());


let loadApi = function(){
    fetch('https://randomuser.me/api/')
    .then(response =>{
        if(!response.ok){
            throw new Error('Something went wrong -' + response.status);
        }
        return response.json();
    })
    .then(data => {
        //console.log('Data recieved:', data);
        return data;
    })
    .catch(error =>{
        console.error('Fetch error', error);
    });
}

//console.log(loadApi());

function loadApiJoke(){

let apiJoke = loadApi('https://randomuser.me/api/');
let body = document.getElementById("body");
let textJoke = document.createElement('p');

body.appendChild(textJoke);
}

loadApiJoke();