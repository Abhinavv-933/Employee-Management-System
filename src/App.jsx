import React, { useContext, useState, useEffect } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const[loggedInUserData, setLoggedInUserData] = useState(null)

  useEffect(() => {
    if(authData){
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if (loggedInUser && loggedInUser.role) {
      setUser(loggedInUser.role);
       if (loggedInUser.role === 'employee') {
        setLoggedInUserData(loggedInUser);
      }
    }
  }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } 
    else if (authData && Array.isArray(authData.employees)){
      const employee = authData.employees.find((e) => email === e.email && password === e.password)
         if(employee){
         setUser('employee');
         setLoggedInUserData(employee)
         localStorage.setItem('loggedInUser', JSON.stringify({ ...employee, role: 'employee' }));
       }
    }    
    else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} />: ''}
      {user === 'admin' ? (
       <AdminDashboard Data={{ role: 'admin', name: 'Abhinav' }} />
         ) : user === 'employee' ? (
       <EmployeeDashboard Data={loggedInUserData} />
         ) : null}
    </>
    );
};

export default App;