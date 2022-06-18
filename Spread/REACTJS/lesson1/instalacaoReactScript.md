npm init
npm install --save react@16.8.6 react-dom@16.8.6 react-scripts@3.0.1

Criar pasta public
Criar pasta src

index.js base
###########################################
import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

const App = () => {
return(
    <div className="App">
        Hello World
    </div>
)

}

const rootElement = document.getElementById('root')
ReactDOM.render(<App>, rootElement)

############################################