import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../App.scss';
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Signup() {

    const [err, setErr]  = useState(false);

    const navigate = useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        try{    
            const res = await createUserWithEmailAndPassword(auth, email, password);
            // console.log(res.user);
            navigate("/")
        }catch(error){
            alert(error.message)
            setErr(true);
        }
    }


  return (
    <div className='login'>
        <div className='form-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email'/>
                <input type="password"  placeholder='Password'/>
                <button>Sign Up</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
            {err && <p> Error!! Please try Again</p>}
        </div>
    </div>
  )
}

export default Signup