import React from 'react';
import { toast } from 'react-hot-toast';

const TaskDetails = ({ task }) => {

    const handleUpdateStatus = () =>{
        console.log(task)
        fetch(`https://task-manager-server-rakibul.vercel.app/tasks/${task._id}`,{
            method:"PATCH"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success("Status updated successfully");
                window.location.reload();
            }
        })
    }

    return (
        <dialog id="task_modal" className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none">✕</button>

                <h3 className="font-bold text-lg text-center">{task.title}</h3>
                <div className="divider"></div>
                <p className=' overflow-auto'>{task.details}</p>
                <div className="divider"></div>
                <p onClick={handleUpdateStatus} className={`${task.status==="Completed"?"bg-success disabled" : "bg-warning cursor-pointer hover:bg-amber-600"} flex items-center w-fit mx-auto py-2 px-5 rounded-md text-white font-semibold tooltip`} data-tip={task.status==="Completed"?"Already completed":"Click to complete task"}>{task.status}</p>

            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default TaskDetails;