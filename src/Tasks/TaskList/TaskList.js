import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import TaskDetails from '../TaskDetails/TaskDetails';

const TaskList = () => {
    const loadedTasks = useLoaderData();
    const [tasks, setTasks] = useState(loadedTasks);
    const [taskDetails, setTaskDetails] = useState({});


    const handleDelete = id => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.error('Task deleted successfully')
                    const remaining = tasks.filter(task => task._id !== id);
                    setTasks(remaining);
                }
            })
    }

    const handleTaskDetails = (id) => {
        window.task_modal.showModal();
        const selectedTask = tasks.find(task => task._id === id);
        setTaskDetails(selectedTask);
    }

    return (
        <div className='p-2 bg-red-200 rounded-lg'>
            <p className='py-3'>You have <span className='font-bold text-xl'>{tasks.length}</span> {tasks.length > 1 ? "tasks" : "task"} in hand</p>
            {
                tasks.length ?
                    <ul className='bg-rose-50 py-2 px-5 rounded-b-lg lg:max-h-[450px] lg:overflow-y-scroll overflow-x-clip'>
                        {
                            tasks.map(task =>
                                <div key={task._id} className='bg-rose-200 my-3 flex justify-between'>
                                    <p className='ps-2 cursor-pointer hover:bg-rose-400 hover:text-white w-full text-left tooltip' onClick={() => handleTaskDetails(task._id)} data-tip="Click to show more"><span className='font-bold uppercase'>{task.title}</span> : {task.details.length > 40 ? task.details.slice(0, 40) + " ..." : task.details}</p>
                                    <div className='flex'>
                                        <p className={`${task.status === "Pending" ? "bg-yellow-300" : "bg-green-500 text-white"} flex px-2 items-center`}>{task.status}</p>
                                        <button
                                            className='bg-red-500 px-2 text-white font-semibold hover:bg-red-400 lg:tooltip'
                                            onClick={() => handleDelete(task._id)}
                                            data-tip="delete task"
                                        >X</button></div>
                                </div>

                            )
                        }
                    </ul> : <p className='text-error font-semibold text-xl text-center bg-white py-5'>Add task to see tasklist</p>
            }

            <TaskDetails task={taskDetails}></TaskDetails>
        </div>
    );
};

export default TaskList;