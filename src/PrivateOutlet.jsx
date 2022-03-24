import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from './App';


function PrivateOutlet() {
  
  const location=useLocation()
  // const authenTicate=true
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

  return (
    <div>
        {
            loggedInUser.email ? <Outlet></Outlet> : <Navigate to='/login' replace state={{from:location}}></Navigate>
        }
    </div>
  )
}

export default PrivateOutlet