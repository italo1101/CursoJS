/*
    
    
    
    
*/

// 1 - Nome de função

function nomeFunction(){
    return "italo";
}

console.log(nomeFunction());

const nomeFunctionArrow = () => {
    return "italo"
}

console.log(nomeFunctionArrow());

// 2 - Retorno

const nomeFunctionArrowReturn = () => "Italo";

console.log(nomeFunctionArrowReturn());

// 3 - Arrow não tem Hoisting

// Vai dar erro: 

// console.log(nomeFunctionArrowHoisting());
// const nomeFunctionArrowHoisting = () => {
//     return "italo";
// }

// 4 - Arrow Functions não tem Arguments

// Vai dar erro

// const nomeFunctionArrowArguments = () => {
//     return arguments;
// }

// console.log(nomeFunctionArrowArguments());

/*
    5 - Não pode ser invocada com New
*/

// em function normal funciona

function novaFunc(){
    return console.log(123);
}

new novaFunc();

// em arrow function dá erro

// const novaFuncArrow = () => {
//     return console.log(123);
// };

// new novaFuncArrow();

/*
    6 - Contexto

    Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.

    Isso significa que arrow functions herdam o contexto local de onde foi declarado,
    enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
    no momento da chamada.

    Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente
    como o contexto global, que no caso dos navegadores é window.
*/

// Criando uma função normal
function normalFunction(){
    console.log(this.number);
}

// Criando um Objeto onde ele tem um número e vai chamar o this da função normal
const number = {
    number: 25,
    method: normalFunction
};

// Aqui ele pega e chama o número do objeto onde tem um metodo que é da função normal
number.method();

// Aqui é criada a arrowFunction
const arrowFunction = () =>{
    console.log(this.nome);
}

// Aqui é o objeto criado que referência a arrow function
const nome = {
    nome: "italo",
    method: arrowFunction
}

// Aqui vai dar undefined porque arrow function não pode referenciar fora do seu contexto.
nome.method();



/*
    7 - Constructor
    Arrow functions não podem ser constructors, então não é possível usar o operador new
    com a mesma
*/

class newFunc {
    constructor(nome){
        this.nome = nome;
    }
}

const a = new newFunc("Italo Cruz");
console.log(a.nome);