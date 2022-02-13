import React, {FC} from 'react';
import {TodoForm} from './TodoForm';
import {TodoList} from './TodoList';
import {FilterValueType, ITodo} from '../Todo';
import {TodoFilters} from './TodoFilters';
import {Pagination} from './Pagination';

interface ITodoMainPropsType {
    todos: ITodo[]
    pagesArray: number[]
    addTodo: (title: string) => void
    removeTodo: (id: number) => void
    changeCompleted: (id: number) => void
    setFilter: (filter: FilterValueType) => void
}

export const TodoMain: FC<ITodoMainPropsType> = (
    {
        todos,
        addTodo,
        removeTodo,
        changeCompleted,
        setFilter,
        pagesArray
    }
) => {
    // Components before rendering
    const componentTodoList = todos.length === 0
        ? <h1 className="title mb-3 text-center" >ЗАДАЧ НЕТ !!!</h1>
        : <TodoList todos={todos}
                    removeTodo={removeTodo}
                    changeCompleted={changeCompleted}
        />
    return (
        <div className="container">
            <div id="main" className="card card-body">
                <TodoForm addTodo={addTodo}/>
                <hr/>
                {componentTodoList}
                <Pagination pagesArray={pagesArray}/>
                <TodoFilters setFilter={setFilter}/>
            </div>
        </div>
    );
};

