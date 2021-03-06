import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Login/Login.css'
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation()
    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(
        auth
    );
    const resetPassWord = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        alert('Sent email');
    }

    let from = location.state?.from?.pathname || '/'

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)


    }
    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='headline text-center mt-2'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='button' type="submit">
                    Submit
                </Button>
            </Form>
            <p>New student <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
            <p className='text-danger pe-auto' onClick={resetPassWord}>Forget Your password...</p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;