/*
    Objeto: Tenis (Propriedade) "cadarço", "palmilha"
    Objeto: Celular (Propriedade) "Tela", "Bateria"
    Objeto: Drone (Propriedade) "Hélice"
 */

let Tenis = {
    tipo: "Tenis de Corrida",
    cadarco: "G",
    estoque: false,
    tamanho: {
        palmilha: 39,
        tenis: 40,
        caixa: {
            largura: 35,
            largura: 40,
            profundidade: 10
        }
    },

    marcaArrayValores:["Nike", "Adidas", "etc"],
    marcaArrayObj:[
        {
            nome: "Nike",
        },
        {
            nome: "Adidas",
        },

        {
            nome: "etc",
        }
    ],

    getMarcaArrayValores: function (param){
        return this.marcaArrayObj(param);
    },

    getMarcaArrayObj: function (param){
        return this.marcaArrayObj[param].nome;
    },

} 

console.log(Tenis)
console.log(Tenis.tipo)
console.log(Tenis.cadarco)
