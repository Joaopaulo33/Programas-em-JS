exibirAsteristicos(3);

function exibirAsteristicos(linhas){
    
    // var asteristicos= ''
    // for(var i=1; i<=linhas;i++){
    //     asteristicos = asteristicos + "*"
    //     console.log(asteristicos);
    // }

    for(let linha = 1; linha<=linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*';
            
        }
        
        console.log(padrao)
    }
  
}