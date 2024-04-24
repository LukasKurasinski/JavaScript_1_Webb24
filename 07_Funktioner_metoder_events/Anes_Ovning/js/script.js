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
let updatedList = false;


function addDish(){
    counter++;
    console.log('Added 1 dish to your list');
    updatedList = true;
}

function doubleDish(){
    if(counter == 1){
        console.clear();
        console.log('You have no dishes on your list');
    }
    else{ 
        counter = counter*2 - 1;
        console.log('Doubled the ammount of dishes by 2');
        updatedList = true;
    }
}

function dishCount(){
    if(counter == 1){
        console.clear();
        console.log('You have no dishes on your list');
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
        console.log('You have no dishes on your list');
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
        console.log("There are no dishes on your list");
    }
    else if(counter > 1){
        console.log('Removed 1 dish from your list');
        updatedList = true;
        counter--;
    }

}

function removeAll(){

    if(counter == 1){
        console.clear();
        console.log("There are no dishes on your list");
    }
    else{ 
        counter = 1;
        menu = "";
        updatedList = true;
        console.clear();
        console.log('Removed all dishes from your list');
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

