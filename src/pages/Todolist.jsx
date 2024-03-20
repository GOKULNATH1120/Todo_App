import React from 'react'
import Todo from './Todo '

const Todolist = ({item, todos, setTodos}) => {

  function handleDelete(item){
    console.log("delete", item)

    setTodos(    todos.filter((todo) => todo!== item) )
    
  }


  function handleClick(name){
    console.log("clicked", name)
  }
  return (
    <div className='itemList'>
    <div className='itemName'> <span onClick={() => handleClick(item)}>{item} </span>
    
    <span>
      <button className='deleteButton' onClick={() => handleDelete(item)}>x</button>
      </span>
    
     </div>
    
    <hr className='line'/>
    </div>
  )
}

export default Todolist
