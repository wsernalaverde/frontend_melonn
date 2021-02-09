import React from 'react'
import logo from '../logo-melonn.png'
import '../Menu.css'

function Menu (props) {
  return(
    <div className="container-menu">
      <div className="subcontainer">
        <div className="logo">
          <img src={logo} alt="Melonn" />
        </div>
        <div className="actions">
          <button onClick={props.pageCreate} className="btn btn-purple">Create Order</button>
        </div>
      </div>
    </div>
  )
}

export default Menu