var a = "12,13";
var b = "48,12"
var n1 = parseFloat(a.replace(',', '.'));
var n2 = parseFloat(b.replace(',', '.'));
var resultado = n1 + n2;
console.log(resultado); // 60.25