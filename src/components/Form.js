import React, { Component, Fragment } from 'react'
import Alert from '@material-ui/lab/Alert'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: '',
      externalOrderNumber: '',
      buyerName: '',
	    buyerPhone: '',
	    buyerEmail: '',
	    shippingAddress: '',
	    shippingCity: '',
	    shippingRegion: '',
	    shippingCountry: '',
	    shippingMethod: {},
      showSuccess: false,
      shippingMethods: []
    }
  }

  componentDidMount () {
    this.getShippingMethods()
  }

  getShippingMethods = () => {
    const url = `http://localhost:3001/getShippingMethods`

    fetch(url)
      .then(res => res.json())
      .then(res => { this.setState({ shippingMethods: res.data })
      console.log(res) })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const data = this.state
    console.log(data)

    const url = `http://localhost:3001/addSellOrder`

    try {
      let res = await fetch(url, {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      res = await res.json()

      this.setState({
        showSuccess: true
      })

      setTimeout(() => { this.setState({
        showSuccess: false
      })}, 2000)
      console.log(res.data)
    } catch (e) {
      console.log(e)
    }  
  }

  handleInputChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSelect = (e) => {
    e.preventDefault()
    this.setState({
      shippingMethod: {
        id: e.target.value,
        name: e.target[e.target.value].innerHTML
      }
    })
  }

  render () {
    return(
      <Fragment>
        {this.state.showSuccess &&
            <Alert variant="filled" severity="success">
              Order created
            </Alert>
        }
       
        <form className="custom-form" onSubmit={this.handleSubmit}>
          <div className="row-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Seller store" name="store" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="External order number" name="externalOrderNumber" onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Buyer full name" name="buyerName" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <input type="number" className="form-control" placeholder="Buyer phone" name="buyerPhone" onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="email" className="form-control" placeholder="Buyer email" name="buyerEmail" onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Shipping address" name="shippingAddress" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Shipping city" name="shippingCity" onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Shipping region" name="shippingRegion" onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Shipping country" name="shippingCountry" onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <label>Shipping Method</label>
              <select onChange={this.handleSelect}>
                {
                  this.state.shippingMethods.map(item =>
                    <option key={item.id} value={item.id}>{item.name}</option>
                  )
                }
                
              </select>
            </div>
          </div>
          <div className="row-form">
            <div className="form-group">
              <input type="submit" className="btn btn-lg btn-purple" value="Create Order"/>
            </div>
          </div>
        </form>
      </Fragment>
    )
  }
}

export default Form