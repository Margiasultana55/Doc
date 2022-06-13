import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const verticalCenter = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',

}
const MyDetail = () => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [appointDetail, setAppointDetail] = useState([]);

    //get appointments
    useEffect(() => {

        fetch("http://localhost:5000/appoinment")
            .then(res => res.json())
            .then(data => {
                const service = data.filter(data => data._id === serviceId);

                setAppointDetail(service)
                console.log(service);
            })
            .catch(e => {
                console.log(e);
            })
    }, [serviceId])
    console.log(appointDetail);

    ;

    return (
        <div >
            <Grid container spacing={2} style={{ paddingTop: '4rem' }}>
                <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={12} md={6}>
                    {
                        appointDetail.map((doc) =>
                            <Box >

                                <Typography variant='h6' style={{ color: '#23D2CF', marginTop: '10px' }}
                                >
                                    Doctor: {doc.DocInfo.name}

                                </Typography>
                                <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                                >
                                    {doc.DocInfo.Quali}

                                </Typography>
                                <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                                >
                                    {doc.DocInfo.special}

                                </Typography>
                                <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                                >
                                    Chember: {doc.DocInfo.chembarName}

                                </Typography>
                                <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                                >
                                    Adress: {doc.DocInfo.chembarDes}

                                </Typography>

                                <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                                >
                                    Appointment  Date: {doc.Date}

                                </Typography>
                                <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                                >
                                    Appointment Time: {doc.time}

                                </Typography>
                                <Typography variant='h6' style={{ color: 'black', marginTop: '10px' }}
                                >
                                    Fee: {doc.DocInfo.newFee}tk

                                </Typography>

                            </Box>


                        )
                    }
                </Grid>
                {appointDetail.map((doc) => <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '60%', marginRight: '17px' }} src={doc.DocInfo.img} alt=''></img>
                </Grid>)}

            </Grid>
            {/* {
                
            } */}
        </div>
    );
};

export default MyDetail;