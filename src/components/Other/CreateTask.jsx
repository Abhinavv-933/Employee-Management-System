import React, { useState, useEffect } from 'react';

const CreateTask = () => {
  const [TaskTitle, setTaskTitle] = useState('');
  const [Date, setDate] = useState('');
  const [Assignto, setAssignto] = useState('');
  const [Category, setCategory] = useState('');
  const [Description, setDescription] = useState('');
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployeeList(employees.map(emp => emp.name));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    const task = {
      TaskTitle,
      Date,
      Assignto,
      Category,
      Description,
      active: false,
      newtask: true,
      failed: false
    };

    const updatedEmployees = employees.map(emp => {
      if (emp.name === Assignto) {
        return {
          ...emp,
          tasks: [...(emp.tasks || []), task]
        };
      }
      return emp;
    });

    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Reset fields
    setTaskTitle('');
    setDate('');
    setAssignto('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
      <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
              placeholder='Make a UI Design'
              value={TaskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
              type='date'
              value={Date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <select
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
              value={Assignto}
              onChange={(e) => setAssignto(e.target.value)}
              required
            >
              <option value=''>Select employee</option>
              {employeeList.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
          </div>

          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input
              className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
              type='text'
              placeholder='design, dev etc.'
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
          <textarea
            className='w-full h-60 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400'
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            cols='30'
            rows='10'
            required
          ></textarea>
        </div>

        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
