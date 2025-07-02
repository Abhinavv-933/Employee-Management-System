import React from 'react'

function FailedTask() {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
              <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-base'>20 june 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='text-sm mt-2'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime odit tempore ipsa cupiditate saepe vitae, vero debitis doloribus nulla eum quae eligendi, non dignissimos aspernatur eaque, esse molestias facere quam.
            </p>
           <div className='mt-2'>
              <button className='w-full'>Completed</button>
            </div>
        </div>
  )
}

export default FailedTask