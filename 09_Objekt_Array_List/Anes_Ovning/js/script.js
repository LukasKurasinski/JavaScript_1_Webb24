//Array and lists

let myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray);
console.log('My array length is ' + myArray.length);

//Define length variable

let lengd = myArray.length;
console.log('My array length is ' + lengd);

//Get value at index 0

let firstIndex = myArray[0];
console.log('First index has the value ' + firstIndex);

let lastIndex = myArray[lengd-1];
console.log('Last index has the value ' + lastIndex);

//Push()

myArray.push('10');
console.log(myArray);
console.log('My array length is',lengd = myArray.length);

//pop()

let deletedLastIndex = myArray.pop();
console.log(myArray);
console.log('Last element deleted ' + myArray);
console.log('The deleted index value is ' + deletedLastIndex);

let newValue = 100;
myArray.push(newValue);
console.log(myArray);

//For loop with push() pop()

console.log('');
console.log('');

for(let index = 0; index <= myArray.length-1; index++){
    console.log('We are on index ' + index);
    console.log('Value is: ' + myArray[index]);
}

//For loop that prints out values backwards;

console.log('');
console.log('');

for(let index = myArray.length-1; index >= 0; index--){
    console.log('We are on index ' + index);
    console.log('Value is: ' + myArray[index]);
}

//0 ubdex and length-1 index is the same
let array1 = ['B'];

//Double for loop array


function changeMatrixSize(){

let slider = document.getElementById("slider")

    
let rows = slider.value;
let cols = slider.value;
let matrix = [];

for(let i = 0; i < rows; i++){
    let row = [];
    for(let j = 0; j < cols; j++){
        row.push(j);
    }
    matrix.push(row);
}
console.log(matrix);
}

//Splice()

console.log(myArray);
myArray.splice(0,2,0,0);
console.log(myArray);

//Slice()

myArray.slice(0,3);
console.log(myArray);

//While

let i = 0;
let j = 0;

while(i < 10){
    console.log(i);
    i++;
}


do{
    console.log(j);
    j++;
}   while(j < 0);

let isRunning = false;
let count = 0;
let increment = 1;

while(isRunning == true){
    console.log(count);
    count = count + increment;

}

function forwards(){
    increment = 1;
}

function backwards(){
    increment = -1;
}

function stop(){
    isRunning = false;
}

setInterval(count, 1000);