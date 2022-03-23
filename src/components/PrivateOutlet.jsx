import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../App';


function PrivateOutlet() {
  // const authenTicate=true
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)

  return (
    <div>
        {
            loggedInUser.email ? <Outlet></Outlet> : <Navigate to='/login'></Navigate>
        }
    </div>
  )
}

export default PrivateOutlet