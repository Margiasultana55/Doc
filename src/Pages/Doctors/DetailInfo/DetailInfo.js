
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import imgg from '../../../images/imgg.jpg'


const verticalCenter = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

}
const DetailInfo = ({ doc }) => {
    const { name, Quali, check, chembarName, chembarDes, newFee, oldFee, phn, time } = doc;
    return (
        <div >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 className='mt-5'>Chember Details</h2>
                <hr style={{ width: '180px', color: '#16BABF' }} />
            </div>

            <Container>
                <Grid className='mb-5' container spacing={2} style={{ paddingTop: '4rem' }}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>

                        <Box >


                            <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                            >
                                Chember: {chembarName}

                            </Typography>
                            <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                            >
                                Adress: {chembarDes}

                            </Typography>
                            <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                            >
                                Time: {time}

                            </Typography>
                            <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                            >
                                Phone: {phn}

                            </Typography>

                            <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                            >
                                Fee For New Patient: {newFee}tk

                            </Typography>
                            <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                            >
                                Fee For Old Patient: {oldFee}tk

                            </Typography>
                            <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                            >
                                Cheking: {check}

                            </Typography>

                        </Box>



                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img style={{ width: '60%', marginRight: '17px' }} src={imgg} alt=''></img>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default DetailInfo;