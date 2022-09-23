// Object.preventExtensions
// nao deixa que seja adicionado nada ao objeto, mas permite remoções e alterações
// isExtensible verifica se um objeto foi feito com o prevents

const produto = Object.preventExtensions({
    nome: 'Fellipe',
    idade: 20
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Altran'
produto.descricao = 'estudante' 
delete produto.idade
console.log(produto)

// Object.seal
// neste comando voce nao consegue adcionar nem remover nada de um objeto apenas modificar
// isSealed verifica se um objeto foi feito com o seal

const pessoa = Object.seal({ 
    nome: 'Fernandes',
    olho: 'castanho'
})

console.log('Extensivel:', Object.isSealed(produto))

pessoa.sobrenome = 'alteran'
pessoa.olho = 'preto'

console.log(pessoa)

// Object.freeze = selado + valores constantes

