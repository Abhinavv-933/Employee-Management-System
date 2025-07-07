import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({Data})=>{
  console.log("TaskList Data:", Data);
  
  return(
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10 w-full'>
       {Data.tasks.map((elem,idx) => {
        if(elem.active){
          return <AcceptTask key={idx } Data={elem}/>
        }
        if(elem.newTask){
          return <newTask key={idx} Data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx} Data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx} Data={elem}/>
        }
        return null 
       })}
  
        </div>
  )
}

export default TaskList 