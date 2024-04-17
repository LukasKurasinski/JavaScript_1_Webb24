let cell = "";
let sum;

for(let i = 1; i < 6; i++){
    for(let j = 1; j < 6; j++){

        sum = i*j;
        cell = cell + "| " + sum + " |";
    }
    console.log(cell);
    cell = "";
}

console.log("\n \n");

let counter = 0;

let rem = 0;

for(let i = 1; i < 11; i++){
    for(let j = 1; j < 11; j++){

        counter = counter + 1;

        rem = counter% 2;

        if(rem != 0){
        cell = cell + " | " + counter + " | ";
        }
    }
    console.log(cell);
    cell = "";
}
