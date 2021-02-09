import React, { Component } from 'react'

class Form extends Component {

  addOrderRef = React.createRef()

  sendData = (e) => {
    e.preventDefault()
    console.log(this.addOrderRef.current.value)
  }

  render () {
    return(
      <form onSubmit={this.sendData}>
        <div className="row">
          <div className="form-group col-md-6">
            <input ref={this.addOrderRef} type="text" className="form-control" placeholder="Seller store" />
          </div>
          <div className="form-group col-md-6">
            <input ref={this.addOrderRef} type="text" className="form-control" placeholder="External order number" />
          </div>
        </div>
        <div className="row">
          <hr />
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <input ref={this.addOrderRef} type="text" className="form-control" placeholder="Buyer full name" />
          </div>
          <div className="form-group col-md-6">
            <input ref={this.addOrderRef} type="text" className="form-control" placeholder="Buyer phone" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <input ref={this.addOrderRef} type="text" className="form-control" placeholder="Buyer email" />
          </div>
        </div>
        <div className="row">
          <hr />
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" placeholder="Shipping address" />
          </div>
          <div className="form-group col-md-6">
            <input type="text" className="form-control" placeholder="Shipping city" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" placeholder="Shipping region" />
          </div>
          <div className="form-group col-md-6">
            <input type="text" className="form-control" placeholder="Shipping country" />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <input type="text" className="form-control" placeholder="shipping method" />
          </div>
        </div>
        <div className="row">
          <hr />
        </div>
        <div className="row">
          <div className="form-group col-md-12">
            <input type="submit" className="btn btn-lg btn-purple" value="Create Order"/>
          </div>
        </div>
      </form>
    )
  }
}

export default Form