const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo', preco: 12.50, fragil: true},
    { nome: 'bola', preco: 8.00, fragil: false}
]

const caro = produtos => produtos.preco > 1000
const fragil = caro => caro.fragil 

const resultado = produtos.filter(caro).filter(fragil)

console.log(resultado)