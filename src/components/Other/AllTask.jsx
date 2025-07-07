import react ,{useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {

const authData = useContext(AuthContext)
console.log(authData.employees);


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-55'>
      <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 bg-green-600'>Employee Name</h2>
        <h3 className='w-1/5 bg-black-600'>New Task</h3>
        <h5 className='w-1/5 bg-yellow-600'>Active</h5>
        <h5 className='w-1/5 bg-Blue-600'>Completed</h5>
        <h5 className='w-1/5 bg-purple-600'>Failed</h5>
      </div>
      
      <div className='h-[80%] max-h-[250%] overflow-auto'> 
        {authData.employees.map(function(elem){
        return <div className='bg-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 text-white-600'>{elem.name}</h2>
        <h3 className='w-1/5 text-blue-600'>{elem.title}</h3>
        <h5 className='w-1/5 text-yellow-600'>active</h5>
        <h5 className='w-1/5 text-green-600'>completed</h5>
        <h5 className='w-1/5 text-Brown-600'>Status</h5>

          </div>
        })}
      </div>
    
    </div>
  )
}

export default AllTask