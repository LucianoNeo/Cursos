import { Fragment } from "react";
import {useState} from 'react'

/* FORMA PADRAO SEM HOOKS

let quantity = 10

function upQuantity() {
    quantity++    
    document.getElementById('counterBox').innerText = quantity
}



function Counter() {

    return(
        <Fragment>
            <h1 id="counterBox">{quantity}</h1>
            <button onClick={upQuantity}>Aumentar</button>
        </Fragment>

    )
    
}*/

//  UTILIZANDO O HOOK STATE


function Counter() {

    // declaracao [variavel, funcao]  = useState(valor inicial)
    const [ quantity, upQuantity ] = useState(1)

    return(
        <Fragment>
            <h1>{quantity}</h1>
            <button onClick={()=>upQuantity(quantity + 1)}>Aumentar</button>
        </Fragment>

    )
    }

export default Counter