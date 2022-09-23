// Object.preventExtensions
// nao deixa que seja adicionado nada ao objeto, mas permite remoções
// isExtensible testa se um objeto foi feito com o prevents

const produto = Object.preventExtensions({
    nome: 'Fellipe',
    idade: 20
})
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Altran'
produto.descricao = 'estudante'