// a soma de todos os multipos de 5 e 3

somarMultiplos(10);

function somarMultiplos(limite){
    let multiposDe3 = 0;
    let multiposDe5 = 0;
    for(var i=0;i<=limite;i++){
        if(i % 3 === 0){
            multiposDe3 += i;
        }

        if(i % 5 === 0){
            multiposDe5 += i;
        }

    }
    console.log(multiposDe3 + multiposDe5);

}