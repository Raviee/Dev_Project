let fs=require("fs");
let html=fs.readFileSync("../facts/index.html","utf-8");
// console.log(html);
let cheerio=require("cheerio");
let $=cheerio.load(html);

//to select element from the page
let p=$("p");


//to get text 
let pkaData=p.text();
// console.log(pkaData);

//to return array of all the elements
let a=$("a");

//print the content of all anchors
// console.log(a.text());

//select element that is inside another element
let ulkap=$("ul p");
// console.log(ulkap.text());

//select a class
let classelement=$(".first-para");
// console.log(classelement.text());

//select all element with para class
let allelement=$(".para");
// console.log(allelement.text());

//select a element with both classes in it
let combinedelement=$(".para.first-para");
// console.log(combinedelement.text());

//select element on the basis of Id
let name=$("#unique");
// console.log(name.text());