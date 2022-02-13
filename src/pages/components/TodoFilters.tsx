import React, {FC, MouseEvent} from 'react';
import {FilterValueType} from '../Todo';

interface ITodoFiltersPropsType {
    setFilter: (filter: FilterValueType) => void
}

export const TodoFilters: FC<ITodoFiltersPropsType> = (
    {
        setFilter,
    }
) => {
    // Functions
    const handlerClick = (e: MouseEvent<HTMLButtonElement>) => {
        const value = e.currentTarget.value
        const conditions = (value === 'all' || value === 'active' || value === 'completed')
        if (conditions) setFilter(value)
    }
    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                className="btn btn-primary"
                value={'all'}
                onClick={handlerClick}
            >
                ALL
            </button>
            <button
                type="button"
                className="btn btn-primary"
                value={'active'}
                onClick={handlerClick}
            >
                ACTIVE
            </button>
            <button
                type="button"
                className="btn btn-primary"
                value={'completed'}
                onClick={handlerClick}
            >
                COMPLETED
            </button>
        </div>
    );
};

