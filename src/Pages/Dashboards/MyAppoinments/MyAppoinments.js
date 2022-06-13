import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import useAuth from '../../../hook/useAuth';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const MyAppoinments = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    //get products
    useEffect(() => {

        fetch("http://localhost:5000/appoinment")
            .then(res => res.json())
            .then(data => {
                const service = data.filter(data => data.email === user.email);

                setOrders(service)
                console.log(data);
            })
            .catch(e => {

            })
    }, [user.email])


    //Delete order
    const handleDeleteOrder = id => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/appoinment/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })

        }
    }
    console.log(orders);
    return (
        <div>


            <TableContainer component={Paper} style={{ marginBottom: '10rem' }}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: 600 }}>Patient-Name</TableCell>
                            <TableCell style={{ fontWeight: 600, textAlign: 'center' }} align="right">email</TableCell>
                            <TableCell style={{ fontWeight: 600, textAlign: 'center' }} align="right">Doctor-Name</TableCell>
                            <TableCell style={{ fontWeight: 600, textAlign: 'center' }} align="right">Detail</TableCell>
                            <TableCell style={{ fontWeight: 600, textAlign: 'center' }} align="right">Action</TableCell>
                            <TableCell style={{ fontWeight: 600, textAlign: 'center' }} align="right">Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={{ color: 'gray' }} component="th" scope="row">
                                    {row.clientName}
                                </TableCell>


                                <TableCell style={{ color: 'gray', textAlign: 'center' }} align="right">{row.email}</TableCell>
                                <TableCell style={{ color: 'gray', textAlign: 'center' }} align="right">{row.DocName}</TableCell>

                                <TableCell align="right" style={{ textAlign: 'center' }}>
                                    <Link to={`/dashboard/mydetail/${row._id}`} style={{ textDecoration: 'none' }}>
                                        <Button style={{ backgroundColor: 'white', border: "1px solid rgb(10, 155, 212)", fontWeight: 600, color: "rgb(10, 155, 212)" }} >Details</Button>
                                    </Link>
                                </TableCell>

                                <TableCell style={{ textAlign: 'center' }} align="right"><Button onClick={() => handleDeleteOrder(row._id)} style={{ backgroundColor: 'white', border: "1px solid rgba(231, 24, 59, 0.746)", fontWeight: 600, color: "rgba(231, 24, 59, 0.746)" }} >Cancel</Button></TableCell>

                                <TableCell style={{ color: 'gray', }} component="th" scope="row">
                                    <Typography style={{ textAlign: 'center' }}> Processing...</Typography>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>

            </TableContainer>



        </div>
    );
};

export default MyAppoinments;