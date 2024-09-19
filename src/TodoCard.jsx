import React from 'react'

export default function TodoCard(props) {
    const {todo, deleteTodoItem, handleEditTodo} = props
  return (
    <li className='todoItem'>
        <p>{todo}</p>
        <div className='actionsContainer'>
            <button>
            <i onClick={()=>{
                handleEditTodo(todo)
            }} className="fa-solid fa-pen-to-square"></i>
            </button>
            <button>
            <i onClick={() =>{deleteTodoItem(todo)}}  className="fa-solid fa-trash"></i>
            </button>
            
            </div>
            </li>
  )
}
