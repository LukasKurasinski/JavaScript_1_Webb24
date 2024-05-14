let car = {
    wheelscount: 4,
    doorcount: 2,
    regNumber: "abc123",
    items: ["groceries", "spare wheel", "jack", "blanket"],
    driver: {name:"Adam", driversLicense: ["A","B","C"]}
}

// Get data with dot    objektNamn.värde
console.log(car.wheelscount);

// Get data with []  -  objektName["värde"]
console.log(car["regNumber"]);

// add value to an object
console.log(car);
car["fueltype"] = "bensin";
console.log(car);

// change property value 
car["fueltype"] = "diesel";
console.log(car);

// typo error, creates new property instead of changing property
car["doorCount"] = 4;
console.log(car);

// Go through a list
for (let i = 0; i < car.items.length; i++) {
    console.log(car.items[i]);
}

// Get inner objects value
console.log(car.driver.name);
console.log(car["driver"]["driversLicense"][0]);
console.log(car.driver.driversLicense[1]);

// functions with objects
function getDriver(objekt){
    return objekt.driver;
}

// Getting driver property from car object
console.log(getDriver(car));

// Getting a list from an object
let objektItems = car.items;
console.log(objektItems)



// Övning 8 
function taBortDuplicerade(arr) {
    arr.sort();
    for (let i = arr.length-1; i > 0; i--){
        for (let j = i-1; j >= 0; j--){
            if(arr[i] === arr[j]){
                //splice(start, deleteCount)
                arr.splice(j,1);
            }
        }
    }
    return arr;
}
let testAray = [1,2,3,4,5,6,2,2,4,8];
console.log(testAray);
console.log(taBortDuplicerade(testAray));





// Ny lektion med klasser och sådant

