const pessoa = { 
    nome: 'João Paulo',
    idade: 21
};
//for in
for(let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

// for of
const cores= ['Vermelho','Azul','verde']

for(let cor of cores){
    console.log(cor)
}

let maior = retornaMaior(3,4);
console.log(maior);

function retornaMaior(num1,num2){
    // if(num1>num2){
    //     return num1;
    // }else{
    //     return num2;
    // }
    return num1>num2 ? num1 : num2;
 
}