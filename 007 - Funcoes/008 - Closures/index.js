/*
    Uma closure ocorre normalmente quando uma função é declarada dentro do corpo de outra, e a função interior referência vriáveis locais da função exterior.
*/

// function QualSeuNome(name){
//     const msg = `O seu nome é ${name}`;
//     function yourName(){
//         return `${msg} ${name}`
//     }
//     return yourName;
// }

// console.log(QualSeuNome("Italo"))

function calculadora(num1, num2){
    const msg = "Resultado";

    const soma = () => {
        return `${msg} ${num1 + num2}`
    }

    const subtracao = () => {
        return `${msg} ${num1 - num2}`
    }

    const multiplicacao = () => {
        return `${msg} ${num1 * num2}`
    }

    const divisao = () => {
        return `${msg} ${num1 / num2}`
    }

    return{
        soma: soma(),
        subtracao: subtracao(),
        multiplicacao: multiplicacao(),
        divisao: divisao(),
    }


}

console.log(calculadora(5,4))