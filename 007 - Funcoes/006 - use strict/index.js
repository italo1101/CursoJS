/*
    O strict mode elimina alguns erros silenciosos que passariam batido do JavaScript
    e os faz emitir erros.
 */

//"use strict";

//Ele faz com que apareça os erros antes de rodar o código
 var arguments;

 (() => {
    teste = "teste";
 })();

 console.log(teste);