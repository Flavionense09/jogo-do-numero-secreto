alert ('Descubra o número secreto de 1 a 100');
let numeroMaximo = 100
//vai gerar um número aleatório entre 1 e 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let chute;
let tentativas = 1;
//enquanto o chute nao for igual ao numero secreto
while (chute != numeroSecreto){
    chute = prompt(`Digite um número de 0 a ${numeroMaximo}`);
    //se o chute for igual ao número secreto
    if (chute == numeroSecreto){
        break;
    }else{
        if( chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            if(chute < numeroSecreto)
                alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas +1
        tentativas++;
    }
}

let palavraTentiva = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou!! Com ${tentativas} ${palavraTentiva}`);
//if(tentativas > 1){
  //  alert(`Acertou!! Com ${tentativas} tentativas`);
//}else{
  //  alert(`Acertou!! Com ${tentativas} tentativa`);
//}



