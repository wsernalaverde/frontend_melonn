import React from 'react'
import '../Table.css'

function Table (props) {
  return(
    <table>
      <thead>
        <tr>
          <th><p>Creation Date</p></th>
          <th><p>Order Number</p></th>
          <th><p>Seller Store</p></th> 
          <th><p>Shipping Method</p></th>
        </tr>
      </thead>
      <tbody>
        {
          props.items.map((item, index) =>
            <tr key={index}>
              <td><p>{item.creationDate}</p></td>
              <td><p>{item.internalOrderNumber}</p></td>
              <td><p>{item.store}</p></td>
              <td><p>{item.shippingMethod.name}</p></td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default Table