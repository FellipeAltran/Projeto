function Pessoa() {

    this.idade = 0;

    // dispara uma outra função passada como parametro, nela tem como passar parametros tmb 
    // como exemplo o mil que a cada um intervalo de mil milisegundos e executa a função

    const self = this

    setInterval(function() {
        self.idade++
        console.log(this.idade)

    }.bind(this), 1000)

}

new Pessoa