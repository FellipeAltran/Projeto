function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
     nome: 'Notebook',
     preco: 4589,
     desc: 0.15,
     getPreco
}

//assim acessa o escopo global sem linkar com o objeto
global.preco = 20;
global.desc = 0.1;
console.log(getPreco())

//Assim eu linko direto com o objeto e seus atributos
console.log(produto.getPreco())

//Usando o call e Apply para chamar a função

const carro = {
    preco: 5000,
    desc: 0.20
}

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

//A diferença entre o call e o apply esta na forma em que são passadas os parametros para uma função
//onde no call eles sao passados normalmente, no appy em forma de array

console.log(getPreco.call(produto,0.3,'R$'));

console.log(getPreco.apply(global, [0.8,'R$']));