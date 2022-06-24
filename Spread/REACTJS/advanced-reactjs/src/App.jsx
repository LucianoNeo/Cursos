import React, { Component } from "react";


class Twitter extends Component { 

  componentWillUnmount(){
    console.log('componentWillMount')
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  render(){
    return(
      <div>
        teste
      </div>
    )
  }
}

export default Twitter