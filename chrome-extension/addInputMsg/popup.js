// Initialize button with users' preferred color
let addInputTit = document.getElementById("inputTit");
let btnAdd = document.getElementById("btnAdd");
chrome.storage.sync.get("inputTit", ({ inputTit }) => {
  console.log({ inputTit });
});

// When the button is clicked, inject setPageBackgroundColor into current page
btnAdd.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: fn_addInputTit,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function fn_addInputTit() {
  alert("aaaa");
  const element = addInputTit.content.firstElementChild.cloneNode(true);
  element.querySelector("#gupshup-sender").textContent = "ddd";

  chrome.storage.sync.get("addInputTit", ({}) => {
  });
  // const str = "<input type='text' value='"+inputTit.vaue+"' />"
  document.getElementById("gupshup-sender").value = "test";
}
