import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-[400px] flex flex-col'>
      {/* Header */}
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-white text-sm'>
        <h2 className='text-lg font-medium w-1/5 text-center'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 text-center'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 text-center'>Active</h5>
        <h5 className='text-lg font-medium w-1/5 text-center'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 text-center'>Failed</h5>
      </div>

      {/* Scrollable Task List */}
      <div className='overflow-y-auto flex-1 pr-2'>
        {authData.employees.map((elem, idx) => (
          <div
            key={idx}
            className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded text-sm text-white'
          >
            <h2 className='text-lg font-medium w-1/5 text-center'>{elem.name}</h2>
            <h3 className='text-lg font-medium w-1/5 text-pink-400 text-center'>{elem.taskCount.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400 text-center'>{elem.taskCount.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-blue-400 text-center'>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400 text-center'>{elem.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
