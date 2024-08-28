const Tenis = { 
    tamanho: 45,
    estoque: true,
    marcas: [{nome: "Nike"}, {nome: "Adidas"}],
    secret: 123456,
    n: 5,
    link: { a: "a", b: { c: "c"}}
};

const {tamanho, estoque, marcas} = Tenis;

console.log(tamanho, estoque, marcas);

const { secret: randomNumber, n: avaliacoes} = Tenis;

console.log(randomNumber);
console.log(avaliacoes);

const { 
    link: { a },
} = Tenis;

console.log(link)
