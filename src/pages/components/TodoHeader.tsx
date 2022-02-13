import React, {ChangeEvent, FC, useState} from 'react';

interface ITodoHeaderPropsType {
    setSearch: (title: string) => void
}

export const TodoHeader: FC<ITodoHeaderPropsType> = (
    {
        setSearch,
    }
) => {
    const [title, setTitle] = useState<string>('')

    // Functions
    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setSearch(e.currentTarget.value)
    }
    return (
        <header className="bg-warning text-black p-4 mb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Планировщик</h1>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Поиск по списку..."
                            value={title}
                            onChange={handlerChange}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

