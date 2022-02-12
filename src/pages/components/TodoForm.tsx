import React, {ChangeEvent, KeyboardEvent, FC, useState} from 'react';
import {ITodo} from '../Todo';

interface ITodoFormPropsType {
    addTodo: (title: string) => void

}

export const TodoForm: FC<ITodoFormPropsType> = (
    {
        addTodo,
    }
) => {
    const [title, setTitle] = useState<string>('')
    // Functions
    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const handlerClick = () => {
        if (title.trim().length) {
            addTodo(title)
        }
    }
    const handlerKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handlerClick()
        }
    }
    return (
        <form id="addForm" className="form-inline mb-3">
            <input
                type="text"
                className="form-control mr-2 flex-grow-1"
                placeholder="Добавить задачу"
                value={title}
                onChange={handlerChange}
                onKeyPress={handlerKeyPress}

            />
            <input
                type="submit"
                className="btn btn-dark"
                value="Добавить"
                onClick={handlerClick}
            />
        </form>
    );
};

