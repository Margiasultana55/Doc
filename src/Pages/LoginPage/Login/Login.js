import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from '../../../images/login.png';
import './Login.css'
import useAuth from '../../../hook/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, user, authError, signinWithGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signinWithGoogle(location, navigate);
    }
    return (
        <div style={{}}>
            <Navbar></Navbar>
            <div style={{ background: 'rgba(10, 10, 10, 0.822)', height: '5rem', marginTop: '-6rem' }}>

            </div>
            <Container style={{ background: 'rgb(243, 243, 243)', width: '84.4%', paddingBottom: '7rem' }}>
                <hr />
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography style={{ marginTop: "7rem " }} variant="h6" gutterBottom>
                            Login
                        </Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit} >
                            <TextField sx={{ width: '75%', m: 2 }}
                                id="standard-email-input"
                                label="email"
                                type="email"
                                name="email"
                                onChange={handleOnChange}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <TextField sx={{ width: '75%', m: 2 }}
                                id="standard-password-input"
                                label=" Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                autoComplete="current-password"
                                variant="standard"
                            />
                            <br />
                            <Link style={{ textDecoration: 'none' }} to='/register'>
                                <Button variant="text">New user?Please register</Button>
                            </Link><br />
                            <button type="submit" className='btn login-btn'>Login</button>


                            {/* {user?.email && <Alert severity="success">Login successfully!</Alert>} */}

                        </form>}
                        {
                            isLoading && <CircularProgress />
                        }
                        <br />
                        or
                        <br />

                        <button onClick={handleGoogleSignIn} type="submit" className='btn ' >Signin with   <i className="fab fa-google text-info"></i></button>
                        {authError && <Alert severity="error" style={{ justifyContent: 'center' }}>{authError}</Alert>}

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img style={{ width: '80%', marginTop: '6rem', height: '400px' }} src={login} alt="/"></img>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;