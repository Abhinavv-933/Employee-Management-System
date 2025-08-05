import React, { useContext, useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    setLoggedInUserData(null);
  };

  useEffect(() => {
    if (authData) {
      const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
      if (loggedInUser && loggedInUser.role) {
        setUser(loggedInUser.role);
        if (loggedInUser.role === 'employee') {
          setLoggedInUserData(loggedInUser);
        }
      }
    }
  }, [authData]);

  // Refresh state after assigning a task
  const refreshLoggedInEmployee = () => {
  console.log("refreshLoggedInEmployee called");
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const logged = JSON.parse(localStorage.getItem('loggedInUser'));
  console.log("logged is:", logged);
  if (logged && logged.email) {
    const found = employees.find(emp => emp.email === logged.email);
    console.log("found employee is:", found);
    setLoggedInUserData(found);
  }
};


  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', email: 'admin@me.com' }));
    }
    else if (authData && Array.isArray(authData.employees)) {
      const employee = authData.employees.find((e) => email === e.email && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ ...employee, role: 'employee' }));
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && (
        <AdminDashboard
          handleLogout={handleLogout}
          Data={{ role: 'admin', name: 'Abhinav' }}
          onTaskCreated={refreshLoggedInEmployee}
        />
      )}
      {user === 'employee' && (
        <EmployeeDashboard
          Data={loggedInUserData}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default App;
