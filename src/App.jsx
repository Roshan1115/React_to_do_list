import React, { useState } from 'react'
import "./App.css"
import ItemComponent from './item'

const App = () => {

  const [item, setitem] = useState("")
  const [itemArr, setitemArr] = useState([])
  const [toggleEdit, settoggleEdit] = useState(false)
  const [itemId, setitemId] = useState(null)

  const takeItem = (event) => {
    setitem(event.target.value)
  }

  //store the data in an state array
  const storeItem = () => {
    if(item === ""){
      alert("Please input something")
      return;
    }
    if(toggleEdit){

      const editedArr = itemArr.map((element) => {
        if(element.id === itemId){
          element = {...element, name: item};
        }
        return element;
      })
      setitemArr(editedArr);
      setitemId(null)
      setitem("")
      settoggleEdit(false)
      return;
    }

    const allInput = { id : new Date().getTime().toString(), name : item}
    setitemArr((prev) => {
      return [...prev, allInput]
    })
    setitem("")
  }

  //this function is called when the delete button is clicked from the component
  const deleteItem = (id) => {
    setitemArr((prevValue) => {
      return prevValue.filter((element) => {
        return element.id !==id
      })
    })
  }


  const edit = (id) => {
    // console.log(id);
    const [data] = itemArr.filter((element) => {
      return element.id === id
    })
    // console.log(data);
    setitem(data.name);
    setitemId(data.id)
    settoggleEdit(true)
  }

  // const AddEdited = (id)=> {

    
  //   setitemId(null)
  //   setitem("")
  //   settoggleEdit(false)
  // }


  return(
    <>
  <div className="container">
    <div className="h1-container">
      <h1>To Do List</h1>
    </div>
    <div className="addlist-container">
      <input type="text" name="Add_item" placeholder='Add an item' value={item} onChange={takeItem} />

      {
        toggleEdit ? 
        <i className="fas fa-check" style={{
          marginRight: "1rem",
          fontSize: "2rem",
          color: 'green'
        }}
        onClick={storeItem}
        ></i>
        :
        <button onClick={storeItem} id="add">+</button>
      }
      
    </div>
    <div className="working-conatainer">
      {itemArr.map((currValue) => {
        return(<ItemComponent
        key={currValue.id} 
        id={currValue.id}
        onDelete={deleteItem}
        text={currValue.name}
        editItem = {edit} />)
      })}
    </div>
  </div>
    </>
  )
}

export default App;