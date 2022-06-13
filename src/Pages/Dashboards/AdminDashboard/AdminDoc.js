import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AdminAllDoc from './AdminAllDoc';



const AdminDoc = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/doctors')

            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDoctors(data)
            });


    }, [])
    return (
        <div>

            <div style={{ display: 'flex', margin: 'auto', paddingBottom: '3rem', justifyContent: 'center' }}>
                <div className="input-group rounded" style={{ width: '50%', marginTop: '4rem' }}>
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
            <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <h1>All Doctor</h1>


            </div>

            <div className=" align-items-center  boxx-container  " style={{ margin: '3rem' }}>
                {
                    doctors.map(pack => <AdminAllDoc
                        key={pack._id}
                        pack={pack}
                    ></AdminAllDoc>)
                }
            </div>


        </div>
    );
};

export default AdminDoc;