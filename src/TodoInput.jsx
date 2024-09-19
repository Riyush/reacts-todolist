import { useState } from "react"

export default function TodoInput(properties) {
    //destructuring, parent variables
    const {handleAddTodos, todoValue, setTodoValue} = properties

    return (
        <header>
            <input value = {todoValue} onChange={(event) => {
                setTodoValue(event.target.value)
            }} placeholder="Enter Item" />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue("")
            }}> Add</button>
        </header>
    )
}