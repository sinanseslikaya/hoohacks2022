chrome.tabs.query({
  active: true,
  currentWindow: true
}, ([currentTab]) => {
  console.log(currentTab.id);
});