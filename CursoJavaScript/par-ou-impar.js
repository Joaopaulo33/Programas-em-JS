
exibirTipo(20);

function exibirTipo(limite){
    for(var x = 0; x <=limite; x++){
        if(x % 2 == 0){
            console.log(x,'PAR')
        }else{
            console.log( x,'IMPAR')
        }
    }
  

}