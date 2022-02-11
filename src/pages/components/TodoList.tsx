import React from 'react';

export const TodoList = () => {
    return (
        <>
            <h3 className="title mb-3">Список дел</h3>
            <ul id="items" className="list-group">
                <li className="list-group-item">
                    Приготовить завтрак
                    <button
                        data-action="delete"
                        type="button"
                        className="btn btn-light btn-sm float-right"
                    >
                        Удалить
                    </button>
                </li>
            </ul>
        </>
    );
};

