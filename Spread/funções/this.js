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