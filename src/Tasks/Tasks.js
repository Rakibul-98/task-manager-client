import React from 'react';
import Header from '../Home/components/Header/Header';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';

const Tasks = () => {
    return (
        <div className='lg:h-screen'>
            <Header text="Your task list"></Header>
            <div className="task-container lg:h-5/6 lg:grid grid-cols-2 gap-5 content-center py-10">
                <div className="tasks-div w-10/12 mx-auto pb-10">
                    <TaskList />
                </div>
                <div className="task-form w-10/12 mx-auto ">
                    <TaskForm />
                </div>
            </div>
        </div>
    );
};

export default Tasks;