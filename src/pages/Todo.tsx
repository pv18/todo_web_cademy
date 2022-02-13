import React, {useEffect, useState} from 'react';
import {TodoHeader} from './components/TodoHeader';
import {TodoMain} from './components/TodoMain';
import axios from 'axios';
import {getPageCount, getPagesArray} from './utils/page';

export type FilterValueType = 'all' | 'active' | 'completed'

export interface ITodo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>([]) // задачи
    const [search, setSearch] = useState<string>('') // тескт для поиска
    const [filter, setFilter] = useState<FilterValueType>('all') // фильтр
    const [totalPage, setTotalPage] = useState<number>(0) // количество страниц пагинации
    const [limit, setLimit] = useState<number>(10) // количество задач для отображения на странице
    const [page, setPage] = useState<number>(1) // текущая страница с отображением задач
    let pagesArray = getPagesArray(totalPage)

    useEffect(() => {
        fetchTodos(limit, page)
    }, [])

    // Functions
    async function fetchTodos(limit: number = 10, page: number = 1) {
        const getString = `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
        try {
            const response = await axios.get<ITodo[]>(getString)
            setTodos(response.data)
            const totalCount = +(response.headers['x-total-count']) // общее количество страниц
            setTotalPage(getPageCount(totalCount, limit))
        } catch (e) {
            alert(e)
        }
    }

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
    const getFilteredTodos = (filter: FilterValueType) => {
        switch (filter) {
            case 'active':
                return todosAfterSearch.filter(todo => !todo.completed)
            case 'completed':
                return todosAfterSearch.filter(todo => todo.completed)
            default:
                return todosAfterSearch
        }
    }

    // Components before rendering
    const todosAfterSearch = searchTodo(search)
    const filteredTodos = getFilteredTodos(filter)
    return (
        <>
            <TodoHeader setSearch={setSearch}/>
            <TodoMain todos={filteredTodos}
                      addTodo={addTodo}
                      removeTodo={removeTodo}
                      changeCompleted={changeCompleted}
                      setFilter={setFilter}
                      pagesArray={pagesArray}
            />
        </>
    );
};

