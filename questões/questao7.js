function bhaskara (ax2,bx = 0,c = 0){
    
    let delta = Math.sqrt((Math.pow(bx,2))-4*ax2*c);

    if (delta<0){
        return console.log('Delta negativo!');
    }else{

        const bhaskaraPo = (-bx + delta)/(2*ax2);
        const bhaskaraNe = (-bx - delta)/(2*ax2);
    
        const vet = [bhaskaraPo.toFixed(2),bhaskaraNe.toFixed(2)];
        return vet;
    }
}

console.log(bhaskara(2,15,12));