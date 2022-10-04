
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

// como as tres sentenças são semelhantes o module.exports e um objeto e nele foi sendo adicionado a um objeto 
// que é o que ele retorna

console.log(module.exports)

// vemos aqui q o export nao mudou o objeto q ja criado ali em cima, apenas daria certo caso fosse feito com o module.exports
exports = {
    nome: 'Teste'
}

console.log(module.exports)

