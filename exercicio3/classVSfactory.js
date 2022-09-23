class Pessoa {
    constructor(nome) {
        this.nome=nome;
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`);
    }

}

const p1 = new Pessoa('Fellipe');
p1.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Altran')
p2.falar()

function Pessoas(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa('Will')
p3.falar()








function fazedorPessoa(nome){
    return{
        nome,
        idade: 20
    }
}

console.log(fazedorPessoa('Rafael'))
