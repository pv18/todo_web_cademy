import React from 'react';
import {TodoForm} from './TodoForm';
import {TodoList} from './TodoList';

export const TodoMain = () => {
    return (
        <div className="container">
            <div id="main" className="card card-body">
                <TodoForm/>
                <hr/>
                <TodoList/>
           </div>
        </div>
    );
};

