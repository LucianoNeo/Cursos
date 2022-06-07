function soma(a: number,b: number){
    return a + b
}

soma(2,7)


//interfaces

interface IAnimal{
    nome: string
    tipo: 'terrestre' | 'aquatico'
    domestico: boolean
}


interface IFelino extends IAnimal{
    visaoNoturna: boolean
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande'
}

const felino: IFelino = {
    nome: "Leão",
    tipo:'terrestre',
    visaoNoturna: true,
    domestico:false
}


// types

//Define o tipo de interface que uma const pode ter

type IDomestico = IFelino | ICanino

const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo:'terrestre'
}


// DEFINIR O TIPO DO INPUT PRO TS
const input = document.getElementById('input') as HTMLInputElement


// CAPTURAR TUDO O QUE ESTA SENDO DIGITADO DENTRO DO INPUT
input.addEventListener('input', (event)=> {
    const i = event.currentTarget as HTMLInputElement
    console.log(i.value)
})


// GENERIC TYPES

function adicionaItemLista<NaoSei>(array:any[],value:NaoSei){
    return array.map(item => item + value)
}

adicionaItemLista([1,2,3], 1)