let v = function (x) { // VARIAVEL como função
    return x*2
}

console.log(v(5))


// 5! = 5x4x3x2x1  FATORIAL 

// function fatorial(n) {
//     let fat = 1
//     for (let c = n; c > 1 ; c--){
//         fat *= c
//     }
// return fat    
// }

// console.log(fatorial(5))


//FUNÇÃO RECURSIVA

function fatorial(n) {
    if (n == 1) {
        return 1
    } else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))