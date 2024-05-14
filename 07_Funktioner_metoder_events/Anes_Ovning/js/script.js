//Scope exempel

function outerFunc(){
    let num = 10;
    function innerFunc(){
        console.log(num);
    }
    return innerFunc;
}

let closureEx = outerFunc();
closureEx();

console.clear();

//Övning 1

let counter = 1;
let totalCount = 0;
let updatedList = false;
document.getElementById("counter").innerText = 'Dish count: ' + totalCount;


function addDish(){
    counter++;
    totalCount++;
    document.getElementById("counter").innerText = 'Dish count: ' + totalCount;
    console.log('Added 1 dish to your list');
    updatedList = true;
}

function doubleDish(){
    if(counter == 1){
        console.clear();
        console.error('You have no dishes on your list');
    }
    else{ 
        counter = counter*2 - 1;
        totalCount = totalCount*2;
        document.getElementById("counter").innerText = 'Dish count: ' + totalCount;
        console.log('Doubled the ammount of dishes by 2');
        updatedList = true;
    }
}

function powerDish(){
    if(counter == 1){
        console.clear();
        console.error('You have no dishes on your list');
    }
    else{ 
        counter = counter * counter - 1;
        totalCount = totalCount * totalCount;
        document.getElementById("counter").innerText = 'Dish count: ' + totalCount;
        console.log('The ammount of dishes have increased exponentially');
        updatedList = true;
    }
}

function dishCount(){
    if(counter == 1){
        console.clear();
        console.error('You have no dishes on your list');
    }
    else if(counter == 2){
        console.clear();
        console.log('You have 1 dish');
    }
    else{ 
        console.clear();
        console.log('You have ' + (counter-1) + ' dishes');
    }
}

function showAll(){

    if(counter == 1){
        console.clear();
        console.error('You have no dishes on your list');
    }
    else if(updatedList == true){ 

        console.clear();

        for(let i = 1; i < counter; i++){
            console.log("Dish " + ` ${i}`);
        }

        updatedList = false;
    }
}

function removeDish(){
    if(counter == 1){
        console.clear();
        console.error("There are no dishes on your list");
    }
    else if(counter > 1){
        console.warn('Removed 1 dish from your list');
        updatedList = true;
        counter--;
        totalCount--;
        document.getElementById("counter").innerText = 'Dish count: ' + totalCount;
    }

}

function removeAll(){

    if(counter == 1){
        console.clear();
        console.error("There are no dishes on your list");
    }
    else{ 
        counter = 1;
        totalCount = 0;
        document.getElementById("counter").innerText = 'Dish count: ' + totalCount;
        menu = "";
        updatedList = true;
        console.clear();
        console.warn('Removed all dishes from your list');
    }
}


function addUserInputParagraph(){
    let userInput = document.getElementById('userInput');
    let userInputText = userInput.value;
    let newParagraph = document.createElement("p");
    newParagraph.innerText = userInputText;
    
    let body = document.querySelector('body');
    body.appendChild(newParagraph);
}

function changeColor(){
    let body = document.querySelector('body');
    body.style.backgroundColor = "red";
}

