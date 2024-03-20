import React, { useState } from 'react'
import Todolist from '../pages/Todolist'

const Todo  = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  
  function handleSubmit(e){
    e.preventDefault();
    setTodos([...todos ,todo]);
    setTodo('');
  }

  
  return (
    <div >
      <div className='boarder'>Todo - Form</div>


    
      <form onSubmit={handleSubmit} className='todoform'>
        <input className='modernInput' placeholder='Enter to do list...' onChange={(e) => setTodo(e.target.value)} type="text" value={todo}/>
        <button type='submit' className='modernButton'>Add</button>
      </form>
      
      <div className='list'>
      {todos.map((item) => (
        <Todolist  item={item} key={item} todos={todos} setTodos={setTodos}/>
      ))}
</div>

      

        
   
    </div>
  )
}

export default Todo 
