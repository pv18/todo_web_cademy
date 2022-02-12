import React, {FC} from 'react';
import {TodoForm} from './TodoForm';
import {TodoList} from './TodoList';
import {ITodo} from '../Todo';

interface ITodoMainPropsType {
    todos: ITodo[]
    addTodo: (title: string) => void
}

export const TodoMain: FC<ITodoMainPropsType> = (
    {
        todos,
        addTodo
    }
) => {
    return (
        <div className="container">
            <div id="main" className="card card-body">
                <TodoForm addTodo={addTodo}/>
                <hr/>
                <TodoList/>
            </div>
        </div>
    );
};

