// background.js



let color = '#3aa757';
let durl = 'https://www.dailymail.co.uk/ushome/index.html';

//matches.js
/**
 * seaches csv file
 * @param {string} url website url
 * @returns {string} see biasToColor(), filename for extension logo change
 */
const newsSources = require('./media.json');
// console.log(newsSources);
function getLogo(url){
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


chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
    
    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url) {
      // let logo = '';
      // import('./matches.js')
      // .then((ns) => {
      //     logo = ns.getLogo(tab.url);
      //     // ns.getLogo();
      // })


      // if (tab.url == durl) {
      //   // console.log("daily mail detected");
      //   chrome.action.setIcon({path: "/images/white.png", tabId :tabId});
      // }
      // else {
      //   chrome.action.setIcon({path: "/images/green.png", tabId :tabId});
      // }
      let logo = getLogo(tab.url);
      console.log(logo);
      if (logo=='') {
          chrome.action.setIcon({path: "/images/green.png", tabId : tabId});
      } else {
          chrome.action.setIcon({path: logo, tabId: tabId});
      }
    }
  });
