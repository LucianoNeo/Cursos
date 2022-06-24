/* utilizado para nao quebrar o app todo, envolve parte do codigo*/
import React,{ Component }  from 'react'

class ErrorBoundary extends Component {

constructor(props){
    super(props)
    this.state = {
        hasError: false
    }
}


componentDidCatch(error,errorInfo){
    console.log('error', error);
    console.log('errorInfo' , errorInfo);
    this.setState({
        hasError: true
    })
}


    render(){
        if(this.state.hasError){
            return alert('codigo quebrado')
        }
        return this.props.children
    }
}

export default ErrorBoundary
