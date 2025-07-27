import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../Store/features/authSlice/authSlice';
import { showSuccessMsg } from '../../../utils/ShowMessage';
import { useNavigate } from 'react-router-dom';
const BASE_URL = import.meta.env.VITE_IMG_URL;

export default function AdminTopBar() {
    const [sidebarSize, setSidebarSize] = useState('condensed');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { user, error, isLoading, isAuthentication } = useSelector((state) => state.auth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    // Handle window resize to change sidebar size
    const handleResize = () => {
        if (window.innerWidth <= 768) { 
            setSidebarSize('full');
        } else { 
            setSidebarSize('condensed');
        }
        if (window.innerWidth >= 1130) {
            setSidebarSize('default');

        }

    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-bs-theme', 'light');
        htmlElement.setAttribute('data-layout-mode', 'fluid');
        htmlElement.setAttribute('data-menu-color', 'dark');
        htmlElement.setAttribute('data-topbar-color', 'light');
        htmlElement.setAttribute('data-layout-position', 'fixed');
        htmlElement.setAttribute('data-sidenav-size', sidebarSize);  
        // htmlElement.classList.add('sidebar-enable');
        htmlElement.classList.add('menuitem-active');

        if (isSidebarOpen) {
            htmlElement.classList.add('sidebar-enable');
            if (sidebarSize === 'full') {
                htmlElement.setAttribute('data-sidenav-size', "full");
            }
            else if (window.innerWidth >= 768 && window.innerWidth <= 1130) {
                setSidebarSize('default');
            }
            else {
                // htmlElement.setAttribute('data-sidenav-size', "condensed");  
                setSidebarSize('condensed');
            }

        } else {
            htmlElement.classList.remove('sidebar-enable');
            if (window.innerWidth >= 1130) {
                setSidebarSize('default');
            }
        }

    }, [isSidebarOpen, sidebarSize]);

    // Toggle sidebar visibility
    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
     const logout = () => {
                dispatch(logoutUser()).then((data)=>{
                    console.log(data.payload)
                    if(data.payload.success){
                        showSuccessMsg(data.payload.message)
                        navigate("/")
                    }
                })
            }
    return (
        <>
            <div className="navbar-custom">
                <div className="topbar container-fluid">
                    <div className="d-flex align-items-center gap-lg-2 gap-1">

                        <div className="logo-topbar">
                            <a href="/admin/dashboard" className="logo-light">
                                <span className="logo-lg">
                                    <img src="/assets/img/Parijat_logo.png" alt="logo" />
                                </span>
                                <span className="logo-sm">
                                    <img src="/assets/img/Parijat_logo.png" alt="small logo" />
                                </span>
                            </a>

                            {/* <!-- Logo Dark --> */}
                            <a href="/admin/dashboard" className="logo-dark">
                                <span className="logo-lg">
                                    <img src="/assets/img/Parijat_logo.png" alt="dark logo" />
                                </span>
                                <span className="logo-sm">
                                    <img src="/assets/img/Parijat_logo.png" alt="small logo" />
                                </span>
                            </a>
                        </div>

                        <button className="button-toggle-menu" onClick={handleSidebarToggle}>
                            <i className="mdi mdi-menu"></i>
                        </button>

                        <button className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>

                        <div className="app-search dropdown d-none d-lg-block">
                            <form>
                                <div className="input-group">
                                    <input type="search" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
                                    <span className="mdi mdi-magnify search-icon"></span>
                                    <button className="input-group-text adminAddBtn" type="submit">Search</button>
                                </div>
                            </form>

                            <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">

                                <div className="dropdown-header noti-title">
                                    <h5 className="text-overflow mb-2">Found <span className="text-danger">17</span> results</h5>
                                </div>


                                <a href="#" className="dropdown-item notify-item">
                                    <i className="uil-notes font-16 me-1"></i>
                                    <span>Analytics Report</span>
                                </a>


                                <a href="#" className="dropdown-item notify-item">
                                    <i className="uil-life-ring font-16 me-1"></i>
                                    <span>How can I help you?</span>
                                </a>


                                <a href="#" className="dropdown-item notify-item">
                                    <i className="uil-cog font-16 me-1"></i>
                                    <span>User profile settings</span>
                                </a>


                                <div className="dropdown-header noti-title">
                                    <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                                </div>

                                <div className="notification-list">

                                    <a href="#" className="dropdown-item notify-item">
                                        <div className="d-flex">
                                            <img className="d-flex me-2 rounded-circle" src="/assets1/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32" />
                                            <div className="w-100">
                                                <h5 className="m-0 font-14">Erwin Brown</h5>
                                                <span className="font-12 mb-0">UI Designer</span>
                                            </div>
                                        </div>
                                    </a>


                                    <a href="#" className="dropdown-item notify-item">
                                        <div className="d-flex">
                                            <img className="d-flex me-2 rounded-circle" src="/assets1/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32" />
                                            <div className="w-100">
                                                <h5 className="m-0 font-14">Jacob Deo</h5>
                                                <span className="font-12 mb-0">Developer</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="topbar-menu d-flex align-items-center gap-3">
                        <li className="dropdown d-lg-none">
                            <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="ri-search-line font-22"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                                <form className="p-3">
                                    <input type="search" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                                </form>
                            </div>
                        </li>

                   

                        <li className="dropdown notification-list">
                            <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="ri-notification-3-line font-22"></i>
                                <span className="noti-icon-badge"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                                <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0 font-16 fw-semibold"> Notification</h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="javascript: void(0);" className="text-dark text-decoration-underline">
                                                <small>Clear All</small>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="px-2" style={{ maxHeight: "300px" }} data-simplebar>

                                    <h5 className="text-muted font-13 fw-normal mt-2">Today</h5>


                                    <a href="#" className="dropdown-item p-0 notify-item card unread-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon bg-primary">
                                                        <i className="mdi mdi-comment-account-outline"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Datacorp <small className="fw-normal text-muted ms-1">1 min ago</small></h5>
                                                    <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>


                                    <a href="#" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon bg-info">
                                                        <i className="mdi mdi-account-plus"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Admin <small className="fw-normal text-muted ms-1">1 hours ago</small></h5>
                                                    <small className="noti-item-subtitle text-muted">New user registered</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <h5 className="text-muted font-13 fw-normal mt-0">Yesterday</h5>


                                    <a href="#" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon">
                                                        <img src="/assets1/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Cristina Pride <small className="fw-normal text-muted ms-1">1 day ago</small></h5>
                                                    <small className="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <h5 className="text-muted font-13 fw-normal mt-0">30 Dec 2021</h5>


                                    <a href="#" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon bg-primary">
                                                        <i className="mdi mdi-comment-account-outline"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Datacorp</h5>
                                                    <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>


                                    <a href="#" className="dropdown-item p-0 notify-item card read-noti shadow-none mb-2">
                                        <div className="card-body">
                                            <span className="float-end noti-close-btn text-muted"><i className="mdi mdi-close"></i></span>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0">
                                                    <div className="notify-icon">
                                                        <img src="/assets1/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 text-truncate ms-2">
                                                    <h5 className="noti-item-title fw-semibold font-14">Karen Robinson</h5>
                                                    <small className="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <div className="text-center">
                                        <i className="mdi mdi-dots-circle mdi-spin text-muted h3 mt-0"></i>
                                    </div>
                                </div>


                                <a href="#" className="dropdown-item text-center text-primary notify-item border-top py-2">
                                    View All
                                </a>

                            </div>
                        </li>

                       

                        <li className="d-none d-sm-inline-block">
                            <div className="nav-link" id="light-dark-mode" data-bs-toggle="tooltip" data-bs-placement="left" title="Theme Mode">
                                <i className="ri-moon-line font-22"></i>
                            </div>
                        </li>


                        {/* <li className="d-none d-md-inline-block">
                            <a className="nav-link" href="#" data-toggle="fullscreen">
                                <i className="ri-fullscreen-line font-22"></i>
                            </a>
                        </li> */}

                        <li className="dropdown">
                            <a className="nav-link dropdown-toggle arrow-none nav-user px-2" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <span className="account-user-avatar">
                                    <img src={`${BASE_URL}/${user?.file}`} alt="user-image" width="35" height="35" className="rounded-circle" />
                                </span>
                                <span className="d-lg-flex flex-column gap-1 d-none">
                                    <h5 className="my-0">{user?.name}</h5>
                                    <h6 className="my-0 fw-normal">{user?.role}</h6>
                                </span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">

                                <div className=" dropdown-header noti-title">
                                    <h6 className="text-overflow m-0">Welcome !</h6>
                                </div>


                                {/* <a href="#" className="dropdown-item">
                                    <i className="mdi mdi-account-circle me-1"></i>
                                    <span>My Account</span>
                                </a> */}


                                <a href="#" className="dropdown-item">
                                    <i className="mdi mdi-account-edit me-1"></i>
                                    <span>Settings</span>
                                </a>


                                <a href="#" className="dropdown-item">
                                    <i className="mdi mdi-lifebuoy me-1"></i>
                                    <span>Support</span>
                                </a>


                                <a href="#" className="dropdown-item">
                                    <i className="mdi mdi-lock-outline me-1"></i>
                                    <span>Lock Screen</span>
                                </a>


                                <a href="#" className="dropdown-item" onClick={logout}>
                                    <i className="mdi mdi-logout me-1"></i>
                                    <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
