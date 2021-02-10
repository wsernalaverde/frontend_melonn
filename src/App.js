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

  toggleContent = () => {
    this.setState({
      showCreate: !this.state.showCreate
    })
  }

  render () {
    return (
      <div className="App">
        <Menu toggleContent = {this.toggleContent} backButton = {this.state.showCreate} />    
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
