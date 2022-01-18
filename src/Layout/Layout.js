import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './style/style.css';


export class Layout extends Component {
    render() {
        return (
            <div className='container-fluid' id='main-page'>
                
                    
                
                <div className='row side-bar'>
                    <div className='col-12 col-sm-12 col-md-12 py-1 bg-info logo'>
                        <h5>POS Construction System</h5>
                    </div>
                    <div className='col-12 col-sm-12 col-md-3 bg-danger side-bar'>
                        <ul className='nav flex-column'>
                            <li className='nav-item'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Customer'>Customer Information</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Invoice'>Invoice</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/YC'>YC Information</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Onsite'>Onsite Measurement Schedul</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Install'>Installatio</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/Order'>Order Details</Link>
                            </li>
                        </ul>
                    </div>
                    <dic className="col-12 col-sm-12 col-md-9 bg-warning content">
                        <Outlet />
                    </dic>
                </div>
            </div>
        )
    }
}

export default Layout;
