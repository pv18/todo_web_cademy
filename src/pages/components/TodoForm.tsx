import React from 'react';

export const TodoForm = () => {
    return (
        <form id="addForm" className="form-inline mb-3">
            <input
                type="text"
                className="form-control mr-2 flex-grow-1"
                placeholder="Добавить задачу"
                id="newItemText"
            />
            <input
                type="submit"
                className="btn btn-dark"
                value="Добавить"
            />
        </form>
    );
};

