import React from 'react'

function FailedTask({Data}) {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
              <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded'>{Data.category}</h3>
              <h4 className='text-base'>{Data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{Data.title}</h2>
            <p className='text-sm mt-2'>
              {Data.description}
               </p>
           <div className='mt-2'>
              <button className='w-full'>Completed</button>
            </div>
        </div>
  )
}

export default FailedTask