var num = []
var tab = document.getElementById('mostra')
var resultado = document.getElementById('resultado')
let numero = document.getElementById('numtxt')

function isNumero(n){
    if (Number(n) >=1 && Number(n) <= 100) {
        return true        
    }else{
        return false
    }
}

function adicionar() {

resultado.innerHTML = ''
if (isNumero(numero.value) && num.indexOf(numero.value) == -1) {
    console.log(numero.value)
        num.push(numero.value)
        var item = document.createElement('option') 
        item.text = `O valor ${numero.value} foi adicionado`
        tab.appendChild(item)
        document.getElementById('numtxt').value=''  
}else{
    alert('Você deve adicionar um numero válido ou não existente')
}
   
}
    


function finalizar() {
    resultado.innerHTML = ''
    var resultadoSoma = somar(num)
    var media = (resultadoSoma / num.length).toFixed(2)

    if(num.length == 0){
        alert('Você deve adicionar números antes de finalizar')
    }else{
    num.sort()
    let maior = num[0]
    let menor = num[0]
    for(let posicao in num){
        if (num[posicao] > maior){
            maior = num[posicao]
        }
        if(num[posicao] < menor){
            menor = num[posicao]
        }
    }
    resultado.innerHTML += `<p> Ao todo, temos ${num.length} numeros cadastrados.</p>` 
    resultado.innerHTML += `<p> O maior valor informado foi ${maior}.</p>` 
    resultado.innerHTML += `<p> O menor valor informado foi ${menor}.</p>` 
    resultado.innerHTML += `<p> Somando todos os valores, temos ${resultadoSoma}.</p>` 
    resultado.innerHTML += `<p> A média dos valores digitados é ${media}.</p>` 
}
}

function somar(array) {
    var soma = Number(0)
    for (let index = 0; index < array.length; index++) {
        soma += Number(array[index])
    }
    return soma
}