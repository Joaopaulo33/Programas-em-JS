const filme= {
titulo:'vingadores',
ano: 2018,
diretor: 'robin'
};

exibirPropriedades(filme);
function exibirPropriedades(obj){
for(prop in obj){
    if(typeof obj[prop] == "string"){
        console.log(prop, obj[prop]);
    }
    }
}