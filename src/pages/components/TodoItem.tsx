import React, {FC} from 'react';
import {ITodo} from '../Todo';

interface ITodoItemPropsType {
    todo: ITodo
    removeTodo: (id: number) => void
    changeCompleted: (id: number) => void
}

export const TodoItem: FC<ITodoItemPropsType> = (
    {
        todo,
        removeTodo,
        changeCompleted
    }
) => {
    // Functions
    const handlerClick = () => removeTodo(todo.id)
    const handlerChange = () => changeCompleted(todo.id)

    return (
        <li className="list-group-item">
            <input
                type="checkbox"
                className="mr-3"
                checked={todo.completed}
                onChange={handlerChange}
            />
            {todo.title}
            <button
                type="button"
                className="btn btn-light btn-sm float-right"
                onClick={handlerClick}
            >
                Delete
            </button>
        </li>
    );
};

