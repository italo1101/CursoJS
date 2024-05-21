// 1 - Functions declaration

function isValidDeclaration(){
    const soma = 1 + 3;

    return soma;
}

 console.log(isValidDeclaration());


// 2 - Functions Expression 

 const isValidExpression = function(){
    const soma = 2 + 5;

    return soma;
 }

 console.log(isValidExpression())


//  Arrow Function

 const isArrowFunction = () => {
    const soma = 4 + 2;

    return soma;
 }

 console.log(isArrowFunction())