
import React from 'react';
import { Link } from 'react-router-dom';
import docAdmin from '../../../images/docAdmin.png';
import hosAdmin from '../../../images/hospitalAdmin.png';
import ambAdmin from '../../../images/ambulanceAdmin.png';
import appAdmin from '../../../images/appAdmin.png';
import addDoc from '../../../images/sp-removebg-preview.png'
import './Admin.css'

const Admin = () => {
    return (
        <div>
            <div className='mt-2' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <h1>Admin Dashboard</h1>
                <hr style={{ color: '#16BABF' }} />

            </div>


            <div className='docDiv ' style={{ marginTop: '6rem' }}>
                <div>
                    <img style={{ height: '100px' }} alt='' src={docAdmin} /><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={'/dashboard/admin/adminDoc'}><button className='docBtn'>Doctors</button></Link>
                </div>
                <div>
                    <img style={{ height: '100px' }} alt='' src={hosAdmin} /><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to=''><button className='docBtn'>Hospitals</button></Link>
                </div>
                <div>
                    <img style={{ height: '100px' }} alt='' src={ambAdmin} /><br />
                    <Link style={{ textDecoration: 'none', color: 'black' }} to=''><button className='docBtn'>Ambulance</button></Link>
                </div>
                <div>
                    <img style={{ height: '100px' }} alt='' src={addDoc} /><br />

                    <Link style={{ textDecoration: 'none', color: 'black' }} to=''><button className='docBtn'>Add new</button></Link>
                </div>
                <div>
                    <img style={{ height: '100px' }} alt='' src={appAdmin} /><br />                    <Link style={{ textDecoration: 'none', color: 'black' }} to=''><button className='docBtn'>All Appointments</button></Link>
                </div>

            </div>
        </div >
    );
};

export default Admin;