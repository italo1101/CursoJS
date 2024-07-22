// IIFE = Immediately Invoked Function Expression
/* 
    Podemos chamála de função imediata, como o próprio nome diz, ela executa
    a função imediatamente depois de criada. Mas por que usar? Encapsulamento!
    tenha em mente que variáveis em javascript têm como escopo a função pela qual
    elas foram definidas (podem ser acessadas somente dentro da função, jamais fora).
    Ao criar uma função anônima com execução imediata, podemos criar um escopo temporário
    para nossas funções e variáveis. Com isso, evitamos poluição no nosso escopo global e
    possíveis confilitos de variáveis ou funções com o mesmo nome. Veja o exemplo a seguir.
*/

// São usados dois parênteses e dentro do primeiro parêntese é formada a função
(function(num1, num2){
    const soma = num1 + num2;
    console.log(soma);
})(3, 5);
// E no segundo parêntese é passado o valor do parâmetro
