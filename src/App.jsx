import TodoInput from "./Todoinput"
import TodoList from "./TodoList"
import { useState, useEffect } from "react"

function App() {
    // This function uses the setTodos function to handle the entire workflow of
    // receiving a newTodo, creating a new list and updating state. 
    // setTodo is a helper function that only sets the todos variable 
    const [todos, setTodos] = useState([])
    // This state variable represents the current value being typed into the input box
    // Previously we defined this only in the TodoInput,jsx file, but we chose to 
    // lift it one component up so that we can out updateTodoItem defined here can 
    // modify the todoValue
    const [todoValue, setTodoValue] = useState('')
        
    function handleAddTodos (newTodo) {
        const newTodoList = [...todos, newTodo]
        setTodos(newTodoList)
        savetoStorage(newTodoList)
    }
    function deleteTodoItem(Todo){
        const index = todos.indexOf(Todo)
        const newTodoList = todos.filter(item => item !== Todo)
        setTodos(newTodoList)
        savetoStorage(newTodoList)
    }
    function handleEditTodo(Todo){
        setTodoValue(Todo)
        deleteTodoItem(Todo)
    }
    function savetoStorage(newTodoList) {
        localStorage.setItem("todos", JSON.stringify(newTodoList))
    }
    
    // Ensures that localStorage gets todos
    useEffect(() => {
        if (!localStorage) {
            return
        }
        let localTodos = localStorage.getItem('todos')
        if (!localTodos){
            return
        }
        localTodos = JSON.parse(localTodos)
        if(Array.isArray(localTodos)){
            setTodos(localTodos)
        }
    }, [])
    
  return (
    <>
        <TodoInput handleAddTodos = {handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} todos={todos}/>

        <TodoList handleEditTodo ={handleEditTodo} deleteTodoItem = {deleteTodoItem} todos={todos}/>
    </>
  )
}

export default App
