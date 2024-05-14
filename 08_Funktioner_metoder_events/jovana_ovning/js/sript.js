//hämta body från html
let body = document.getElementById("body");

//style border
body.style.border = "1px gray solid";

//skapa navbar
function createNavbar(){
    let nav = document.createElement("nav");
    body.appendChild(nav);
}

function makeHeaderOne(text=""){
    let h1 = document.createElement("h1", id="");
    h1.innerText = text;
    h1.setAttribute("id", id);
    //returnera resultat 
    return h1;
}

function makeHeaderTwo(text=""){
    let h2 = document.createElement("h2", id="");
    h2.innerText = text;
    h2.setAttribute("id", id);
    //returnera resultat 
    return h2;
}

function makeTable(rowCount, colCount){
    //table, table rows table header, table data
    let table = document.createElement("table");

    //row
    for (let row = 0; row < rowCount; row++) {
        let tableRow = document.createElement("tr");
        table.appendChild(tableRow);
        
        //col
        for (let col = 0; col < colCount; col++){
            if (row ===0) {
               let tableHead = document.createElement("th");
               tableHead.setAttribute("id", row + ":" + col);
               tableHead.innerText = row + ":" + col;
               tableRow.appendChild(tableHead);
            }else{
               let td = document.createElement("td");
               //skapar "id" genom JS trots att det ej finns i HTML - genom setAttribute - manipulera
               td.setAttribute("id", row + ":" + col);//<--konkatenering addera = "0:0"
               td.innerText = row + ":" + col;
               tableRow.appendChild(td);  
            }
            
    }

    }
    return table;
}

function makeArticle(id, cls){//cls= class
    let article = document.createElement("article");
    //sätta ett värde
    article.setAttribute("id", id);
    article.setAttribute("class", cls);
    return article;
}

//building webpage

//alla anrop - exekvering - bygger vår hemsida i viss ordning - symantik
createNavbar();
body.appendChild(makeHeaderOne("08_JS - h1", "h1"));
body.appendChild(makeHeaderTwo("Table with table rows, headers and rows - h2", "h2"));
//5= rows - neråt , 8= colums - från vänster till höger
body.appendChild(makeTable(5,8));

let article1 = makeArticle("article_1", "articles");
article1.appendChild(makeHeaderOne("", ""));
body.appendChild(article1);

let article2 = makeArticle("article_2", "articles");
article2.appendChild(makeHeaderOne("", ""));
body.appendChild(article2);
