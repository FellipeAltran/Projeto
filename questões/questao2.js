function DefiniTriangulo (a,b,c,){
    if ((a==b)&&(b==c)){
        return console.log('Equilatero');
    }
    else if ((a==b)&&(b!=c)) {
        return console.log('isoceles');
    }
    else if ((a==c)&&(c!=b)) {
        return console.log('isoceles');
    }
    else if ((b==c)&&(c!=a)) {
        return console.log('isoceles');
    }
    else if ((a!=b)&&(b!=c)){
        return console.log('Escaleno');
    }
}

DefiniTriangulo(3,5,6)