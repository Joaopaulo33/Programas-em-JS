
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    // const celular = {
    //     marcaCelular : 'ASUS',
    //     tamanhoTela : {
    //         vetical: 155,
    //         horizontal: 75
    //     },
    //     capacidadeBateria: 5000,
    //     ligar : function(){
    //         console.log("Fazendo ligação...")
    //     }
    // }

    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar()/*: function()*/ {
            console.log("Fazendo ligação...")
        }
    }
}
const celular1 = criarCelular('Samsung',5.5,5000);
console.log(celular1);
