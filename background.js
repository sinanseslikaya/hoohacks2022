// background.js

let color = '#3aa757';
let durl = 'https://www.dailymail.co.uk/ushome/index.html';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// chrome.tabs.onUpdated.addListener(function
//   (tabId, changeInfo, tab) {
//     console.log("here")
//     // read changeInfo data and do something with it (like read the url)
//     if (changeInfo.url) {
//       // do something here
//       if (activeTab.url == durl) {
//         console.log("daily mail detected");
//         chrome.browserAction.setIcon({ path: "/images/green.png" });
//       }
//       else {
//         chrome.browserAction.setIcon({ path: "/images/white.png" });
//       }

//     }
//   }
chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];
    console.log(tab.url);
    // alert(tab.url);
});

// chrome.runtime.onMessageExternal.addListener(function(url, sender) {
// if (sender.url == url) {

//     chrome.browserAction.setIcon({ path: "/images/green.png" });
// }

// else {
//     chrome.browserAction.setIcon({ path: "/images/white.png" });
// }

// });