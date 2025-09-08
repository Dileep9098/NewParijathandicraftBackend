import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

import "./checkout.css"
import { makePriceRoundToTwoPlaces } from '../../../utils/ConversionHelper';
import { showErrorMsg, showInfoMsg, showSuccessMsg, showWarningMsg } from '../../../utils/ShowMessage';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { error } from 'jquery';
import { Country, State, City } from 'country-state-city';
import { updateUser } from '../../../Store/features/authSlice/authSlice';
import Loader from '../Loader/Loader';
import { setCustomerCart, SetTotalCartItems } from '../../../Store/features/cartSlice/cartSlice';
import axios from 'axios';
import MetaData from '../Layout/MetaData';
import AutoCurrencyPrice from '../../../CurrencyConvetor/AutoCurrencyPrice';
const BASE_URL = import.meta.env.VITE_IMG_URL;

const API_URL = import.meta.env.VITE_API_BASE_URL;


export default function Checkout() {

    // const { cartItems } = useSelector((state) => state.cart.cartItems);
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];


    const { isLoading, user } = useSelector((state) => state.auth);
    const { currency, rate } = useSelector((state) => state.currency);

    const [checkPaymentMethod, setCheckPaymentMethod] = useState(null);

    const [OrderNote, setOrderNote] = useState('');
    const [PaymentMethod, setPaymentMethod] = useState(import.meta.env.VITE_APP_STRIPE_PAYMENT_METHOD ?? 5);
    const [showCardSectionStripe, setshowCardSectionStripe] = useState(false);
    const [showCardSectionPaypal, setshowCardSectionPaypal] = useState(false);
    const [CartSubTotal, setCartSubTotal] = useState(0);
    const [ShippingSubTotal, setShippingSubTotal] = useState(0);
    const [InternationalShippingSubTotal, setInsternationalShippingSubTotal] = useState(0);

    const [OrderTotal, setOrderTotal] = useState(0);
    const [TaxTotal, setTaxTotal] = useState(0)

    const [OrderTotalAfterDiscount, setOrderTotalAfterDiscount] = useState(0);
    const [cartProductsData, setCartProductsData] = useState(0);
    const [CouponCode, setCouponCode] = useState('');
    const [afterApplyCouponDiscountValue, setafterApplyCouponDiscountValue] = useState('');
    const [afterApplyCouponDiscountAmount, setafterApplyCouponDiscountAmount] = useState('');
    const [afterApplyCouponProductName, setafterApplyCouponProductName] = useState('');
    const [IsCouponCodeApplied, setIsCouponCodeApplied] = useState(false);
    const [IsAlreadyDiscountApplied, setIsAlreadyDiscountApplied] = useState(false);
    const [CouponCodeCssClass, setCouponCodeCssClass] = useState('cart-coupon-code');
    const [allpaymentMethod, setAllpaymentMethod] = useState([])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // console.log("PAyment Method", PaymentMethod)





    const [name, setName] = useState('');
    const [lname, setLastName] = useState('');
    const [email, setEmailAddress] = useState('');
    const [phone, setMobileNo] = useState('');
    const [address, setAddressLineOne] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');
    const [PostalCode, setPostalCode] = useState('');
    const [loading, setLoading] = useState(false);


    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);

    const [countryrid, setCountryId] = useState(null); // State to store country ID0
    const [staterid, setStateId] = useState(null);
    const [cnt, setCnt] = useState(null);
    const [cityrid, setCityrId] = useState(null); // State to store city ID

    const [CityName, setCityByPincode] = useState('')
    const [StateName, setStateByPincode] = useState('')
    const [CountryName, setCountryName] = useState()

    const [shiproketToekn, setShiprocktToken] = useState()
    const [orderData, setOrderData] = useState(null);
    const [isTokenFetched, setIsTokenFetched] = useState(false);



    useEffect(() => {
        // debugger
        if (!isTokenFetched) {
            const email = "dileepsahu0873@gmail.com";
            const password = "Dileep@0873";

            async function getTokenFromShiprockt() {
                try {
                    const response = await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', { email, password });
                    console.log("Shiprocket response: ", response.data);
                    setShiprocktToken(response.data.token);
                    setIsTokenFetched(true); // Once token is fetched, update state
                } catch (error) {
                    console.log("Error fetching token:", error);
                }
            }

            getTokenFromShiprockt();
        }
    }, [isTokenFetched]);


    useEffect(() => {
        const countries = Country.getAllCountries();
        setCountryList(countries);
        console.log(countries)
    }, []);


    const handleCountryChange = async (event) => {
        const countryCode = event.target.value;
        setSelectedCountry(countryCode);

        setSelectedState('');
        const states = State.getStatesOfCountry(countryCode);
        setStateList(states);
        const countryId = countryList.findIndex(country => country.isoCode === countryCode) + 1;
        setCountryId(countryId);

        const selectedCountry = countryList.find(country => country.isoCode === countryCode);
        const countryName = selectedCountry ? selectedCountry.name : '';

        setCountryName(countryName);

        console.log("Selected Country Code:", countryCode);
        console.log("Country ID:", countryId);
        console.log("Country Name:", countryName);  // This will log the country name
    };


    const handleStateChange = (event) => {
        const stateCode = event.target.value;
        setSelectedState(stateCode);
        const cities = City.getCitiesOfState(selectedCountry, stateCode);
        setCityList(cities);

        const stateId = stateList.findIndex(state => state.isoCode === stateCode) + 1;
        setStateId(stateId);
        console.log("Selected State Code:", stateCode);
        console.log("State ID:", stateId);
    };

    const handleCityChange = (event) => {
        const cityName = event.target.value;
        setCityrId(cityList.findIndex(city => city.name === cityName) + 1);
        console.log("Selected City Name:", cityName);
        console.log("City ID:", cityrid);
    };


    const [errorMsg, setErrorMsg] = useState('');

    const showErrorMsg = (message) => {
        setErrorMsg(message);
    };

    useEffect(() => {
        if (selectedCountry && PostalCode) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`https://api.zippopotam.us/${selectedCountry}/${PostalCode}`);
                    console.log("Response:", response);

                    if (response.data && response.data.places && response.data.places.length > 0) {
                        setCityByPincode(response.data.places[0]['place name']);
                        setStateByPincode(response.data.places[0]['state']);
                    } else {
                        showErrorMsg("Pincode does not match the country");
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    showErrorMsg("Pincode Error or not found");
                }
            };

            fetchData();
        } else {
            showErrorMsg("Pincode does not match the country");
        }
    }, [selectedCountry, PostalCode]);



    const handleSubmit = (e) => {
        e.preventDefault();

        const myform = new FormData


        myform.append("name", name)
        myform.append("lname", lname)
        myform.append("email", email)
        myform.append("phone", phone)
        myform.append("address", address)
        myform.append("shippingAddress", shippingAddress)
        myform.append("PostalCode", PostalCode)
        myform.append("CountryName", CountryName)
        myform.append("CityName", CityName)
        myform.append("StateName", StateName)
        myform.append("file", file)

        myform.forEach((value, key) => {
            console.log(`${key}: ${value}`);
        });

        dispatch(updateUser(myform)).then((data) => {
            console.log(data.payload)
            if (data.payload.success) {
                showSuccessMsg("Profile update Succefully !!")
                navigate("/")

            }
        })


    }


    useEffect(() => {

        if (user) {
            setName(user.name)
            setLastName(user.lname)
            setAddressLineOne(user.address)
            setShippingAddress(user.shippingAddress)
            setMobileNo(user.phone)
            setCityByPincode(user.CityName)
            setEmailAddress(user.email)
            setPostalCode(user.PostalCode)
            setStateByPincode(user.StateName)
            setCountryName(user.CountryName)

        }
    }, [])





    const GetCouponCodeInfo = async () => {
        // debugger
        if (IsCouponCodeApplied) {
            showInfoMsg('Coupon code is already applied!');
            return false;
        }

        const paramCoupon = {
            CouponCode: CouponCode,
            cartJsonData: cartItems,

        };

        try {
            const couponResponse = await axiosInstance.post(Config.END_POINT_LIST["GET_COUPON_CODE_DISCOUNT"], paramCoupon, { withCredentials: true });
            console.log(couponResponse);

            if (couponResponse && couponResponse.data) {
                let couponData = couponResponse.data.products[0];  // Accessing the first product in the array
                console.log(couponData);
                debugger
                // setafterApplyCouponData(couponResponse.data)

                if (couponData && couponData.discountAmount && couponData.discountAmount > 0) {
                    setOrderTotalAfterDiscount(OrderTotal - couponData.discountAmount);
                    setIsCouponCodeApplied(true);
                    setafterApplyCouponDiscountAmount(parseInt(couponData.discountAmount))
                    setafterApplyCouponDiscountValue(couponData.DiscountProductsMappings[0]?.DiscountValue)
                    setafterApplyCouponProductName(couponData.ProductName)

                } else {
                    showErrorMsg('Invalid coupon code!');
                }
            } else {
                // In case no data is returned from the API
                showErrorMsg('No products found with the given coupon code.');
            }
        } catch (error) {
            console.error("Error fetching coupon data:", error);
            if (error.response && error.response.data && error.response.data.message) {
                // Display the error message returned by the API
                showErrorMsg(error.response.data.message);
            } else {
                // Display a generic error message if no message is returned from the API
                showErrorMsg('An error occurred while applying the coupon code.');
            }
        }




        // if (couponResponse != null && couponResponse.data != null) {

        //     let copounData = JSON.parse(couponResponse.data.data);
        //     console.log(copounData);
        //     if (copounData != undefined && copounData.DiscountValueAfterCouponAppliedWithQuantity != undefined && copounData.DiscountValueAfterCouponAppliedWithQuantity > 0) {
        //         setOrderTotalAfterDiscount((OrderTotal - copounData.DiscountValueAfterCouponAppliedWithQuantity ?? 0));
        //         setIsCouponCodeApplied(true);
        //     } else {
        //         showErrorMsg('Invalid coupon code!');
        //     }

        // }

    }


    // const GetCouponCodeInfo = async () => {
    //     if (IsCouponCodeApplied) {
    //         showInfoMsg('Coupon code is already applied!');
    //         return false;
    //     }

    //     const paramCoupon = {
    //         CouponCode: CouponCode,
    //         cartJsonData: cartItems,
    //     };

    //     try {
    //         const couponResponse = await axiosInstance.post(Config.END_POINT_LIST["GET_COUPON_CODE_DISCOUNT"], paramCoupon, { withCredentials: true });

    //         if (couponResponse && couponResponse.data && couponResponse.data.products && couponResponse.data.products.length > 0) {
    //             let couponData = couponResponse.data.products[0]; // Accessing the first product in the array

    //             if (couponData && couponData.discountAmount && couponData.discountAmount > 0) {
    //                 const discountAmount = parseInt(couponData.discountAmount);
    //                 const discountValue = couponData.DiscountProductsMappings[0]?.DiscountValue;
    //                 const productName = couponData.ProductName;
    //                 // debugger
    //                 // Update state with the discount values
    //                 setOrderTotalAfterDiscount(OrderTotal - discountAmount);
    //                 setIsCouponCodeApplied(true);
    //                 setafterApplyCouponDiscountAmount(discountAmount);
    //                 setafterApplyCouponDiscountValue(discountValue);
    //                 setafterApplyCouponProductName(productName);
    //                 // setTimeout(()=>{
    //                 //     setIsCouponCodeApplied(false);

    //                 // },1500)
    //             } else {
    //                 showErrorMsg('Invalid coupon code!');
    //             }
    //         } else {
    //             showErrorMsg('No products found with the given coupon code.');
    //         }
    //     } catch (error) {
    //         console.error("Error fetching coupon data:", error);
    //         if (error.response && error.response.data && error.response.data.message) {
    //             showErrorMsg(error.response.data.message);
    //         } else {
    //             showErrorMsg('An error occurred while applying the coupon code.');
    //         }
    //     }
    // };


    // const calculateItemSubTotal = (item) => {
    //     return (item.Price) * (item.Quantity ?? 1);
    // };

    // const applyShippingCharge = (item, shippingChargeApplied) => {
    //     // debugger
    //     if (!shippingChargeApplied && item.ShippingCharges) {
    //         return { charge: parseInt(item.ShippingCharges), applied: true };
    //     }
    //     return { charge: 0, applied: shippingChargeApplied };
    // };


    // useEffect(() => {

    //     const setCartTotalSubTotalShippingTotalAfterUpdate = () => {
    //         if (!cartItems || cartItems.length === 0) return;

    //         let CartSubTotalDummy = 0;
    //         let ShippingSubTotalDummy = 0;
    //         let OrderTotalDummy = 0;

    //         let shippingChargeApplied = false;

    //         cartItems.forEach(item => {
    //             const itemSubTotal = calculateItemSubTotal(item);
    //             console.log('Item SubTotal:', itemSubTotal);
    //             CartSubTotalDummy += itemSubTotal;

    //             const shipping = applyShippingCharge(item, shippingChargeApplied);
    //             console.log('Shipping Charge:', shipping.charge);
    //             ShippingSubTotalDummy = shipping.charge;
    //             shippingChargeApplied = shipping.applied;
    //         });

    //         OrderTotalDummy = CartSubTotalDummy;

    //         console.log('Cart SubTotal:', CartSubTotalDummy);
    //         console.log('Shipping SubTotal:', ShippingSubTotalDummy);
    //         console.log('Order Total:', OrderTotalDummy);
    //         // debugger
    //         // Apply shipping charge of ₹100 only if the OrderTotal is less than ₹500

    //         if (OrderTotalDummy < 500) {
    //             ShippingSubTotalDummy = ShippingSubTotalDummy > 0 ? ShippingSubTotalDummy : 100; // Add ₹100 shipping charge
    //             OrderTotalDummy += ShippingSubTotalDummy; // Add ₹100 to the OrderTotalDummy
    //             console.log('Order Total after adding shipping charge (if below ₹500):', OrderTotalDummy);
    //         }

    //         // Ensure the totals are correctly rounded and updated
    //         setCartSubTotal(makePriceRoundToTwoPlaces(CartSubTotalDummy));
    //         setShippingSubTotal(makePriceRoundToTwoPlaces(ShippingSubTotalDummy));
    //         setOrderTotal(makePriceRoundToTwoPlaces(OrderTotalDummy));
    //     };
    //     setCartTotalSubTotalShippingTotalAfterUpdate()

    // }, [])


    const calculateItemSubTotal = (item) => {
        return (item.Price) * (item.Quantity ?? 1);
    };

    const calculateItemTaxTotal = (item) => {
        return ((item.Price * ((item.Tax ? item.Tax : 0) / 100)) * (item.Quantity ?? 1)); // Tax % calculate
    };

    const applyShippingCharge = (item, shippingChargeApplied) => {
        if (!shippingChargeApplied && item.ShippingCharges) {
            return { charge: parseInt(item.ShippingCharges), applied: true };
        }
        return { charge: 0, applied: shippingChargeApplied };
    };

    const setCartTotalSubTotalShippingTotalAfterUpdate = () => {
        if (!cartItems || cartItems.length === 0) return;

        let CartSubTotalDummy = 0;
        let ShippingSubTotalDummy = 0;
        let OrderTotalDummy = 0;
        let InternationalShippingSubTotalDummy = 0;

        let TaxTotalDummy = 0;

        let shippingChargeApplied = false;

        cartItems.forEach(item => {
            const itemSubTotal = calculateItemSubTotal(item);
            const itemTaxTotal = calculateItemTaxTotal(item);

            console.log('Item SubTotal:', itemSubTotal);
            console.log('Item Tax Total:', itemTaxTotal);

            CartSubTotalDummy += itemSubTotal;
            TaxTotalDummy += itemTaxTotal || 0; // ✅ Tax ko add kar diya
            InternationalShippingSubTotalDummy += item?.InternationCharge || 0;

            const shipping = applyShippingCharge(item, shippingChargeApplied);
            console.log('Shipping Charge:', shipping.charge);
            ShippingSubTotalDummy = shipping.charge;
            shippingChargeApplied = shipping.applied;
        });

        // Order total me ab subtotal + tax bhi include hoga
        OrderTotalDummy = CartSubTotalDummy + TaxTotalDummy + (currency === "USD" ? InternationalShippingSubTotalDummy : 0);

        console.log('Cart SubTotal:', CartSubTotalDummy);
        console.log('Tax SubTotal:', TaxTotalDummy);
        console.log('Shipping SubTotal:', ShippingSubTotalDummy);
        console.log('Order Total:', OrderTotalDummy);

        // Agar Order Total ₹500 se kam hai to ₹100 shipping charge add hoga
        if (OrderTotalDummy < 500) {
            ShippingSubTotalDummy = ShippingSubTotalDummy > 0 ? ShippingSubTotalDummy : 100; // Add ₹100 shipping charge
            OrderTotalDummy += ShippingSubTotalDummy; // Shipping charge ko Order Total me add karo
            console.log('Order Total after adding shipping charge (if below ₹500):', OrderTotalDummy);
        }

        // Ensure the totals are correctly rounded and updated
        setCartSubTotal(makePriceRoundToTwoPlaces(CartSubTotalDummy));
        setTaxTotal(makePriceRoundToTwoPlaces(TaxTotalDummy)); // ✅ Tax total state me set kar diya
        setShippingSubTotal(makePriceRoundToTwoPlaces(ShippingSubTotalDummy));
        setInsternationalShippingSubTotal(makePriceRoundToTwoPlaces(InternationalShippingSubTotalDummy));
        setOrderTotal(makePriceRoundToTwoPlaces(OrderTotalDummy));
    };

    useEffect(() => {
        setCartTotalSubTotalShippingTotalAfterUpdate();
    }, [cartItems]);

    useEffect(() => {

        const fatchData = async () => {
            try {
                //   debugger
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PAYMENTSMETHOD"], { withCredentials: true })
                console.log("Payment MEthode", response)

                if (response.data.success) {
                    setAllpaymentMethod(response.data.paymentMethod)
                    //   dispatch(getAllSubCategory())
                }
                else {
                    showErrorMsg(response.data.message)
                }
            } catch (error) {
                showErrorMsg(error.response.data.message);

            }
        }

        fatchData();

    }, [dispatch]);
    const activePaymentMethod = Array.isArray(allpaymentMethod) ? allpaymentMethod.filter(paymentMethod => paymentMethod.IsActive === "true") : [];
    console.log("All paymentMethod me kya", activePaymentMethod)




    //----------------- Test -------------- 

    // debugger

    const handleCheckoutOnSubmit = async (e) => {

        debugger

        try {
            e.preventDefault();
            setshowCardSectionStripe(false);
            setshowCardSectionPaypal(false);
            console.log(PaymentMethod);

            //   debugger
            if (phone === "undefined" || !name || !lname || !email || !address || !shippingAddress || !PostalCode || !CountryName || !CityName || !StateName || !phone) {
                showWarningMsg("Please fill all the fields");
                return;
            }

            const myform = {
                name: name,
                lname: lname,
                email: email,
                address: address,
                shippingAddress: shippingAddress,
                PostalCode: PostalCode,
                CountryName: CountryName,
                CityName: CityName,
                StateName: StateName,
                phone: phone,
            }


            const updaetUser = await axiosInstance.put(Config.END_POINT_LIST["UPDATE_USER_DETAILS"], myform, { withCredentials: true })
            console.log(updaetUser)



            if (PaymentMethod === import.meta.env.VITE_APP_STRIPE_PAYMENT_METHOD) {
                setshowCardSectionStripe(true);
            }
            else if (PaymentMethod === import.meta.env.VITE_APP_PAYPAL_PAYMENT_METHOD) {
                setshowCardSectionPaypal(true);

            }
            else if (PaymentMethod == import.meta.env.VITE_APP_CASH_ON_DELIVERY_PAYMENT_METHOD) {
                // debugger
                let isYes = window.confirm("Do you really want to place the order?");
                if (isYes) {
                    setLoading(true)
                    await PlaceAndConfirmCustomerOrder(null);
                    setLoading(false)
                }
            }

            //  --------------  Razorpay payment method  ----------------------------

                debugger
            else if (PaymentMethod === import.meta.env.VITE_APP_RAZORPAY_PAYMENT_METHOD) {
                const isYes = window.confirm("Do you really want to place the order?");
                if (!isYes) return;

                setLoading(true);

                try {


                    let rawAmount = parseFloat(
                        OrderTotalAfterDiscount && OrderTotalAfterDiscount > 0
                            ? OrderTotalAfterDiscount
                            : OrderTotal
                    );

                    let formattedAmount = 0;

                    if (currency === "INR") {
                        formattedAmount = Math.round(rawAmount * 100);
                    } else if (currency === "USD") {
                        const usdAmount = rawAmount * rate;
                        formattedAmount = Math.round(usdAmount * 100);
                    }

                    console.log("Final Amount to Razorpay:", formattedAmount, currency);



                    if (isNaN(formattedAmount) || formattedAmount <= 0) {
                        alert("Invalid amount. Please check your order total.");
                        return;
                    }

                    // const finallyAmount=currency==="USD"?<AutoCurrencyPrice Price={formattedAmount}/>:formattedAmount

                    // Create product info by combining product names and quantities
                    let productDetails = cartItems.map(product => `${product.ProductName} - Quantity: ${product.Quantity}`).join(', ');


                    // const { amount, id: order_id, currency } = response.data;

                    // 👇 Step 2: Razorpay options set karo

                    const { data } = await axiosInstance.post("/api/v1/create-order-razorpay", {
                        amount: formattedAmount,
                        currency,
                    });
                    console.log("data", data)

                    // const productNames = productDetails.map(p => p.ProductName).join(" - ");


                    const options = {
                        key: import.meta.env.VITE_APP_RAZORPAY_KEY, // public Razorpay key
                        amount: data.order.amount,
                        currency: data.order.currency,
                        name: user.name,
                        description: "Order Payment",
                        order_id: data.order.id,



                        handler: async function (response) {
                            // debugger
                            // Step 3: Verify payment on backend
                            const res = await axiosInstance.post("/api/v1/payment/verify", {
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_signature: response.razorpay_signature,
                            });

                            if (res.data.success) {
                                //  Payment verified, place the order
                                await PlaceAndConfirmCustomerOrder(response.razorpay_payment_id);
                                alert("Payment Successful and Order Placed!");
                            } else {
                                alert("Payment verification failed.");
                            }
                        },
                        prefill: {
                            name: user.name,
                            email: user.email,
                            contact: user.phone,

                        },
                        notes: {
                            Address: user.address,
                            City: user.CityName,
                            products: productDetails,   // 👈 yaha daal
                        },
                        theme: {
                            color: "#3399cc",
                        },
                    };

                    const rzp = new window.Razorpay(options);
                    rzp.open();

                } catch (error) {
                    console.error("Razorpay error:", error);
                    alert("Payment failed. Please try again.");
                } finally {
                    setLoading(false);
                }
            }

            else if (PaymentMethod == import.meta.env.VITE_APP_PAYUMONEY_PAYMENT_METHOD) {

                // 👉👉👉 All Working well 

                // try {
                //     const formattedAmount = parseFloat(OrderTotalAfterDiscount && OrderTotalAfterDiscount > 0 ? OrderTotalAfterDiscount : OrderTotal).toFixed(2);
                //     if (isNaN(formattedAmount) || formattedAmount <= 0) {
                //         alert("Invalid amount. Please check your order total.");
                //         return;
                //     }

                //     const productNames = cartItems.map(product => product.ProductName).join(', ');
                //     const Quantity = cartItems.map(qty => qty.Quantity).join(', ');

                //     // Send payment request to backend
                //     const response = await axiosInstance.post(Config.END_POINT_LIST["PAY_U_MONEY_PAYMNETS"], {
                //         amount: formattedAmount,
                //         email: user.email,
                //         phone: user.phone,
                //         productinfo: productNames,
                //         firstname: user.name,
                //         city: user.CityName,
                //         state: user.StateName,
                //         address1: user.address,
                //         udf1: cartItems,
                //         udf2: Quantity,
                //     });

                //     if (response.data && response.data.txnid && response.data.hash && response.data.merchantKey) {
                //         const { txnid, hash, merchantKey, surl, furl } = response.data;

                //         const paymentUrl = 'https://secure.payu.in/_payment'; // Live Environment URL

                //         // ✅ Create and submit the form dynamically
                //         const form = document.createElement('form');
                //         form.method = 'POST';
                //         form.action = paymentUrl;

                //         const params = {
                //             key: merchantKey,
                //             txnid,
                //             amount: formattedAmount,
                //             email: user.email,
                //             phone: user.phone,
                //             productinfo: productNames,
                //             firstname: user.name,
                //             surl: `http://localhost:5000/api/v1/pay-u-money-payment-success`,
                //             furl: `http://localhost:5000/api/v1/pay-u-money-payment-fail`,
                //             hash,
                //             city: user.CityName,
                //             state: user.StateName,
                //             address1: user.address,
                //         };

                //         Object.keys(params).forEach(key => {
                //             const hiddenField = document.createElement('input');
                //             hiddenField.type = 'hidden';
                //             hiddenField.name = key;
                //             hiddenField.value = params[key];
                //             form.appendChild(hiddenField);
                //         });

                //         document.body.appendChild(form);
                //         form.submit();
                //     } else {
                //         console.error("Payment API response error", response.data);
                //         alert("Failed to initiate payment. Please try again.");
                //     }
                // } catch (error) {
                //     console.error("Error processing payment:", error);
                //     alert("Payment processing error. Please try again.");
                // }


                try {
                    // debugger
                    // Format the total amount after discount or use the original total.
                    const formattedAmount = parseFloat(OrderTotalAfterDiscount && OrderTotalAfterDiscount > 0 ? OrderTotalAfterDiscount : OrderTotal).toFixed(2);

                    if (isNaN(formattedAmount) || formattedAmount <= 0) {
                        alert("Invalid amount. Please check your order total.");
                        return;
                    }

                    // Create product info by combining product names and quantities
                    let productDetails = cartItems.map(product => `${product.ProductName.slice(0, 30)} - Quantity: ${product.Quantity}`).join(', ');


                    // Check the content of productDetails to ensure it's correct
                    console.log('Product Details:', productDetails);



                    // Send payment request to the backend
                    const response = await axiosInstance.post(Config.END_POINT_LIST["PAY_U_MONEY_PAYMNETS"], {
                        amount: formattedAmount,
                        email: user.email,
                        phone: user.phone,
                        productinfo: productDetails,
                        firstname: user.name,
                        city: user.CityName,
                        state: user.StateName,
                        address1: user.address,
                        udf1: cartItems,
                        udf2: productDetails,

                    });

                    if (response.data && response.data.txnid && response.data.hash && response.data.merchantKey) {
                        const { txnid, hash, merchantKey, surl, furl } = response.data;

                        const paymentUrl = 'https://secure.payu.in/_payment';

                        // Create and submit the form dynamically
                        const form = document.createElement('form');
                        form.method = 'POST';
                        form.action = paymentUrl;

                        const params = {
                            key: merchantKey,
                            txnid,
                            amount: formattedAmount,
                            email: user.email,
                            phone: user.phone,
                            productinfo: productDetails,
                            firstname: user.name,
                            surl: `${API_URL}api/v1/pay-u-money-payment-success`,
                            furl: `${API_URL}api/v1/pay-u-money-payment-fail`,
                            hash,
                            city: user.CityName,
                            state: user.StateName,
                            address1: user.address,

                        };

                        Object.keys(params).forEach(key => {
                            const hiddenField = document.createElement('input');
                            hiddenField.type = 'hidden';
                            hiddenField.name = key;
                            hiddenField.value = params[key];
                            form.appendChild(hiddenField);
                        });

                        document.body.appendChild(form);
                        form.submit();
                    } else {
                        console.error("Payment API response error", response.data);
                        alert("Failed to initiate payment. Please try again.");
                    }
                } catch (error) {
                    console.error("Error processing payment:", error);
                    alert("Payment processing error. Please try again.");
                }



            }


        } catch (err) {
            showErrorMsg("An error occurred. Please try again!");
            console.log(err.message);
            if (PaymentMethod === import.meta.env.VITE_APP_STRIPE_PAYMENT_METHOD) {
                HandleStripCardModal();
                HandlePaypalCardModal();
            }
            setLoading(false)
        }
    };

    const PlaceAndConfirmCustomerOrder = async (StripPaymentToken, payPalOrderConfirmJson = "{}") => {
        // debugger
        try {
            const headersStrip = {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            };

            const paramSrip = {
                UserID: user._id,
                OrderNote: OrderNote,
                totalOrderPrice: OrderTotalAfterDiscount != undefined && OrderTotalAfterDiscount > 0 ? OrderTotalAfterDiscount : OrderTotal,
                cartJsonData: JSON.stringify(cartItems),
                CouponCode: IsCouponCodeApplied ? CouponCode : "",
                PaymentMethod: PaymentMethod,
                paymentToken: StripPaymentToken ?? "",
                payPalOrderConfirmJson: payPalOrderConfirmJson ?? "",
                bank_ref_num: StripPaymentToken

            };

            // const stripServerResponse = await MakeApiCallAsync(Config.END_POINT_NAMES['POST_CUSTOMER_ORDER'], Config['COMMON_CONTROLLER_SUB_URL'], paramSrip, headersStrip, "POST", true);
            const stripServerResponse = await axiosInstance.post(Config.END_POINT_LIST["ADD_NEW_ORDER"], paramSrip, { withCredentials: true })
            console.log("Payment MEthode", stripServerResponse)
            // debugger

            if (stripServerResponse != null && stripServerResponse.data != null && stripServerResponse.status === 200) {
                let stripServerResponseDetail = stripServerResponse.data ? stripServerResponse.data : "[]";
                console.log("Order Response", stripServerResponseDetail)

                if (stripServerResponseDetail && stripServerResponseDetail.ResponseMsg === "Order Placed Successfully") {
                    showSuccessMsg("Order Placed Successfully!");

                    setTimeout(() => {
                        // debugger
                        // Send Order to Shiprocket
                        // createShiprocketOrder({
                        //     id: stripServerResponseDetail.order._id,
                        //     customerName: user.name,
                        //     customerLastName: user.lname,
                        //     billingAddress: user.address,
                        //     billingCity: user.CityName,
                        //     billingPincode: user.PostalCode,
                        //     billingState: user.StateName,
                        //     billingCountry: user.CountryName,
                        //     billingEmail: user.email,
                        //     billingPhone: user.phone,
                        //     shippingName: user.name,
                        //     shippingLastName: user.lname,
                        //     shippingAddress: user.address,
                        //     shippingCity: user.CityName,
                        //     shippingPincode: user.PostalCode,
                        //     shippingCountry: user.CountryName,
                        //     shippingState: user.StateName,
                        //     shippingEmail: user.email,
                        //     shippingPhone: user.phone,
                        //     items: cartItems,
                        //     paymentMethod: PaymentMethod,
                        //     subTotal: OrderTotalAfterDiscount != undefined && OrderTotalAfterDiscount > 0 ? OrderTotalAfterDiscount : OrderTotal,
                        //     totalDiscount: IsCouponCodeApplied ? afterApplyCouponDiscountAmount : 0, // Adjust this if necessary
                        //     length: 10,
                        //     breadth: 15,
                        //     height: 20,
                        //     weight: 2.5,
                        // });
                        navigate('/');
                        dispatch(setCustomerCart('[]'));
                        dispatch(SetTotalCartItems(0));
                        localStorage.setItem("cartItems", "[]");
                    }, 1000);

                } else {
                    showErrorMsg("An error occurred. Please try again!");
                }
            } else {
                showErrorMsg("An error occurred. Please try again!");
            }

            if (PaymentMethod === import.meta.env.VITE_APP_STRIPE_PAYMENT_METHOD) {
                HandleStripCardModal();
            } else if (PaymentMethod === import.meta.env.VITE_APP_PAYPAL_PAYMENT_METHOD) {
                HandlePaypalCardModal();
            }
        } catch (err) {
            showErrorMsg("An error occurred. Please try again!");
            console.log(err.message);
            if (PaymentMethod === import.meta.env.VITE_APP_STRIPE_PAYMENT_METHOD) {
                HandleStripCardModal();
            }
            setLoading(false);
        }
    };



    const HandleStripCardModal = () => {
        setshowCardSectionStripe(!showCardSectionStripe);
    }

    const HandlePaypalCardModal = () => {
        setshowCardSectionPaypal(!showCardSectionPaypal);
    }

    // creates a paypal order
    const createOrder = (data, actions) => {
        return actions.order
            .create({
                purchase_units: [
                    {
                        description: "Sunflower",
                        amount: {
                            //currency_code: "USD",
                            currency_code: GetDefaultCurrencyCode(),
                            value: OrderTotalAfterDiscount != undefined && OrderTotalAfterDiscount > 0 ? OrderTotalAfterDiscount : OrderTotal,
                        },
                    },
                ],
                // not needed if a shipping address is actually needed
                application_context: {
                    shipping_preference: "NO_SHIPPING",
                },
            })
            .then((paypalOrderID) => {
                setPaypalOrderID(paypalOrderID);
                return paypalOrderID;
            });
    };

    // check paypal Approval
    const onApprove = (data, actions) => {

        return actions.order.capture().then(function (details) {
            const { payer } = details;
            //setSuccess(true); replace with your own

            //-- Set paypal json response if approve
            let JsonDetail = JSON.stringify(details);

            //--start loader
            dispatch(rootAction.commonAction.setLoading(true));

            setTimeout(() => {
                PlaceAndConfirmCustomerOrder(null, JsonDetail);
            }, 500);

            //--stop loader
            setTimeout(() => {
                dispatch(rootAction.commonAction.setLoading(false));
            }, LOADER_DURATION);


            HandlePaypalCardModal();
        });
    };

    if (loading) {
        <Loader />

    }

    //  --------------------------- ~-: Ship All Checkout Product On Shiprockt and Generate Token :-~-------------------------------------



    // useEffect(() => {

    //         const email = "dileepsahu0873@gmail.com";
    //         const password = "Dileep@0873";

    //         async function getTokenFromShiprockt() {
    //             try {
    //                 const response = await axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', { email, password });
    //                 console.log("Shiprocket response: ", response.data);
    //                 setShiprocktToken(response.data.token);  
    //                 setIsTokenFetched(true);  
    //             } catch (error) {
    //                 console.log("Error fetching token:", error);
    //             }
    //         }

    //         if (!isTokenFetched) {
    //             getTokenFromShiprockt();
    //         }
    //     }, [isTokenFetched]);


    //     useEffect(() => {
    //         if (shiproketToekn && cartItems.length > 0) {
    //             async function sendOrderForShipRockt() {
    //                 try {
    //                     const headers = {
    //                         "Content-Type": "application/json",
    //                         "Authorization": `Bearer ${shiproketToekn}`,
    //                     };

    //                     console.log("Cart Products Data:", cartItems);
    //                     const orderPromises = cartItems.map(async (item, index) => {
    //                         const orderItems = [{
    //                             name: item.ProductName || "Default Product Name", 
    //                             sku: item.ProductId || "DEFAULT_SKU",           
    //                             units: item.Quantity || 1,                         
    //                             selling_price: item.OrderTotalAfterDiscount || 0,  
    //                             discount: item.DiscountedPrice || "",              
    //                             tax: item.tax || "",                               
    //                             hsn: item.hsn || 0,                                
    //                         }];

    //                         console.log(`Mapped Order Items for ${item.ProductName}:`, orderItems); 

    //                         // Prepare the params for Shiprocket order API
    //                         const params = {
    //                             "order_id": `order_${index + 888}`, 
    //                             "order_date": "2024-11-25 17:30",
    //                             "pickup_location": "Shop1",
    //                             "channel_id": "",
    //                             "comment": "Reseller: M/s Goku",
    //                             "billing_customer_name": "Naruto",
    //                             "billing_last_name": "Uzumaki",
    //                             "billing_address": "House 221B, Leaf Village",
    //                             "billing_address_2": "Near Hokage House",
    //                             "billing_city": "New Delhi",
    //                             "billing_pincode": "110002",
    //                             "billing_state": "Delhi",
    //                             "billing_country": "India",
    //                             "billing_email": "naruto@uzumaki.com",
    //                             "billing_phone": "9876500000",
    //                             "shipping_is_billing": true,
    //                             "shipping_customer_name": "",
    //                             "shipping_last_name": "",
    //                             "shipping_address": "",
    //                             "shipping_address_2": "",
    //                             "shipping_city": "",
    //                             "shipping_pincode": "",
    //                             "shipping_country": "",
    //                             "shipping_state": "",
    //                             "shipping_email": "",
    //                             "shipping_phone": "",
    //                             "order_items": orderItems,
    //                             "payment_method": "Prepaid",
    //                             "shipping_charges": 0,
    //                             "giftwrap_charges": 0,
    //                             "transaction_charges": 0,
    //                             "total_discount": 0,
    //                             "sub_total": item.OrderTotalAfterDiscount || 111111, 
    //                             "length": 10,
    //                             "breadth": 15,
    //                             "height": 20,
    //                             "weight": 2.5
    //                         };

    //                         try {
    //                             const response = await axios.post('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', params, { headers });
    //                             console.log("Shiprocket response for item:", response.data);
    //                         } catch (error) {
    //                             console.log("Error while sending order to Shiprocket for item:", item.ProductName, error);
    //                             if (error.response) {
    //                                 console.log("Response Data:", error.response.data); 
    //                             }
    //                         }
    //                     });

    //                     await Promise.all(orderPromises);
    //                     console.log("All orders have been processed.");

    //                 } catch (error) {
    //                     console.log("Error while processing the orders:", error);
    //                     if (error.response) {
    //                         console.log("Response Data:", error.response.data); 
    //                     }
    //                 }
    //             }

    //             sendOrderForShipRockt(); 

    //         }
    //     }, [shiproketToekn]);




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

            // Ensure all required fields are provided
            const params = {
                "order_id": `order_${orderDetails.id}`,
                "order_date": new Date().toISOString(),
                "pickup_location": "PARIJAT HANDICRAFT", // Adjust based on your needs
                "comment": "Reseller: M/s Goku", // Adjust based on your business logic
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
                "shipping_customer_name": orderDetails.shippingName,
                "shipping_last_name": orderDetails.shippingLastName,
                "shipping_address": orderDetails.shippingAddress,
                "shipping_city": orderDetails.shippingCity,
                "shipping_pincode": orderDetails.shippingPincode,
                "shipping_country": orderDetails.shippingCountry,
                "shipping_state": orderDetails.shippingState,
                "shipping_email": orderDetails.shippingEmail,
                "shipping_phone": orderDetails.shippingPhone,
                "order_items": orderDetails.items.map(item => ({
                    name: item.ProductName,
                    sku: item.ProductId,
                    units: item.Quantity,
                    selling_price: item.Price || 0,  // Ensure this value is not undefined or 0
                })),
                "payment_method": orderDetails.paymentMethod,
                "sub_total": orderDetails.subTotal,
                "total_discount": orderDetails.totalDiscount || 0,  // Default to 0 if missing
                "length": orderDetails.length || 10, // Default value
                "breadth": orderDetails.breadth || 15, // Default value
                "height": orderDetails.height || 20, // Default value
                "weight": orderDetails.weight || 2.5, // Default value
            };

            // Check if all required fields are present
            if (!params.billing_customer_name || !params.billing_address || !params.billing_phone || !params.billing_pincode || !params.order_items) {
                throw new Error("Some required billing or order item fields are missing.");
            }

            // Make the API call to Shiprocket
            const response = await axios.post('https://apiv2.shiprocket.in/v1/external/orders/create/adhoc', params, { headers });
            console.log("Shiprocket Order Response: ", response.data);

        } catch (error) {
            console.error("Error sending order to Shiprocket:", error);
        }
    };


    return (
        <>
            <MetaData title={"Checkout"} />


            <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Checkout</h2>
                                <div className="breadcrumb__option">
                                    <Link to="/"> Home</Link>
                                    <span>Checkout </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="checkout ">
                <div className="container-fluid checkoutPage">
                    {/* <div className="row">
                        <div className="col-lg-12">
                            <h6><span className="icon_tag_alt"></span> Have a coupon? <a href="#">Click here</a> to enter your code
                            </h6>
                        </div>
                    </div> */}
                    <div className="checkout__form">
                        <h4>Billing Details</h4>
                        <form onSubmit={handleCheckoutOnSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Fist Name<span>*</span></p>
                                                <input type="text" placeholder="Enter Your First Name" value={name} onChange={(e) => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Last Name<span>*</span></p>
                                                <input type="text" placeholder="Enter Your First Name" value={lname} onChange={(e) => setLastName(e.target.value)} />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="col-lg-6">

                                            <div className="checkout__input">
                                                <p>Country<span>*</span></p>
                                                <select onChange={handleCountryChange} value={selectedCountry} className="form-control"
                                                    name="CountryName"
                                                    id="CountryName"
                                                    required={true}>
                                                    <option value={user?.CountryName}>{user ? user?.CountryName : "Select Country"}</option>
                                                    {countryList.map((country, index) => {
                                                        const countryId = index + 1;
                                                        return (
                                                            <option key={countryId} value={country.isoCode}>
                                                                {country.name}


                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">

                                            <div className="checkout__input">
                                                <p>Postcode / ZIP<span>*</span></p>
                                                <input type="text" name="PostalCode"
                                                    value={PostalCode}
                                                    onChange={(e) => setPostalCode(e.target.value)} />
                                                {/* {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>} */}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Country/State<span>*</span></p>
                                        <input type="text" placeholder="Enter State/Province" name="StateName"
                                            id="StateName"
                                            required={false}
                                            value={StateName}
                                            onChange={(e) => setStateByPincode(e.target.value)}
                                        />

                                    </div>

                                    <div className="checkout__input">
                                        <p>Town/City<span>*</span></p>
                                        <input type="text" name="CityName"
                                            id="CityName"
                                            required={false}
                                            value={CityName}
                                            onChange={(e) => setStateByPincode(e.target.value)}

                                        />
                                    </div>



                                    <div className="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input type="text" placeholder="Enter shipping address" id="AddressLineOne" name="address"
                                            required={true}
                                            onChange={(e) => setAddressLineOne(e.target.value)}
                                            value={address} />
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input type="text" placeholder="Enter contact no" id="phone" name="phone"
                                                    onChange={(e) => setMobileNo(e.target.value)}
                                                    value={phone} required={true} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmailAddress(e.target.value)} />
                                            </div>
                                        </div>


                                        <div className="checkout__input">
                                            <p>Shipping Address<span>*</span></p>
                                            <input type="text" placeholder="Enter shipping address" id="AddressLineOne" name="address"
                                                required={true}
                                                onChange={(e) => setShippingAddress(e.target.value)}
                                                value={shippingAddress} />
                                        </div>
                                        <div className="checkout__input">
                                            <p>Order Notes</p>
                                            <textarea type="text" rows={5} cols={10} placeholder="Enter Order Notes" id="AddressLineOne" name="address"
                                                required={true}
                                                onChange={(e) => setOrderNote(e.target.value)}
                                                value={OrderNote} className='w-100' ></textarea>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        {
                                            cartItems && cartItems.length > 0 ? (
                                                <div className="table-responsive">
                                                    <table className='table'>
                                                        <thead>
                                                            <tr>
                                                                <th>Product Name</th>
                                                                <th>Price</th>
                                                                <th>Quantity</th>
                                                                <th>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cartItems.map((item, ind) => (
                                                                <tr>
                                                                    <td>{item.ProductName.slice(0, 50)}...</td>
                                                                    <td>
                                                                        <AutoCurrencyPrice Price={item.Price} />
                                                                    </td>
                                                                    <td style={{ textAlign: "center" }}>{item.Quantity}</td>
                                                                    <td>
                                                                        {/* &#8377;{(item.Price) * (item.Quantity)} */}
                                                                        <AutoCurrencyPrice Price={(item.Price) * (item.Quantity)} />
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>

                                            ) : (
                                                <div className="col-sm-12">
                                                    <div className="col-sm-12 empty-cart-cls text-center">
                                                        <img src="/path/to/empty-cart-image.jpg" className="img-fluid mb-4" alt="Empty Cart" />
                                                        <h3>
                                                            <strong>Your Cart is Empty</strong>
                                                        </h3>
                                                        <h4>Explore more and shortlist some items.</h4>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        <div className="checkout__order__subtotal">Subtotal
                                            {/* <span>&#8377; {CartSubTotal.toFixed(2)}</span> */}
                                            <span> <AutoCurrencyPrice Price={CartSubTotal} /></span>
                                        </div>
                                        <div className="checkout__order__subtotal">Shipping Charge
                                            {/* <span> &#8377; {ShippingSubTotal.toFixed(2)}</span> */}
                                            {/* <span> <AutoCurrencyPrice Price={ShippingSubTotal} /></span> */}

                                            <span>{
                                                currency === "USD" ? (
                                                    <AutoCurrencyPrice Price={InternationalShippingSubTotal} />
                                                ) : (
                                                    <AutoCurrencyPrice Price={ShippingSubTotal} />
                                                )
                                            }</span>
                                        </div>
                                        <div className="checkout__order__subtotal">Tax Charge
                                            {/* <span> &#8377; {TaxTotal.toFixed(2)}</span> */}
                                            <span> <AutoCurrencyPrice Price={TaxTotal} /></span>
                                        </div>
                                        <div className="checkout__order__total"> Total
                                            {/* <span>&#8377;
                                                {OrderTotalAfterDiscount != undefined && OrderTotalAfterDiscount > 0
                                                    ?
                                                    <>
                                                        <del> {makePriceRoundToTwoPlaces(OrderTotal).toFixed(2)}</del>&nbsp; &nbsp; &#8377;{makePriceRoundToTwoPlaces(OrderTotalAfterDiscount.toFixed(2)).toFixed(2)}
                                                    </>
                                                    :
                                                    ` ${makePriceRoundToTwoPlaces(OrderTotal).toFixed(2)}`
                                                }
                                            </span> */}
                                            <span>
                                                <AutoCurrencyPrice Price={OrderTotalAfterDiscount != undefined && OrderTotalAfterDiscount > 0 ? OrderTotalAfterDiscount : OrderTotal} />
                                            </span>
                                        </div>

                                        <div className="">
                                            {IsCouponCodeApplied ?
                                                <div className="alert alert-success alert-dismissible fade show d-flex justify-space-between text-center" role="alert">
                                                    <strong>You Get {afterApplyCouponDiscountValue} % Off On Product {afterApplyCouponProductName} and Save &#8377;{afterApplyCouponDiscountAmount}</strong>
                                                    {/* <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button> */}
                                                </div>
                                                // <div className="alert alert-success alert-dismissible text-bg-success border-0 fade show" style={{display:"flex"}} role="alert">

                                                //     <strong>You Get {afterApplyCouponDiscountValue} % Off On Product {afterApplyCouponProductName} and Save &#8377;{afterApplyCouponDiscountAmount}</strong>

                                                //     <button type="button" className="btn-close btn-close-white ma-auto" data-bs-dismiss="alert" aria-label="Close"   ></button>

                                                // </div>


                                                :
                                                ""

                                            }
                                            <div className="checkout__input d-flex couponCodeInput">
                                                {/* <p>Last Name</p> */}

                                                <input type="text" placeholder='Enter Coupon code' className='form-control me-2 mt-1' onChange={(e) => setCouponCode(e.target.value)} />
                                                <button onClick={(e) => { e.preventDefault(); GetCouponCodeInfo(); }} className="btn btn-primary " >Apply Coupon</button>
                                            </div>
                                        </div>



                                        {/* <div className="checkout__input__checkbox">
                                            <label for="payment">
                                                Check Payment
                                                <input type="checkbox" id="payment" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label for="paypal">
                                                Paypal
                                                <input type="checkbox" id="paypal" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div> */}

                                        {
                                            activePaymentMethod.length > 0 ?
                                                // <>
                                                //     {activePaymentMethod.map((category, index) =>
                                                //         <div className="checkout__input__checkbox" key={index}>
                                                //             <label htmlFor={`payment_${category._id}`}>
                                                //                 {currency==="USD"&& category.name==="Case on delivery" }
                                                //                 <input type="checkbox" id={`payment_${category._id}`}
                                                //                     value={category.displaySeqNo}
                                                //                     checked={PaymentMethod === category.displaySeqNo}
                                                //                     onChange={(e) => setPaymentMethod(category.displaySeqNo)} />
                                                //                 <span className="checkmark"></span>
                                                //             </label>
                                                //         </div>
                                                //     )}

                                                // </>
                                                <>
                                                    {activePaymentMethod
                                                        // sirf active payment methods lo
                                                        .filter(category => category.IsActive === "true")
                                                        // agar USD hai to "Case on delivery" hata do
                                                        .filter(category => !(currency === "USD" && category.name === "Case on delivery"))
                                                        .map((category, index) => (
                                                            <div className="checkout__input__checkbox" key={index}>
                                                                <label htmlFor={`payment_${category._id}`}>
                                                                    {category.name}
                                                                    <input
                                                                        type="checkbox"
                                                                        id={`payment_${category._id}`}
                                                                        value={category.displaySeqNo}
                                                                        checked={PaymentMethod === category.displaySeqNo}
                                                                        onChange={(e) => setPaymentMethod(category.displaySeqNo)}
                                                                    />
                                                                    <span className="checkmark"></span>
                                                                </label>
                                                            </div>
                                                        ))}
                                                </>


                                                : ""
                                        }

                                        <button type="submit" className="site-btn">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


        </>
    )
}
