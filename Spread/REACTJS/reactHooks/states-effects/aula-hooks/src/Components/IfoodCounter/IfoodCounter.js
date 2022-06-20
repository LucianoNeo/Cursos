import React, {useState , useEffect} from 'react'
import '../IfoodCounter/IfoodCounter.css'


export default function IfoodCounter() {

    const [value, setValue] = useState(0)
    const [buttonStyle, setButtonStyle] = useState('buttonMinus')


    // TODA VEZ que value for alterado , roda a funcao dada
    useEffect(()=>{
        document.getElementById('moeda').value = 2.00 * value
    },[value])

    function down() {
        if(value > 0){
            setValue(value-1)
        }
        if(value <= 1){
    setButtonStyle('buttonMinusDesactive')
        }
        
        
    }

    function up() {
        setValue(value+1)
        setButtonStyle('buttonMinus')
    }


  return (
    <div className='container'>
    <button className={buttonStyle} onClick={down}>-</button>
    <p>{value}</p>
    <button className='buttonPlus' onClick={up}>+</button>
    <p>Valor total=</p>
    <input id='moeda'/>
    </div>
  )
}


