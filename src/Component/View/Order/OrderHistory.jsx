// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import "./orderHistory.css"
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { useSelector } from 'react-redux';
// import { showErrorMsg } from '../../../utils/ShowMessage';

// export default function OrderHistory() {

//     const [allOrders, setAllOrders] = useState()
//     const { user, error, isLoading, isAuthentication } = useSelector((state) => state.auth)
//     const [displayedProducts, setDisplayedProducts] = useState(10);
//     const loadMoreProducts = () => {
//         setDisplayedProducts(displayedProducts + 10); // Load 10 more products
//     };


//     useEffect(() => {

//         const fatchData = async () => {
//             try {
//                 //   debugger
//                 const UserID = user ? user._id : ""
//                 const response = await axiosInstance.post(Config.END_POINT_LIST["GET_ALL_MY_ORDERS"], { UserID }, { withCredentials: true })
//                 console.log(response)
//                 // if (response.data.success) {
//                 //     setAllOrders(response.data.orders)
//                 // }
//                 // else {
//                 //     showErrorMsg(response.data.message)
//                 // }
//             } catch (error) {
//                 showErrorMsg(error.response);

//             }
//         }
//         fatchData();

//     }, []);
//     console.log("kya huaa Order hai ka", allOrders)
//     return (
//         <>
//             <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12 text-center">
//                             <div className="breadcrumb__text">
//                                 <h2>Order History</h2>
//                                 <div className="breadcrumb__option">
//                                     <Link to="/"> Home</Link>
//                                     <span>Order History </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>







//             <section>
//                 <div className="container">
//                     <div className="row bg-white shadow-sm rounded p-2 align-items-center mt-1">
//                         <div className="col-3 col-md-2 text-center">
//                             <img src="https://photomarketingwizard.com/wp-content/uploads/2018/02/ecommerce-product-photography-25.jpg" alt="Product" className="img-fluid rounded" />
//                         </div>

//                         <div className="col-9 col-md-5">
//                             <h6 className="mb-1">SAFARI ECLIPSE 66 Check-in Suitcase 4 Wheels - 26 inch</h6>
//                             <p className="text-muted small m-0">Color: Teal | Seller: HSalatstradeFashion</p>
//                         </div>

//                         <div className="col-md-2 text-center fw-bold d-none d-md-block">
//                             ₹2,012
//                         </div>

//                         <div className="col-md-3 d-none d-md-block text-end">
//                             <span className="badge bg-success">Delivered on Mon Feb 24</span>
//                             <p className="text-muted m-0 small">Your item has been delivered</p>
//                             <Link to="#" className="text-primary small">⭐ Rate & Review Product</Link>
//                         </div>
//                     </div>



//                 </div>
//             </section >

//         </>
//     )
// }



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import "./orderHistory.css";
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { useSelector } from 'react-redux';
// import { showErrorMsg } from '../../../utils/ShowMessage';
// import { format } from 'date-fns';


// export default function OrderHistory() {

//     const [allOrders, setAllOrders] = useState([]);
//     const { user, error, isLoading, isAuthentication } = useSelector((state) => state.auth);
//     const [displayedOrders, setDisplayedOrders] = useState(10);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [statusFilter, setStatusFilter] = useState("");

//     const loadMoreOrders = () => {
//         setDisplayedOrders(displayedOrders + 10); // Load 10 more orders
//     };

//     const handleSearch = (e) => {
//         setSearchQuery(e.target.value);
//     };

//     const handleStatusChange = (e) => {
//         setStatusFilter(e.target.value);
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const UserID = user ? user._id : "";
//                 const response = await axiosInstance.post(Config.END_POINT_LIST["GET_ALL_MY_ORDERS"], { UserID }, { withCredentials: true });
//                 if (response.data.success) {
//                     setAllOrders(response.data.orders);
//                 } else {
//                     showErrorMsg(response.data.message);
//                 }
//             } catch (error) {
//                 showErrorMsg(error.response);
//             }
//         };

//         fetchData();
//     }, [user]);

//     // Filtering orders based on search query and status filter
//     const filteredOrders = allOrders.filter(order => {
//         const matchesSearch = (order.orderId?.toLowerCase() || '').includes(searchQuery.toLowerCase());
//         const matchesStatus = statusFilter ? order.status?.toLowerCase() === statusFilter.toLowerCase() : true;
//         return matchesSearch && matchesStatus;
//     });

//     const getBadgeClass = (status) => {
//         switch (status) {
//             case 'Active':
//                 return 'badge-info-lighten'; // For Active
//             case 'Pandding':
//                 return 'badge-secondary-lighten'; // For Pending
//             case 'Shipped':
//                 return 'badge-primary-lighten'; // For Shipped
//             case 'Completed':
//                 return 'badge-success-lighten'; // For Completed
//             case 'In Progress':
//                 return 'badge-warning-lighten'; // For In Progress
//             case 'Refunded':
//                 return 'badge-danger-lighten'; // For Refunded
//             case 'Returned':
//                 return 'badge-danger-lighten'; // For Returned
//             default:
//                 return 'badge-secondary-lighten'; // Default case
//         }
//     }



//     console.log("Order Data ky ahai ", allOrders)

//     return (
//         <>
//             <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12 text-center">
//                             <div className="breadcrumb__text">
//                                 <h2>Order History</h2>
//                                 <div className="breadcrumb__option">
//                                     <Link to="/"> Home</Link>
//                                     <span>Order History</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="mt-4">
//                 <div className="container">
//                     {/* Search and Filter Section */}
//                     <div className="row mb-2">
//                         <div className="col-xl-8">
//                             <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
//                                 <div className="col-auto">
//                                     <label htmlFor="searchInput" className="visually-hidden">Search</label>
//                                     <input
//                                         type="search"
//                                         className="form-control"
//                                         id="searchInput"
//                                         placeholder="Search..."
//                                         value={searchQuery}
//                                         onChange={handleSearch}
//                                     />
//                                 </div>
//                                 <div className="col-auto">
//                                     <div className="d-flex align-items-center">
//                                         <label htmlFor="status-select" className="me-2">Status</label>
//                                         <select
//                                             className="form-select"
//                                             id="status-select"
//                                             value={statusFilter}
//                                             onChange={handleStatusChange}
//                                         >
//                                             <option value="">Choose...</option>

//                                             <option value="Payment failed">Payment failed</option>
//                                             <option value="Cash On Delivery">Cash on Delivery	
//                                             </option>
//                                             <option value="Fulfilled">Fulfilled</option>
//                                         </select>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                     {/* Order Table Section */}
//                     <div className="table-responsive">
//                         <table className="table table-centered table-nowrap mb-0">
//                             <thead className="table-light">
//                                 <tr>

//                                     <th>Order ID</th>
//                                     <th>Date</th>
//                                     <th>Payment Status</th>
//                                     <th>Total</th>
//                                     <th>Payment Method</th>
//                                     <th>Order Status</th>
//                                     <th style={{ width: '125px' }}>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {filteredOrders.slice(0, displayedOrders).map((order, index) => (
//                                     <tr key={index}>

//                                         <td><Link to={`/order-details/${order?.OrderNumber}`} className="text-body fw-bold">{order?.OrderNumber ? order?.OrderNumber : "N/A"}</Link></td>
//                                         <td>
//                                             {order?.createdAt ? (
//                                                 <>
//                                                     <div>{format(new Date(order?.createdAt), 'PPP')}</div> {/* Date in readable format */}
//                                                     <small className="text-muted">
//                                                         {format(new Date(order?.createdAt), 'hh:mm a')} {/* Time in 12-hour format */}
//                                                     </small>
//                                                 </>
//                                             ) : (
//                                                 'N/A'
//                                             )}
//                                         </td>
//                                         <td>
//                                             <h5>
//                                                 <span className={`badge ${order.PaymentMethod === '7' ? 'badge-success-lighten' : 'badge-warning-lighten'}`}>
//                                                     <i className="mdi mdi-bitcoin"></i> {order.PaymentMethod === '7' ?"Paid":"Pandding"}
//                                                 </span>
//                                             </h5>
//                                         </td>
//                                         <td>&#8377; {order?.totalOrderPrice}</td>
//                                         <td>
//                                             {order?.PaymentMethod === "2" ? "Cash on Delivery" :
//                                                 order?.PaymentMethod === "7" ? "PayU" : "N/A"}
//                                         </td>
//                                         <td>
//                                             <h5>
//                                                 <span className={`badge ${getBadgeClass(order?.Status)}`}>
//                                                     {order?.Status}
//                                                 </span>
//                                             </h5>
//                                         </td>

//                                         <td>
//                                             <Link to="#" className="action-icon"> <i className="mdi mdi-eye"></i></Link>
//                                             <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link>
//                                             <Link to="#" className="action-icon"> <i className="mdi mdi-delete"></i></Link>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>

//                     {/* Load More Button */}
//                     {filteredOrders.length > displayedOrders && (
//                         <div className="text-center mt-4">
//                             <button onClick={loadMoreOrders} className="btn btn-light viewMore mb-3">Load More Orders</button>
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </>
//     );
// }


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./orderHistory.css";
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { useSelector } from 'react-redux';
import { showErrorMsg, showInfoMsg, showSuccessMsg } from '../../../utils/ShowMessage';
import { format } from 'date-fns';
import MetaData from '../Layout/MetaData';

export default function OrderHistory() {
    const [allOrders, setAllOrders] = useState([]);
    const { user, error, isLoading, isAuthentication } = useSelector((state) => state.auth);
    const [displayedOrders, setDisplayedOrders] = useState(10);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const loadMoreOrders = () => {
        setDisplayedOrders(displayedOrders + 10); // Load 10 more orders
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const UserID = user ? user._id : "";
                const response = await axiosInstance.post(Config.END_POINT_LIST["GET_ALL_MY_ORDERS"], { UserID }, { withCredentials: true });
                if (response.data.success) {
                    setAllOrders(response.data.orders);
                } else {
                    showErrorMsg(response.data.message);
                }
            } catch (error) {
                showErrorMsg(error.response);
            }
        };

        fetchData();
    }, [user]);

    // Filtering orders based on search query and status filter
    const filteredOrders = allOrders.filter(order => {
        const matchesSearch = (order.OrderNumber || order.PaymentMethod?.toLowerCase() || '').includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter ?
            (order.Status?.toLowerCase() === statusFilter.toLowerCase() ||
                order.PaymentMethod?.toLowerCase() === statusFilter.toLowerCase())
            : true;

        return matchesSearch && matchesStatus;
    });

    const totalFilterOrder = filteredOrders.length;
    // console.log("Count Kya hai", totalFilterOrder);

    const getBadgeClass = (status) => {
        switch (status) {
            case 'Active':
                return 'badge-info-lighten';
            case 'Pandding':
                return 'badge-secondary-lighten';
            case 'Shipped':
                return 'badge-primary-lighten';
            case 'Completed':
                return 'badge-success-lighten';
            case 'Delivered':
                return 'badge-success-lighten';
            case 'In Progress':
                return 'badge-warning-lighten';
            case 'Refund':
                return 'badge-danger-lighten';
            case 'Return':
                return 'badge-danger-lighten';
            default:
                return 'badge-secondary-lighten';
        }
    }
    const handleDelete = async (id) => {
        // Ensure 'id' and 'order._id' are of the same type (if needed)
        const filteredOrders = allOrders.filter(order => order._id == id); // use == for loose comparison if necessary

        if (filteredOrders.length > 0) {
            console.log("Delete", filteredOrders);

            // Check order status
            if (filteredOrders[0].Status === "Delivered" || filteredOrders[0].Status === "Completed") {
                console.log("You can delete the order");

                try {
                    // Send DELETE request with the order ID in the body
                    const response = await axiosInstance.delete(Config.END_POINT_LIST["DELETE_MY_ORDERS"], {
                        data: { id },  // Make sure you send id as part of the data object in the body
                        withCredentials: true
                    });

                    console.log("Response from deleting order:", response);

                    // Update the state to remove the deleted order from the list
                    if (response.data.success) {
                        setAllOrders(allOrders.filter(order => order._id !== id));  // Remove the deleted order from the state
                        showSuccessMsg("Order deleted successfully.");
                    } else {
                        showErrorMsg(response.data.message || "Failed to delete the order.");
                    }
                } catch (error) {
                    console.error("Error while deleting the order:", error);
                    showErrorMsg("An error occurred while deleting the order.");
                }
            } else {
                // Show a message if the order cannot be deleted
                showInfoMsg('Order not delivered.\nYou can only cancel this');
            }
        } else {
            console.log("Order not found");
        }
    };



    return (
        <>
            <MetaData title={"Order History"} />

            <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Order History</h2>
                                <div className="breadcrumb__option">
                                    <Link to="/"> Home</Link>
                                    <span>Order History</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <div className="container">
                    {/* Search and Filter Section */}
                    <div className="row mb-2">
                        <div className="col-xl-8">
                            <form className="row gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                <div className="col-auto d-none d-md-block">
                                    <label htmlFor="searchInput" className="visually-hidden">Search</label>
                                    <input
                                        type="search"
                                        className="form-control"
                                        id="searchInput"
                                        placeholder="Search by Order ID..."
                                        value={searchQuery}
                                        onChange={handleSearch}
                                    />
                                </div>
                                <div className="col-auto">
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="status-select" className="me-2">Status</label>
                                        <select
                                            className="form-select"
                                            id="status-select"
                                            value={statusFilter}
                                            onChange={handleStatusChange}
                                        >
                                            <option value="">Choose...</option>
                                            <option value="Payment failed">Payment failed</option>
                                            <option value="2">Cash on Delivery</option>
                                            <option value="7">PayU</option>
                                            <option value="Active">Active</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Return">Return</option>
                                            <option value="In Progress">In Progress</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Order Table Section */}
                    <div className="table-responsive">
                        <table className="table table-centered table-nowrap mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Order ID</th>
                                    <th>Date</th>
                                    <th>Payment Status</th>
                                    <th>Total</th>
                                    <th>Payment Method</th>
                                    <th>Order Status</th>
                                    <th style={{ width: '125px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredOrders.slice(0, displayedOrders).map((order, index) => (
                                    <tr key={index}>
                                        <td><Link to={`/order-details/${order?.OrderNumber}`} className="text-body fw-bold">{order?.OrderNumber ? order?.OrderNumber : "N/A"}</Link></td>
                                        <td>
                                            {order?.createdAt ? (
                                                <>
                                                    <div>{format(new Date(order?.createdAt), 'PPP')}</div> {/* Date in readable format */}
                                                    <small className="text-muted">
                                                        {format(new Date(order?.createdAt), 'hh:mm a')} {/* Time in 12-hour format */}
                                                    </small>
                                                </>
                                            ) : (
                                                'N/A'
                                            )}
                                        </td>
                                        <td>
                                            <h5>
                                                <span className={`badge ${order.PaymentMethod === '7' ? 'badge-success-lighten' : 'badge-warning-lighten'}`}>
                                                    <i className="mdi mdi-bitcoin"></i> {order.PaymentMethod === '7' ? "Paid" : "Pending"}
                                                </span>
                                            </h5>
                                        </td>
                                        <td>&#8377; {order?.totalOrderPrice}</td>
                                        <td>
                                            {order?.PaymentMethod === "2" ? "Cash on Delivery" :
                                                order?.PaymentMethod === "7" ? "PayU" : "N/A"}
                                        </td>
                                        <td>
                                            <h5>
                                                <span className={`badge ${getBadgeClass(order?.Status)}`}>
                                                    {order?.Status}
                                                </span>
                                            </h5>
                                        </td>
                                        <td>
                                            <Link to={`/single-order-details/${order._id}`} className="action-icon me-2 viewOrderDetails"> <i className="mdi mdi-eye"></i></Link>
                                            {/* <Link to="#" className="action-icon"> <i className="mdi mdi-square-edit-outline"></i></Link> */}
                                            <Link to="#" onClick={() => handleDelete(order._id)} className="action-icon deleteOrderDetails"> <i className="mdi mdi-delete"></i></Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* Total Orders Count */}
                    </div>
                    {filteredOrders.length > 0 && (
                        <div className="total-orders-count">
                            <p>Total Orders: {totalFilterOrder}</p>
                        </div>
                    )}

                    {/* Show "No Orders Found" Message */}
                    {totalFilterOrder === 0 && (
                        <div className="text-center mt-4">
                            <img src="/assets/img/empty-search.jpg" alt="No Orders Found" style={{ width: '200px' }} />
                            <p>No Orders Found</p>
                        </div>
                    )}

                    {/* Load More Button */}
                    {filteredOrders.length > displayedOrders && (
                        <div className="text-center mt-4">
                            <button onClick={loadMoreOrders} className="btn btn-light viewMore mb-3">Load More Orders</button>
                        </div>
                    )}


                </div>
            </section>
        </>
    );
}
