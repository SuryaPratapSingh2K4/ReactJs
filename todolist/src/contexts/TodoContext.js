import React, {useContext, createContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Learn reactjs and tailwind css",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}