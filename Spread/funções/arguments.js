function findMax(){
    let max=-Infinity;
    for(let i=0; i< arguments.length; i++){
      if (arguments [i] > max){
         max = arguments[i];
      }
    }
    return console.log(`O maior número dado é: ${max}`)
}

findMax(300,2,5,8,1,10,250)


function showArgs(){
    return arguments;
  }

    console.log(showArgs(1,2,"Luciano",[4,200,580]))

//SERVE PARA VARRER/LER TODOS OS ARGUMENTOS DENTRO DE UM OBJETO COMO SE FOSSE UM ARRAY.