let num = [6,2,8,'teste']

num[3] = 7 // substitui a posicao 4 
num.push(1,9,3) // adiciona ao final
num.sort() // ordena por ordem crescente


// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     console.log (`A posição ${index} tem o valor ${element}` )     
// }

// FOR IN 

for (let index in num) {
    console.log (`A posição ${index} tem o valor ${num[index]}` )
}

let posicao = num.indexOf(7) // retorna a posicao do valor 7 , se não encontrar retorna -1
console.log(`A posicao do numero 7 está na posição: ${posicao}`) 