import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <div className='mt-4'>

            <nav className="navbar navbar-expand-lg navbar-light  container" style={{ background: 'rgb(243, 243, 243)' }}>
                <div className="container-fluid">
                    <a className="navbar-brand bold" href="/"> <span style={{ fontWeight: 'bolder' }}>D</span> <span style={{ color: '#23D2D7' }}>O</span> <span style={{ fontWeight: 'bolder' }}>C</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Hospital</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Specialist Doctors
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/heart">Caediology/heart Specialist</Link></li>
                                    <li><Link className="dropdown-item" to="/cancer">Cancer Specialist</Link></li>
                                    <li><Link className="dropdown-item" to="/child">Child Specialist</Link></li>
                                    <li><Link className="dropdown-item" to="/derma">Dermalogy,Allergy Specialist</Link></li>
                                    <li><Link className="dropdown-item" to="/dental">Dental Specialist</Link></li>
                                    <li><Link className="dropdown-item" to="/ent">Ent Specialist</Link></li>
                                    <li><Link className="dropdown-item" to="/eye">Eye Specialist</Link></li>
                                    <li><Link className="dropdown-item" to="/gyne">Gynecology Specialist</Link></li>
                                    <li><Link className="dropdown-item" to="/medi">Medicine Specialist</Link></li>



                                </ul>
                            </li>

                            {user?.email &&
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                                </li>

                            }


                        </ul>
                        <div style={{ display: 'inline-block' }}>

                            {
                                user?.email ?
                                    <div>
                                        <span className='me-3'><i className="fas fa-user-circle fa-lg"></i> {user.displayName}</span>
                                        < button onClick={logout} style={{ border: 'none', background: 'transparent', }} className="  me-2" type="submit"><i className="fas fa-sign-out-alt"></i></button>
                                    </div>

                                    :

                                    <Link to="/login">
                                        <button style={{ border: 'none', background: 'transparent', }} className="  me-2" type="submit"><i className="fas fa-user-circle fa-lg"></i></button>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;