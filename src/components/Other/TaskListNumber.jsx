import React from 'react'

const TaskListNumber = ({Data})=>{
  console.log("TaskListNumber Data:", Data);
  return(
     <div className='flex mt-10 justify-between gap-5 screen'>
         <div className='rounded-xl w-[45%] px-6 py-9 bg-red-400'>
           <h2 className='text-3xl font-semibold'>{Data.taskCount?.newTask ?? 0}</h2>
           <h3 className='text-xl font-medium'>New Task</h3>
         </div>
         <div className='rounded-xl w-[45%] px-6 py-9 bg-blue-400'>
           <h2 className='text-3xl font-semibold'>{Data.taskCount?.completed ?? 0}</h2>
           <h3 className='text-xl font-medium'>Completed</h3>
         </div>
         <div className='rounded-xl w-[45%] px-6 py-9 bg-green-400'>
           <h2 className='text-3xl font-semibold'>{Data.taskCount?.active ?? 0}</h2>
           <h3 className='text-xl font-medium'>Accepted</h3>
         </div>
         <div className='rounded-xl w-[45%] px-6 py-9 bg-yellow-400'>
           <h2 className='text-3xl font-semibold'>{Data.taskCount?.failed ?? 0}</h2>
           <h3 className='text-xl font-medium'>Failed</h3>
         </div>
     </div>
  )
}

export default TaskListNumber