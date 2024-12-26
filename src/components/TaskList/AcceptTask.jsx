import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded-md'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>
        {data.taskDescription}
        </p>
        <div className='flex gap-2 flex-col mt-5'>
            <button className='px-2 py-2 text-sm rounded-md w-full bg-green-500'>Mark as Completed</button>
            <button className='px-2 py-2 text-sm rounded-md w-full bg-red-500'>Mark as Failed</button>
        </div>
    </div>
  )
}

export default AcceptTask