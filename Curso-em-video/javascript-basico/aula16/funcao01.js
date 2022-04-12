function parOuImpar(n) {
    if (n%2 === 0 ) {
        return 'PAR'
    }else{
        return 'IMPAR'
    }
    
}

let resultado = parOuImpar(15) // adiciona resultado da função dentro de uma variavel

console.log(`O numero informado é ${resultado}`)