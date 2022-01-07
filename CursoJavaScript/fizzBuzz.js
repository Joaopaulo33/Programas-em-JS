//Divisivel por 3 Fizz
//Divisivel por 5 - Buzz
//Pelos dois FissBuzz


console.log(fizzBuzz(true));

function fizzBuzz(numero){
    if(numero % 3 == 0&& numero % 5 == 0){
        return 'FizzBuzz';
    }else{
        if (numero % 3 == 0){
            return 'Fizz';
        }else{
            if(numero % 5 == 0){
                return 'Buzz';
            }else{
                if(typeof numero == 'number'){
                return numero;
                }else{
                    return 'Não é um número';
                }
            }
        }
    }
}