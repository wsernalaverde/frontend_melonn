import React, { Component } from 'react'
import Table from './Table'

class Orders extends Component {

  constructor(props){
    super(props)

    this.state = {
      orders: []
    }
  }

  componentDidMount () {
    this.getOrders()
  }

  getOrders = () => {
    const url = `http://localhost:3001/getOrders`

    fetch(url)
      .then(res => res.json())
      .then(res => { this.setState({ orders: res.data }) 
        console.log(res)
      })
  }

  render () {
    return (
      <div className="container">
        <div className="cont-table">
          <Table items={this.state.orders} />
        </div>
      </div>
    )
  }
}

export default Orders;
