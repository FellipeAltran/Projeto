// funcao sem retorno 

function imprimirSoma (a,b){
    console.log(a+b);
}

imprimirSoma(5,5);

// funcao com retorno

function soma(a,b){
    c = a + b;
    return c;
}

console.log(soma(4,4));

// armzena uma funcao em uma vairavel (juntamente de uma funcao anonima)

const imprimirResultado = function (a,b) {
    console.log(a+b);
}

imprimirResultado(6,6);

// armazenando uma funcao arrow em uma variavel
const somar = (a,b) => {
    var teste=1;
    return a+b;
}

console.log(soma(3,3));

// retorno implicito

const subtracao = (a,b) => a-b;

console.log(subtracao(7,6));

