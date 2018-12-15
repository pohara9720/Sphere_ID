//Dependencies
import 'babel-polyfill'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

//Pages
import Design from './Pages/Design/Design'


class App extends Component{
    constructor(props){
        super(props)
        this.state ={
          
        }
        
    }
 

    componentDidMount(){
       
    }

    render() {
        return (
            <div>
                <Design />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app-container'))