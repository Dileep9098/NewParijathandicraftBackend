import "./Profile.css"
import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import MetaData from "../Layout/MetaData";

const BASE_URL = import.meta.env.VITE_IMG_URL;


export default function Profile() {
    const [openAccount, setOpenAccount] = useState(false);

    const { user, error, isLoading, isAuthentication } = useSelector((state) => state.auth)
    const { cart, TotalCartItems } = useSelector((state) => state.cart);




    return (
        <>
            <MetaData title={"Profile"} />


            <div className="profile-container">
                <header className="profile-header">
                    <div className="profile-info d-flex">
                        <img src={
                                                            user?.file?.url
                                                                ? user.file.url
                                                                : user?.file
                                                                    ? `${BASE_URL}/${user.file}`
                                                                    : `${BASE_URL}/default-avatar.png` // fallback if file is missing
                                                        }  alt="" className="me-2" style={{ width: "90px", height: "90px", borderRadius: "50%", border: "3px solid gray" }} />
                        <div className="mt-3">
                            <h1 className="username text-dark">{user ? user?.name : ""} {user?.lname}</h1>
                            <p className="location"> <i className="fa fa-map-marker  me-1"></i>
                                {user ? user?.CityName : ""} {user ? user?.StateName : ""}   </p>
                        </div>

                    </div>
                    {/* <i className="icon-shopping-cart fs-3 text-primary"></i>
                         */}
                    <div className="main-menu-block1">

                        <div
                            className="cart-block cart-hover-div">
                            <div className="cart ">
                                {/* <span className="cart-product"> 9 </span> */}
                                <ul style={{ listStyle: "none" }}>
                                    <li className="mobile-cart">
                                        {user?.role === "admin" ?
                                            <Link to="/admin/dashboard">
                                                <Tooltip title="Dashboard">
                                                    <IconButton>
                                                        <DashboardIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </Link>
                                            : <Link to="/cart"

                                            >

                                                <Stack spacing={2} direction="row" style={{ marginRight: "10px" }}>
                                                    <Badge badgeContent={TotalCartItems ?? 0} color="success">
                                                        <ShoppingCartIcon color="action" />
                                                    </Badge>
                                                </Stack>
                                            </Link>}


                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </header>

                <section className="about-section">
                    <h2 className='profileinfo'>About Me</h2>
                    <table className='profile-table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <td>{user ? user?.name : ""}</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <td>{user ? user?.email : ""}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{user ? user?.phone : ""}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{user ? user?.address : ""}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td> {user ? user?.CityName : ""}</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>{user ? user?.StateName : ""}</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>{user ? user?.role : ""}</td>
                            </tr>
                            {/* <tr>
                                <th>Country</th>
                                <td></td>
                                <td>{String(user?.createdAt).substring(0, 10)}</td>
                            </tr> */}
                        </tbody>
                    </table>
                    <div className="profileBtn mt-4">
                        <Link to='/update-profile' className="btn updateBtn me-2">Update Profile</Link>
                        <Link className='btn orderHistoryBtn' to="/order-history" >Order History</Link>
                    </div>
                </section>



            </div>

            {/* <div className="modal fade" id="exampleModalProfile" tabindex="-1" aria-labelledby="exampleModalProfile" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Profile</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-0 appoiment">
                            <div className="container-fluid appoiment2">
                                <div className="row">

                                    <div className="col-12 ">

                                        <div className="modal2">

                                            <form onSubmit={handleUpdate}>
                                                <div className="row">
                                                    <div className="form-group col-md-6">
                                                        <label for="fullName">Full Name</label>
                                                        <input type="text" className="form-control" id="fullName" value={name} name='name' onChange={(e) => setName(e.target.value)} />
                                                    </div>

                                                    <div className="form-group col-md-6">
                                                        <label for="inputEmail">Email</label>
                                                        <input type="email" className="form-control" id="inputEmail" value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="phoneNumber">Phone Number</label>
                                                        <input type="text" className="form-control" id="phone" placeholder='Enter Phone Number' value={phone} name='phone' onChange={(e) => setPhone(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="inputAddress">Address</label>
                                                    <input type="text" className="form-control" id="inputAddress" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                </div>
                                                <div className="row">


                                                    <div className="form-group col-md-6">
                                                        <label for="inputlandmark">City</label>
                                                        <input type="text" className="form-control" id="inputlandmark" value={city} name='city' onChange={(e) => setCity(e.target.value)} />
                                                    </div>
                                                    <div className="form-group col-md-6">
                                                        <label for="inputcity">State</label>
                                                        <input type="text" className="form-control" id="inputcity" value={state} name='state' onChange={(e) => setState(e.target.value)} />
                                                    </div>
                                                    <div className="form-group col-md-8 mt-2">
                                                        <label for="inputcity">Upload Reference Design ( Select One or More )</label>
                                                        <input type="file" className="form-control" id="inputcity" name='file' onChange={(e) => setFile(e.target.files[0])} />

                                                    </div>
                                                </div>
                                                <div className="text-center">

                                                    <button type="submit" className="AppoimentBtn "data-bs-dismiss="modal" aria-label="Close"><span>Update</span></button>
                                                </div>
                                            </form>








                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}