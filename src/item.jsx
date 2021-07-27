import React from 'react'
import './App.css'

const ItemComponent = (props) => {

  return(
    <>
  <div className="item">
        <button onClick={() => {
          props.onDelete(props.id)
        }}>X</button>
        <div className="list-text">
          <h2>{props.text}</h2>
        </div>
        <i className="fas fa-edit" style={{
          marginRight: "1rem",
          fontSize: "1.5rem"
        }}
        onClick={() => props.editItem(props.id)}
        ></i>
    </div>
    </>
  )
}

export default ItemComponent;