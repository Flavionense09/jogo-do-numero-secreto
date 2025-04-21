let listaNumeroSorteado = [];
let numeroLimite = 10
let numeroSecreto = numeroGerado();
let numeroTentativas = 1;

function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextonaTela('h1','Jogo do número secreto');
    exibirTextonaTela('p','Digite um número de 1 a 10');
}
exibirMensagemInicial();

    function verificarChute(){
        let chute = document.querySelector('input').value;
        
        console.log(numeroSecreto);
           
        if (chute == numeroSecreto){
                exibirTextonaTela('h1','Acertou!!');
                let palavraTentativa = numeroTentativas > 1? 'tentativas' : 'tentativa';
                let mensagemTentativas = `Voce acertou com ${numeroTentativas} ${palavraTentativa}`;
                exibirTextonaTela('p',mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');
            }else{
               if (chute > numeroSecreto){
                exibirTextonaTela('p','Errou, o numero screto e menor');
               }else{
                exibirTextonaTela('p','Errou, o numero secreto e maior');
               }
               numeroTentativas++;
               limparCampo();
            }    

    }

function numeroGerado (){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeNumeroLista = listaNumeroSorteado.length;

    if (quantidadeNumeroLista == numeroLimite){
        listaNumeroSorteado = [];
    }

    if (listaNumeroSorteado.includes(numeroEscolhido)){
        return numeroGerado();
    }else{
        listaNumeroSorteado.push(numeroEscolhido);
        console.log(listaNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = numeroGerado();
    limparCampo();
    numeroTentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('diseble',true);
}