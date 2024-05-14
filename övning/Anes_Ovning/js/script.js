//Övning 1

let arrayOne = [1,2,3,4];

console.log (arrayOne);

function summeraArray(){ 

arrayOne.push(5);
console.log(arrayOne);
}
console.log("");
summeraArray();
//Övning 2

arrayTwo = [1,3,9,7,5];

console.log(arrayTwo);

function hittaStörsta(){
    let maxNumber;

    maxNumber = Math.max(...arrayTwo);

    console.log(maxNumber);
}
hittaStörsta();
console.log("");

//Ovning 3

let arrayThree = [1,-3,-4,6,9];

console.log(arrayThree);

function filtreraPositiva(){
    let positiv = [];
    for(let i = 0; i < arrayThree.length; i++){
        if(i < arrayThree[i]){
            positiv.push(arrayThree[i]);
        }
    }

    console.log(positiv);
}

filtreraPositiva();
console.log("");

//Ovning 4

let arrayFour = [2,4,2,2,4];

console.log(arrayFour);

function ärAllaJämna(){
    let jämna = false;
    for(let i = 0; i < arrayFour.length; i++){
        if(arrayFour[i]%2 == 0){
            jämna = true;
        }
        else if(arrayFour[i]%2 != 0){
            jämna = false;
            break;
        }
    }

    console.log(jämna);
}

ärAllaJämna();
console.log("");

//Ovning 5

let arrayFive = [1,2,3,4,5];

console.log(arrayFive);

function doubleArray(){
    for(let i = 0; i < arrayFive.length; i++){
        arrayFive[i] = arrayFive[i]*2;
    }
    console.log(arrayFive);
}

doubleArray();
doubleArray();
doubleArray();
console.log("");

//Ovning 7

let arraySeven = [2,4,5,2,2];

console.log(arraySeven)

function räknaFörekomster(){
    let ammountOfTwos = 0;

    for(let i = 0; i < arraySeven.length; i++){
        if(arraySeven[i] == 2){
            ammountOfTwos++;
        }
    }
    console.log(ammountOfTwos);
}

räknaFörekomster();
