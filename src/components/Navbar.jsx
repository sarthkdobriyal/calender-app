import React, { useContext } from 'react'
import '../App.scss'
import { AuthContext } from '../context/AuthContext'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';


function Navbar() {
    const currrentUser = useContext(AuthContext);
    console.log("from navbar", currrentUser)

  return (
    <div className='navbar'>
        <h3>Calendar</h3>
        <div className='user'>
            
            <div className='userInfo'>
            <img src="https://www.svgrepo.com/show/499669/user-circle.svg" alt="" />
            <span>{currrentUser.displayName}</span>
            </div>
            
            <button onClick={() => signOut(auth)}>logout</button>
            
        </div>

        
    </div>
  )
}

export default Navbar