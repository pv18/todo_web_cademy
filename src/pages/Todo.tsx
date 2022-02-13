import React, {useEffect, useState} from 'react';
import {TodoHeader} from './components/TodoHeader';
import {TodoMain} from './components/TodoMain';
import axios from 'axios';

export interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>([])
    const [search, setSearch] = useState<string>('')

    useEffect(() => {
        fetchTodos()
    }, [])
    // Functions
    const addTodo = (title: string) => {
        const newTodo = {userId: 1, id: new Date().getMilliseconds(), title: title, completed: false}
        setTodos([newTodo, ...todos])
    }
    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const searchTodo = (search: string) => {
        if (search.trim().length) {
            return todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
        } else {
            return todos
        }
    }
    const changeCompleted = (id: number) => {
        setTodos(todos.map(todo =>
            (todo.id !== id) ? todo : {...todo, completed: !todo.completed}
        ))
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    // Components before rendering
    const filteredTodos = searchTodo(search)

    return (
        <>
            <TodoHeader setSearch={setSearch}/>
            <TodoMain todos={filteredTodos}
                      addTodo={addTodo}
                      removeTodo={removeTodo}
                      changeCompleted={changeCompleted}
            />
        </>
    );
};

