import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from "react-google-button"
import { useUserAuth } from '../../context/UserAuthContext';



 const ForgotPassword = () => {
    //  const [email, setEmail] = useState(""); //state of email and password
    //  const [password, setPassword] = useState("");
     const [email, setEmail] = useState('');
    //  const [password, setPassword] = useState('');
     const [error, setError] = useState('');
     const [message, setMessage] = useState('');
     const navigate = useNavigate();
     const {resetPassword} = useUserAuth();

    

     const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        setMessage("")
        try {
            await resetPassword(email);
            setMessage("Check your inbox for further instructions.")
            // navigate("/home")
        } catch (err){
            setError("Failed to reset password.")
        }
    }

    return (
        <div>
            <div className='p-4 box'>
                <h2 className="mb-3">Reset Password</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {message && <Alert variant="success">{message}</Alert>}
                <Form onSubmit={handleSubmit}>
                {/* <Form> */}
                    <Form.Group className="mb-3" controlId='formBasicEmail'>
                        <Form.Control type="email" placeholder="Email address" 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <div className='d-grid gap-2'>
                        <Button variant='primary' type="Reset" onClick={handleSubmit}>
                        Reset Password
                        </Button>
                    </div>

                   </Form>
            </div>

           

        <div className="p-4 box mt-3 text-center">
         <Link to="/">Login</Link>
      </div>

            <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>

        </div>
    )
}

export default ForgotPassword;
