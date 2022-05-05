const pessoa={
    firstName: "André",
    lastName:"Soares",
    id:1,
    fullName:function() {
      return console.log(this.firstName + " " + this.lastName)
    },
    getId: function(){
      return console.log(this.id)
    }
  };
                                     
  pessoa.fullName()
  // "André Soares"
  pessoa.getId()
  //1


  //MÉTODO CALL

  const pessoa2 = {
    nome: 'Miguel',
  }

  const animal={
    nome: 'Murphy',
  }

  function getSomething(){
    console.log( this.nome);
  }
  getSomething.call(animal);


  const myObj={
    num1: 2,
    num2: 4,
};
            
function soma(a, b){
    console.log(this.num1 + this.num2 + a + b);
}
soma.call(myObj, 1, 5);
// 12

//********** MÉTODO APPLY **************
//argumentos tem que ser mandados dentro de um array

const myObj2={
  num3: 2,
  num4: 4,
};
          
function soma2(a, b){
  console.log(this.num3 + this.num4 + a + b);
}
soma2.apply(myObj2, [5, 8]);


// ********* MÉTODO BIND ***********
// transforma em uma função pegando o objeto dado como valor
const retornaNomes=function (){
  return console.log(this.nome)
}
let bruno = retornaNomes.bind( {nome: 'Bruno' })
bruno( )
// Bruno