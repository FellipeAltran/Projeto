function compras (trabalho1, trabalho2){
    const compraSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    const comprarTV32 = trabalho1 != trabalho2;
    const manteSaudavel = !compraSorvete;

    return { compraSorvete, comprarTV50, comprarTV32, manteSaudavel }
}

console.log(compras(true, true));