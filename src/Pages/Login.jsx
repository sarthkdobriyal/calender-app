import React, {useState} from 'react'
import '../App.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


function Login() {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try{
            const res = await signInWithEmailAndPassword(auth, email, password)
            navigate("/");
        }catch(error){
            setErr(true);
            alert(error.message);
        }
    }

  return (
    <div className='login'>
        <div className='form-container'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email'/>
                <input type="password"  placeholder='Password'/>
                <button>Login</button>
                <p>Don't have an account? <Link to="/signup">Register</Link> </p>
            </form>
            {err && <p>Error</p>}
        </div>
    </div>
  )
}

export default Login