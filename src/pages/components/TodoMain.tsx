import React, {FC} from 'react';
import {TodoForm} from './TodoForm';
import {TodoList} from './TodoList';
import {ITodo} from '../Todo';

interface ITodoMainPropsType {
    todos: ITodo[]
    addTodo: (title: string) => void
    removeTodo: (id: number) => void
}

export const TodoMain: FC<ITodoMainPropsType> = (
    {
        todos,
        addTodo,
        removeTodo
    }
) => {
    return (
        <div className="container">
            <div id="main" className="card card-body">
                <TodoForm addTodo={addTodo}/>
                <hr/>
                <TodoList todos={todos}
                          removeTodo={removeTodo}
                />
            </div>
        </div>
    );
};

