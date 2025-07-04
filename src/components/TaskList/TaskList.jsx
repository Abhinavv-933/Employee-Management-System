import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({Data})=>{
  return(
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 w-full'>
        <AcceptTask />
        <AcceptTask />
        <CompleteTask />
        <FailedTask />
         
        </div>
  )
}

export default TaskList 