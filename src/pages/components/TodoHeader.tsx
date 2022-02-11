import React from 'react';

export const TodoHeader = () => {
    return (
        <header id="main-header" className="bg-warning text-black p-4 mb-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 id="header-title">Планировщик</h1>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <input
                            type="text"
                            className="form-control"
                            id="filter"
                            placeholder="Поиск по списку..."
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

