// content.js
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
//const Papa = require("./papaparse.min.js");
const Papa = require("papaparse");
const csvLink = "https://gist.githubusercontent.com/nsfyn55/605783ac8de36f361fb10ef187272113/raw/2a115dc6d4d8c3b14f84b12d784363ea36935e9d/media-bias-scrubbed-results.csv";

/**
 * seaches csv file
 * @param {string} url website url
 * @returns {string} see biasToColor(), filename for extension logo change
 */

function getLogo(url){
    //newsSources = $.csv.toArray(sources)
    var newsSourves = Papa.parse(csvLink,{
        download: true,
        complete: function(results){
            console.log(results);
        }
    });
    for(let i = 0; i < newsSources.getLength(); i++){
        if (newsSources[i][1].includes(url,0) || url.includes(newsSources[i][1],0)){
            return biasToLogo(newsSources[i][2]) + confidenceToLogo(newsSources[i][3]) + ".png";
        }
    }
}

/**
 * Helper function for getLogo
 * @param {string} bias the bias of the provided url.
 * @return {string} political bias prefix for logo retrieval.
 */
function biasToLogo(bias){
    bias = Number(bias);
    if (-30 <= bias <-18){return "L";}
    else if (-18 <= bias < -6) {return "LC";}
    else if (-6 <= bias < 6) {return "C";}
    else if (6 <= bias < 18) {return "RC";}
    else {return "R"}
}
/**
 * Helper function for getLogo
 * @param {*} confidence string representing the validity of the specified news source 
 * @returns color specification for logo retrieval
 */
function confidenceToLogo(confidence){
    if (confidence == "VERY HIGH") {return "Green";}
    else if (confidence == "HIGH") {return "Yellow";}
    else {return "Red";}
}

console.log(getLogo("https://aeon.co/"))
