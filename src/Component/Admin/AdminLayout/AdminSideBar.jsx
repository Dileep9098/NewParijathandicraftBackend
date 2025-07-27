import React from 'react'

import { Link } from "react-router-dom"
export default function AdminSideBar() {
    const handleSidebarToggle = () => {
        const htmlElement = document.documentElement;
        htmlElement.classList.remove('sidebar-enable');


    };
    return (
        <>
            <div className="leftside-menu" style={{ overflow: "auto" }}>


                <Link to="/admin/dashboard" className="logo logo-light">
                    <span className="logo-lg">
                        <img src="/assets/img/Parijat_logo.png" alt="logo" />
                    </span>
                    <span className="logo-sm">
                        <img src="/assets/img/Parijat_logo.png" alt="small" />
                    </span>
                </Link>


                <Link to="/admin/dashboard" className="logo logo-dark">
                    <span className="logo-lg">
                        <img src="/assets/img/Parijat_logo.png" alt="dark logo" />
                    </span>
                    <span className="logo-sm">
                        <img src="/assets/img/Parijat_logo.png" alt="small" />
                    </span>
                </Link>

                <div className="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" title="Show Full Sidebar">
                    <i className="ri-checkbox-blank-circle-line align-middle"></i>
                </div>

                <div className="button-close-fullsidebar" onClick={handleSidebarToggle}>
                    <i className="ri-close-fill align-middle"></i>
                </div>

                <div className="h-100" id="leftside-menu-container" data-simplebar>
                    <div className="leftbar-user">
                        <Link to="pages-profile.html">
                            <img src="assets1/images/users/avatar-1.jpg" alt="user-image" height="42" className="rounded-circle shadow-sm" />
                            <span className="leftbar-user-name mt-2">Dominic Keller</span>
                        </Link>
                    </div>

                    <ul className="side-nav">

                        {/* <li className="side-nav-title">Navigation</li> */}

                        <li className="side-nav-item">
                            <Link to="/admin/dashboard" className="side-nav-link">
                                <i className="uil-home-alt"></i>
                                {/* <span className="badge bg-success float-end">5</span> */}
                                <span> Dashboards </span>
                            </Link>

                        </li>

                        {/* <li className="side-nav-title">Apps</li> */}
                        {/* 
                        <li className="side-nav-item">
                            <Link to="apps-calendar.html" className="side-nav-link">
                                <i className="uil-calender"></i>
                                <span> Calendar </span>
                            </Link>
                        </li> */}

                        {/* <li className="side-nav-item">
                            <Link to="apps-chat.html" className="side-nav-link">
                                <i className="uil-comments-alt"></i>
                                <span> Chat </span>
                            </Link>
                        </li> */}

                        {/* <li className="side-nav-item">
                            <Link data-bs-toggle="collapse" to="#sidebarCrm" aria-expanded="false" aria-controls="sidebarCrm" className="side-nav-link">
                                <i className="uil uil-tachometer-fast"></i>
                                <span className="badge bg-danger text-white float-end">New</span>
                                <span> CRM </span>
                            </Link>
                            <div className="collapse" id="sidebarCrm">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="crm-projects.html">Projects</Link>
                                    </li>
                                    <li>
                                        <Link to="crm-orders-list.html">Orders List</Link>
                                    </li>
                                    <li>
                                        <Link to="crm-clients.html">Clients</Link>
                                    </li>
                                    <li>
                                        <Link to="crm-management.html">Management</Link>
                                    </li>
                                </ul>
                            </div>
                        </li> */}

                        {/* Product Catelog  */}
                        <li className="side-nav-item">
                            <Link data-bs-toggle="collapse" to="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" className="side-nav-link">
                                <i className="ri-list-unordered"></i>
                                <span> Product Catalog </span>
                                <span className="menu-arrow"></span>
                            </Link>
                            <div className="collapse" id="sidebarEcommerce">
                                <ul className="side-nav-second-level">
                                    <li>

                                        <Link to="/admin/product"><i className="ri-grid-fill me-2"></i> Products</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="apps-ecommerce-products-details.html">Products Details</Link>
                                    </li> */}
                                    <li>
                                        <Link to="/admin/product-review"><i className="ri-star-half-s-line me-2"></i>Product Reviews</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/product-bulk-upload"> <i className="ri-file-excel-line me-2"></i>Product Bulk Upload</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/product-image-upload"><i className="ri-image-fill me-2"></i>image Upload</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/product-variants"><i className="ri-menu-fold-4-line me-2"></i>Product Variants</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>

                        {/* Sales  */}
                        <li className="side-nav-item">
                            <Link data-bs-toggle="collapse" to="#sidebarEmail" aria-expanded="false" aria-controls="sidebarEmail" className="side-nav-link">
                                <i className="ri-shopping-cart-fill "></i>
                                <span> Sales </span>
                                <span className="menu-arrow"></span>
                            </Link>
                            <div className="collapse" id="sidebarEmail">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/admin/order-list"><i className="ri-shopping-cart-fill me-2"></i>Orders</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>

                        {/* User Management  */}
                        <li className="side-nav-item">
                            <Link data-bs-toggle="collapse" to="#usermanagement" aria-expanded="false" aria-controls="usermanagement" className="side-nav-link">
                                <i className="ri-team-fill"></i>
                                <span> Users Management </span>
                                <span className="menu-arrow"></span>
                            </Link>
                            <div className="collapse" id="usermanagement">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/admin/user-management"><i className="ri-group-fill me-2"></i>Users</Link>
                                    </li>
                                    <li>
                                        <Link to="/page-not-found"><i className="ri-user-follow-fill me-2"></i>Role</Link>
                                    </li>
                                    <li>
                                        <Link to="/page-not-found"><i className="ri-contacts-book-3-line me-2"></i>Address Type</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        {/* Basic Data  */}
                        <li className="side-nav-item">
                            <Link data-bs-toggle="collapse" to="#basicData" aria-expanded="false" aria-controls="basicData" className="side-nav-link">
                                <i className="ri-function-fill"></i>
                                <span> Basic Data </span>
                                <span className="menu-arrow"></span>
                            </Link>
                            <div className="collapse" id="basicData">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/page-not-found"><i className="ri-palette-fill me-2"></i>Colors</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/category"><i className="ri-article-fill me-2"></i>Categories</Link>
                                    </li>
                                    <li>
                                        <Link to="/page-not-found"><i className="ri-price-tag-3-fill me-2"></i>Tags</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/product-size"><i className="ri-font-size-2 me-2"></i>Size</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/tax"><i className="ri-file-list-3-line me-2"></i>Tax</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/manufactures"><i className="ri-triangle-fill me-2"></i>Manufacturers</Link>
                                    </li>
                                    <li>
                                        <Link to="/page-not-found"><i className="ri-currency-line me-2"></i>Currencies</Link>
                                    </li>
                                    <li>
                                        <Link to="/page-not-found"><i className="ri-attachment-2 me-2"></i>Attachment Type</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/payments-method"><i className="ri-secure-payment-fill me-2"></i>Paument Methods</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        {/*  Promotions */}
                        <li className="side-nav-item">
                            <Link data-bs-toggle="collapse" to="#promotions" aria-expanded="false" aria-controls="promotions" className="side-nav-link">
                                <i className="ri-pulse-line"></i>
                                <span>Promotions </span>
                                <span className="menu-arrow"></span>
                            </Link>
                            <div className="collapse" id="promotions">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/admin/discount-details">
                                            <i className="ri-percent-line me-2"></i>Discount</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/contact-details"><i className="ri-mail-line me-2"></i>Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/subscriber-details"><i className="ri-price-tag-3-fill me-2"></i>Subscribers</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/homeBanner-dashboard"><i className="ri-checkbox-multiple-blank-fill me-2"></i>Site Home Banners</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/hot-deal-banner-dashboard"><i className="ri-fire-fill me-2"></i>Hot Deal Banners</Link>
                                    </li>

                                    <li>
                                        <Link to="/admin/compaingns-dashboard"><i className="ri-pantone-fill me-2"></i>Compaigns</Link>
                                    </li>


                                </ul>
                            </div>
                        </li>
                        {/*  Configuration */}
                        <li className="side-nav-item">
                            <Link data-bs-toggle="collapse" to="#configuration" aria-expanded="false" aria-controls="configuration" className="side-nav-link">
                                <i className="ri-tools-fill"></i>
                                <span>Configuration </span>
                                <span className="menu-arrow"></span>
                            </Link>
                            <div className="collapse" id="configuration">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/page-not-found">
                                            <i className="ri-sound-module-line me-2"></i>Role Rights Setting</Link>
                                    </li>
                                    <li>
                                        <Link to="/admin/siteLogo-dashboard"><i className="ri-vip-diamond-fill me-2"></i>Sites Logo</Link>
                                    </li>
                                    <li>
                                        <Link to="/page-not-found"><i className="ri-translate-ai-2 me-2"></i>Screen Localization</Link>
                                    </li>


                                    <li>
                                        <Link to="/page-not-found"><i className="ri-git-merge-line me-2"></i>Menu Localization</Link>
                                    </li>


                                </ul>
                            </div>
                        </li>

                        {/* Blogs  */}
                        <li className="side-nav-item">
                            <Link to="/admin/Blogs-dashboard" className="side-nav-link">
                                <i className="ri-blogger-fill"></i>
                                {/* <span className="badge bg-success float-end">5</span> */}
                                <span> Blog </span>
                            </Link>

                        </li>
                        {/* Notification  */}
                        <li className="side-nav-item">
                            <Link data-bs-toggle="collapse" to="#notification" aria-expanded="false" aria-controls="notification" className="side-nav-link">
                                <i className="ri-notification-3-fill"></i>
                                <span> Notification </span>
                                <span className="menu-arrow"></span>
                            </Link>
                            <div className="collapse" id="notification">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/page-not-found"><i className="ri-chat-3-fill me-2"></i>Admin Notification</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        {/* Task Management  */}
                        <li className="side-nav-item">
                            <Link data-bs-toggle="collapse" to="#taskmanagement" aria-expanded="false" aria-controls="taskmanagement" className="side-nav-link">
                                <i className="ri-list-check-3"></i>
                                <span>  Task Management </span>
                                <span className="menu-arrow"></span>
                            </Link>
                            <div className="collapse" id="taskmanagement">
                                <ul className="side-nav-second-level">
                                    <li>
                                        <Link to="/page-not-found"><i className="ri-history-line me-2"></i>Requests Queue</Link>
                                    </li>

                                </ul>
                            </div>
                        </li>

                        {/* <li className="side-nav-title">Custom</li> */}

                    </ul>

                    <div className="clearfix"></div>
                </div>
            </div>

        </>
    )
}
