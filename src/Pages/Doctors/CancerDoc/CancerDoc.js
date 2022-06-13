import React from 'react';
import { Link } from 'react-router-dom';

import './CancerDoc.css'

const CancerDoc = ({ pack }) => {
    const { _id, img, name, special } = pack;
    return (
        <div>
            <div className=" boxx">
                <img className='' src={img} alt="" />
                <div className="contenntt-pack">
                    <div className='cont'>
                        <p>{name}</p>


                    </div>
                    <div className='text-white'>

                        <p style={{ fontSize: '13px' }}>Specialist: {special}</p>

                    </div>
                    <div>
                        <Link to={`/detail/${_id}`} >
                            <button style={{ width: '6rem' }} className='btn book-btn mt-3' >Detail</button></Link>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default CancerDoc;