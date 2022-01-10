import { sendSignInLinkToEmail } from 'firebase/auth'
import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../../context/UserAuthContext'
import "./style.css"

 const Signup = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const navigate = useNavigate();

     const [error, setError] = useState('');

     const {signUp} = useUserAuth();

        // const emailRef = useRef()
        // const passwordRef = useRef()
        // const passwordConfirmRef = useRef()
        // const { signup } = useAuth()
    
        // function handleSubmit(e) {
        //     e.preventDefault()
    
        //     signup(emailRef.current.value, passwordRef.current.value)
        // }

        const handleSubmit = async (e) => {
            e.preventDefault();
            setError("")
            try {
                await signUp(email, password, confirmPassword);
                navigate("/")
            } catch (err){
                setError(err.message)
            }
        }
    return (

        <div>
            <div className='p-4 box'>
                <h2 className="mb-3">Firebase Auth Login</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                {/* <Form onSubmit={handleSubmit}> */}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId='formBasicEmail'>
                        <Form.Control type="email" 
                        placeholder="Email address" 
                        onChange={ (e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='formBasicEmail'>
                        <Form.Control type="password" placeholder="Password"
                        onChange={ (e) => setPassword(e.target.value)}/>
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId='formBasicEmail'>
                        <Form.Control type="password" placeholder="ConfirmPassword"
                        onChange={ (e) => setConfirmPassword(e.target.value)}/>
                    </Form.Group> 

                    <div className='d-grid gap-2'>
                        <Button variant='primary' type="Submit">
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </div>

            <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
            {/* <Card>
                <Card.Body>
                    <h2 className="text-center nb-4">Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="Password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="Password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center at-2">
                Already have an account? <Link to="/">Log In</Link>
            </div> */}
        </div>
    )
}

export default Signup

// import React from 'react'

//  const Signup = () => {
//     return (
//         <div>
//             kdhf
//         </div>
//     )
// }

// export default Signup

