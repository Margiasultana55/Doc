import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import DermalogyDoc from '../DermalogyDoc/DermalogyDoc';



const Dermalogy = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/doctors')

            .then(res => res.json())
            .then(data => {
                const cancerDoc = data.filter(doc => doc.doc.toLowerCase() === "skin")
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
                        doctors.map(pack => <DermalogyDoc
                            key={pack._id}
                            pack={pack}
                        ></DermalogyDoc>)
                    }



                </div >
            </div>
        </div>
    );
};

export default Dermalogy;