// Função que retorna um objeto

function criarPessoa(){
    return {
        nome: 'Fellipe',
        sobrenome: 'Altran'
    }
}

console.log(criarPessoa())

function criarProduto (nome,preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2500))

