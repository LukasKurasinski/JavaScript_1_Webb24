console.log("Multiplikationstabell 5x5");

console.log("\n \n");



let cell = "";
let sum;

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= 5; j++){
    sum = i*j;
    if(sum < 10){
        cell = cell + "| " + "0" + sum + " |"; 
    }
    else{
        cell = cell + "| " + sum + " |";
    }
    }
    console.log(cell);
    cell = "";
}

console.log("\n \n");

console.log("Udda tal mellan 1-100");

console.log("\n \n");

let counter = 0;

let rem = 0;

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){

        counter = counter + 1;

        rem = counter% 2;

        if(rem != 0){
            if(counter < 10){
        cell = cell + " | " + "0" + counter + " | ";
        }
        else{
            cell = cell + " | " + counter + " | ";
        } 
    }
    }
    console.log(cell);
    cell = "";
}
