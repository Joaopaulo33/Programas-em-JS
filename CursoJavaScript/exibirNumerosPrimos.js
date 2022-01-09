
exibirNumerosPrimos(12)

function exibirNumerosPrimos(limite){

     for(i=2;i<=limite;i++){
         
             if(numeroPrimo(i)) console.log(i);
             
     }    

    function numeroPrimo(numero){
        let divisoes = 0;   
        for(j=numero-1; j>1; j--){
            if(numero % j == 0){
                return false;
            }
        }
        return true;
        }
    }
