import React from 'react';
import Header from '../Home/components/Header/Header';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';

const Tasks = () => {
    return (
        <div className='h-screen'>
            <Header text="Your task list"></Header>
            <div className="task-container h-5/6 grid grid-cols-2 gap-5 content-center">
                <div className="tasks-div w-10/12 mx-auto">
<TaskList/>
                </div>
                <div className="task-form w-10/12 mx-auto ">
                    <TaskForm/>
                </div>
            </div>
        </div>
    );
};

export default Tasks;