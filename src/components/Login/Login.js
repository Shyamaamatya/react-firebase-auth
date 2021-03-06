import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from "react-google-button"
import { useUserAuth } from '../../context/UserAuthContext';
import "./style.css"


 const Login = () => {
    //  const [email, setEmail] = useState(""); //state of email and password
    //  const [password, setPassword] = useState("");
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');
     const navigate = useNavigate();
     const {logIn, googleSigIn} = useUserAuth();

    

     const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        try {
            await logIn(email, password);
            navigate("/home")
        } catch (err){
            setError(err.message)
        }
    }


    const handleGoogleSignIn = async (e) => {
        e.preventDefault();

        try {
            await googleSigIn();
            navigate("/home")
        }catch (err) {
            setError(err.message);
        }

    }

    return (
        <div>
            <div className='p-4 box'>
                <h2 className="mb-3">Firebase Auth Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                {/* <Form> */}
                    <Form.Group className="mb-3" controlId='formBasicEmail'>
                        <Form.Control type="email" placeholder="Email address" 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='formBasicEmail'>
                        <Form.Control type="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group> 

                    <div className='d-grid gap-2'>
                        <Button variant='primary' type="Submit">
                            Log In
                        </Button>
                    </div>

                    {/* <div className='d-grid gap-2'>
                        <GoogleButton variant='primary' type="Submit">
                            Log In
                        </GoogleButton>
                    </div> */}


                </Form>
            </div>

            <div className='google-btn'>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>

        <div className="p-4 box mt-3 text-center">
         <Link to="/forgotPassword">Forgot Password?</Link>
      </div>

            <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>

        </div>
    )
}

export default Login
