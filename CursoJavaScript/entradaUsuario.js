


function VerificaEntrada(){
    nomeConvidado= document.getElementById('nome').value;
    ConvidadosCristian=['Amanda' , 'Sabrina', 'Rafael', 'Jonas'];
    if(ConvidadosCristian.includes(nomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!';
        
    }else{
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!';
        
    }

}
