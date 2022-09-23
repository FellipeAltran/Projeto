// Declarar normal
function fun() {}

// Armazenar em uma variavel
const fun1 = function () {}

// Da para armazenar uma função em um atributo de obj
const obj = {
    falar: function(){return 'Opa'}
}
console.log(obj.falar())

// Armazenar em um array
const array = [function (a,b){ return a + b }, 'outros elementos do array']
console.log(array[0](5,5))

// Passar uma função como parametro para outra
function teste(fun){
    fun()
}
teste (function(){console.log('Sou uma funcao dentro de uma funcao')})

// Uma funcao pode retornar/conter uma funcao
function soma(a,b){
    return function somar (c){
        console.log( a + b + c )
    }
} 
soma(2,3)(5)
