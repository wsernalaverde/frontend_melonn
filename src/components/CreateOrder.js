import React, { Component } from 'react'
import Form from './Form'

class CreateOrder extends Component {

  constructor(props){
    super(props)

    this.state = {
      orders: []
    }
  }

  addOrder = () => {
    const url = `http://localhost:3001/addSellOrder`

    fetch(url)
      .then(res => res.json())
      .then(res => { this.setState({ orders: res.data }) 
        console.log(res)
      })
  }

  render () {
    return (
      <div className="container">
        <Form />
      </div>
    )
  }
}

export default CreateOrder;
