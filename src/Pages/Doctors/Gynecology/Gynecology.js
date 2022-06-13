import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import GynecologyDoc from '../GynecologyDoc/GynecologyDoc';


const Gynecology = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/doctors')

            .then(res => res.json())
            .then(data => {
                const cancerDoc = data.filter(doc => doc.doc.toLowerCase() === "gayne")
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
                        doctors.map(pack => <GynecologyDoc
                            key={pack._id}
                            pack={pack}
                        ></GynecologyDoc>)
                    }



                </div >
            </div>
        </div>
    );
};

export default Gynecology;