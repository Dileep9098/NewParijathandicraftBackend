import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../../Store/features/authSlice/authSlice';

const BASE_URL = import.meta.env.VITE_IMG_URL;


export default function Topbar() {
    const { isLoading, isAuthentication, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(logoutUser()).then((data) => {
            console.log(data.payload)
            if (data.payload.success) {
                showSuccessMsg(data.payload.message)
                navigate("/")
            }
        })
    }

    return (
        <>
            <div className="header__top mb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__left">
                                <ul>
                                    <li><i className="fa fa-envelope"></i> info@parijathandicraft.com</li>
                                    <li>Free Shipping for all Order of ₹ 1000</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="header__top__right">
                                <div className="header__top__right__social">
                                    <Link to="https://www.facebook.com/prijathandicraft/" target="_blank">
                                        <i className="fa fa-facebook"></i>
                                    </Link>

                                    <Link to="https://www.instagram.com/parijathandicraft/" target="_blank">
                                        <i className="fa fa-instagram"></i>
                                    </Link>

                                    <Link to="https://www.linkedin.com/in/parijat-handicraft-1a5134147/" target="_blank">
                                        <i className="fa fa-linkedin"></i>
                                    </Link>

                                    <Link to="https://x.com/handicraftpari1" target="_blank">
                                        <i className="ri-twitter-x-line"></i>
                                    </Link>

                                    <Link to="https://in.pinterest.com/handicraftparijat/" target="_blank">
                                        <i className="ri-pinterest-fill"></i>
                                    </Link>

                                    <Link to="https://www.youtube.com/@Pari0617" target="_blank">
                                        <i className="fa fa-youtube-play"></i>
                                    </Link>

                                </div>
                                <div className="header__top__right__language">
                                    <img src="/assets/img/language.png" alt="" />
                                    <div>English</div>
                                    <span className="arrow_carrot-down"></span>
                                    <ul>
                                        <li><Link to="#">Spanis</Link></li>
                                        <li><Link to="#">English</Link></li>
                                    </ul>
                                </div>
                                <div className="header__top__right__auth">
                                    {user ?
                                        // <Link>{user?.name|| <img src='assets/img/image.jpg' style={{width:"25px",height:"25px",borderRadius:"50%"}}/>}</Link>
                                        <ul style={{ listStyle: "none" }}>
                                            <li className="dropdown">
                                                <Link className="nav-link dropdown-toggle " data-bs-toggle="dropdown" to="#" role="button" aria-haspopup="false" aria-expanded="false">
                                                    {<img src={`${BASE_URL}/${user?.file}`} style={{ width: "35px", height: "35px", borderRadius: "50%" }} />}

                                                </Link>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                                                    <div className=" dropdown-header noti-title">
                                                        <h6 className="text-overflow m-0">Welcome !</h6>
                                                    </div>

                                                    <Link to="/profile" className="dropdown-item">
                                                        <i className="mdi mdi-account-circle me-1"></i>
                                                        <span>My Account</span>
                                                    </Link>
                                                    <Link to="/order-history" className="dropdown-item">
                                                        <i className="mdi mdi-account-circle me-1"></i>
                                                        <span>Orders</span>
                                                    </Link>

                                                    <Link to="#" className="dropdown-item">
                                                        <i className="mdi mdi-account-edit me-1"></i>
                                                        <span>Settings</span>
                                                    </Link>
                                                    <Link to="/password/update" className="dropdown-item">
                                                        <i className="mdi mdi-account-lock-open-outline me-1"></i>
                                                        <span>Change Password</span>
                                                    </Link>

                                                    <Link to="/my-wishlist" className="dropdown-item">
                                                        <i className="mdi mdi-heart me-1"></i>
                                                        <span> Wiselist</span>
                                                    </Link>

                                                    <Link to="#" className="dropdown-item" onClick={logout}>
                                                        <i className="mdi mdi-logout me-1"></i>
                                                        <span>Logout</span>
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                        :
                                        <Link to="/login"><i className="fa fa-user"></i> Login</Link>

                                    }
                                    {/* <Link to="/sign-up"><i className="fa fa-user"></i> Login</Link> */}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
