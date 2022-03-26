//matches.js
/**
 * seaches csv file
 * @param {string} url website url
 * @returns {string} see biasToColor(), filename for extension logo change
 */
const newsSources = require('./media.json');
// console.log(newsSources);
export function getLogo(url){
    for (var site of newsSources){
        // console.log(site.url);
        if (site.url.includes(url) || url.includes(site.url)){
            // console.log(site.url);
            return "/images/" + biasToLogo(site.bias_rating) + confidenceToLogo(site.factual_reporting_rating) + ".png";
        }
    }
}

/**
 * Helper function for getLogo
 * @param {string} bias the bias of the provided url.
 * @return {string} political bias prefix for logo retrieval.
 */
export function biasToLogo(bias){
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
export function confidenceToLogo(confidence){
    if (confidence == "VERY HIGH") {return "Green";}
    else if (confidence == "HIGH") {return "Yellow";}
    else {return "Red";}
}
