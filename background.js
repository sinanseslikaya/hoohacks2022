// background.js

let color = '#3aa757';
let durl = 'https://www.dailymail.co.uk/ushome/index.html';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.tabs.onUpdated.addListener(function
  (tabId, changeInfo, tab) {
    
    // read changeInfo data and do something with it (like read the url)
    if (changeInfo.url) {
      // console.log("here in changeInfo.url")
      // do something here
      // console.log(tab.url);
      if (tab.url == durl) {
        // console.log("daily mail detected");
        chrome.action.setIcon({path: "/images/RRed.png", tabId :tabId});
      }
      else {
        chrome.action.setIcon({path: "/images/CGreen.png", tabId :tabId});
        // chrome.pageAction.setIcon({ path: "/images/white.png", tabId: tabId});
      }
    
    }
  });
