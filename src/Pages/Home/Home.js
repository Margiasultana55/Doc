import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../images/chair.png';
import bg from '../../images/bg.png';
import { Button, Typography, Container } from '@mui/material';
import { Box, padding } from '@mui/system';
import Navbar from '../Shared/Navbar/Navbar';


const banerBg = {
    background: `url(${bg})`,
    padding: '6rem',
    marginTop: '-80px',
    backgroundColor: 'rgba(10, 10, 10,0.881)'

}
const verticalCenter = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

}
const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div style={banerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ paddingTop: '4rem' }}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                        <Box >
                            <Typography variant='h3' style={{ color: 'white', marginTop: '10px' }}
                            >
                                Your new smile <br />
                                Starts Here

                            </Typography>
                            <Typography variant='h6' style={{ fontSize: '14px', padding: 10, color: "white" }}>
                                when your arteries become clogged, usually due to plaque or calcium buildup. This is a normal part of aging and primarily affects the arteries in the legs. When blood vessels are blocked, painful wounds or ulcers can develop.
                            </Typography>
                            <Button style={{ backgroundColor: '#23D2CF', color: 'white', marginLeft: 9, marginTop: '10px' }} variant="contained">About us</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '100%', }} src={chair} alt=''></img>
                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default Home;