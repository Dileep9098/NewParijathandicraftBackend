// import React from 'react'
// import { Link } from 'react-router-dom'
// import "./singleOrderDetails.css"

// export default function SingleOrderDetails() {
//     return (
//         <>
//             <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12 text-center">
//                             <div className="breadcrumb__text">
//                                 <h2>Order Details</h2>
//                                 <div className="breadcrumb__option">
//                                     <Link to="/order-history"> Order</Link>
//                                     <span>Order Details </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-8">
//                             <div className="order-container1 d-flex justify-content-between align-items-center">
//                                 <div>
//                                     <h5 className="order-header1">Order Details</h5>
//                                     <h6>SAFARI ECLIPSE 66 Check-in Suitcase 4 Wheels - 26 inch</h6>
//                                     <p className="text-muted">Teal | Seller: HSalatstradeFashion</p>
//                                     <p><strong>₹2,012</strong></p>
//                                     <span className="badge bg-success">Delivery was made with OTP verification</span>

//                                     <div className="order-status1 mt-3">
//                                         <div className="order-step">
//                                             <i className="fas fa-check-circle"></i>
//                                             <strong>Order Confirmed:</strong> Feb 22
//                                         </div>

//                                         <div className="order-step">
//                                             <i className="fas fa-check-circle"></i>
//                                             <strong>Delivered:</strong> Mon Feb 24
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <img src="https://photomarketingwizard.com/wp-content/uploads/2018/02/ecommerce-product-photography-25.jpg" alt="Product" className="product-img1" />
//                             </div>

//                             <div className="mt-3">
//                                 <h6>Return policy valid till Mar 06</h6>
//                                 <button className="btn btn-outline-primary">Return</button>
//                                 <button className="btn btn-outline-secondary">Chat with us</button>
//                                 <div className="mt-3">
//                                     ⭐⭐⭐⭐⭐ (Rate your experience)
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4">
//                             <div className="shipping-details mb-3">
//                                 <h5>Shipping Details</h5>
//                                 <p><strong>Dileep Rathore</strong></p>
//                                 <p>Building no 61 sector 2 gautam budh nagar</p>
//                                 <p>B-61 red building, Noida</p>
//                                 <p>Uttar Pradesh - 201301</p>
//                                 <p><strong>Phone:</strong> 9098590873</p>
//                             </div>
//                             <div className="price-details">
//                                 <h5>Price Details</h5>
//                                 <hr />
//                                 <p>List Price: <del>₹3,899</del></p>
//                                 <p>Selling Price: <strong>₹2,399</strong></p>
//                                 <p>Extra Discount: <span className="text-danger">-₹400</span></p>
//                                 <p>Special Price: <strong>₹1,999</strong></p>
//                                 <p>Delivery Charge: <span className="text-success">Free</span></p>
//                                 <p>Handling Fee: ₹10</p>
//                                 <p>Platform Fee: ₹3</p>
//                                 <hr />
//                                 <h6>Total Amount: <strong>₹2,012</strong></h6>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>


//         </>
//     )
// }



// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import './singleOrderDetails.css';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';

// export default function SingleOrderDetails() {
//     const [getOrderDetails, setGetOrderDetails] = useState();
//     const [shippingDetails, setShippingDetails] = useState()
//     const param = useParams();

//     useEffect(() => {
//         const fetchSingleOrder = async () => {
//             // debugger
//             const response = await axiosInstance.get(`${Config.END_POINT_LIST["GET_SINGLE_ORDER"]}/${param.id}`, { withCredentials: true });
//             const shippingDeatils = await axiosInstance.get(`${Config.END_POINT_LIST["GET_ORDER_SHIPPING_DEATILS"]}/${param.id}`, { withCredentials: true });
//             if (response.data.success) {
//                 setGetOrderDetails(response.data.order);
//                 setShippingDetails(shippingDeatils.data.shippingDetails[0])

//             }
//         };
//         fetchSingleOrder();
//     }, [param.id]);


//     console.log(getOrderDetails)

//     return (
//         <>
//             <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12 text-center">
//                             <div className="breadcrumb__text">
//                                 <h2>Order Details</h2>
//                                 <div className="breadcrumb__option">
//                                     <Link to="/order-history"> Order</Link>
//                                     <span>Order Details</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section>


//                 <div className="container">

//                     {/* Start Page Title */}
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="page-title-box">
//                                 <div className="page-title-right">
//                                     <ol className="breadcrumb m-0">
//                                         <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                                         <li className="breadcrumb-item"><Link to="/order-history">Order</Link></li>
//                                         <li className="breadcrumb-item active">Order Details</li>
//                                     </ol>
//                                 </div>
//                                 <h4 className="page-title">Order Details</h4>
//                             </div>
//                         </div>
//                     </div>
//                     {/* End Page Title */}

//                     <div className="row justify-content-center">
//                         <div className="col-lg-7 col-md-10 col-sm-11">
//                             <div className="horizontal-steps mt-4 mb-4 pb-5">
//                                 <div className="horizontal-steps-content">
//                                     <div className="step-item">
//                                         <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="20/08/2018 07:24 PM">Order Placed</span>
//                                     </div>
//                                     <div className="step-item current">
//                                         <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="21/08/2018 11:32 AM">Order Confirmation</span>
//                                     </div>
//                                     <div className="step-item">
//                                         <span data-bs-toggle="tooltip">Packed</span>
//                                     </div>
//                                     <div className="step-item">
//                                         <span>Shipped</span>
//                                     </div>
//                                     <div className="step-item">
//                                         <span>Delivered</span>
//                                     </div>
//                                 </div>
//                                 <div className="process-line" style={{ width: '25%' }}></div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* End Row */}

//                     <div className="row">
//                         <div className="col-lg-8">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h4 className="header-title mb-3 fs-4">Items from Order <span style={{ color: "blueviolet", fontWeight: "700" }}>{getOrderDetails?.OrderNumber ? getOrderDetails?.OrderNumber : "######"}</span></h4>

//                                     <div className="table-responsive">
//                                         <table className="table mb-0">
//                                             <thead className="table-light">
//                                                 <tr>
//                                                     <th>Image</th>
//                                                     <th>Item</th>
//                                                     <th>Quantity</th>
//                                                     <th>Price</th>
//                                                     <th>Total</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {getOrderDetails && getOrderDetails.length > 0 ? (
//                                                     // Parse cartJsonData if it's a JSON string and ensure it is an array
//                                                     Array.isArray(getOrderDetails.cartJsonData) && getOrderDetails.cartJsonData.length > 0 ?
//                                                         getOrderDetails.cartJsonData.map((item, ind) => (
//                                                             <tr key={ind}>
//                                                                 <td className="text-center" style={{ width: "150px" }}>
//                                                                     <img
//                                                                         src={`/image/products/${item.DefaultImage}`}
//                                                                         alt={item.ProductName}
//                                                                         width="250"
//                                                                         height="100"
//                                                                         className="rounded border shadow-sm"
//                                                                     />
//                                                                 </td>
//                                                                 <td>{item.ProductName}</td>
//                                                                 <td>{item.Quantity}</td>
//                                                                 <td>{item.Price}</td>
//                                                                 <td>{(item.Quantity * item.Price).toFixed(2)}</td> {/* Assuming Price is a number */}
//                                                             </tr>
//                                                         )) : (
//                                                             <tr>
//                                                                 <td colSpan="5" className="text-center">No Products Found</td>
//                                                             </tr>
//                                                         )
//                                                 ) : (
//                                                     <tr>
//                                                         <td colSpan="5" className="text-center">No Orders Found</td>
//                                                     </tr>
//                                                 )}
//                                             </tbody>
//                                         </table>

//                                     </div>
//                                     {/* End table-responsive */}
//                                 </div>
//                             </div>
//                         </div> {/* End col */}

//                         <div className="col-lg-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h4 className="header-title mb-3">Order Summary</h4>

//                                     <div className="table-responsive">
//                                         <table className="table mb-0">
//                                             <thead className="table-light">
//                                                 <tr>
//                                                     <th>Description</th>
//                                                     <th>Price</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 <tr>
//                                                     <td>Grand Total :</td>
//                                                     <td>$1641</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Shipping Charge :</td>
//                                                     <td>$23</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Estimated Tax :</td>
//                                                     <td>$19.22</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <th>Total :</th>
//                                                     <th>$1683.22</th>
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                     {/* End table-responsive */}
//                                 </div>
//                             </div>
//                         </div> {/* End col */}
//                     </div>
//                     {/* End Row */}

// <div className="row">
//     <div className="col-lg-4">
//         <div className="card">
//             <div className="card-body">
//                 <h4 className="header-title mb-3">Shipping Information</h4>

//                 <h5>Stanley Jones</h5>

//                 <address className="mb-0 font-14 address-lg">
//                     795 Folsom Ave, Suite 600<br />
//                     San Francisco, CA 94107<br />
//                     <abbr title="Phone">P:</abbr> (123) 456-7890 <br />
//                     <abbr title="Mobile">M:</abbr> (+01) 12345 67890
//                 </address>

//             </div>
//         </div>
//     </div> {/* End col */}

//     <div className="col-lg-4">
//         <div className="card">
//             <div className="card-body">
//                 <h4 className="header-title mb-3">Billing Information</h4>

//                 <ul className="list-unstyled mb-0">
//                     <li>
//                         <p className="mb-2"><span className="fw-bold me-2">Payment Type:</span> Credit Card</p>
//                         <p className="mb-2"><span className="fw-bold me-2">Provider:</span> Visa ending in 2851</p>
//                         <p className="mb-2"><span className="fw-bold me-2">Valid Date:</span> 02/2020</p>
//                         <p className="mb-0"><span className="fw-bold me-2">CVV:</span> xxx</p>
//                     </li>
//                 </ul>

//             </div>
//         </div>
//     </div> {/* End col */}

//     <div className="col-lg-4">
//         <div className="card">
//             <div className="card-body">
//                 <h4 className="header-title mb-3">Delivery Info</h4>

//                 <div className="text-center">
//                     <i className="mdi mdi-truck-fast h2 text-muted"></i>
//                     <h5><b>UPS Delivery</b></h5>
//                     <p className="mb-1"><b>Order ID :</b> xxxx235</p>
//                     <p className="mb-0"><b>Payment Mode :</b> COD</p>
//                 </div>
//             </div>
//         </div>
//     </div> {/* End col */}
// </div>
// {/* End Row */}

//                 </div>


//             </section>
//         </>
//     );
// }

// import React, { useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import './singleOrderDetails.css';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import Loader from '../Loader/Loader';

// export default function SingleOrderDetails() {
//     const [getOrderDetails, setGetOrderDetails] = useState(null);
//     const [shippingDetails, setShippingDetails] = useState(null);
//     const param = useParams();

//     useEffect(() => {
//         const fetchSingleOrder = async () => {
//             try {
//                 const response = await axiosInstance.get(
//                     `${Config.END_POINT_LIST["GET_SINGLE_ORDER"]}/${param.id}`,
//                     { withCredentials: true }
//                 );

//                 const shippingDeatils = await axiosInstance.get(
//                     `${Config.END_POINT_LIST["GET_ORDER_SHIPPING_DEATILS"]}/${param.id}`,
//                     { withCredentials: true }
//                 );

//                 if (response.data.success) {
//                     setGetOrderDetails(response.data.order);
//                     setShippingDetails(shippingDeatils.data.shippingDetails[0]);
//                 }
//             } catch (error) {
//                 console.error('Error fetching order details:', error);
//             }
//         };

//         fetchSingleOrder();
//     }, [param.id]);

//     console.log(getOrderDetails);

//     // Safely render the content only after the data is loaded
//     if (!getOrderDetails) {
//         return <Loader/>; // Or a custom loading spinner
//     }

//     // Parse cartJsonData if it's a string
//     const cartData = getOrderDetails.cartJsonData && Array.isArray(getOrderDetails.cartJsonData) && getOrderDetails.cartJsonData.length > 0
//         ? JSON.parse(getOrderDetails.cartJsonData[0]) 
//         : [];

//     return (
//         <>
//             <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-12 text-center">
//                             <div className="breadcrumb__text">
//                                 <h2>Order Details</h2>
//                                 <div className="breadcrumb__option">
//                                     <Link to="/order-history"> Order</Link>
//                                     <span>Order Details</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section>
//                 <div className="container">
//                     {/* Start Page Title */}
//                     <div className="row">
//                         <div className="col-12">
//                             <div className="page-title-box">
//                                 <div className="page-title-right">
//                                     <ol className="breadcrumb m-0">
//                                         <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                                         <li className="breadcrumb-item"><Link to="/order-history">Order</Link></li>
//                                         <li className="breadcrumb-item active">Order Details</li>
//                                     </ol>
//                                 </div>
//                                 <h4 className="page-title">Order Details</h4>
//                             </div>
//                         </div>
//                     </div>
//                     {/* End Page Title */}

//                     <div className="row justify-content-center">
//                         <div className="col-lg-7 col-md-10 col-sm-11">
//                             <div className="horizontal-steps mt-4 mb-4 pb-5">
//                                 <div className="horizontal-steps-content">
//                                     <div className="step-item">
//                                         <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="20/08/2018 07:24 PM">Order Placed</span>
//                                     </div>
//                                     <div className="step-item current">
//                                         <span data-bs-toggle="tooltip" data-bs-placement="bottom" title="21/08/2018 11:32 AM">Order Confirmation</span>
//                                     </div>
//                                     <div className="step-item">
//                                         <span data-bs-toggle="tooltip">Packed</span>
//                                     </div>
//                                     <div className="step-item">
//                                         <span>Shipped</span>
//                                     </div>
//                                     <div className="step-item">
//                                         <span>Delivered</span>
//                                     </div>
//                                 </div>
//                                 <div className="process-line" style={{ width: '25%' }}></div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* End Row */}

//                     <div className="row">
//                         <div className="col-lg-8">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h4 className="header-title mb-3 fs-4">
//                                         Items from Order <span style={{ color: "blueviolet", fontWeight: "700" }}>
//                                             {getOrderDetails?.OrderNumber ? getOrderDetails?.OrderNumber : "######"}
//                                         </span>
//                                     </h4>

//                                     <div className="table-responsive">
//                                         <table className="table mb-0">
//                                             <thead className="table-light">
//                                                 <tr>
//                                                     <th>Image</th>
//                                                     <th>Item</th>
//                                                     <th>Quantity</th>
//                                                     <th>Price</th>
//                                                     <th>Total</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 {cartData.length > 0 ? (
//                                                     cartData.map((item, ind) => (
//                                                         <tr key={ind}>
//                                                             <td className="text-center" style={{ width: "150px" }}>
//                                                                 <img
//                                                                     src={`/image/products/${item.DefaultImage}`}
//                                                                     alt={item.ProductName}
//                                                                     width="150"
//                                                                     height="100"
//                                                                     className="rounded border shadow-sm"
//                                                                 />
//                                                             </td>
//                                                             <td>{item.ProductName}</td>
//                                                             <td>{item.Quantity}</td>
//                                                             <td>{item.Price}</td>
//                                                             <td>{(item.Quantity * item.Price).toFixed(2)}</td> {/* Assuming Price is a number */}
//                                                         </tr>
//                                                     ))
//                                                 ) : (
//                                                     <tr>
//                                                         <td colSpan="5" className="text-center">No Products Found</td>
//                                                     </tr>
//                                                 )}
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-lg-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h4 className="header-title mb-3">Order Summary</h4>

//                                     <div className="table-responsive">
//                                         <table className="table mb-0">
//                                             <thead className="table-light">
//                                                 <tr>
//                                                     <th>Description</th>
//                                                     <th>Price</th>
//                                                 </tr>
//                                             </thead>
//                                             <tbody>
//                                                 <tr>
//                                                     <td>Grand Total :</td>
//                                                     <td>&#8377;  {getOrderDetails.totalOrderPrice}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Shipping Charge :</td>
//                                                     <td>&#8377;  {getOrderDetails?.CouponCode || " 0.00"}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>Estimated Tax :</td>
//                                                     <td> &#8377;  {getOrderDetails?.estimatedTax || '0.00'}</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <th>Total :</th>
//                                                     <th> &#8377;  {(parseFloat(getOrderDetails.totalOrderPrice) + parseFloat(shippingDetails?.shippingCharge || 0) + parseFloat(shippingDetails?.estimatedTax || 0)).toFixed(2)}</th>
//                                                 </tr>
//                                             </tbody>
//                                         </table>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Shipping, Billing, Delivery info can be shown similarly as per your structure */}
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h4 className="header-title mb-3">Shipping Information</h4>

//                                     <h5>Stanley Jones</h5>

//                                     <address className="mb-0 font-14 address-lg">
//                                         795 Folsom Ave, Suite 600<br />
//                                         San Francisco, CA 94107<br />
//                                         <abbr title="Phone">P:</abbr> (123) 456-7890 <br />
//                                         <abbr title="Mobile">M:</abbr> (+01) 12345 67890
//                                     </address>

//                                 </div>
//                             </div>
//                         </div> {/* End col */}

//                         <div className="col-lg-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h4 className="header-title mb-3">Billing Information</h4>

//                                     <ul className="list-unstyled mb-0">
//                                         <li>
//                                             <p className="mb-2"><span className="fw-bold me-2">Payment Type:</span> Credit Card</p>
//                                             <p className="mb-2"><span className="fw-bold me-2">Provider:</span> Visa ending in 2851</p>
//                                             <p className="mb-2"><span className="fw-bold me-2">Valid Date:</span> 02/2020</p>
//                                             <p className="mb-0"><span className="fw-bold me-2">CVV:</span> xxx</p>
//                                         </li>
//                                     </ul>

//                                 </div>
//                             </div>
//                         </div> {/* End col */}

//                         <div className="col-lg-4">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h4 className="header-title mb-3">Delivery Info</h4>

//                                     <div className="text-center">
//                                         <i className="mdi mdi-truck-fast h2 text-muted"></i>
//                                         <h5><b>UPS Delivery</b></h5>
//                                         <p className="mb-1"><b>Order ID :</b> xxxx235</p>
//                                         <p className="mb-0"><b>Payment Mode :</b> COD</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div> {/* End col */}
//                     </div>
//                     {/* End Row */}
//                 </div>
//             </section>
//         </>
//     );
// }






import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './singleOrderDetails.css';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import Loader from '../Loader/Loader';
import MetaData from '../Layout/MetaData';
const BASE_URL = import.meta.env.VITE_IMG_URL;


export default function SingleOrderDetails() {
    const [getOrderDetails, setGetOrderDetails] = useState(null);
    const [shippingDetails, setShippingDetails] = useState(null);
    const param = useParams();

    useEffect(() => {
        const fetchSingleOrder = async () => {
            try {
                const response = await axiosInstance.get(
                    `${Config.END_POINT_LIST["GET_SINGLE_ORDER"]}/${param.id}`,
                    { withCredentials: true }
                );

                const shippingDeatils = await axiosInstance.get(
                    `${Config.END_POINT_LIST["GET_ORDER_SHIPPING_DEATILS"]}/${param.id}`,
                    { withCredentials: true }
                );

                if (response.data.success) {
                    setGetOrderDetails(response.data.order);
                    setShippingDetails(shippingDeatils.data.shippingDetails[0]);
                }
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchSingleOrder();
    }, [param.id]);

    console.log(getOrderDetails);

    // Safely render the content only after the data is loaded
    if (!getOrderDetails) {
        return <Loader />; // Or a custom loading spinner
    }

    // Parse cartJsonData if it's a string
    const cartData = getOrderDetails.cartJsonData && Array.isArray(getOrderDetails.cartJsonData) && getOrderDetails.cartJsonData.length > 0
        ? JSON.parse(getOrderDetails.cartJsonData[0])
        : [];

    // Determine shipping charge logic
    let shippingCharge = 0;
    let shippingChargeAdded = false;

    // If CouponCode exists, check if we have shipping charges in cartJsonData
    if (getOrderDetails.CouponCode || cartData.length > 0) {
        for (let item of cartData) {
            if (item.IsShippingFree && getOrderDetails.totalOrderPrice < 200) {
                shippingCharge = 0

            }
            else {
                if (item.ShippingCharges && !shippingChargeAdded) {
                    shippingCharge += parseFloat(item.ShippingCharges);
                    shippingChargeAdded = true;
                }
            }
        }
    }

    if (!shippingChargeAdded) {
        shippingCharge = shippingDetails?.shippingCharge || 0;
    }

    // Calculate the total order price including shipping and tax
    // const totalAmount = parseFloat(getOrderDetails.totalOrderPrice) + shippingCharge + parseFloat(shippingDetails?.estimatedTax || 0);

    return (
        <>
            <MetaData title={"Order Details"} />

            <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Order Details</h2>
                                <div className="breadcrumb__option">
                                    <Link to="/order-history"> Order</Link>
                                    <span>Order Details</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="/order-history">Order</Link></li>
                                        <li className="breadcrumb-item active">Order Details</li>
                                    </ol>
                                </div>
                                <h4 className="page-title">Order Details</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-10 col-sm-11">
                            <div className="horizontal-steps mt-4 mb-4 pb-5">
                                <div className="horizontal-steps-content">
                                    <div className="step-item">
                                        <span>Order Placed</span>
                                    </div>
                                    <div className="step-item current">
                                        <span>Order Confirmation</span>
                                    </div>
                                    <div className="step-item">
                                        <span>Packed</span>
                                    </div>
                                    <div className="step-item">
                                        <span>Shipped</span>
                                    </div>
                                    <div className="step-item">
                                        <span>Delivered</span>
                                    </div>
                                </div>
                                <div className="process-line" style={{ width: '25%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="header-title mb-3 fs-4">
                                        Items from Order <span style={{ color: "blueviolet", fontWeight: "700" }}>
                                            {getOrderDetails?.OrderNumber ? getOrderDetails?.OrderNumber : "######"}
                                        </span>
                                    </h4>

                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Item</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cartData.length > 0 ? (
                                                    cartData.map((item, ind) => (
                                                        <tr key={ind}>
                                                            <td className="text-center" style={{ width: "150px" }}>
                                                                <img
                                                                    src={item.DefaultImage.url||`${BASE_URL}/${item.DefaultImage}`}
                                                                    alt={item.ProductName}
                                                                    width="150"
                                                                    height="100"
                                                                    className="rounded border shadow-sm"
                                                                />
                                                            </td>
                                                            <td>{item.ProductName.slice(0, 50)}...</td>
                                                            <td>{item.Quantity}</td>
                                                            <td>&#8377;{item.Price}</td>
                                                            <td>&#8377;{(item.Quantity * item.Price).toFixed(2)}</td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="5" className="text-center">No Products Found</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="header-title mb-3">Order Summary</h4>

                                    <div className="table-responsive">
                                        <table className="table mb-0">
                                            <thead className="table-light">
                                                <tr>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Grand Total :</td>
                                                    <td> &#8377;{cartData.reduce((total, item) => total + (item.Price * item.Quantity), 0).toFixed(2)}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Charge :</td>
                                                    <td> &#8377; {shippingCharge}</td>
                                                </tr>
                                                <tr>
                                                    <td>Estimated Tax :</td>
                                                    <td> &#8377; {shippingDetails?.estimatedTax || '0.00'}</td>
                                                </tr>
                                                <tr>
                                                    <th>Total :</th>
                                                    <th>&#8377; {getOrderDetails.totalOrderPrice}</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shipping, Billing, Delivery info can be shown similarly */}

            </section >
        </>
    );
}

