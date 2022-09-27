function calculadora (a,ope,b){
    switch(ope){
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b;
            break
        default:
            return 'invalido'
    }
}

console.log(calculadora(5,'+',5))
console.log(calculadora(5,'-',5))
console.log(calculadora(5,'*',5))
console.log(calculadora(5,'/',5))
console.log(calculadora(5,'.',5))