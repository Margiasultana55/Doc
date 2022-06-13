import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';

import { Link, useLocation, useNavigate } from "react-router-dom";

import login from '../../../images/login.png';
import useAuth from '../../../hook/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();

    const { user, registerUser, isLoading, authError } = useAuth();
    const handleOnBlur = e => {
        const fied = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[fied] = value;
        setLoginData(newLoginData);

    }
    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('password did not match')
            return
        }

        registerUser(loginData.email, loginData.password);
        if (loginData.password === loginData.password2) {
            alert('user created successfully!')
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate)
        e.preventDefault();

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
                        <Typography style={{ marginTop: "6rem ", }} variant="h6" gutterBottom>
                            Register
                        </Typography>
                        {
                            !isLoading && <form onSubmit={handleLogin}>
                                <TextField sx={{ width: '75%', m: 2 }}
                                    id="standard-name-input"
                                    label="name"

                                    name="name"
                                    onBlur={handleOnBlur}
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <TextField sx={{ width: '75%', m: 2 }}
                                    id="standard-email-input"
                                    label="email"
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <TextField sx={{ width: '75%', m: 2 }}
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    autoComplete="current-password"
                                    variant="standard"
                                />
                                <TextField sx={{ width: '75%', m: 2 }}
                                    id="standard-password2-input"
                                    label=" Retype Password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                    autoComplete="current-password"
                                    variant="standard"
                                />


                                <Button type="submit" variant="contained" sx={{ width: '75%', m: 1, mb: 3 }}>Register</Button>
                                <Link style={{ textDecoration: 'none' }} to='/login'>
                                    <Button variant="text">Already registered?Please login</Button>
                                </Link>
                                {/* {<Alert severity="success">user created successfully!</Alert>} */}
                                {authError && <Alert severity="error" style={{ justifyContent: 'center' }}>{authError}</Alert>}
                            </form>}
                        {
                            isLoading && <CircularProgress />
                        }


                    </Grid>

                    <Grid item xs={12} md={6}>
                        <img style={{ width: '80%', marginTop: '6rem', height: '400px' }} src={login} alt="/"></img>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Register;