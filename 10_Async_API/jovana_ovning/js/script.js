function writeName (){
    console.log("Jovana");
}
writeName();

function area (height,width){
    return height * width;
};

let annonymArea = function(height,width){
    return height * width;
};

console.log(annonymArea(5,5));

let arrowArea = (height,width) => {
    return height * width;
};

console.log(arrowArea(2,3));



function sum(a,b){
    return a + b;
};

let result = sum(1,1)
console.log("Sum is", result);

let celcToFahr = (c) => {
    return (c * 9/5) + 32;
}

console.log(celcToFahr(35));

let fahrToCelc = (f) => {
    return ((f-32) * 5) /9;
}

console.log(fahrToCelc(95));

/*Skapa en funktion hittaMax som tar en array av tal som argument och
returnerar det största talet i arrayen.*/

let hittMax = (listOfNummber) => {
    console.log(listOfNummber);
    let temp = listOfNummber[0];
    console.log(temp)

    for(let i = 1; i < listOfNummber.length; i++) {
        console.log("temp value=" + temp);
        if(listOfNummber[i] > temp){
            console.log("current value" + listOfNummber[i] +">" + temp);
            temp = listOfNummber[i];
        }else{
            console.log("current value" + listOfNummber[i] +"<=" + temp);
        }
    }
    return temp;
}
    let randomList = [878,8327,34,985,398,983,975,4];
    hittMax(randomList);

    let createRandomList = (listLenght, maxValue) => {
        let outList = [];
        for (let i = 0; i < listLenght; i ++) {
            let rand = Math.floor(Math.random()*25);
            outList.push(rand);
        }
        return outList;
    }
    console.log(createRandomList(10,25));

    function add2(a){
        return a+2;
    }

    function multipy5(a){
        return a*5;
    }

    let resultat = multipy5(add2(10));

    console.log(resultat);

    let text = "this is a text".toLocaleUpperCase();
    let textReplace = text.replace(" ","");
    let textReverse = textReplace.concat("new text added");
    console.log(textReplace);

    let text2 ="this is another text".toLocaleUpperCase().replace("THIS","that").concat("new text added");
    console.log(text2)

    
