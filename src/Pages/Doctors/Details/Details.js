import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import bg from '../../../images/bg.png';
import { Button, Typography, Container, Grid } from '@mui/material';
import { Box, padding } from '@mui/system';
import DetailInfo from '../DetailInfo/DetailInfo';
import Navbar from '../../Shared/Navbar/Navbar';


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

const Details = () => {
    const { serviceId } = useParams();
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => {
                const doc = data.find(data => data._id === serviceId);
                setDoctor(doc);
                console.log(doc);
            });
    }, [serviceId]);
    const { _id, name, img, special, Quali } = doctor;

    return (
        <div>
            <Navbar></Navbar>

            <div style={banerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ paddingTop: '4rem' }}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                        <Box >
                            <Typography variant='h4' style={{ color: 'white', marginTop: '10px' }}
                            >
                                {name}

                            </Typography>
                            <Typography variant='h7' style={{ color: 'white', marginTop: '10px' }}
                            >
                                {Quali}

                            </Typography>
                            <Typography variant='h6' style={{ color: '#23D2CF', marginTop: '10px' }}
                            >
                                {special}

                            </Typography>


                            <Link style={{ textDecoration: 'none' }} to={`/form/${_id}`}>  <Button style={{ backgroundColor: '#23D2CF', color: 'white', marginLeft: 9, marginTop: '30px' }} variant="contained"> Get Appoinmenet</Button></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '60%', marginRight: '17px' }} src={img} alt=''></img>
                    </Grid>

                </Grid>
            </div>
            <DetailInfo doc={doctor}>

            </DetailInfo>
        </div>
    );
};

export default Details;