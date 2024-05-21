/*
    "==": Serve para comparar dois dados.
    "===": Serve para comparar o dado e o tipo.
    "!=": Serve para comparar se um dado é diferente do outro.
    "!==" Serve para comparar se um dado e o tipo é diferente do outro.
    ">" Se um dado é menor que o outro.
    "<" Se um dado é maior que o outro.
    ">=" Se um dado é menor ou igual a outro.
    "<" Se um dado é maior ou igual a outro. 
 */

let a = 2;
let b = "2";

console.log(`A: ${a} e B: ${b} são iguais? ${a==b}`);
console.log(`A: ${a} e B: ${b} são iguais? ${a===b}`);
console.log(`A: ${a} e B: ${b} são diferentes? ${a!=b}`);
console.log(`A: ${a} e B: ${b} são diferentes? ${a!==b}`);

a = 2;
b = 3;

console.log(`A: ${a} é maior que B: ${b}? ${a > b}`);
console.log(`A: ${a} é menor que B: ${b}? ${a < b}`);
console.log(`A: ${a} é maior ou igual a B: ${b}? ${a >= b}`);
console.log(`A: ${a} é menor ou igual a B: ${b}? ${a <= b}`);
