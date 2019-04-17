"use strict"

var button = document.querySelector('.get-started');

button.addEventListener("click", function() {
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    
    xhr.open('GET', 'https://ea53a3b1.ngrok.io/request_page/', true);

    xhr.onload = function() {
        alert( this.responseText );
    }

    xhr.onerror = function() {
        alert( 'Ошибка ' + this.status );
    }

    xhr.send();
}) 
