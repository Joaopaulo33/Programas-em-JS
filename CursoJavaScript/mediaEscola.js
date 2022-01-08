const minhasNotas = [72,100,75]

console.log(mediaDoAluno(valorMedio(minhasNotas)));


function valorMedio(notas){
let media=0;
let soma=0;

    for(let nota of notas){
        soma += nota;
    }
    media= Math.round(soma/notas.length);
    console.log(media)
    return media;
}

function mediaDoAluno(media) {
    if(media< 59) return 'F';
    if(media< 69) return 'D';
    if(media< 79) return 'C';
    if(media< 89) return 'B';
    return 'A'
    
}