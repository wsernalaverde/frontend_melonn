import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderDetail = () => {

  const { id } = useParams()

  const [order, setOrder] = useState([])

  useEffect(() => {
    getOrder()
  }, [id])

  const getOrder = () => {
    const url = `http://localhost:3001/getOrderDetails/${id}`

    fetch(url)
      .then(res => res.json())
      .then(res => { 
        setOrder(res.data[0])
      })
  }

  return (
    <div className="container">
      <div className="center-content">
        <h1>Order detail # {order.internalOrderNumber}</h1>
        
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="card-title">
                <h2>Ordesr Information</h2>
              </div>
              <div className="card-content">
                <p><strong>External order number:</strong> {order.externalOrderNumber}</p>
                <p><strong>Buyer full name:</strong> {order.buyerName}</p>
                <p><strong>Buyer phone number:</strong> {order.buyerPhone}</p>
                <p><strong>Buyer email:</strong> {order.buyerEmail}</p>
              </div>
            </div>
            <div className="card">
              <div className="card-title">
              <h2>Shipping Info</h2>
              </div>
              <div className="card-content">
                <p><strong>Shipping address:</strong> {order.shippingAddress}</p>
                <p><strong>Shipping city:</strong> {order.shippingCity}</p>
                <p><strong>Shipping region:</strong> {order.shippingRegion}</p>
                <p><strong>Shipping country:</strong> {order.shippingCountry}</p>
              </div>
            </div>
          </div>
          <div className="column column-products">
            <div className="card">
              <div className="card-title">
                <h2>Line Items</h2>
              </div>
              <div className="card-content">
                <table className="table-line-items">
                  <tr>
                    <th><p>Product name:</p></th>
                    <th><p>Product qty:</p></th>
                    <th><p>Product weight:</p></th>
                  </tr>         
                  {
                    order.lineItems && order.lineItems.map((item, index) =>
                      <tr key={index}>
                        <td><p>{item.productName}</p></td>
                        <td><p>{item.productQty}</p></td>
                        <td><p>{item.productWeight}</p></td>
                      </tr>
                    )
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
