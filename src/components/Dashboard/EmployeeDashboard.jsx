import React from 'react'
import Header from '../Other/Header'
import TaskListNumber from '../Other/TaskListNumber'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ({Data, handleLogout})=> {
  console.log(Data);
  
  return (
    <div className='p-10 BG-[#1C1C1C] h-screen'>
      <Header Data={Data} handleLogout={handleLogout}/>
      <TaskListNumber Data={Data}/>
      <TaskList Data={Data}/>
    </div>
  )
}

export default EmployeeDashboard