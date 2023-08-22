import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskList = () => {
    const tasks = useLoaderData();

    const handleDelete = id =>{
        console.log(id);
    }

    return (
        <div className='p-2 bg-red-200 rounded-lg'>
            <p className='py-3'>You have <span className='font-bold text-xl'>{tasks.length}</span> {tasks.length > 1 ? "tasks" : "task"} in hand</p>
            <ul className='bg-rose-50 py-2 px-5 rounded-b-lg'>
                {
                    tasks.map(task =>
                        <li key={task._id} className='bg-rose-200 my-3 ps-1 flex justify-between'>
                            <span>{task.title} : {task.details}</span>
                            <button 
                            className='bg-red-500 px-2 text-white font-semibold hover:bg-red-400 hover:rotate-[180deg] duration-500'
                            onClick={()=>handleDelete(task._id)}
                            >X</button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

export default TaskList;