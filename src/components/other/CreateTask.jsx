import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setuserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = React.useState('');
    const [taskDescription, setTaskDescription] = React.useState('');
    const [taskDate, setTaskDate] = React.useState('');
    const [assignTo, setAssignTo] = React.useState('');
    const [category, setCategory] = React.useState('');

    const [newTask, setNewTask] = React.useState({});

    const submitHandler = (e) => {
        e.preventDefault()
        
        const newTask = {taskTitle, taskDescription, taskDate , category, active:false, newTask:true, failed:false, completed:false}

        const data = userData

        data.forEach(function(elem) {
            if(assignTo == elem.firstname) {
                elem.tasks.push(newTask)
                elem.taskCount.newTask = elem.taskCount.newTask + 1
            }
        })

        setuserData(data)
        console.log(data);
        
        setTaskTitle('')
        setTaskDescription('')
        setTaskDate('')
        setAssignTo('')
        setCategory('')
        
    }


  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e) => {
            submitHandler(e)
        }} 
            className='flex w-full flex-wrap items-start justify-between '
        >
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input 
                    value={taskTitle}
                    onChange={(e) => {
                        setTaskTitle(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='make a ui design...' />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input 
                        value={taskDate}
                        onChange={(e) => {
                            setTaskDate(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" 
                    />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input 
                    value={assignTo}
                    onChange={(e) => {
                        setAssignTo(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name'/>
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input 
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }}
                    className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc.'/>
                </div>
            </div>
            
            <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                value = {taskDescription}
                onChange = {(e) => {
                    setTaskDescription(e.target.value)
                }}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
            
        </form>
    </div>
  )
}

export default CreateTask