import $ from 'jquery'

$.fn.extend({
    novaFuncao(){
        console.log('Chamou uma funcao')
    }
})

$('body').novaFuncao()



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



// CONDICIONAL A PARTIR DE PARAMETROS , NESTE CASO , REDIRECIONA CASO ELE POSSUA O PARAMENTRO CARGO
interface IUsuario {
    id: string
    email: string
}

interface IAdmin extends IUsuario {
    cargo?: 'gerente' | 'coordenador' | 'supervisor' // ? define parametro como OPCIONAL
}

function redirecione(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
//redirecionar para a area de admin
    }
    
//redirecionar para a area de usuario
}