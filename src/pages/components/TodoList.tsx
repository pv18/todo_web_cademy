import React, {FC} from 'react';
import {ITodo} from '../Todo';
import {TodoItem} from './TodoItem';

interface ITodoListPropsType {
    todos: ITodo[]
    removeTodo: (id: number) => void
    changeCompleted: (id: number) => void

}

export const TodoList: FC<ITodoListPropsType> = (
    {
        todos,
        removeTodo,
        changeCompleted
    }
) => {
    // Components before rendering
    const componentTodoList = todos.map(todo => {
        return <TodoItem key={todo.id}
                         todo={todo}
                         removeTodo={removeTodo}
                         changeCompleted={changeCompleted}
            />

    })
    return (
        <>
            <h3 className="title mb-3">Список дел</h3>
            <ul id="items" className="list-group">
                {componentTodoList}
            </ul>
        </>
    );
};

