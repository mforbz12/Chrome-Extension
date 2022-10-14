chrome.action.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null,{file:"main.js"})
  // console.log(tab.url);
});
