const pessoa = {
    nome: "Luciano",
    idade: 36
}

function calculaIdade(anos) {
	return console.log(`Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`)
}


calculaIdade.call(pessoa,30) // primeiro parametro recebe o objeto e depois o parametro para a funçao