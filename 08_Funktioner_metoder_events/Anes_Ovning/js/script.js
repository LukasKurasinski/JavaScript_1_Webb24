console.log(" Multiplikationstabell 5x5");

console.log("\n \n");



let cell = "";
let sum;

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        sum = i * j;
        if (sum < 10) {
            cell = cell + " | " + "0" + sum + " | ";
        }
        else {
            cell = cell + " | " + sum + " | ";
        }
    }
    console.log(cell);
    cell = "";
}

console.log("\n \n");

console.log(" Udda tal mellan 1-100");

console.log("\n \n");

let counter = 0;

let rem = 0;

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {

        counter = counter + 1;

        rem = counter % 2;

        if (rem != 0) {
            if (counter < 10) {
                cell = cell + " | " + "0" + counter + " | ";
            }
            else {
                cell = cell + " | " + counter + " | ";
            }
        }
    }
    console.log(cell);
    cell = "";
}



//


let documentBody = document.getElementById("body");
let atLimit = false;

function createTable() {

    let table = document.createElement("table");
    table.style.border = "1px solid black";
    table.style.borderSpacing = "2px";
    table.style.width = "25px";
    table.style.display = "table";
    table.style.borderCollapse = "separate";
    table.style.textIndent = "initial";
    table.style.width = "80%";
    table.style.marginRight = "auto";
    table.style.marginLeft = "auto";

    let rowCount = 5;
    let colCount = 5;

    for (let row = 0; row < rowCount; row++) {

        let tableRow = document.createElement("tr");
        tableRow.style.border = "1px solid black";
        tableRow.style.width = "5px";
        table.appendChild(tableRow);

        for (let col = 0; col < colCount; col++) {


            let tableData = document.createElement("td");
            tableData.setAttribute("id", `${row}${col}`);
            tableData.innerText = col;
            tableData.style.display = "table-cell";
            tableData.style.verticalAlign = "inherit";
            tableData.style.border = "1px solid gray";

            tableRow.appendChild(tableData);
        }

    }

    documentBody.appendChild(table);

    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            document.getElementById(`${row}${col}`).innerText = row + "" + col;
        }
    }

}
//

function createImage() {
    let image = document.createElement("header");
    image.style.height = "200px";
    image.style.border = "2px solid black";

    documentBody.appendChild(image);

}
//

function createNavbar() {
    let nav = document.createElement('nav');
    documentBody.appendChild(nav);
}

function createHeaders() {

    let listOfHeaders = document.createElement("div");
    listOfHeaders.style.backgroundColor = "antiquewhite";
    listOfHeaders.style.border = "1px solid gray";
    listOfHeaders.style.width = "80%";
    listOfHeaders.style.marginLeft = "auto";
    listOfHeaders.style.marginRight = "auto";
    listOfHeaders.style.textAlign = "center";

    documentBody.appendChild(listOfHeaders);

    let nmbrOfHeaders = 10;

    for (let count = 0; count < nmbrOfHeaders; count++) {

        if (count == 0) {
            let header = document.createElement("h1");
            header.innerText = "08_JS";
            listOfHeaders.appendChild(header);
        }

        else {
            let header = document.createElement("h1");
            header.innerText = count;
            header.style.border = "1px solid gray";
            listOfHeaders.appendChild(header);
        }
    }
}
function createHeaderTwo() {
    let greenH2 = document.createElement("h2");
    greenH2.style.backgroundColor = "aquamarine";
    greenH2.style.border = "1px solid gray";
    greenH2.style.width = "80%";
    greenH2.style.marginTop = "10vh";
    greenH2.style.marginLeft = "auto";
    greenH2.style.marginRight = "auto";
    greenH2.style.textAlign = "center";
    greenH2.style.display = "block";

    greenH2.innerText = "Table with table rows, headers, and rows"

    documentBody.appendChild(greenH2);

}

//

function createArticleOne() {

    let article1 = document.createElement("article");

    article1.style.display = "block";
    article1.style.width = "60%";
    article1.style.marginLeft = "auto";
    article1.style.marginRight = "auto";
    article1.style.marginTop = "20px";
    article1.style.backgroundColor = "aliceblue";
    article1.style.border = "1px solid gray";
    article1.setAttribute("id", "Article1");


    documentBody.appendChild(article1);

    let firstH1 = document.createElement("h1");
    firstH1.style.backgroundColor = "antiquewhite";
    firstH1.style.textAlign = "center";
    firstH1.style.width = "80%";
    firstH1.style.marginRight = "auto";
    firstH1.style.marginLeft = "auto";
    firstH1.style.fontSize = "1.5em";
    firstH1.style.border = "1px solid gray";
    firstH1.innerText = "This is the first article";

    article1.appendChild(firstH1);

    let lorem1 = document.createElement("p");
    lorem1.style.border = "1px solid gray";
    lorem1.style.width = "60%";
    lorem1.style.display = "block";
    lorem1.style.marginRight = "auto";
    lorem1.style.marginLeft = "auto";
    lorem1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    article1.appendChild(lorem1);


    let lorem2 = document.createElement("p");
    lorem2.style.border = "1px solid gray";
    lorem2.style.width = "60%";
    lorem2.style.display = "block";
    lorem2.style.marginRight = "auto";
    lorem2.style.marginLeft = "auto";
    lorem2.innerText = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    article1.appendChild(lorem2);

}

//

function createArticleTwo() {

    let article2 = document.createElement("article");

    article2.style.display = "block";
    article2.style.border = "1px solid gray";
    article2.style.backgroundColor = "rgb(223,240,176)";
    article2.style.width = "60%";
    article2.style.marginLeft = "auto";
    article2.style.marginRight = "auto";
    article2.style.marginTop = "20px";
    article2.setAttribute("id", "Article2");


    documentBody.appendChild(article2);

    let secondH1 = document.createElement("h1");
    secondH1.style.backgroundColor = "antiquewhite";
    secondH1.style.textAlign = "center";
    secondH1.style.width = "80%";
    secondH1.style.marginRight = "auto";
    secondH1.style.marginLeft = "auto";
    secondH1.style.fontSize = "1.5em";
    secondH1.style.border = "1px solid gray";
    secondH1.innerText = "This is the second article";

    article2.appendChild(secondH1);


    let lorem3 = document.createElement("p");
    lorem3.style.border = "1px solid gray";
    lorem3.style.width = "60%";
    lorem3.style.display = "block";
    lorem3.style.marginRight = "auto";
    lorem3.style.marginLeft = "auto";
    lorem3.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    article2.appendChild(lorem3);


    let lorem4 = document.createElement("p");
    lorem4.style.border = "1px solid gray";
    lorem4.style.width = "60%";
    lorem4.style.display = "block";
    lorem4.style.marginRight = "auto";
    lorem4.style.marginLeft = "auto";
    lorem4.innerText = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    article2.appendChild(lorem4);

}

function makeHeaderOne(text = "", id=""){
    let h1 = document.createElement("h1");
    h1.innerText = text;
    h1.setAttribute("id", id)
    return h1;
}

function makeHeaderTwo(text = "", id=""){
    let h2 = document.createElement("h2");
    h2.innerText = text;
    h2.setAttribute("id", id)
    return h2;
}

function makeTable(rowCount, colCount){

    let table = document.createElement("table");

    //row
    for(let row = 0; row < rowCount.length; row++){

        let tr = document.createElement("tr");
        table.appendChild(tr);

        //col
        for(let col; col < colCount.length; col++){
            if(row === 0){

                let th = document.createElement("th");
                th.setAttribute("id", row + ":" + col);
                th.innerText = row + ':' + col;
                tr.appendChild(th);
            }
            else{
                let td = document.createElement("td");
                td.setAttribute("id", row + ":" + col);
                td.innerText = row + ':' + col;
                tr.appendChild(td);
            } 
        }   
    }
    return table;
}


function makeArticle(articleId, cls){
    let article = document.createElement("article");
    article.setAttribute('id', articleId);
    article.setAttribute('class',cls);
    return article;
}

function makeParagraph(text,id){
    let p = document.createElement('p');
    p.innerText = text;
    p.setAttribute('id', id);
    return p;
}


//Building webpage

function buildPage(){


    if(atLimit === false){ 

    console.clear();
    console.warn('Page has been built');

createImage();
createHeaders();
createHeaderTwo();
createTable();
createArticleOne();
createArticleTwo();


makeHeaderOne();
documentBody.appendChild(makeHeaderOne("08_JS_var_flode_DOM" , "h1"));

makeHeaderTwo();
documentBody.appendChild(makeHeaderTwo("Table with table rows, headers, and rows"));

let table = makeTable(5,5);
documentBody.appendChild(table);

createTable();


let article1 = makeArticle("article_1", "articles");
article1.appendChild(makeHeaderTwo("This is header 1",""));
article1.appendChild(makeParagraph('This is paragraph 1', ''));
article1.appendChild(makeParagraph('This is paragraph 2', ''));
documentBody.appendChild(article1);

let article2 = makeArticle("article_2", "articles");
article2.appendChild(makeHeaderTwo("This is header 2",""));
article2.appendChild(makeParagraph('This is paragraph 1', ''));
article2.appendChild(makeParagraph('This is paragraph 2', ''));
documentBody.appendChild(article2);
atLimit = true;

 }

    else if(limit == true){
        console.clear();
        console.error("Webpage can only be built once!");
    }

}

function clearPage(){
    let button1 = document.getElementById("pageBuilder");
    let button2 = document.getElementById("pageClearer");
    let script = document.getElementById("script");
    documentBody.replaceChildren();

    console.clear();
    console.error("Page has been cleared");

    documentBody.appendChild(button1);
    documentBody.appendChild(button2);
    documentBody.appendChild(script);
    atLimit = false;
}


let button1FLag = false;
let button2FLag = true;
let button3FLag = true;
let button4FLag = false;

let b1 = document.getElementById("button1");
let b2 = document.getElementById("button2");
let b3 = document.getElementById("button3");
let b4 = document.getElementById("button4");

function button1(){
    if(button2FLag == true || button3FLag == true){
        b1.style.backgroundColor = "yellow";
        b2.style.backgroundColor = "green";
        b3.style.backgroundColor = "green";
        b4.style.backgroundColor = "red";

    }
}

