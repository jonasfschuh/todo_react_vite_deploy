import React from 'react'

const Todo = ({todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" 
         style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
    <div className="content">
      <p>{todo.text}</p>
      <p className="category"></p>({todo.category})
    </div>
    <div>
      <button className='complete' onClick={() => completeTodo(todo.id)}>Completar </button>
      <button className='remove' onClick={() => removeTodo(todo.id)}>x</button>
    </div>
  </div>
  )
}

export default Todo