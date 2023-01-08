// function fn_addInput(e) {
//   chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
//     chrome.scripting.executeScript(
//       {
//         target: {tabId: tab.id},
//         files: ['default.js'],
//         // args : vals
//         // function: () => {}, // files or function, both do not work.
//       })
//   })
// }
// document.addEventListener('DOMContentLoaded',function(){
//   var compBtnAddInput = document.querySelector('#btnAdd');
//   compBtnAddInput.addEventListener("click",fn_addInput);
// });


let addInputTit = document.getElementById("inputTit");
let btnAdd = document.getElementById("btnAdd");
chrome.storage.sync.get("inputTit", ({ inputTit }) => {
  console.log({ inputTit });
});

btnAdd.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: fn_addInputTit,
  });
});

function fn_addInputTit() {
  alert("aaaa");
  const element = addInputTit.content.firstElementChild.cloneNode(true);
  element.querySelector("#gupshup-sender").textContent = "ddd";

  chrome.storage.sync.get("addInputTit", ({}) => {
  });
  document.getElementById("gupshup-sender").value = "test";
}