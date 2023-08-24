import React from 'react';

const TaskForm = () => {

    const handleFormSubmit = event => {
        // event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const details = form.details.value;
        const status = "Pending";
        const task = { title, details, status };

        fetch('https://task-manager-server-rakibul.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                }
            })
    }

    return (
        <div className='py-10 bg-red-200 rounded-lg'>
            <h3 className='text-white text-center text-3xl font-semibold pb-5'>Add Your Task</h3>
            <form className='w-10/12 mx-auto' onSubmit={handleFormSubmit}>
                <input className='w-full h-10 rounded-t-lg px-2 outline-none placeholder:text-slate-500 placeholder:font-semibold focus:placeholder:text-slate-200' type="text" name="title" id="" placeholder='Enter task title' required />
                <br />
                <textarea className='w-full h-16 my-5 px-2 outline-none placeholder:text-slate-500 placeholder:font-semibold focus:placeholder:text-slate-200' type="text" name="details" id="" placeholder='Enter task detail' required />
                <br />
                <input className='w-full bg-gradient-to-br from-yellow-300 to-red-500 text-white font-semibold uppercase py-2 rounded-b-lg cursor-pointer hover:bg-gradient-to-tl' type="submit" value="Add task" />
            </form>
        </div>
    );
};

export default TaskForm;