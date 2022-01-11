//Adcionando elemento a um array
const numeros=[1,2,3];
//Adcionar no início
numeros.unshift(0);
//Meio
numeros.splice(1,1,'a');   //parâmetros "qual indice"-"excluir?"-"elemento a ser inserido"
//Final
numeros.push(2)



//Encontrando elementos de um array
const numeros2=[1,2,3,4,1];

console.log(numeros2.indexOf(1)); // Se existir retorna o índice

//Retorna o índice da última ocorrência do elemento
console.log(numeros2.lastIndexOf(1));

// Vendo se o elemento existe (retorna true)
console.log(numeros2.includes(3));






// array de objetos

const marcas =[
{id:1,nome:"a",},
{id:2,nome:"b",}
]

// const marca = marcas.find(function(marca){
//     return marca.nome == "b";
// });

//Podemos simplificar assim(Se tiver apenas um parâmetro)
console.log(marcas.find((marca) => marca.nome === "a"));








//Removendo elementos
//Final
const num = [1,2,3,4,5]
const ultimo = num.pop();
console.log(ultimo);
console.log(num);

//Início
const primeiro = num.shift();
console.log(primeiro);
console.log(num);

//Meio 
const meio = num.splice(2,1); // qual indice / quantos numeros vao ser removidos
console.log(meio);





const primeiros = [1,2,3];
const segundos = [4,5,6];
//Combinar arrays 
const combinado = primeiros.concat(segundos);

//dividir
const cortado = combinado.slice(1,3); // nao vai até o ultimo (vai até ultimo -1)

console.log(cortado);
