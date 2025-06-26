import React ,{ createContext, useState , useEffect} from 'react'
import { getLocalStorage,setLocalStorage} from '../utils/locaStorage';

export const AuthContext = createContext()

const AuthProvider = ({children}) =>{

  const [userData, setUserData] = useState({
    employees: [], 
    admin: null,
  });

  useEffect(() =>{
    const existing = localStorage.getItem('employees');
    if (!existing) {
      setLocalStorage(); 
    }
    setLocalStorage()
    const {employees ,admin} = getLocalStorage()
    setUserData({employees,admin})
  },[])


  return (
    <div>
      <AuthContext.Provider value = {userData}>
         {children}
      </AuthContext.Provider>
    </div> 
  )
}

export default AuthProvider