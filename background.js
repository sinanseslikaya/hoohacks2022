
/**
 * seaches csv file
 * @param {string} url website url
 * @returns {string} see biasToColor(), filename for extension logo change
 */
// const newsSources = require('./media.json');
const newsSources = fetch("./media.json").then(response => response.json()).then(data => {return data});
// console.log(newsSources);
const getLogo = async (url) => {
  const source = await newsSources;
  url = url.slice(6);
    for (var site of source){
        // console.log(site.url);
        if (site.url.includes(url) || url.includes(site.url)){
            // console.log(site.url);
            return "/images/" + biasToLogo(site.bias_rating) + confidenceToLogo(site.factual_reporting_rating) + ".png";
        }
    }
    return "";
}

/**
 * Helper function for getLogo
 * @param {string} bias the bias of the provided url.
 * @return {string} political bias prefix for logo retrieval.
 */
 function biasToLogo(bias){
  bias = Number(bias);
  if (-30 <= bias  && bias < -18){return "L";}
  else if (-18 <= bias && bias  < -6) {return "LC";}
  else if (-6 <= bias && bias  < 6) {return "C";}
  else if (6 <= bias && bias < 18) {return "RC";}
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
  // console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
    
    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url) {
      setIcon(tab, tabId);
    }
  });

const setIcon = async(tab, tabId) => {
  const logo = await getLogo(tab.url);
  if (logo=='') {
      chrome.action.setIcon({path: "/images/questionMark.png", tabId : tabId});
  } else {
      chrome.action.setIcon({path: ""+logo, tabId: tabId});
  }
}