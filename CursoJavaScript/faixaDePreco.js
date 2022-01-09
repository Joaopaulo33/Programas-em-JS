// Primeira opção
let faixas = [
    {tooltip:'até R$:700', minimo: 0, maximo: 700 },
    {tooltip:'De R$:700 a R$1000', minimo: 700, maximo: 1000 },
    {tooltip:'até R$:1000 ou mais', minimo: 1000, maximo: 9999999}
];

//Segunda opção
function criaFaixaPreço(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreço('a',700,1000),
    criaFaixaPreço('b',100,1000),
    criaFaixaPreço('c',100,500),
    criaFaixaPreço('d',700,1000),

]
console.log(faixas);
console.log(faixas2);