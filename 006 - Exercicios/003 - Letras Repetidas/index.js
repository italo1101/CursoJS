/*
 Precisamos mostrar quantas letras repetidas aparecem em uma palavra

 exp: Abacate = { a: 3, b: 1, c: 1, t: 1, e: 1 }
*/

// Criamos uma váriavel constante chamada palavra, onde ela tem 2 métodos, um toLowerCase() onde transforma todas as letras da string em minúscula e o método replaceAll() onde ele substitui uma coisa pela outra.
const palavra = "Abacaxi".toLowerCase().replaceAll(" ", "");

// Criamos uma váriavel let chamada letra, onde armazena um objeto;
let letras = {};

/*
    Criamos um for com paramêtros, i que começa com 0 e vai passando de acordo com o tamanho
    da palavra.
*/ 

for(let i = 0; i < palavra.length; i++){
    // Dentro do for adicionamos uma condicional

    /*
        Aqui estamos verificando se a letra atual já existe no array ${letras}, se a letra
        já estiver presente, ou seja, se não for zero ou indefinido e isso significa
        que já tem uma letra igual.
    */ 
    if(letras[palavra[i]]){
        // e se tiver uma letra igual ele incrementa com mais uma unidade da letra
        letras[palavra[i]]++;
    }else{
        // e se não tiver ele coloca que a letra vai receber mais um.
        letras[palavra[i]] = 1;
    }
}

// e aqui exibe as letras
console.log(letras);