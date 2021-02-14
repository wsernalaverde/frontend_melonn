import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderDetail = () => {

  const { id } = useParams()

  const [order, setOrder] = useState([])

  useEffect(() => {
    getOrder()
  }, [id])

  const getOrder = async () => {
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
        <h1>Order detail - {order.internalOrderNumber}</h1>
        <hr />
        <h2>Ordesr Information</h2>
        <p><strong>External order number:</strong> {order.externalOrderNumber}</p>
        <p><strong>Buyer full name:</strong> {order.buyerName}</p>
        <p><strong>Buyer phone number:</strong> {order.buyerPhone}</p>
        <p><strong>Buyer email:</strong> {order.buyerEmail}</p>
        <h2>Shipping Info</h2>
        <p><strong>Shipping address:</strong> {order.shippingAddress}</p>
        <p><strong>Shipping city:</strong> {order.shippingCity}</p>
        <p><strong>Shipping region:</strong> {order.shippingRegion}</p>
        <p><strong>Shipping country:</strong> {order.shippingCountry}</p>
        <h2>Line Items</h2>
        <ul>
        {
          order.lineItems && order.lineItems.map((item, index) =>
            <li key={index}>
              <p><strong>Product name:</strong> {item.productName}</p>
              <p><strong>Product qty:</strong> {item.productQty}</p>
              <p><strong>Product weight:</strong> {item.productWeight}</p>
            </li>
          )
        }
        </ul>
      </div>
    </div>
  )
}

export default OrderDetail
