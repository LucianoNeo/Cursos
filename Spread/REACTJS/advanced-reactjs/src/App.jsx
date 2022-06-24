import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary";


class Twitter extends Component { 

  componentWillUnmount(){
    console.log('componentWillMount')
  }

  componentDidMount(){
    console.log('componentDidMount')
  }



  render(){
    return(
      <ErrorBoundary>
      <div>
        teste
      </div>
      
      </ErrorBoundary>
    )
  }
}

export default Twitter