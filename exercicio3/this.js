// this e usado para acessar uma variavel dos escopos e nao dar conflito com variaveis de mesmo nome
// de escopos diferentes, nesse exemplo nao ta bem descrito mas e isso


// o this e usado aqui para a função que esta dentro do obj pegar as variaveis do escopo em que ela esta inserida

const obj = {
    firstName: 'Fellipe',
    lastName: 'Fernandes',
    nome: function (){
    console.log(this.firstName + ' Altran ' + this.lastName)
}
}

obj.nome()
