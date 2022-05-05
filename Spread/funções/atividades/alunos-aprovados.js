const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];


function aprovados(array,media) {
    let aprovados =[]
    for (let i=0; i < array.length; i++){

	const {nome,nota} = array[i] // OBJECT DESTRUCTURING

        if (nota >= media){
            aprovados.push(nome) 
        }
    }
    return console.log(aprovados)
}

aprovados(alunos,6)