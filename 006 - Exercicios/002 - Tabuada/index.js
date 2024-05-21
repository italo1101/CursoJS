/*
    Precisamos mostrar a tabuada no console de 0 até 10 nese seguinte formato:

    multiplicador x número = resultado;
    multiplicador x 0 = resultado;
    multiplicador x 1 = resultado;
    multiplicador x 2 = resultado;

    ...

    multiplicador x 10 = resultado

    obs: não podemo criar vários consoles.log(multiplicador x 3 = resultado)
 */

    const multiplicador = 7;
    
    for(let i = 0; i <=10; i++){
        const resultado = multiplicador * i;
        console.log(`${multiplicador} x ${i} = ${resultado}`);
    }