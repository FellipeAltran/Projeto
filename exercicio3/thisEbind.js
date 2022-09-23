const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

falar() // aqui da conflito entre paradigmas e resolve com o bind ali em baixo

// Bind tem como função de amarrar um determinado objeto, referenciando o this ali para o objeto 
const falarDePessoa = falar.bind(pessoa)

falarDePessoa()