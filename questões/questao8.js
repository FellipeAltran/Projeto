function verificacaoPontuacao (pontuacoes){
    let melhor = pontuacoes[0]
    let acu = 0;
    let aux;

    for (let i=1; i<=pontuacoes.length; i++){
        if (melhor < pontuacoes[i]){
            melhor = pontuacoes[i];
            acu++;
        } else if (5) {

        }

    }

    return acu
}

console.log(verificacaoPontuacao([10, 20, 20, 8, 25, 3, 0, 30, 1]))