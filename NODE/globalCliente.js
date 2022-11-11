require('./global')

console.log(Utilitario.saudacao())

// negou a alteração por causa do freeze
Utilitario.nome = 'Fellipe'

console.log(Utilitario.nome)