import React from 'react';
import Header from '../Home/components/Header/Header';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';

const Tasks = () => {

    return (
        <div className=''>
            <Header text="Your task list"></Header>
            <div className="task-container lg:h-5/6 lg:grid grid-cols-2 gap-2 py-10 px-2">
                <div className="tasks-div lg:w-11/12 w-10/12 mx-auto pb-10 lg:max-h-[450px]">
                    <TaskList></TaskList>
                </div>
                <div className="task-form lg:w-11/12 w-10/12 mx-auto ">
                    <TaskForm />
                </div>
            </div>
        </div>
    );
};

export default Tasks;