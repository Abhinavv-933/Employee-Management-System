import React from 'react'

function NewTask({Data}) {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
              <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{Data.category}</h3>
              <h4 className='text-base'>{Data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{Data.title}</h2>
            <p className='text-sm mt-2'>
              {Data.description}
               </p>
           <button>Accept Task</button>
        </div>
  )
}

export default NewTask