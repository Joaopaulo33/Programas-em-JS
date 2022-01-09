var endereco = {
    rua : 'Mariano de Oliveira',
    cidade: 'Contagem',
    cep: 32115190,
  
};


function exibirEndereco(endereco){
    for (let chave in endereco){
        console.log(chave, endereco[chave]);
    }

};

exibirEndereco(endereco);