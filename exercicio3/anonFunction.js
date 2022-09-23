// função anonimas sao funçoes que não possuem nomes, podem ser armazenadas em variaveis e passadas como parametros

const soma = function (a,b){
    return a + b
}

const imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(5,5)