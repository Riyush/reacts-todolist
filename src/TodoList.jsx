import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const {todos, deleteTodoItem, handleEditTodo} = props
    
  return (
    <ul className='main'>
        {todos.map((todo, index) => {
        return(
            <TodoCard handleEditTodo = {handleEditTodo} deleteTodoItem = {deleteTodoItem} todo ={todo} key={index}>
                {/* The following p tag is passed as a child to the TodoCard Component */}
                
            </TodoCard>
        )
    })}
    </ul>
  )
}
