import React, {useState} from 'react';
import {TodoHeader} from './components/TodoHeader';
import {TodoMain} from './components/TodoMain';

export const Todo = () => {
    const [tasks, setTasks] = useState<string>('')
    return (
        <>
            <TodoHeader/>
            <TodoMain/>
        </>
    );
};

