// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useEffect } from 'react';
// import Config from '../../../helpers/Config';
// import rootAction from '../../../stateManagment/actions/rootAction'
// import { useSelector, useDispatch } from 'react-redux';

// export default function PayUFailResponse() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [cartProductsData, setCartProductsData] = useState(0);
//     const [CouponCode, setCouponCode] = useState('');
//     const location = useLocation();

//     // Function to parse query parameters
//     const getQueryParams = () => {
//         const query = new URLSearchParams(location.search);
//         const params = {};
//         query.forEach((value, key) => {
//             params[key] = value;
//         });
//         return params;
//     };

//     useEffect(async () => {
//         const params = getQueryParams();
//         console.log("Query Parameters:", params.status);
//         console.log("Query Parameters:", params.unmappedstatus);
//         // Handle any logic based on the params if needed


//         dispatch(rootAction.commonAction.setLoading(true));
//         await PlaceAndConfirmCustomerOrder(null);
//         dispatch(rootAction.commonAction.setLoading(false));
//     }, [location]);




//     const PlaceAndConfirmCustomerOrder = async () => {
//         try {
//             const headersStrip = {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             };

//             const paramSrip = {
//                 requestParameters: {
//                     UserID: loginUser.UserID,
//                     OrderNote: OrderNote,
//                     cartJsonData: JSON.stringify(cartItemsSession),
//                     CouponCode: IsCouponCodeApplied ? CouponCode : "",
//                     PaymentMethod: 6,
//                     paymentToken:  "",
//                     payPalOrderConfirmJson: "",
//                     recordValueJson: "[]",
//                 },
//             };

//             const stripServerResponse = await MakeApiCallAsync(Config.END_POINT_NAMES['POST_CUSTOMER_ORDER'], Config['COMMON_CONTROLLER_SUB_URL'], paramSrip, headersStrip, "POST", true);
//             if (stripServerResponse != null && stripServerResponse.data != null && stripServerResponse.status === 200) {
//                 let stripServerResponseDetail = JSON.parse(stripServerResponse.data.data ? stripServerResponse.data.data : "[]");

//                 if (stripServerResponseDetail.length > 0 && stripServerResponseDetail[0].ResponseMsg === "Order Placed Successfully") {
//                     showSuccessMsg("Order Placed Successfully!");

//                     setTimeout(() => {
//                         navigate('/' + getLanguageCodeFromSession() + '/');
//                         dispatch(rootAction.cartAction.setCustomerCart('[]'));
//                         dispatch(rootAction.cartAction.SetTotalCartItems(0));
//                         localStorage.setItem("cartItems", "[]");
//                     }, 1000);
//                 } else {
//                     showErrorMsg("An error occurred. Please try again!");
//                 }
//             } else {
//                 showErrorMsg("An error occurred. Please try again!");
//             }

//             if (PaymentMethod === process.env.REACT_APP_STRIPE_PAYMENT_METHOD) {
//                 HandleStripCardModal();
//             } else if (PaymentMethod === process.env.REACT_APP_PAYPAL_PAYMENT_METHOD) {
//                 HandlePaypalCardModal();
//             }
//         } catch (err) {
//             showErrorMsg("An error occurred. Please try again!");
//             console.log(err.message);
//             if (PaymentMethod === process.env.REACT_APP_STRIPE_PAYMENT_METHOD) {
//                 HandleStripCardModal();
//             }
//             dispatch(rootAction.commonAction.setLoading(false));
//         }
//     };

//     return (
//         <div style={{ textAlign: 'center', padding: '50px' }}>
//             <h1>Payment Failed</h1>
//             <p>Unfortunately, your payment could not be processed. Please try again.</p>
//             <p>You will be redirected shortly. If not, click <button onClick={() => navigate('/')}>here</button>.</p>
//         </div>
//     );
// }



// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useEffect } from 'react';
// import Config from '../../../helpers/Config';
// import rootAction from '../../../stateManagment/actions/rootAction';
// import { useSelector, useDispatch } from 'react-redux';

// export default function PayUFailResponse() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const location = useLocation();

//     // Function to parse query parameters
//     const getQueryParams = () => {
//         const query = new URLSearchParams(location.search);
//         const params = {};
//         query.forEach((value, key) => {
//             params[key] = value;
//         });
//         return params;
//     };

//     useEffect(() => {
//         const params = getQueryParams();
//         console.log("Query Parameters:", params.status);
//         console.log("Query Parameters:", params.unmappedstatus);

//         // Set loading state
//         dispatch(rootAction.commonAction.setLoading(true));

//         // Place and confirm the customer order
//         PlaceAndConfirmCustomerOrder();

//         // Reset loading state after processing
//         dispatch(rootAction.commonAction.setLoading(false));
//     }, [location]);

//     const PlaceAndConfirmCustomerOrder = async () => {
//         try {
//             const headers = {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             };

//             const paramSrip = {
//                 requestParameters: {
//                     UserID: loginUser.UserID,
//                     OrderNote: OrderNote,
//                     cartJsonData: JSON.stringify(cartItemsSession),
//                     CouponCode: IsCouponCodeApplied ? CouponCode : "",
//                     PaymentMethod: 6, // Assuming 6 corresponds to Cash on Delivery
//                     paymentToken: "",
//                     payPalOrderConfirmJson: "",
//                     recordValueJson: "[]",
//                 },
//             };

//             const stripServerResponse = await MakeApiCallAsync(Config.END_POINT_NAMES['POST_CUSTOMER_ORDER'], Config['COMMON_CONTROLLER_SUB_URL'], paramSrip, headers, "POST", true);
//             if (stripServerResponse != null && stripServerResponse.data != null && stripServerResponse.status === 200) {
//                 let stripServerResponseDetail = JSON.parse(stripServerResponse.data.data ? stripServerResponse.data.data : "[]");

//                 if (stripServerResponseDetail.length > 0 && stripServerResponseDetail[0].ResponseMsg === "Order Placed Successfully") {
//                     showSuccessMsg("Order Placed Successfully!");

//                     setTimeout(() => {
//                         navigate('/' + getLanguageCodeFromSession() + '/');
//                         dispatch(rootAction.cartAction.setCustomerCart('[]'));
//                         dispatch(rootAction.cartAction.SetTotalCartItems(0));
//                         localStorage.setItem("cartItems", "[]");
//                     }, 1000);
//                 } else {
//                     showErrorMsg("An error occurred. Please try again!");
//                 }
//             } else {
//                 showErrorMsg("An error occurred. Please try again!");
//             }

//             // Optional: Handle any specific actions for payment methods if needed
//             if (PaymentMethod === process.env.REACT_APP_STRIPE_PAYMENT_METHOD) {
//                 HandleStripCardModal();
//             } else if (PaymentMethod === process.env.REACT_APP_PAYPAL_PAYMENT_METHOD) {
//                 HandlePaypalCardModal();
//             }
//         } catch (err) {
//             showErrorMsg("An error occurred. Please try again!");
//             console.log(err.message);
//             if (PaymentMethod === process.env.REACT_APP_STRIPE_PAYMENT_METHOD) {
//                 HandleStripCardModal();
//             }
//             dispatch(rootAction.commonAction.setLoading(false));
//         }
//     };

//     return (
//         <div style={{ textAlign: 'center', padding: '50px' }}>
//             <h1>Payment Failed</h1>
//             <p>Unfortunately, your payment could not be processed. Please try again.</p>
//             <p>You will be redirected shortly. If not, click <button onClick={() => navigate('/')}>here</button>.</p>
//         </div>
//     );
// }



// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useEffect } from 'react';
// import Config from '../../../helpers/Config';
// import rootAction from '../../../stateManagment/actions/rootAction';
// import { useSelector, useDispatch } from 'react-redux';
// import { showSuccessMsg, showErrorMsg } from '../../../helpers/ValidationHelper'; // Make sure these helpers are imported
// import { MakeApiCallAsync } from '../../../helpers/ApiHelpers'; // Make sure this is imported
// import { getLanguageCodeFromSession } from '../../../helpers/CommonHelper'; // Ensure this is imported

// export default function PayUFailResponse() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const location = useLocation();

//     const loginUser = useSelector(state => JSON.parse(state.userReducer.user || "{}"));
//     const cartItemsSession = useSelector(state => JSON.parse(state.cartReducer.cartItems || "[]"));

//     const OrderNote = ''; // Define as needed
//     const IsCouponCodeApplied = false; // Define based on your logic
//     const CouponCode = ''; // Define based on your logic
//     const PaymentMethod = 6; // Adjust this according to your logic

//     const getQueryParams = () => {
//         const query = new URLSearchParams(location.search);
//         const params = {};
//         query.forEach((value, key) => {
//             params[key] = value;
//         });
//         return params;
//     };

//     useEffect(() => {
//         const params = getQueryParams();
//         console.log("Query Parameters:", params.status);
//         console.log("Query Parameters:", params.unmappedstatus);

//         if (params.status === "success") {
//             dispatch(rootAction.commonAction.setLoading(true));
//             PlaceAndConfirmCustomerOrder().finally(() => {
//                 dispatch(rootAction.commonAction.setLoading(false));

//             });
//         }
//         else{
//             showErrorMsg(params.unmappedstatus)
//         }
//     }, [location]);

//     const PlaceAndConfirmCustomerOrder = async () => {
//         if (!loginUser.UserID) {
//             showErrorMsg("User not logged in.");
//             return;
//         }

//         if (!cartItemsSession.length) {
//             showErrorMsg("Cart is empty.");
//             return;
//         }

//         try {
//             const headers = {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             };

//             const paramSrip = {
//                 requestParameters: {
//                     UserID: loginUser.UserID,
//                     OrderNote: OrderNote,
//                     cartJsonData: JSON.stringify(cartItemsSession),
//                     CouponCode: IsCouponCodeApplied ? CouponCode : "",
//                     PaymentMethod: PaymentMethod,
//                     paymentToken: "",
//                     payPalOrderConfirmJson: "",
//                     recordValueJson: "[]",
//                 },
//             };

//             const stripServerResponse = await MakeApiCallAsync(Config.END_POINT_NAMES['POST_CUSTOMER_ORDER'], Config['COMMON_CONTROLLER_SUB_URL'], paramSrip, headers, "POST", true);

//             if (stripServerResponse?.data && stripServerResponse.status === 200) {
//                 const responseData = JSON.parse(stripServerResponse.data.data || "[]");
//                 if (responseData.length > 0 && responseData[0].ResponseMsg === "Order Placed Successfully") {
//                     showSuccessMsg("Order Placed Successfully!");
//                     setTimeout(() => {
//                         navigate('/' + getLanguageCodeFromSession() + '/');
//                         dispatch(rootAction.cartAction.setCustomerCart('[]'));
//                         dispatch(rootAction.cartAction.SetTotalCartItems(0));
//                         localStorage.setItem("cartItems", "[]");
//                     }, 1000);
//                 } else {
//                     showErrorMsg("An error occurred. Please try again!");
//                 }
//             } else {
//                 showErrorMsg("An error occurred. Please try again!");
//             }

//         } catch (err) {
//             showErrorMsg("An error occurred. Please try again!");
//             console.error(err.message);
//         }
//     };

//     return (
//         <div style={{ textAlign: 'center', padding: '50px' }}>
//             <h1>Payment Failed</h1>
//             <p>Unfortunately, your payment could not be processed. Please try again.</p>
//             <p>You will be redirected shortly. If not, click <button onClick={() => navigate('/')}>here</button>.</p>
//         </div>
//     );
// }




// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useEffect, useRef, useState } from 'react';
// import Config from '../../../helpers/Config';
// import rootAction from '../../../stateManagment/actions/rootAction';
// import { useSelector, useDispatch } from 'react-redux';
// import { showSuccessMsg, showErrorMsg } from '../../../helpers/ValidationHelper'; 
// import { MakeApiCallAsync } from '../../../helpers/ApiHelpers'; 
// import { getLanguageCodeFromSession } from '../../../helpers/CommonHelper'; 

// export default function PayUFailResponse() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const location = useLocation();
//     const hasOrderedRef = useRef(false); // Ref to track if order has been placed
//     const {paramsData,setParamsdata}=useState()

//     const loginUser = useSelector(state => JSON.parse(state.userReducer.user || "{}"));
//     const cartItemsSession = useSelector(state => JSON.parse(state.cartReducer.cartItems || "[]"));

//     const OrderNote = ''; // Define as needed
//     const IsCouponCodeApplied = false; // Define based on your logic
//     const CouponCode = ''; // Define based on your logic
//     const PaymentMethod = 6; // Adjust this according to your logic

//     const getQueryParams = () => {   
//         const query = new URLSearchParams(location.search);
//         const params = {};
//         query.forEach((value, key) => {
//             params[key] = value;
//         });
//         setParamsdata(params)
//         return params;
//     };

//     useEffect(() => {
//         const params = getQueryParams();
//         console.log("Query Parameters:", params.status);
//         console.log("Query Parameters:", params.unmappedstatus);

//         if (params.status === "success" && !hasOrderedRef.current) {
//             hasOrderedRef.current = true; // Set to true to prevent further calls
//             dispatch(rootAction.commonAction.setLoading(true));
//             PlaceAndConfirmCustomerOrder().finally(() => {
//                 dispatch(rootAction.commonAction.setLoading(false));
//             });
//         } else {
//             showErrorMsg(params.unmappedstatus);
//         }
//     }, [location]);

//     const PlaceAndConfirmCustomerOrder = async () => {
//         if (!loginUser.UserID) {
//             showErrorMsg("User not logged in.");
//             return;
//         }

//         if (!cartItemsSession.length) {
//             showErrorMsg("Cart is empty.");
//             return;
//         }

//         try {
//             const headers = {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             };

//             const paramSrip = {
//                 requestParameters: {
//                     UserID: loginUser.UserID,
//                     OrderNote: OrderNote,
//                     cartJsonData: JSON.stringify(cartItemsSession),
//                     CouponCode: IsCouponCodeApplied ? CouponCode : "",
//                     PaymentMethod: PaymentMethod,
//                     paymentToken: "",
//                     payPalOrderConfirmJson: "",
//                     recordValueJson: "[]",
//                 },
//             };

//             const stripServerResponse = await MakeApiCallAsync(Config.END_POINT_NAMES['POST_CUSTOMER_ORDER'], Config['COMMON_CONTROLLER_SUB_URL'], paramSrip, headers, "POST", true);

//             if (stripServerResponse?.data && stripServerResponse.status === 200) {
//                 const responseData = JSON.parse(stripServerResponse.data.data || "[]");
//                 if (responseData.length > 0 && responseData[0].ResponseMsg === "Order Placed Successfully") {
//                     showSuccessMsg("Order Placed Successfully!");
//                     setTimeout(() => {
//                         navigate('/' + getLanguageCodeFromSession() + '/');
//                         dispatch(rootAction.cartAction.setCustomerCart('[]'));
//                         dispatch(rootAction.cartAction.SetTotalCartItems(0));
//                         localStorage.setItem("cartItems", "[]");
//                     }, 1000);
//                 } else {
//                     showErrorMsg("An error occurred. Please try again!");
//                 }
//             } else {
//                 showErrorMsg("An error occurred. Please try again!");
//             }
//         } catch (err) {
//             showErrorMsg("An error occurred. Please try again!");
//             console.error(err.message);
//         }
//     };

//     return (
//         <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//         <h1 style={{ color: paramsData.status === "success" ? 'green' : 'red' }}>
//             {paramsData.status === "success" ? "Payment Successful" : "Payment Failed"}
//         </h1>
//         <p>
//             {paramsData.status === "success" 
//                 ? "Thank you for your order! Your payment has been processed successfully." 
//                 : "Unfortunately, your payment could not be processed. Please try again."
//             }
//         </p>
//         <p>
//             You will be redirected shortly. If not, click 
//             <button onClick={() => navigate('/')} style={{ marginLeft: '5px', color: '#007bff', background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>
//                 here
//             </button>.
//         </p>
//     </div>
//     );
// }


// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useEffect, useRef, useState } from 'react';

// import './PayUFailResponse.css';
// import { showErrorMsg, showSuccessMsg } from '../../../utils/ShowMessage';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { setCustomerCart, SetTotalCartItems } from '../../../Store/features/cartSlice/cartSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../Loader/Loader';
// import axios from 'axios';

// export default function PayUFailResponse() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     //     const location = useLocation();
//     const location = useLocation();
//     const hasOrderedRef = useRef(false);
//     const [paramsData, setParamsData] = useState({});
//     const { cartItems } = useSelector((state) => state.cart.cartItems);
//     const { isLoading, user } = useSelector((state) => state.auth);

//     const OrderNote = '';
//     const IsCouponCodeApplied = false;
//     const CouponCode = '';
//     const PaymentMethod = 7;
//     const [loading, setLoading] = useState(false);



//     const [shiproketToekn, setShiprocktToken] = useState(null);
//     const [isTokenFetched, setIsTokenFetched] = useState(false);

//     useEffect(() => {
//         if (!isTokenFetched) {
//             const email = "dileepsahu0873@gmail.com";
//             const password = "Dileep@0873";

//             async function getTokenFromShiprockt() {
//                 try {
//                     const response = await axios.post(
//                         "https://apiv2.shiprocket.in/v1/external/auth/login",
//                         { email, password }
//                     );

//                     console.log("Shiprocket response: ", response.data);

//                     const token = response.data.token;
//                     if (token) {
//                         setShiprocktToken(token);
//                         setIsTokenFetched(true);
//                     } else {
//                         console.log("No token found in the response");
//                     }
//                 } catch (error) {
//                     console.log("Error fetching token:", error);
//                 }
//             }

//             getTokenFromShiprockt();
//         }
//     }, [isTokenFetched]);

//     // Token update hone ke baad ye useEffect chalega
//     useEffect(() => {
//         if (shiproketToekn) {
//             console.log("Token set successfully sdssdd:", shiproketToekn);
//         }
//     }, [shiproketToekn]);

//     const [isOrderPlaced, setIsOrderPlaced] = useState(false);

//     useEffect(() => {
//         const query = new URLSearchParams(location.search);
//         const params = {};
//         query.forEach((value, key) => {
//             params[key] = value;
//         });
//         setParamsData(params);

//         console.log("Query Parameters:", params.status);

//         if (params.status === "success" && !isOrderPlaced && !hasOrderedRef.current) {
//             hasOrderedRef.current = true;  // Set ref to true to prevent multiple calls
//             setLoading(true);
//             PlaceAndConfirmCustomerOrder({amount:params.amount, bank_ref_num:params.bank_ref_num}).finally(() => {
//                 setLoading(false);
//                 setIsOrderPlaced(true); // Mark the order as placed
//             });
//         } else if (params.status !== "success") {
//             showErrorMsg(params.error_Message || "Payment failed. Please try again.");
//         }
//     }, [location, isOrderPlaced]);


//     const PlaceAndConfirmCustomerOrder = async (details) => {
//         try {
//             const headersStrip = {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//             };

//             const paramSrip = {
//                 UserID: user._id,
//                 OrderNote: OrderNote,
//                 totalOrderPrice: details.amount || 0,
//                 cartJsonData: JSON.stringify(cartItems),
//                 CouponCode: IsCouponCodeApplied ? CouponCode : "",
//                 PaymentMethod: PaymentMethod,
//                 paymentToken:  "",
//                 payPalOrderConfirmJson:  "",
//                 bank_ref_num: details.bank_ref_num || 0
//             };

//             // Create the order
//             const stripServerResponse = await axiosInstance.post(Config.END_POINT_LIST["ADD_NEW_ORDER"], paramSrip, { withCredentials: true });

//             if (stripServerResponse != null && stripServerResponse.data != null && stripServerResponse.status === 200) {
//                 const orderData = stripServerResponse.data;
//                 if (orderData.ResponseMsg === "Order Placed Successfully") {
//                     showSuccessMsg("Order Placed Successfully!");
//                     // getTokenFromShiprockt()

//                     debugger
//                     // Send order to Shiprocket if token is available
//                     if (shiproketToekn) {
//                         createShiprocketOrder({
//                             id: orderData.order._id,
//                             customerName: user.name,
//                             customerLastName: user.lname,
//                             billingAddress: user.address,
//                             billingCity: user.CityName,
//                             billingPincode: user.PostalCode,
//                             billingState: user.StateName,
//                             billingCountry: user.CountryName,
//                             billingEmail: user.email,
//                             billingPhone: user.phone,
//                             shippingName: user.name,
//                             shippingLastName: user.lname,
//                             shippingAddress: user.address,
//                             shippingCity: user.CityName,
//                             shippingPincode: user.PostalCode,
//                             shippingCountry: user.CountryName,
//                             shippingState: user.StateName,
//                             shippingEmail: user.email,
//                             shippingPhone: user.phone,
//                             items: cartItems,
//                             paymentMethod: PaymentMethod,
//                             subTotal: details.amount,
//                             totalDiscount: IsCouponCodeApplied ? 0 : 0, // Adjust this if necessary
//                             length: 10,
//                             breadth: 15,
//                             height: 20,
//                             weight: 2.5,
//                         });
//                     } else {
//                         console.log("Shiprocket token is not available.");
//                     }

//                     // Reset cart and navigate to homepage
//                     // setTimeout(() => {
//                     //     navigate('/');
//                     //     dispatch(setCustomerCart('[]'));
//                     //     dispatch(SetTotalCartItems(0));
//                     //     localStorage.setItem("cartItems", "[]");
//                     // }, 1000);
//                 } else {
//                     showErrorMsg("An error occurred. Please try again!");
//                 }
//             } else {
//                 showErrorMsg("An error occurred. Please try again!");
//             }
//         } catch (err) {
//             showErrorMsg("An error occurred. Please try again!");
//             console.log(err.message);
//             setLoading(false);
//         }
//     };


//     const createShiprocketOrder = async (orderDetails) => {
//         if (!shiproketToekn) {
//             console.log("Shiprocket token not available.");
//             return;
//         }

//         try {
//             const headers = {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${shiproketToekn}`,
//             };

//             // Ensure all required fields are provided
//             const params = {
//                 "order_id": `order_${orderDetails.id}`,
//                 "order_date": new Date().toISOString(),
//                 "pickup_location": "Shop1", // Adjust based on your needs
//                 "comment": "Reseller: M/s Goku", // Adjust based on your business logic
//                 "billing_customer_name": orderDetails.customerName,
//                 "billing_last_name": orderDetails.customerLastName,
//                 "billing_address": orderDetails.billingAddress,
//                 "billing_city": orderDetails.billingCity,
//                 "billing_pincode": orderDetails.billingPincode,
//                 "billing_state": orderDetails.billingState,
//                 "billing_country": orderDetails.billingCountry,
//                 "billing_email": orderDetails.billingEmail,
//                 "billing_phone": orderDetails.billingPhone,
//                 "shipping_is_billing": true,
//                 "shipping_customer_name": orderDetails.shippingName,
//                 "shipping_last_name": orderDetails.shippingLastName,
//                 "shipping_address": orderDetails.shippingAddress,
//                 "shipping_city": orderDetails.shippingCity,
//                 "shipping_pincode": orderDetails.shippingPincode,
//                 "shipping_country": orderDetails.shippingCountry,
//                 "shipping_state": orderDetails.shippingState,
//                 "shipping_email": orderDetails.shippingEmail,
//                 "shipping_phone": orderDetails.shippingPhone,
//                 "order_items": orderDetails.items.map(item => ({
//                     name: item.ProductName,
//                     sku: item.ProductId,
//                     units: item.Quantity,
//                     selling_price: item.Price || 0,  // Ensure this value is not undefined or 0
//                 })),
//                 "payment_method": orderDetails.paymentMethod,
//                 "sub_total": orderDetails.subTotal,
//                 "total_discount": orderDetails.totalDiscount || 0,  // Default to 0 if missing
//                 "length": orderDetails.length || 10, // Default value
//                 "breadth": orderDetails.breadth || 15, // Default value
//                 "height": orderDetails.height || 20, // Default value
//                 "weight": orderDetails.weight || 2.5, // Default value
//             };

//             // Check if all required fields are present
//             if (!params.billing_customer_name || !params.billing_address || !params.billing_phone || !params.billing_pincode || !params.order_items) {
//                 throw new Error("Some required billing or order item fields are missing.");
//             }

//             // Make the API call to Shiprocket
//             const response = await axios.post('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', params, { headers });
//             console.log("Shiprocket Order Response: ", response.data);

//         } catch (error) {
//             console.error("Error sending order to Shiprocket:", error);
//         }
//     };


//      if (loading) {
//             <Loader />

//         }

//     return (
// <>

//     <div className="container">
//         <div className="row">

//             {paramsData.status === "success" ?
//                 <div className="response-container">
//                     <div className="response-header">Payment Successful</div>

//                     <div className="success-container" >
//                         <div className="circle"></div>
//                         <div className="circle"></div>
//                         <div className="circle"></div>
//                         <div className="circle">
//                             <span className="checkmark">✔</span>
//                         </div>
//                     </div>

//                     <div className="text">{paramsData.status === "success" && paramsData.mode !== ""
//                         ? "Thank you for your order! Your payment has been processed successfully."
//                         : "Unfortunately, your payment could not be processed. Please try again."
//                     }</div>
//                     <table className="payment-details-table">
//                         <tbody>
//                             <tr>
//                                 <td><b>Transaction Number</b></td>
//                                 <td>
//                                     <span style={{ fontWeight: "700" }}>
//                                         {paramsData.txnid ? paramsData.txnid : paramsData.mihpayid}
//                                     </span>
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <td><b>Amount Paid</b></td>
//                                 <td style={{ color: "#0a0062", fontWeight: "700" }}>&#8377;{paramsData.amount ?? "N/A"}</td>
//                             </tr>

//                             <tr>
//                                 <td><b>Paid by</b></td>
//                                 <td style={{ color: "#0a0062", fontWeight: "700" }}>{paramsData.payment_source ?? "Not Found"}</td>
//                             </tr>
//                         </tbody>
//                     </table>

//                     {/* ✅ Redirect Message & Button */}
//                     <p className="redirect-text text-center">
//                         You will be redirected shortly. If not, click
//                         {paramsData.status === "success" && paramsData.mode !== "" ? (
//                             <button onClick={() => navigate('/orders-history')} className="redirect-button">here</button>
//                         ) : (
//                             <button onClick={() => navigate('/cart')} className="redirect-button">here</button>
//                         )}
//                     </p>
//                 </div>
//                 :
//                 <div className="response-container">
//                     <div className={`response-header`} style={{ backgroundColor: "#cc312e" }}>Payment Failed</div>

//                     <div className="fail-container" >
//                         <div className="fail-circle"></div>
//                         <div className="fail-circle"></div>
//                         <div className="fail-circle"></div>
//                         <div className="fail-circle">
//                             <span className="crossmark">✖</span>
//                         </div>
//                     </div>

//                     <div className="text">{paramsData.status === "success" && paramsData.mode !== ""
//                         ? "Thank you for your order! Your payment has been processed successfully."
//                         : "Unfortunately, your payment could not be processed. Please try again."
//                     }</div>
//                     <table className="payment-details-table">
//                         <tbody>
//                             <tr>
//                                 <td><b>Transaction Number</b></td>
//                                 <td>
//                                     <span style={{ fontWeight: "700" }}>
//                                         {paramsData.txnid ? paramsData.txnid : paramsData.mihpayid}
//                                     </span>
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <td><b>Amount Paid</b></td>
//                                 <td style={{ color: "#0a0062", fontWeight: "700" }}>&#8377;{paramsData.amount ?? "N/A"}</td>
//                             </tr>

//                             <tr>
//                                 <td><b>Paid by</b></td>
//                                 <td style={{ color: "#0a0062", fontWeight: "700" }}>{paramsData.payment_source ?? "Not Found"}</td>
//                             </tr>
//                         </tbody>
//                     </table>

//                     {/* ✅ Redirect Message & Button */}
//                     <p className="redirect-text text-center">
//                         You will be redirected shortly. If not, click
//                         {paramsData.status === "success" && paramsData.mode !== "" ? (
//                             <button onClick={() => navigate('/orders-history')} className="redirect-button">here</button>
//                         ) : (
//                             <button onClick={() => navigate('/cart')} className="redirect-button">here</button>
//                         )}
//                     </p>


//                 </div>

//             }
//         </div>
//     </div>
// </>
//     );
// }


// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useEffect, useRef, useState } from 'react';
// import './PayUFailResponse.css';
// import { showErrorMsg, showSuccessMsg } from '../../../utils/ShowMessage';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { setCustomerCart, SetTotalCartItems } from '../../../Store/features/cartSlice/cartSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import Loader from '../Loader/Loader';
// import axios from 'axios';

// export default function PayUFailResponse() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const location = useLocation();
//     const hasOrderedRef = useRef(false);

//     const [paramsData, setParamsData] = useState({});
//     const { cartItems } = useSelector((state) => state.cart.cartItems);
//     const { isLoading, user } = useSelector((state) => state.auth);
//     const [loading, setLoading] = useState(false);

//     const [shiproketToekn, setShiprocktToken] = useState(null);
//     const [isTokenFetched, setIsTokenFetched] = useState(false);
//     const [isOrderPlaced, setIsOrderPlaced] = useState(false);
//     const [orderDetails, setOrderDetails] = useState(null); // Store order details for Shiprocket

//     useEffect(() => {
//         if (!isTokenFetched) {
//             const email = "dileepsahu0873@gmail.com";
//             const password = "Dileep@0873";

//             async function getTokenFromShiprockt() {
//                 try {
//                     const response = await axios.post(
//                         "https://apiv2.shiprocket.in/v1/external/auth/login",
//                         { email, password }
//                     );

//                     const token = response.data.token;
//                     if (token) {
//                         setShiprocktToken(token);
//                         setIsTokenFetched(true);
//                     } else {
//                         console.log("No token found in the response");
//                     }
//                 } catch (error) {
//                     console.log("Error fetching token:", error);
//                 }
//             }

//             getTokenFromShiprockt();
//         }
//     }, [isTokenFetched]);

//     // ✅ UseEffect to check when token updates
//     useEffect(() => {
//         if (shiproketToekn) {
//             console.log("Shiprocket Token Set Successfully:", shiproketToekn);

//             // If order was placed, create Shiprocket order
//             if (isOrderPlaced && orderDetails) {
//                 createShiprocketOrder(orderDetails);
//             }
//         }
//     }, [shiproketToekn]);

//     useEffect(() => {
//         const query = new URLSearchParams(location.search);
//         const params = {};
//         query.forEach((value, key) => {
//             params[key] = value;
//         });
//         setParamsData(params);

//         console.log("Query Parameters:", params.status);

//         if (params.status === "success" && !isOrderPlaced && !hasOrderedRef.current) {
//             hasOrderedRef.current = true;
//             setLoading(true);
//             PlaceAndConfirmCustomerOrder({
//                 amount: params.amount,
//                 bank_ref_num: params.bank_ref_num,
//                 payment_source:params.payment_source||7
//             }).finally(() => {
//                 setLoading(false);
//                 setIsOrderPlaced(true);
//             });
//         } else if (params.status !== "success") {
//             showErrorMsg(params.error_Message || "Payment failed. Please try again.");
//         }
//     }, [location, isOrderPlaced]);

//     const PlaceAndConfirmCustomerOrder = async (details) => {
//         try {
//             const paramSrip = {
//                 UserID: user._id,
//                 OrderNote: "",
//                 totalOrderPrice: details.amount || 0,
//                 cartJsonData: JSON.stringify(cartItems),
//                 CouponCode: "",
//                 PaymentMethod: 7,
//                 paymentToken: "",
//                 payPalOrderConfirmJson: "",
//                 bank_ref_num: details.bank_ref_num || 0
//             };

//             const response = await axiosInstance.post(Config.END_POINT_LIST["ADD_NEW_ORDER"], paramSrip, { withCredentials: true });

//             if (response?.status === 200 && response.data?.ResponseMsg === "Order Placed Successfully") {
//                 showSuccessMsg("Order Placed Successfully!");

//                 const orderData = response.data.order;
//                 const newOrderDetails = {
//                     id: orderData._id,
//                     customerName: user.name,
//                     customerLastName: user.lname,
//                     billingAddress: user.address,
//                     billingCity: user.CityName,
//                     billingPincode: user.PostalCode,
//                     billingState: user.StateName,
//                     billingCountry: user.CountryName,
//                     billingEmail: user.email,
//                     billingPhone: user.phone,
//                     shippingName: user.name,
//                     shippingLastName: user.lname,
//                     shippingAddress: user.address,
//                     shippingCity: user.CityName,
//                     shippingPincode: user.PostalCode,
//                     shippingCountry: user.CountryName,
//                     shippingState: user.StateName,
//                     shippingEmail: user.email,
//                     shippingPhone: user.phone,
//                     items: cartItems,
//                     paymentMethod: "Prepaid",
//                     subTotal: details.amount,
//                     totalDiscount: 0,
//                     length: 10,
//                     breadth: 15,
//                     height: 20,
//                     weight: 2.5
//                 };

//                 setOrderDetails(newOrderDetails); // Save order details for Shiprocket

//                 if (shiproketToekn) {
//                     createShiprocketOrder(newOrderDetails);
//                 }
//             } else {
//                 showErrorMsg("An error occurred. Please try again!");
//             }
//         } catch (err) {
//             showErrorMsg("An error occurred. Please try again!");
//             console.log(err.message);
//         }
//     };

//     const createShiprocketOrder = async (orderDetails) => {
//         if (!shiproketToekn) {
//             console.log("Shiprocket token not available.");
//             return;
//         }

//         try {
//             const headers = {
//                 "Content-Type": "application/json",
//                 "Authorization": `Bearer ${shiproketToekn}`,
//             };

//             const params = {
//                 "order_id": `order_${orderDetails.id}`,
//                 "order_date": new Date().toISOString(),
//                 "pickup_location": "PARIJAT HANDICRAFT",
//                 "comment": "Reseller: M/s Goku",
//                 "billing_customer_name": orderDetails.customerName,
//                 "billing_last_name": orderDetails.customerLastName,
//                 "billing_address": orderDetails.billingAddress,
//                 "billing_city": orderDetails.billingCity,
//                 "billing_pincode": orderDetails.billingPincode,
//                 "billing_state": orderDetails.billingState,
//                 "billing_country": orderDetails.billingCountry,
//                 "billing_email": orderDetails.billingEmail,
//                 "billing_phone": orderDetails.billingPhone,
//                 "shipping_is_billing": true,
//                 "order_items": orderDetails.items.map(item => ({
//                     name: item.ProductName,
//                     sku: item.ProductId,
//                     units: item.Quantity,
//                     selling_price: item.Price || 0,
//                 })),
//                 "payment_method": orderDetails.paymentMethod,
//                 "sub_total": orderDetails.subTotal,
//                 "total_discount": orderDetails.totalDiscount || 0,
//                 "length": orderDetails.length || 10,
//                 "breadth": orderDetails.breadth || 15,
//                 "height": orderDetails.height || 20,
//                 "weight": orderDetails.weight || 2.5,
//             };

//             const response = await axios.post(
//                 'https://apiv2.shiprocket.in/v1/external/orders/create/adhoc',
//                 params,
//                 { headers }
//             );

//             console.log("Shiprocket Order Response: ", response.data);
//         } catch (error) {
//             console.error("Error sending order to Shiprocket:", error);
//         }
//     };

//     return loading ? <Loader /> :
//         <div>  <>

//             <div className="container">
//                 <div className="row">

//                     {paramsData.status === "success" ?
//                         <div className="response-container">
//                             <div className="response-header">Payment Successful</div>

//                             <div className="success-container" >
//                                 <div className="circle"></div>
//                                 <div className="circle"></div>
//                                 <div className="circle"></div>
//                                 <div className="circle">
//                                     <span className="checkmark">✔</span>
//                                 </div>
//                             </div>

//                             <div className="text">{paramsData.status === "success" && paramsData.mode !== ""
//                                 ? "Thank you for your order! Your payment has been processed successfully."
//                                 : "Unfortunately, your payment could not be processed. Please try again."
//                             }</div>
//                             <table className="payment-details-table">
//                                 <tbody>
//                                     <tr>
//                                         <td><b>Transaction Number</b></td>
//                                         <td>
//                                             <span style={{ fontWeight: "700" }}>
//                                                 {paramsData.txnid ? paramsData.txnid : paramsData.mihpayid}
//                                             </span>
//                                         </td>
//                                     </tr>

//                                     <tr>
//                                         <td><b>Amount Paid</b></td>
//                                         <td style={{ color: "#0a0062", fontWeight: "700" }}>&#8377;{paramsData.amount ?? "N/A"}</td>
//                                     </tr>

//                                     <tr>
//                                         <td><b>Paid by</b></td>
//                                         <td style={{ color: "#0a0062", fontWeight: "700" }}>{paramsData.payment_source ?? "Not Found"}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>

//                             {/* ✅ Redirect Message & Button */}
//                             <p className="redirect-text text-center">
//                                 You will be redirected shortly. If not, click
//                                 {paramsData.status === "success" && paramsData.mode !== "" ? (
//                                     <button onClick={() => navigate('/orders-history')} className="redirect-button">here</button>
//                                 ) : (
//                                     <button onClick={() => navigate('/cart')} className="redirect-button">here</button>
//                                 )}
//                             </p>
//                         </div>
//                         :
//                         <div className="response-container">
//                             <div className={`response-header`} style={{ backgroundColor: "#cc312e" }}>Payment Failed</div>

//                             <div className="fail-container" >
//                                 <div className="fail-circle"></div>
//                                 <div className="fail-circle"></div>
//                                 <div className="fail-circle"></div>
//                                 <div className="fail-circle">
//                                     <span className="crossmark">✖</span>
//                                 </div>
//                             </div>

//                             <div className="text">{paramsData.status === "success" && paramsData.mode !== ""
//                                 ? "Thank you for your order! Your payment has been processed successfully."
//                                 : "Unfortunately, your payment could not be processed. Please try again."
//                             }</div>
//                             <table className="payment-details-table">
//                                 <tbody>
//                                     <tr>
//                                         <td><b>Transaction Number</b></td>
//                                         <td>
//                                             <span style={{ fontWeight: "700" }}>
//                                                 {paramsData.txnid ? paramsData.txnid : paramsData.mihpayid}
//                                             </span>
//                                         </td>
//                                     </tr>

//                                     <tr>
//                                         <td><b>Amount Paid</b></td>
//                                         <td style={{ color: "#0a0062", fontWeight: "700" }}>&#8377;{paramsData.amount ?? "N/A"}</td>
//                                     </tr>

//                                     <tr>
//                                         <td><b>Paid by</b></td>
//                                         <td style={{ color: "#0a0062", fontWeight: "700" }}>{paramsData.payment_source ?? "Not Found"}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>

//                             {/* ✅ Redirect Message & Button */}
//                             <p className="redirect-text text-center">
//                                 You will be redirected shortly. If not, click
//                                 {paramsData.status === "success" && paramsData.mode !== "" ? (
//                                     <button onClick={() => navigate('/orders-history')} className="redirect-button">here</button>
//                                 ) : (
//                                     <button onClick={() => navigate('/cart')} className="redirect-button">here</button>
//                                 )}
//                             </p>


//                         </div>

//                     }
//                 </div>
//             </div>
//         </></div>;
// }



import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import './PayUFailResponse.css';
import { showErrorMsg, showSuccessMsg } from '../../../utils/ShowMessage';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { setCustomerCart, SetTotalCartItems } from '../../../Store/features/cartSlice/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import axios from 'axios';
import MetaData from '../Layout/MetaData';

export default function PayUFailResponse() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const hasOrderedRef = useRef(false);

    const [paramsData, setParamsData] = useState({});
    const { cartItems } = useSelector((state) => state.cart.cartItems);
    const { isLoading, user } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);

    const [shiproketToekn, setShiprocktToken] = useState(null);
    const [isTokenFetched, setIsTokenFetched] = useState(false);
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null); // Store order details for Shiprocket

    // useEffect(() => {
    //     if (!isTokenFetched) {
    //         const email = "dileepsahu0873@gmail.com";
    //         const password = "Dileep@0873";

    //         async function getTokenFromShiprockt() {
    //             try {
    //                 const response = await axios.post(
    //                     "https://apiv2.shiprocket.in/v1/external/auth/login",
    //                     { email, password }
    //                 );

    //                 const token = response.data.token;
    //                 if (token) {
    //                     setShiprocktToken(token);
    //                     setIsTokenFetched(true);
    //                 } else {
    //                     console.log("No token found in the response");
    //                 }
    //             } catch (error) {
    //                 console.log("Error fetching token:", error);
    //             }
    //         }

    //         getTokenFromShiprockt();
    //     }
    // }, [isTokenFetched]);

    // // ✅ UseEffect to check when token updates
    // useEffect(() => {
    //     if (shiproketToekn) {
    //         console.log("Shiprocket Token Set Successfully:", shiproketToekn);

    //         // If order was placed, create Shiprocket order
    //         if (isOrderPlaced && orderDetails) {
    //             createShiprocketOrder(orderDetails);
    //         }
    //     }
    // }, [shiproketToekn]);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const params = {};
        query.forEach((value, key) => {
            params[key] = value;
        });
        setParamsData(params);

        console.log("Query Parameters:", params.status);

        if (params.status === "success" && params.mode !== "" && !isOrderPlaced && !hasOrderedRef.current) {
            hasOrderedRef.current = true;
            setLoading(true);
            PlaceAndConfirmCustomerOrder({
                amount: params.amount,
                bank_ref_num: params.bank_ref_num,
                mihpayid: params.mihpayid,
                txnid: params.txnid,
                payment_source: params.payment_source || 7
            }).finally(() => {
                setLoading(false);
                setIsOrderPlaced(true);
            });
        } else if (params.status !== "success") {
            showErrorMsg(params.error_Message || "Payment failed. Please try again.");
        }
    }, [location, isOrderPlaced]);

    const PlaceAndConfirmCustomerOrder = async (details) => {
        try {
            const paramSrip = {
                UserID: user._id,
                OrderNote: "",
                totalOrderPrice: details.amount || 0,
                cartJsonData: JSON.stringify(cartItems),
                CouponCode: "",
                PaymentMethod: 7,
                paymentToken: "",
                payPalOrderConfirmJson: "",
                bank_ref_num: details.bank_ref_num || 0,
                mihpayid: details.mihpayid || "",
                txnid: details.txnid || ""
            };

            const response = await axiosInstance.post(Config.END_POINT_LIST["ADD_NEW_ORDER"], paramSrip, { withCredentials: true });

            if (response?.status === 200 && response.data?.ResponseMsg === "Order Placed Successfully") {
                showSuccessMsg("Order Placed Successfully!");

                const orderData = response.data.order;
                const newOrderDetails = {
                    id: orderData._id,
                    customerName: user.name,
                    customerLastName: user.lname,
                    billingAddress: user.address,
                    billingCity: user.CityName,
                    billingPincode: user.PostalCode,
                    billingState: user.StateName,
                    billingCountry: user.CountryName,
                    billingEmail: user.email,
                    billingPhone: user.phone,
                    shippingName: user.name,
                    shippingLastName: user.lname,
                    shippingAddress: user.address,
                    shippingCity: user.CityName,
                    shippingPincode: user.PostalCode,
                    shippingCountry: user.CountryName,
                    shippingState: user.StateName,
                    shippingEmail: user.email,
                    shippingPhone: user.phone,
                    items: cartItems,
                    paymentMethod: "Prepaid",
                    subTotal: details.amount,
                    totalDiscount: 0,
                    length: 10,
                    breadth: 15,
                    height: 20,
                    weight: 2.5
                };

                setOrderDetails(newOrderDetails); // Save order details for Shiprocket
                dispatch(setCustomerCart('[]'));
                dispatch(SetTotalCartItems(0));
                localStorage.setItem("cartItems", "[]");

                // if (shiproketToekn) {
                //     createShiprocketOrder(newOrderDetails);
                // }
            } else {
                showErrorMsg("An error occurred. Please try again!");
            }
        } catch (err) {
            showErrorMsg("An error occurred. Please try again!");
            console.log(err.message);
        }
    };

    const createShiprocketOrder = async (orderDetails) => {
        if (!shiproketToekn) {
            console.log("Shiprocket token not available.");
            return;
        }

        try {
            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${shiproketToekn}`,
            };

            const params = {
                "order_id": `order_${orderDetails.id}`,
                "order_date": new Date().toISOString(),
                "pickup_location": "PARIJAT HANDICRAFT",
                "comment": "Reseller: M/s Goku",
                "billing_customer_name": orderDetails.customerName,
                "billing_last_name": orderDetails.customerLastName,
                "billing_address": orderDetails.billingAddress,
                "billing_city": orderDetails.billingCity,
                "billing_pincode": orderDetails.billingPincode,
                "billing_state": orderDetails.billingState,
                "billing_country": orderDetails.billingCountry,
                "billing_email": orderDetails.billingEmail,
                "billing_phone": orderDetails.billingPhone,
                "shipping_is_billing": true,
                "order_items": orderDetails.items.map(item => ({
                    name: item.ProductName,
                    sku: item.ProductId,
                    units: item.Quantity,
                    selling_price: item.Price || 0,
                })),
                "payment_method": orderDetails.paymentMethod,
                "sub_total": orderDetails.subTotal,
                "total_discount": orderDetails.totalDiscount || 0,
                "length": orderDetails.length || 10,
                "breadth": orderDetails.breadth || 15,
                "height": orderDetails.height || 20,
                "weight": orderDetails.weight || 2.5,
            };

            const response = await axios.post(
                'https://apiv2.shiprocket.in/v1/external/orders/create/adhoc',
                params,
                { headers }
            );

            console.log("Shiprocket Order Response: ", response.data);
        } catch (error) {
            console.error("Error sending order to Shiprocket:", error);
        }
    };

    return loading ? <Loader /> :
        <div>  <>
            <MetaData title={"Payment Details"} />


            <div className="container">
                <div className="row">

                    {paramsData.status === "success" ?
                        <div className="response-container">
                            <div className="response-header">Payment Successful</div>

                            <div className="success-container" >
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle">
                                    <span className="checkmark">✔</span>
                                </div>
                            </div>

                            <div className="text">{paramsData.status === "success" && paramsData.mode !== ""
                                ? "Thank you for your order! Your payment has been processed successfully."
                                : "Unfortunately, your payment could not be processed. Please try again."
                            }</div>
                            <table className="payment-details-table">
                                <tbody>
                                    <tr>
                                        <td><b>Transaction Number</b></td>
                                        <td>
                                            <span style={{ fontWeight: "700" }}>
                                                {paramsData.txnid ? paramsData.txnid : paramsData.mihpayid}
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>Amount Paid</b></td>
                                        <td style={{ color: "#0a0062", fontWeight: "700" }}>&#8377;{paramsData.amount ?? "N/A"}</td>
                                    </tr>

                                    <tr>
                                        <td><b>Paid by</b></td>
                                        <td style={{ color: "#0a0062", fontWeight: "700" }}>{paramsData.payment_source ?? "Not Found"}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* ✅ Redirect Message & Button */}
                            <p className="redirect-text text-center">
                                You will be redirected shortly. If not, click
                                {paramsData.status === "success" && paramsData.mode !== "" ? (
                                    <button onClick={() => navigate('/orders-history')} className="redirect-button">here</button>
                                ) : (
                                    <button onClick={() => navigate('/cart')} className="redirect-button">here</button>
                                )}
                            </p>
                        </div>
                        :
                        <div className="response-container">
                            <div className={`response-header`} style={{ backgroundColor: "#cc312e" }}>Payment Failed</div>

                            <div className="fail-container" >
                                <div className="fail-circle"></div>
                                <div className="fail-circle"></div>
                                <div className="fail-circle"></div>
                                <div className="fail-circle">
                                    <span className="crossmark">✖</span>
                                </div>
                            </div>

                            <div className="text">{paramsData.status === "success" && paramsData.mode !== ""
                                ? "Thank you for your order! Your payment has been processed successfully."
                                : "Unfortunately, your payment could not be processed. Please try again."
                            }</div>
                            <table className="payment-details-table">
                                <tbody>
                                    <tr>
                                        <td><b>Transaction Number</b></td>
                                        <td>
                                            <span style={{ fontWeight: "700" }}>
                                                {paramsData.txnid ? paramsData.txnid : paramsData.mihpayid}
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>Amount Paid</b></td>
                                        <td style={{ color: "#0a0062", fontWeight: "700" }}>&#8377;{paramsData.amount ?? "N/A"}</td>
                                    </tr>

                                    <tr>
                                        <td><b>Paid by</b></td>
                                        <td style={{ color: "#0a0062", fontWeight: "700" }}>{paramsData.payment_source ?? "Not Found"}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* ✅ Redirect Message & Button */}
                            <p className="redirect-text text-center">
                                You will be redirected shortly. If not, click
                                {paramsData.status === "success" && paramsData.mode !== "" ? (
                                    <button onClick={() => navigate('/orders-history')} className="redirect-button">here</button>
                                ) : (
                                    <button onClick={() => navigate('/cart')} className="redirect-button">here</button>
                                )}
                            </p>


                        </div>

                    }
                </div>
            </div>
        </></div>;
}
