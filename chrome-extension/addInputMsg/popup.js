// const inputTit = document.querySelector('#inputTit');
// const onInput = (event) => {
//   newWord = event.target.value; 
// };
// inputTit.addEventListener('input', onInput);

// console.log(onInput);

// const val2 = document.querySelector('#inputCont').value;
// const vals = {"val1":val1, "val2":val2};
function fn_addInput(e) {
  chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
    chrome.scripting.executeScript(
      {
        target: {tabId: tab.id},
        files: ['default.js'],
        // args : vals
        // function: () => {}, // files or function, both do not work.
      })
  })
}
document.addEventListener('DOMContentLoaded',function(){
  var compBtnAddInput = document.querySelector('#btnAdd');
  compBtnAddInput.addEventListener("click",fn_addInput);
});
