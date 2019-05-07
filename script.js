"use strict"

var startButton = document.querySelector('.get-started');

startButton.addEventListener("click", function() {
    // Когда форма еще не работала здесь посылался get запрос на локалхост с ngrok
    // и django, где запускалась однопользовательская логика приложения с заранее помещенными файлами

    // var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    // var xhr = new XHR();
    // xhr.open('GET', 'https://18dd36e1.ngrok.io/request_page/', true);
    // xhr.onload = function() {
    //     alert( this.responseText );
    // }
    // xhr.onerror = function() {
    //     alert( 'Ошибка ' + this.status );
    // }
    // xhr.send();
}) 
