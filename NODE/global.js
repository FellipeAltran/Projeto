//console.log(global)

global.Utilitario = Object.freeze({
    saudacao(){
       return 'Estou em todos os lugares' 
    },
    nome: 'Sistema Legal'
})

console.log(Utilitario.nome)