import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';

import Stack from '@mui/material/Stack';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

const AppointmentForm = () => {

    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [doctor, setDoctor] = useState([]);
    const initialInfo = { clientName: user.displayName, email: user.email }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);

    }
    console.log(bookingInfo);
    const handleFormSubmit = e => {
        //collect data
        const orders = {
            ...bookingInfo,
            Date: value.toLocaleDateString(),
            time: value.toLocaleTimeString(),
            DocName: name,
            DocInfo: doctor

        }
        //send data to server
        fetch('http://localhost:5000/appoinment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)

        })
            .then(res => res.json())
            .then(data => {
                alert('Ordered successfull!')
                console.log(data);

            })



        e.preventDefault();
    }


    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => {
                const doc = data.find(data => data._id === serviceId);
                setDoctor(doc);
                console.log(doc);
            });
    }, [serviceId]);

    const { _id, name, img, special } = doctor;
    console.log(JSON.stringify(value));
    return (
        <div>
            <Navbar></Navbar>

            <div style={{ background: 'rgba(10, 10, 10, 0.822)', height: '5rem', marginTop: '-6rem' }}>

            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h5 style={{ marginTop: '6rem' }}>Doctor:{name}</h5>
                <p>{special}</p>
                <hr style={{ width: '180px', color: '#16BABF' }} />
            </div>
            <form onSubmit={handleFormSubmit} className='container' style={{ marginTop: '4rem', boxShadow: '2px 3px 5px 3px #888888', paddingTop: '3rem', paddingBottom: '3rem', marginBottom: '5rem' }}>

                <LocalizationProvider dateAdapter={AdapterDateFns} >
                    <Stack spacing={4} sx={{ width: '50%', display: 'flex', alignItems: 'flex-end' }}>


                        <DateTimePicker
                            label="Date&Time"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField
                                name="dateTime"
                                {...params}
                                sx={{ width: '50%' }} />}
                        />
                    </Stack>
                </LocalizationProvider>

                <TextField
                    label="name"
                    sx={{ m: 1, width: '50%' }}
                    id="outlined-size-small"
                    name="clientName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                />
                <TextField
                    label="email"
                    sx={{ m: 1, width: '50%' }}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                />
                <TextField
                    label="phone"
                    sx={{ m: 1, width: '50%' }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    size="small"
                />
                <br />
                <button className="btn  login-btn  px-5 mt-4 " style={{ width: '10rem' }} type="submit" >submit</button>
            </form>


        </div>
    );
};

export default AppointmentForm;