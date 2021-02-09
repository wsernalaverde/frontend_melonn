import React, { Component } from 'react'
import './App.css';
import Menu from './components/Menu'
import Orders from './components/Orders'
import CreateOrder from './components/CreateOrder'

class App extends Component {

  constructor(props){
    super(props)
    this.state = { showCreate: false }
  }

  createOrder = () => {
    console.log('tan')
    console.log(this.state)
    this.setState({
      showCreate: true
    })
    console.log(this.state)
  }

  render () {
    return (
      <div className="App">
        <Menu pageCreate = {this.createOrder}/>    
        {
          (this.state.showCreate)?
            <CreateOrder />
          :
            <Orders />
        }
      </div>
    )
  }
}

export default App;
