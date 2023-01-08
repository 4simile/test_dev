window.onload = () => {
    var dom = document.querySelector('.sender-btns');
    var addObj = document.querySelector('#gupshup-sender').parentElement.parentElement.parentElement;
    cloneInputTit = addObj.cloneNode(true);
    cloneInputTit.querySelector('span').innerHTML = "Title";
    cloneInputTit.querySelector("#gupshup-sender").setAttribute("id", "gupshup-title");
    cloneInputTit.querySelector("#gupshup-title").setAttribute("name", "SMS-title");
    cloneInputTit.querySelector("#gupshup-title").setAttribute("placeholder", "Title");
    cloneInputTit.querySelector("#gupshup-title").setAttribute("value", " ");
    cloneInputTit.querySelector("#gupshup-title").value = " ";
    dom.before(cloneInputTit);
    
    
    cloneInputLms = addObj.cloneNode(true);
    cloneInputLms.querySelector('span').innerHTML = "Lms";
    cloneInputLms.querySelector("#gupshup-sender").setAttribute("id", "gupshup-lms");
    cloneInputLms.querySelector("#gupshup-lms").setAttribute("name", "SMS-lms");
    cloneInputLms.querySelector("#gupshup-lms").setAttribute("placeholder", "input word");
    cloneInputLms.querySelector("#gupshup-lms").setAttribute("value", " ");
    cloneInputLms.querySelector("#gupshup-lms").value = " ";
    dom.before(cloneInputLms);
}

