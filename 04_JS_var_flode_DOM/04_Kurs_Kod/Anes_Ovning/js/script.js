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