import React from 'react';
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';

const AdminDashboard = ({Data}) =>{
  return (
    <div className='h-screen w-full p-10' >
      <Header Data={Data}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard