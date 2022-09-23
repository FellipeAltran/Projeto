function Relogio (){

    this.horas = 1;
    this.segundos = 0;

    const self = this

    setInterval(function() {
    
    self.horas
    self.segundos++

    if(this.segundos>60){
        this.horas++
        this.segundos = 0
    }

    console.log('hora atual: ' + this.horas + ':' + this.segundos)
        
    }.bind(this), 1000);
}

new Relogio