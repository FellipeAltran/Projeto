// Ele ja seta um valor padrao ali na função

function Carro(velocidadeMaxima=200, delta =5){
    let velocidadeAtual=0

    // metodo publico, o this aqui deixa essa função publica para ela ser chamada la em baixo
    this.acelerar = function (){
        if (velocidadeAtual+delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getvelocidadeAtual= function() {
        return velocidadeAtual
    }
}


// criei o carro uno
const uno = new Carro()
// usei a função acelerar ali uma vez
uno.acelerar()
//printei na tela a velocidade
console.log(uno.getvelocidadeAtual())


const ferrari = new Carro(350,20);
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())