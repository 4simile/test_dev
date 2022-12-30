
var dom = document.querySelector('.sender-btns');
var addObj = document.querySelector('#gupshup-sender').parentElement.parentElement.parentElement;
cloneNode = addObj.cloneNode(true);
cloneNode.querySelector('span').innerHTML = "TITLE";
cloneNode.querySelector("#gupshup-sender").setAttribute("id", "gupshup-title");
cloneNode.querySelector("#gupshup-title").setAttribute("name", "SMS-title");
cloneNode.querySelector("#gupshup-title").setAttribute("placeholder", "Title");
dom.before(cloneNode);


cloneInput = addObj.cloneNode(true);
cloneInput.querySelector('span').innerHTML = "LMS";
cloneInput.querySelector("#gupshup-sender").setAttribute("id", "gupshup-lms");
cloneInput.querySelector("#gupshup-lms").setAttribute("name", "SMS-lms");
cloneInput.querySelector("#gupshup-lms").setAttribute("placeholder", "input word");
dom.before(cloneInput);