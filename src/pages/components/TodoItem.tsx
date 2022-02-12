import React, {FC} from 'react';
import {ITodo} from '../Todo';

interface ITodoItemPropsType {
    todo: ITodo
    removeTodo: (id: number) => void
}

export const TodoItem: FC<ITodoItemPropsType> = (
    {
        todo,
        removeTodo
    }
) => {
    // Functions
    const handlerClick = () => {
        removeTodo(todo.id)
    }
    return (
        <li className="list-group-item">
            {todo.title}
            <button
                data-action="delete"
                type="button"
                className="btn btn-light btn-sm float-right"
                onClick={handlerClick}
            >
                Delete
            </button>
        </li>
    );
};

