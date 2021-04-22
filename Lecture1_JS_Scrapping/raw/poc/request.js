//npm install request
// to make request to any server
const cheerio = require("cheerio");
let fs=require("fs");
const { func } = require("prop-types");
// const { throws } = require("node:assert")
let request=require("request");
request("https://www.espncricinfo.com/series/icc-cricket-world-cup-2014-15-509587",dataReciever);

function dataReciever(err,res,html){
    if(err==null&&res.statusCode==200){
    // console.log(html);
    // console.log(typeof html);
        parsefile(html);
    }else if(res.statusCode==404){
        console.log("Page not found");
    }
    else{
        console.log(err);
        console.log(res);
    }
}
function parsefile(html) {
    let $=cheerio.load(html);
    // let list=$("ul.list-unstyled.mb-0");
    // fs.writeFileSync("list.html",list.text());
    let a =$("li.widget-items.cta-link a").attr("href");
    let fulllink=`https://www.espncricinfo.com`+a;
    // console.log(fulllink);
    request(fulllink,matchPagehandler);
    
}
function matchPagehandler(err,res,html){
    if(err==null&&res.statusCode==200){
            parseMatch(html);
        }else if(res.statusCode==404){
            console.log("Page not found");
        }
        else{
            console.log(err);
            console.log(res);
        } 
}

function parseMatch(html){
    // console.log(typeof html);
    let $=cheerio.load(html);
    // let cards=$(".card content-block.league-scores-container");
    let allcards=$(".col-md-8.col-16");
    // console.log(allcards.length);
    // console.log(cards.text());
    for(let i=0;i<allcards.length;i++){

        let a=$(allcards[i]).find(".match-info-link-FIXTURES").attr("href");
        let scorecardlink=`https://www.espncricinfo.com`+a;
        console.log(scorecardlink+"\n");



        let result=$(allcards[i]).find(".status-text").text();
        let details=$(allcards[i]).find(".match-info.match-info-FIXTURES .description").text();
        // console.log(details);
        console.log("\n"+result);
        console.log("############################3\n");


    }

    // fs.writeFileSync("allcards.html",allcards);
}