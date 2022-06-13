import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeartDoc from '../HeartDoc/HeartDoc';

const Heart = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/doctors')

            .then(res => res.json())
            .then(data => {
                const cancerDoc = data.filter(doc => doc.doc.toLowerCase() === "heart")
                console.log(cancerDoc);
                setDoctors(cancerDoc)
            });


    }, [])
    return (
        <div>
            <Navbar></Navbar>

            <div style={{ background: 'rgba(10, 10, 10, 0.822)', height: '5rem', marginTop: '-6rem' }}>

            </div>
            <div className='container' style={{ marginTop: '5rem' }}>

                <div className=" align-items-center  boxx-container  ">
                    {
                        doctors.map(pack => <HeartDoc
                            key={pack._id}
                            pack={pack}
                        ></HeartDoc>)
                    }



                </div >
            </div>
        </div>
    );
};

export default Heart;