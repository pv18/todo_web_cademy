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

    useEffect(() => {
        fetchTodos()
    }, [])
    // Functions
    const addTodo = (title: string) => {
        const newTodo = {userId: 1, id: new Date().getMilliseconds(), title: title, completed: false}
        setTodos([newTodo, ...todos])
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            console.log(response.data)
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <TodoHeader/>
            <TodoMain todos={todos} addTodo={addTodo}/>
        </>
    );
};

