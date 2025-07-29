import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./cartStyle.css"
import ProductRatingStars from '../Products/ProductComponant/ProductRatingStars';
import { getSingleProduct } from '../../../Store/features/product/productSlice';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { makePriceRoundToTwoPlaces, replaceWhiteSpacesWithDashSymbolInUrl } from '../../../utils/ConversionHelper';
import { showErrorMsg, showSuccessMsg } from '../../../utils/ShowMessage';
import { setCustomerCart, SetTotalCartItems } from '../../../Store/features/cartSlice/cartSlice';
const BASE_URL = import.meta.env.VITE_IMG_URL;


export default function Cart() {
    // Extract cartItems from state properly (adjusting based on Redux structure)
    const { cartItems } = useSelector((state) => state.cart.cartItems);
    // let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];


    // console.log("Cart data is: ", cartItems);
    const [showPopover, setShowPopover] = useState(false);
    const [copyurl, setCopyUrl] = useState(false);
    const [CartSubTotal, setCartSubTotal] = useState(0);
    const [ShippingSubTotal, setShippingSubTotal] = useState(0);
    const [OrderTotal, setOrderTotal] = useState(0);
    const [TaxTotal, setTaxTotal] = useState(0)
    const popoverRef = useRef(null);
    const [CartChanged, setCartChangedStatusCount] = useState(0);
    const [popoverStates, setPopoverStates] = useState(0);

    const dispatch = useDispatch()



    const togglePopover = (productId) => {
        setPopoverStates(prev => ({
            ...prev,
            [productId]: !prev[productId]
        }))
        setShowPopover(!showPopover);
    };

    const handleCopy = async () => {

        const urlViewDetailImage = `${Config.WEBSITE_IBASE_URL}product-details/${products._id}/${products.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(products.ProductName)}`;

        // console.log("Generated URL: ", urlViewDetailImage); // Debugging the generated URL
        try {
            await navigator.clipboard.writeText(urlViewDetailImage);

            setCopyUrl(true);
            setTimeout(() => {
                setCopyUrl(false);
                setShowPopover(false);
            }, 1500);

        } catch (err) {
            console.error('Failed to copy: ', err);
            alert('Failed to copy link. Please try again.');
        }
    };

    const handleQtyUpdate = (ProductId, OrderMaximumQuantity, newValue) => {
        newValue = newValue ?? 1;

        let updatedCartItems = [...cartItems];
        const productIndex = updatedCartItems.findIndex(x => x.ProductId === ProductId);

        if (productIndex === -1) {
            showErrorMsg("Product not found in the cart.");
            return;
        }

        const qty = updatedCartItems[productIndex].Quantity;

        if (OrderMaximumQuantity && OrderMaximumQuantity > 0 && newValue > OrderMaximumQuantity) {
            showErrorMsg(`Cannot add more than ${OrderMaximumQuantity} for this product`);
            return;
        }

        if (qty < 10) {
            updatedCartItems[productIndex] = {
                ...updatedCartItems[productIndex],
                Quantity: newValue
            };

            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
            dispatch(setCustomerCart(updatedCartItems));

            // Recalculate totals after quantity update
            setCartTotalSubTotalShippingTotalAfterUpdate();
        }
    };

    const handleRemove = (ProductId) => {
        // Ensure cartItems is an array
        let cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

        // Filter out the product to be removed
        let updatedProductsList = cartItems.filter(item => item.ProductId !== ProductId);

        // Update localStorage and dispatch state
        localStorage.setItem("cartItems", JSON.stringify(updatedProductsList));
        dispatch(setCustomerCart(updatedProductsList));
        dispatch(SetTotalCartItems(updatedProductsList.length));

        // Update the total and status
        setCartTotalSubTotalShippingTotalAfterUpdate();
        setCartChangedStatusCount(CartChanged + 1);

        // Show success message
        showSuccessMsg("Cart Item Deleted Successfully");
    }



    // const calculateItemSubTotal = (item) => {
    //     return (item.Price) * (item.Quantity ?? 1);
    // };

    // const applyShippingCharge = (item, shippingChargeApplied) => {
    // debugger
    //     if (!shippingChargeApplied && item.ShippingCharges) {
    //         return { charge: parseInt(item.ShippingCharges), applied: true };
    //     }
    //     return { charge: 0, applied: shippingChargeApplied };
    // };

    // const setCartTotalSubTotalShippingTotalAfterUpdate = () => {
    //     if (!cartItems || cartItems.length === 0) return;

    //     let CartSubTotalDummy = 0;
    //     let ShippingSubTotalDummy = 0;
    //     let OrderTotalDummy = 0;

    //     let shippingChargeApplied = false;

    //     cartItems.forEach(item => {
    //         const itemSubTotal = calculateItemSubTotal(item);
    //         console.log('Item SubTotal:', itemSubTotal);
    //         CartSubTotalDummy += itemSubTotal;

    //         const shipping = applyShippingCharge(item, shippingChargeApplied,OrderTotalDummy);
    //         console.log('Shipping Charge:', shipping.charge);
    //         ShippingSubTotalDummy = shipping.charge;
    //         shippingChargeApplied = shipping.applied;
    //     });

    //     OrderTotalDummy = CartSubTotalDummy + ShippingSubTotalDummy;

    //     console.log('Cart SubTotal:', CartSubTotalDummy);
    //     console.log('Shipping SubTotal:', ShippingSubTotalDummy);
    //     console.log('Order Total:', OrderTotalDummy);

    //     // Ensure the totals are correctly rounded and updated
    //     setCartSubTotal(makePriceRoundToTwoPlaces(CartSubTotalDummy));
    //     setShippingSubTotal(makePriceRoundToTwoPlaces(ShippingSubTotalDummy));
    //     setOrderTotal(makePriceRoundToTwoPlaces(OrderTotalDummy));
    // };


    // const calculateItemSubTotal = (item) => {
    //     return (item.Price) * (item.Quantity ?? 1);
    // };
    // const calculateItemTaxTotal = (item) => {
    //     return (item.Tax) * (item.Quantity ?? 1);
    // };

    // const applyShippingCharge = (item, shippingChargeApplied) => {
    //     // debugger
    //     if (!shippingChargeApplied && item.ShippingCharges) {
    //         return { charge: parseInt(item.ShippingCharges), applied: true };
    //     }
    //     return { charge: 0, applied: shippingChargeApplied };
    // };

    // const setCartTotalSubTotalShippingTotalAfterUpdate = () => {
    //     if (!cartItems || cartItems.length === 0) return;

    //     let CartSubTotalDummy = 0;
    //     let ShippingSubTotalDummy = 0;
    //     let OrderTotalDummy = 0;
    //     let TaxTotalDummy = 0;

    //     let shippingChargeApplied = false;

    //     cartItems.forEach(item => {
    //         const itemSubTotal = calculateItemSubTotal(item);
    //         const itemTaxTotal = calculateItemTaxTotal(item);
    //         console.log('Item SubTotal:', itemSubTotal);
    //         CartSubTotalDummy += itemSubTotal;

    //         const shipping = applyShippingCharge(item, shippingChargeApplied);
    //         console.log('Shipping Charge:', shipping.charge);
    //         ShippingSubTotalDummy = shipping.charge;
    //         shippingChargeApplied = shipping.applied;
    //     });

    //     // OrderTotalDummy = CartSubTotalDummy + ShippingSubTotalDummy;
    //     OrderTotalDummy = CartSubTotalDummy;

    //     console.log('Cart SubTotal:', CartSubTotalDummy);
    //     console.log('Shipping SubTotal:', ShippingSubTotalDummy);
    //     console.log('Order Total:', OrderTotalDummy);
    //     // debugger
    //     // Apply shipping charge of ₹100 only if the OrderTotal is less than ₹500
    //     if (OrderTotalDummy < 500) {
    //         ShippingSubTotalDummy = ShippingSubTotalDummy > 0 ? ShippingSubTotalDummy : 100; // Add ₹100 shipping charge
    //         OrderTotalDummy += ShippingSubTotalDummy; // Add ₹100 to the OrderTotalDummy
    //         console.log('Order Total after adding shipping charge (if below ₹500):', OrderTotalDummy);
    //     }
    //     // else{
    //     //     OrderTotalDummy = CartSubTotalDummy + ShippingSubTotalDummy;

    //     // }

    //     // Ensure the totals are correctly rounded and updated
    //     setCartSubTotal(makePriceRoundToTwoPlaces(CartSubTotalDummy));
    //     setShippingSubTotal(makePriceRoundToTwoPlaces(ShippingSubTotalDummy));
    //     setOrderTotal(makePriceRoundToTwoPlaces(OrderTotalDummy));
    // };


    // useEffect(() => {
    //     setCartTotalSubTotalShippingTotalAfterUpdate();
    // }, [cartItems]);




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
        let TaxTotalDummy = 0;

        let shippingChargeApplied = false;

        cartItems.forEach(item => {
            const itemSubTotal = calculateItemSubTotal(item);
            const itemTaxTotal = calculateItemTaxTotal(item);

            console.log('Item SubTotal:', itemSubTotal);
            console.log('Item Tax Total:', itemTaxTotal);

            CartSubTotalDummy += itemSubTotal;
            TaxTotalDummy += itemTaxTotal; // ✅ Tax ko add kar diya

            const shipping = applyShippingCharge(item, shippingChargeApplied);
            console.log('Shipping Charge:', shipping.charge);
            ShippingSubTotalDummy = shipping.charge;
            shippingChargeApplied = shipping.applied;
        });

        // Order total me ab subtotal + tax bhi include hoga
        OrderTotalDummy = CartSubTotalDummy + TaxTotalDummy;

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
        setOrderTotal(makePriceRoundToTwoPlaces(OrderTotalDummy));
    };

    useEffect(() => {
        setCartTotalSubTotalShippingTotalAfterUpdate();
    }, [cartItems]);


    return (
        <>
            <section className="breadcrumb-section set-bg bg-dark" data-setbg="img/breadcrumb.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Shopping Cart</h2>
                                <div className="breadcrumb__option">
                                    <Link to="/">Home</Link>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cartItemSection">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-12">

                            {
                                cartItems && cartItems.length > 0 ? (
                                    <>
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }} clas>
                                            <h2>Shopping Cart</h2>
                                            <p className='quantityButton1'>Total Price: </p>
                                        </div>
                                        <div className="row border-top border-bottom">
                                            {cartItems.map((item, ind) => (
                                                <>

                                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12 mt-3 mb-3 productInfo">
                                                        <div className="d-flex ">
                                                            <div className="CartImageProduct">     <Link to="#" onClick={(e) => e.preventDefault()}>
                                                                <img src={item?.DefaultImage.url||`${BASE_URL}/${item?.DefaultImage}`} alt="cart" className=" " />
                                                            </Link>
                                                            </div>
                                                            <div className="mx-4">
                                                                <h4 className='product-name'>
                                                                    {item?.ProductName}</h4>

                                                                <h5>&#8377; {item.Price} </h5>
                                                                <span> {item.Quantity ? <span style={{ color: "green" }}>In Stock</span> : <span style={{ color: "red" }}>out of Stock</span>}</span> <br />
                                                                <span>
                                                                    {item.IsShippingFree ? <span style={{ color: "green", fontWeight: "bolder" }}>Free Shipping</span>
                                                                        :
                                                                        (
                                                                            item.ShippingCharges ? <span>Shipping Charge :<span style={{ color: "#1B2061", fontWeight: "600" }} >&#8377;{item.ShippingCharges}</span></span> : <span>
                                                                                Free Shipping</span>
                                                                        )
                                                                    }
                                                                </span>
                                                                <p><ProductRatingStars Rating={4} /></p>
                                                                <div className="">

                                                                    <div className="d-flex quantityButton">
                                                                        <div className="input-group mt-2">
                                                                            <input
                                                                                type="number"
                                                                                min="1"
                                                                                max={10}
                                                                                name="quantity"
                                                                                onChange={(e) => handleQtyUpdate(item.ProductId, item.OrderMaximumQuantity, e.target.value)}
                                                                                className="form-control input-number"
                                                                                value={item.Quantity}
                                                                                style={{ maxWidth: '60px', maxHeight: "30px", marginRight: "10px", borderRadius: "5px" }} // Adjust the maxWidth as per your design
                                                                            />

                                                                            <div className="me-2" style={{ borderLeft: "1px solid #D2D2D0" }}></div>

                                                                            <Link to="#" className="icon DeleteButton me-2" onClick={(e) => { e.preventDefault(); handleRemove(item.ProductId) }}>
                                                                                Delete
                                                                            </Link>

                                                                            <div className="me-2" style={{ borderLeft: "1px solid #D2D2D0" }}></div>

                                                                            <div className=''>

                                                                                <div className="shareOnImage">

                                                                                    <div className="shareBox">
                                                                                        <span className="material-icons" onClick={() => togglePopover(item.ProductId)}>
                                                                                            <span className="material-symbols-outlined">ios_share</span>
                                                                                        </span>
                                                                                        <div className="boxshare">
                                                                                            <span>share</span>
                                                                                        </div>
                                                                                    </div>
                                                                                    {popoverStates[item.ProductId] && (
                                                                                        <div ref={popoverRef} className="popover popover2">
                                                                                            <header>
                                                                                                <button className="close-button" onClick={() => togglePopover(item.ProductId)} aria-label="Close Share Popup">
                                                                                                    <span className="material-symbols-outlined">close</span>
                                                                                                </button>
                                                                                                <span className="material-symbols-outlined">share</span>
                                                                                            </header>
                                                                                            <div className="popover-body">
                                                                                                <ul className="share-options">
                                                                                                    <li>
                                                                                                        <a className="share-option email" href="mailto:info@parijathandicraft.com" onClick={() => togglePopover(item.ProductId)}>
                                                                                                            <span className="material-symbols-outlined text-dark me-2">mail</span>
                                                                                                            <span className="label">Email</span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a className="share-option pinterest" href="https://in.pinterest.com/handicraftparijat/" onClick={() => togglePopover(item.ProductId)}>
                                                                                                            <i className="ri-pinterest-fill text-dark me-2 fs-4"></i>
                                                                                                            <span className="label">Pinterest</span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a className="share-option facebook" href="https://www.facebook.com/prijathandicraft/" onClick={() => togglePopover(item.ProductId)}>
                                                                                                            <i className="ri-facebook-circle-fill text-dark me-2 fs-4"></i>
                                                                                                            <span className="label">Facebook</span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a className="share-option twitter" href="https://x.com/handicraftpari1" onClick={() => togglePopover(item.ProductId)}>
                                                                                                            <i className="ri-twitter-x-line text-dark me-2 fs-4"></i>
                                                                                                            <span className="label">X</span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a className="share-option copy" href="#" onClick={async (e) => {
                                                                                                            e.preventDefault();
                                                                                                            const urlViewDetailImage = `${Config.WEBSITE_IBASE_URL}product-details/${item.ProductId}/shop/${replaceWhiteSpacesWithDashSymbolInUrl(item.ProductName)}`;

                                                                                                            // console.log("Generated URL: ", urlViewDetailImage); // Debugging the generated URL
                                                                                                            try {
                                                                                                                await navigator.clipboard.writeText(urlViewDetailImage);
                                                                                                                setCopyUrl(true);
                                                                                                                setTimeout(() => {
                                                                                                                    setCopyUrl(false);
                                                                                                                    setShowPopover(false);
                                                                                                                    togglePopover(item.ProductId)
                                                                                                                }, 1500);
                                                                                                            } catch (err) {
                                                                                                                console.error('Failed to copy: ', err);
                                                                                                                alert('Failed to copy link. Please try again.');
                                                                                                            }
                                                                                                        }}>
                                                                                                            <span className="material-symbols-outlined text-dark me-2">{copyurl ? <span style={{ color: "green" }}>done_all</span> : "content_copy"}</span>
                                                                                                            <span className="label">{copyurl ? <span style={{ color: "green" }}>Link Copied!</span> : "Copy Link"}</span>
                                                                                                        </a>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                            {/* <div className="arrow"></div> */}
                                                                                        </div>
                                                                                    )}

                                                                                </div>
                                                                            </div>



                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="col-lg-3 col-md-3 mt-3 quantityButton1 ">
                                                        <p className='totalPrice'>
                                                            {(() => {
                                                                let itemSubTotal = (item.Price != undefined && item.Price > 0 ? item.Price : "jg") * (item.Quantity)
                                                                return (
                                                                    <div className="">
                                                                        &#8377; {itemSubTotal.toFixed(2)}

                                                                    </div>
                                                                )

                                                            })}
                                                            &#8377;   {(item.Price * item.Quantity).toFixed(2)}
                                                        </p>

                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                        <div className="row">

                                            <div className="col-lg-8 col-md-4 ">

                                            </div>
                                            <div className="col-lg-4 col-md-8 col-12 carTotalAmount">

                                                <table className="table cart-table table-responsive-md ">
                                                    <tfoot>
                                                        <tr>
                                                            <td>Subtotal:</td>
                                                            <td>
                                                                <h3>&#8377; {CartSubTotal.toFixed(2)}</h3>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Shipping: </td>
                                                            <td>
                                                                <h3> &#8377; {ShippingSubTotal.toFixed(2)}</h3>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tax: </td>
                                                            <td>
                                                                <h3>&#8377; {TaxTotal.toFixed(2)}</h3>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total:</td>
                                                            <td>
                                                                <h2> &#8377; {OrderTotal.toFixed(2)}</h2>
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>


                                            </div>
                                            <div style={{ textAlign: "end" }}>
                                                <div className=" cartStyleBtn">
                                                    <Link to='/all-product/0/all-categories' className="btn btn-normal cartButton" >
                                                        Continue Shopping
                                                    </Link>
                                                    <Link to="/checkout" className="btn btn-normal cartButton1 ms-3">
                                                        Proceed to Checkout
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>





                                    </>
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
                                )}
                        </div>
                        <div className="col-lg-3 col-md-3 d-block d-sm-none">

                        </div>

                    </div>

                    {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <Link to="/" className="primary-btn cart-btn">CONTINUE SHOPPING</Link>
                                <a href="#" className="primary-btn cart-btn cart-btn-right">
                                    <span className="icon_loading"></span>
                                    Update Cart
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your coupon code" />
                                        <button type="submit" className="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
}






// <section className="cart-section section-big-py-space bg-light">

//     <div className="container">

//         {cartProductsData != undefined && cartProductsData != null && cartProductsData.length > 0 > 0 ? (

//             <>
//                 <div className="" style={{ display: "flex", justifyContent: "space-between", }}>
//                     <h2>Shopping Cart</h2>
//                     <p>Total Price</p>
//                 </div>

//                 <div className="row border-top border-bottom " >
//                     {cartProductsData.map((item, index) => (
//                         <>
//                             <div className="col-xl-10 col-lg-9 col-md-9 col-sm-8 col-12 mt-3 mb-3 productInfo">

// <div className="d-flex ">
//     <Link to="#" onClick={(e) => e.preventDefault()}>
//         <img src={item.ProductImagesJson[0]?.AttachmentURL != undefined ? (adminPanelBaseURL + (item.ProductImagesJson[0].AttachmentURL)) : ""} alt="cart" className=" " />
//     </Link>
//     <div className="mx-4">
//         <h4 className='product-name'>
//             <Link to={/${getLanguageCodeFromSession()}/product - detail / ${item.ProductId} /category/${item.ProductName}}>
//             {
//                 makeProductShortDescription(item.ProductName, 40)
//             }
//         </Link>
//     </h4>

//     <h4>
//         {item.DiscountedPrice != undefined && item.DiscountedPrice > 0 ?
//             <>
//                 <del style={{ color: "#9494b9" }}>{GetDefaultCurrencySymbol()}{makePriceRoundToTwoPlaces(item.Price)}</del> &nbsp; {GetDefaultCurrencySymbol()}{makePriceRoundToTwoPlaces(item.DiscountedPrice)}
//             </>
//             :
//             <>
//                 {GetDefaultCurrencySymbol()}{makePriceRoundToTwoPlaces(item.Price)}
//             </>

//         }
//     </h4>

//     <p> {
//         item.StockQuantity ? <span style={{ color: "green" }}>In Stock</span> : <span>out of Stock</span>
//     }</p>
//     <p>
//         {
//             item.ShippingCharges ? <span>Shipping Charge :<span style={{ color: "#1B2061", fontWeight: "600" }} >&#8377;{item.ShippingCharges}</span></span> : <span>
//                 Free Shipping</span>
//         }
//     </p>
//     <p><CartStar star={item.Rating} /></p>

//     <div className="d-flex quantityButton">
//         <div className="input-group mt-2">
//             <input
//                 type="number"
//                 min="1"
//                 max={10}
//                 name="quantity"
//                 onChange={(e) => handleQtyUpdate(item.ProductId, item.OrderMaximumQuantity, e.target.value)}
//                 className="form-control input-number"
//                 value={item.Quantity}
//                 style={{ maxWidth: '60px', maxHeight: "30px", marginRight: "10px", borderRadius: "5px" }} // Adjust the maxWidth as per your design
//             />

//             <div className="me-2" style={{ borderLeft: "1px solid #D2D2D0" }}></div>

//             <Link to="#" className="icon DeleteButton me-2" onClick={(e) => { e.preventDefault(); handleRemove(item.ProductId) }}>
//                 Delete
//             </Link>

//             <div className="me-2" style={{ borderLeft: "1px solid #D2D2D0" }}></div>

//             <div className=''>

//                 <div className="shareBox">
//                     <span className="material-icons" onClick={() => togglePopover(item.ProductId)}>
//                         <span className="material-symbols-outlined shareicons">ios_share</span>
//                     </span>
//                     <div className="boxshare">
//                         <span>share</span>
//                     </div>
//                 </div>
//                 {popoverStates[item.ProductId] && (
//                     <div className="popover shareBox1 ">
//                         <header>
//                             <button className="close-button" onClick={() => togglePopover(item.ProductId)} aria-label="Close Share Popup">
//                                 <span className="material-symbols-outlined shareicons">close</span>
//                             </button>
//                             <span className="material-symbols-outlined shareicons">share</span>
//                         </header>
//                         <div className="popover-body">
//                             <ul className="share-options">
//                                 {/* Share options */}
//                                 <li>
//                                     <Link className="share-option email" to="mailto:info@parijathandicraft.com" onClick={() => togglePopover(item.ProductId)}>
//                                         <span className="material-symbols-outlined text-dark me-2">mail</span>
//                                         <span className="label">Email</span>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link className="share-option pinterest" to="https://in.pinterest.com/handicraftparijat/." onClick={() => togglePopover(item.ProductId)}>
//                                         <span className="icon" style={{ backgroundImage: url(${ email }) }}></span>
//                                         <span className="label">Pinterest</span>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link className="share-option facebook" to="https://www.facebook.com/prijathandicraft/" onClick={() => togglePopover(item.ProductId)}>
//                                         <span className="icon" style={{ backgroundImage: url(${ fac }) }}></span>
//                                         <span className="label">Facebook</span>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link className="share-option twitter" to="https://x.com/handicraftpari1" onClick={() => togglePopover(item.ProductId)}>
//                                         <span className="icon" style={{ backgroundImage: url(${ twitter }) }}></span>
//                                         <span className="label">X</span>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     {(() => {
//                                         // Construct and encode the URL
//                                         let baseURL = /${getLanguageCodeFromSession()}/product - detail / ${ item.ProductId}/${replaceWhiteSpacesWithDashSymbolInUrl(item.CategoryName) ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(item.ProductName)};
//                                     let urlViewDetailImage = http://localhost:3000${baseURL}; // Make sure to include full base URL

//                                         // Function to copy URL
//                                         const handleCopy = async () => {
//                                             try {

//                                         await navigator.clipboard.writeText(urlViewDetailImage);
//                                     setCopyUrl(true)
//                                                 setTimeout(() => {
//                                         setCopyUrl(false)
//                                                     setShowPopover(false)
//                                     togglePopover(item.ProductId)

//                                                 }, 1500)
//                                                 // alert('Link copied to clipboard');
//                                             } catch (err) {
//                                         console.error('Failed to copy: ', err);
//                                     alert('Failed to copy link. Please try again.');
//                                             }
//                                         };

//                                     return (
//                                     <Link className="share-option copy" to="#" onClick={(e) => { e.preventDefault(); handleCopy(); }}>
//                                         <span className="icon" style={{ backgroundImage: 'url(https://m.media-amazon.com/images/G/01/share-icons/link-circular.svg)' }}></span>
//                                         <span className="label">{copyurl ? <span style={{ color: "green" }}>Link Copied!</span> : "Copy Link"}</span>
//                                     </Link>
//                                     );
//                                     })()}
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="arrow"></div>
//                     </div>
//                 )}
//             </div>



//         </div>
//     </div>


// </div>
//                             </div>
//                         </div >

//                     <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12  ">
//                         <p className='totalPrice'>
//                             {(() => {
//                                 let itemSubTotal = (item.DiscountedPrice != undefined && item.DiscountedPrice > 0 ? item.DiscountedPrice : item.Price) * (item.Quantity ?? 1);
//                                 return (
//                                     <div className="">
//                                         {GetDefaultCurrencySymbol()}{makePriceRoundToTwoPlaces(itemSubTotal)}
//                                     </div>
//                                 );
//                             })()}
//                         </p>

//                     </div>
//                     </>
//                 ))}



//             </div>


//         <table className="table cart-table table-responsive-md  ">
//             <tfoot>
//                 <tr>
//                     <td>
//                         {LocalizationLabelsArray.length > 0 ?
//                             replaceLoclizationLabel(LocalizationLabelsArray, "Subtotal:", "lbl_cart_subtotal")
//                             :
//                             "Subtotal:"
//                         }
//                     </td>
//                     <td>
//                         <h2>{GetDefaultCurrencySymbol()}{CartSubTotal}</h2>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         {LocalizationLabelsArray.length > 0 ?
//                             replaceLoclizationLabel(LocalizationLabelsArray, "Shipping", "lbl_cart_shipping")
//                             :
//                             "Shipping:"
//                         }
//                     </td>
//                     <td>
//                         <h2>{GetDefaultCurrencySymbol()}{ShippingSubTotal}</h2>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         {LocalizationLabelsArray.length > 0 ?
//                             replaceLoclizationLabel(LocalizationLabelsArray, "Shipping", "lbl_cart_shipping")
//                             :
//                             "Tax: "
//                         }
//                     </td>
//                     <td>
//                         <h2>&#8377;0</h2>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>
//                         {LocalizationLabelsArray.length > 0 ?
//                             replaceLoclizationLabel(LocalizationLabelsArray, "Total", "lbl_cart_total_2")
//                             :
//                             "Total:"
//                         }
//                     </td>
//                     <td>
//                         <h2>{GetDefaultCurrencySymbol()}{OrderTotal}</h2>
//                     </td>
//                 </tr>
//             </tfoot>
//         </table>

//         <div className="row cart-buttons">
//             <div className="col-12 cartStyle">
//                 <Link to={/${getLanguageCodeFromSession()}/} className="btn btn-normal cartButton" >
//                     {LocalizationLabelsArray.length > 0 ?
//                         replaceLoclizationLabel(LocalizationLabelsArray, "Continue Shopping", "lbl_cart_cont_shop")
//                         :
//                         "Continue Shopping"
//                     }
//                 </Link>
//                 <Link to={/${getLanguageCodeFromSession()}/checkout} className="btn btn-normal ms-3">
//                     {LocalizationLabelsArray.length > 0 ?
//                         replaceLoclizationLabel(LocalizationLabelsArray, "Proceed to Checkout", "lbl_cart_proc_check")
//                         :
//                         "Proceed to Checkout"
//                     }
//                 </Link>
//             </div>
//         </div>

//     </>

//     ) : (
//     <div className="col-sm-12">
//         <div>
//             <div className="col-sm-12 empty-cart-cls text-center">
//                 <img src={static / images / icon - empty - cart.png} className="img-fluid mb-4" alt="" />
//                 <h3>
//                     <strong>Your Cart is Empty</strong>
//                 </h3>
//                 <h4>Explore more shortlist some items.</h4>
//             </div>
//         </div>
//     </div>
//     )}

// </div>


//      </section >