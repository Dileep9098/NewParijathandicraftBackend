import React, { useEffect, useRef, useState } from 'react'
import "./prductDetails.css"
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../../Store/features/product/productSlice';
import MetaData from '../Layout/MetaData';
import ProductDetailsImages from './ProductDetailsImages';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { replaceWhiteSpacesWithDashSymbolInUrl } from '../../../utils/ConversionHelper';
import { showErrorMsg, showInfoMsg, showWarningMsg } from '../../../utils/ShowMessage';
import ProductRatingStars from './ProductComponant/ProductRatingStars';
import { AddCustomerWishList, AddProductToCart } from '../../../utils/CartHelper';
import { setCustomerCart, SetTotalCartItems } from '../../../Store/features/cartSlice/cartSlice';

const BASE_URL = import.meta.env.VITE_IMG_URL;

export default function ProductDetails() {
    const { isLoading, products } = useSelector((state) => state.product)
    const [displayedProducts, setDisplayedProducts] = useState(10);
    const [ReviewerName, setReviewerName] = useState('');
    const [ReviewerEmail, setReviewerEmail] = useState('');
    const [ReviewTitle, setReviewTitle] = useState('');
    const [ReviewBody, setReviewBody] = useState('');
    const [ReviewRating, setReviewRating] = useState(1);
    const navigate = useNavigate()

    console.log(products)
    const loadMoreProducts = () => {
        setDisplayedProducts(displayedProducts + 10); // Load 10 more products
    };

    const dispatch = useDispatch()

    // Thumbnails data (URLs for thumbnail images and their full-size images)
    const thumbnails = [
        { thumb: "assets/img/product/details/thumb-1.jpg", full: "assets/img/product/details/product-details-2.jpg" },
        { thumb: "assets/img/product/details/thumb-2.jpg", full: "assets/img/product/details/product-details-3.jpg" },
        { thumb: "assets/img/product/details/thumb-3.jpg", full: "assets/img/product/details/product-details-5.jpg" },
        { thumb: "assets/img/product/details/thumb-4.jpg", full: "assets/img/product/details/product-details-4.jpg" },
    ];
    const handleThumbnailClick = (fullImage) => {
        setMainImage(fullImage);
    };

    var [quentyProduct, setQuentyProduct] = useState(1)

    const handelIncreaseQty = () => {
        if (products.OrderMaximumQuantity != undefined && products.OrderMaximumQuantity != null && products.OrderMaximumQuantity > 0) {
            if ((quentyProduct + 1) > products.OrderMaximumQuantity) {
                showInfoMsg(`Can not add more than ${products.OrderMaximumQuantity} for this product`);
            } else {
                setQuentyProduct(parseInt(quentyProduct) + 1)
            }
        } else {
            if (quentyProduct < 10) {
                setQuentyProduct(parseInt(quentyProduct) + 1)
            }
        }


        // setQuentyProduct(parseInt(quentyProduct) + 1)
    }
    const handelDreaseQty = () => { setQuentyProduct(quentyProduct - 1) }
    useEffect(() => {
        // Initialize Owl Carousel when the component mounts
        $('.latest-product__slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });

        // Cleanup Owl Carousel on unmount
        return () => {
            $('.latest-product__slider').owlCarousel('destroy');
        };
    }, []);

    const [showPopover, setShowPopover] = useState(false);
    const [copyurl, setCopyUrl] = useState(false);
    const popoverRef = useRef(null);

    const togglePopover = () => {
        setShowPopover(!showPopover);
    };



    const params = useParams()
    const [allLatestProduct, setAllLatestProduct] = useState([])
    const [activeLatestProducts, setActiveLatestProducts] = useState([]);
    const [ProductID, setProductID] = useState(params.product_id ?? 0)

    console.log(ProductID)
    useEffect(() => {
        setProductID(params.product_id);
    }, [params.product_id]);

    console.log(ProductID);
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

    useEffect(() => {

        const fatchData = async () => {
            try {
                const getAllLetestProduct = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true });
                if (getAllLetestProduct.data.success) {
                    setAllLatestProduct(getAllLetestProduct.data.allProductsFeatures)
                    setActiveLatestProducts(getAllLetestProduct.data.products.filter(product => product.IsActive));
                }
                else {
                    showErrorMsg(getAllLetestProduct.data.message)
                }

            } catch (error) {
                showErrorMsg(error);

            }
        }
        fatchData();
    }, [dispatch]);

    useEffect(() => {
        if (ProductID) {

            dispatch(getSingleProduct(ProductID))
        }
    }, [dispatch, ProductID])



    const activeProducts = Array.isArray(allLatestProduct) ? allLatestProduct.filter(product => product.IsActive) : [];

    const relatedProduct = Array.isArray(allLatestProduct)
        ? allLatestProduct.filter(product => product.IsActive)
        : [];

    console.log("Latest Products:", relatedProduct);

    const matchedProducts = [];

    // relatedProduct.forEach(product => {
    //     const isMatch = product.ProductsCategoriesMappings.some(productCategory => {
    //         return products.ProductsCategoriesMappings.some(activeCategory =>
    //             activeCategory._id === productCategory._id
    //         );
    //     });

    //     if (isMatch) {
    //         matchedProducts.push(product);
    //     }
    // });


    // Ensure relatedProduct is defined and is an array
    // if (Array.isArray(relatedProduct)) {
    //     relatedProduct.forEach(product => {
    //         if (Array.isArray(product.ProductsCategoriesMappings)) {
    //             const isMatch = product.ProductsCategoriesMappings.some(productCategory => {
    //                 return Array.isArray(products.ProductsCategoriesMappings) && products.ProductsCategoriesMappings.some(activeCategory =>
    //                     activeCategory._id === productCategory._id
    //                 );
    //             });

    //             if (isMatch) {
    //                 matchedProducts.push(product);
    //             }
    //         }
    //     });
    // } else {
    //     console.error('relatedProduct is undefined or not an array');
    // }



    if (Array.isArray(relatedProduct)) {
        relatedProduct.forEach(product => {
            if (Array.isArray(product.ProductsCategoriesMappings)) {
                const isMatch = product.ProductsCategoriesMappings.some(productCategory => {
                    // Check if products.ProductsCategoriesMappings is defined and is an array
                    return Array.isArray(products?.ProductsCategoriesMappings) &&
                        products.ProductsCategoriesMappings.some(activeCategory =>
                            activeCategory._id === productCategory._id
                        );
                });

                if (isMatch) {
                    matchedProducts.push(product);
                }
            }
        });
    } else {
        console.error('relatedProduct is undefined or not an array');
    }

    // Display the matched products
    console.log("Matched Products:", matchedProducts);


    const chunkProducts = (allLatestProduct, chunkSize) => {
        let result = [];
        for (let i = 0; i < allLatestProduct.length; i += chunkSize) {
            result.push(allLatestProduct.slice(i, i + chunkSize));
        }
        return result;
    };

    const productChunks = chunkProducts(activeProducts, 6);

    useEffect(() => {
        $('.latest-product__slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                1000: {
                    items: 1,
                },
            },
        });

        return () => {
            $('.latest-product__slider').owlCarousel('destroy');
        };
    }, [productChunks]);


    const handleClick = (newRating) => {
        setReviewRating(newRating)
    }

    const SubmitReviewForm = async (e) => {
        e.preventDefault()

        const param = {
            ProductID: ProductID,
            ReviewerName: ReviewerName,
            ReviewerEmail: ReviewerEmail,
            ReviewTitle: ReviewTitle,
            ReviewBody: ReviewBody,
            ReviewRating: ReviewRating
        }

        const reponse = await axiosInstance.post(Config.END_POINT_LIST["ADD_PRODUCT_REVIEWS"], param, { withCredentials: true });
        console.log(reponse)


    }

    // const [mainImage, setMainImage] = useState( products?.ProductPictures.length > 0? `/image/products/${products?.ProductPictures[0]}`:0);


    const HandleAddToCart = (isBuyNowBtn) => {
        // debugger

        if (products == undefined || products._id == undefined || products._id < 1) {
            showErrorMsg("Invalid product!");
            return false;
        }


        if (products?.StockQuantity != null && products?.StockQuantity != undefined
            && products.StockQuantity < 1) {
            showInfoMsg("Product is out of stock. Can't add it in the cart!");
            return false;
        }

        //--check if size selected
        // if (productDetail?.ProductSizesJson?.length != undefined && productDetail?.ProductSizesJson?.length > 0) {
        //     if (ActiveSize.SizeID == undefined || ActiveSize.SizeID < 1) {
        //         showInfoMsg("Select size of product!");
        //         return false;
        //     }
        // }

        //--check if color selected
        // if (productDetail?.ProductColorsJson?.length != undefined && productDetail?.ProductColorsJson.length > 0) {
        //     if (ActiveColor.ColorID == undefined || ActiveColor.ColorID < 1) {
        //         showInfoMsg("Select color of product!");
        //         return false;
        //     }
        // }

        //--validate all others attributes except color and size because its already validated above
        // let localAttributes = productAllAttributes?.filter(x => x.ProductAttributeID != Config.PRODUCT_ATTRIBUTE_ENUM['Color'] && x.ProductAttributeID != Config.PRODUCT_ATTRIBUTE_ENUM['Size']);
        // for (let index = 0; index < localAttributes.length; index++) {
        //     const elementAttr = localAttributes[index];
        //     if (elementAttr?.IsRequiredAttribute != undefined && elementAttr?.IsRequiredAttribute == true) {
        //         if (!productSelectedAttributes.some(x => x.ProductAttributeID === elementAttr.ProductAttributeID)) {
        //             showInfoMsg("Please select " + elementAttr.AttributeDisplayName + " variant!");
        //             return false;
        //         }
        //     }
        // }

        //--check if quantity selected
        if (quentyProduct == undefined || quentyProduct < 1) {
            showInfoMsg("Select quantity!");
            return false;
        }
        // debugger

        let defaultImage = (products?.ProductPictures?.length > 0) ? products.ProductPictures[0] : '';
        let ProductName = products?.ProductName
        let Price = products?.Price
        let Tax = products?.Tax?.tax_rate
        let IsShippingFree = products?.IsShippingFree
        let ShippingCharge = products?.ShippingCharge
        let OrderMaximumQuantity = products?.OrderMaximumQuantity

        let cartItems = AddProductToCart(ProductID, quentyProduct, defaultImage, Price, ProductName, IsShippingFree, ShippingCharge, OrderMaximumQuantity, Tax);

        dispatch(setCustomerCart(cartItems));
        dispatch(SetTotalCartItems(JSON.parse(cartItems).length));

        // dispatch(rootAction.cartAction.setCustomerCart(cartItems));
        // dispatch(rootAction.cartAction.SetTotalCartItems(JSON.parse(cartItems).length));

        if (isBuyNowBtn != undefined && isBuyNowBtn == true) {
            navigate('/cart');
            window.location.reload()

        }
    }

    const HandleAddToWishList = ({ ProductId, ProductName, Price, IsShippingFree, ShippingCharge, OrderMaximumQuantity, StockQuantity, ProductPictures, DiscountPrice, CouponCode }) => {

        let customerWishList = AddCustomerWishList(ProductId, ProductName, Price, IsShippingFree, ShippingCharge, OrderMaximumQuantity, StockQuantity, ProductPictures, DiscountPrice, CouponCode);
        localStorage.setItem("customerWishList", customerWishList)

    };

    return (
        <>
            <MetaData title="Single Product" />

            <section className="breadcrumb-section set-bg" style={{
                backgroundImage: products?.ProductPictures && products.ProductPictures.length > 0
                    ? `url('${products.ProductPictures[0].url}')`
                    : 'url("/image/default.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "scroll"
            }}>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Product Details</h2>
                                <div className="breadcrumb__option">
                                    <Link to="/" style={{ color: "#180150" }}>Home</Link>
                                    <Link to="/all-product/0/all-categories" style={{ color: "#180150" }}>Prodcut</Link>
                                    <span>Product Details</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-details spad">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-3 mostPopularProduct">
                            <div className="row">
                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <div className="letest-section-title">

                                            <h4>Popular Products</h4>
                                        </div>
                                        <div className="latest-product__slider owl-carousel">
                                            {productChunks.map((chunk, index) => (
                                                <div key={index} className="latest-prdouct__slider__item">
                                                    {chunk.map((product, productIndex) => (
                                                        <Link to={`/product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`} key={productIndex} className="latest-product__item" >
                                                            <div className="latest-product__item__pic">
                                                                <img src={product.ProductPictures[0].url} alt={product.ProductName} />
                                                            </div>
                                                            <div className="latest-product__item__text">
                                                                <h6>{product.ProductName.slice(0, 50)}...</h6>
                                                                {/* <span>&#8377; {product.Price}</span> */}
                                                                <span>&#8377;{product.Price} <sub><del>{product.OldPrice}</del></sub></span>

                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-5">
                            <div className="product__details__pic">
                                <div className="product__details__pic__item">
                                    {/* <div className="show2"> */}
                                    {/* <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "product",
                                                    isFluidWidth: true,
                                                    src: mainImage,
                                                    width: 400,
                                                    height: 400
                                                },
                                                largeImage: {
                                                    src: mainImage,
                                                    width: 1200,
                                                    height: 1200
                                                },
                                                enlargedImageContainerStyle: {
                                                    position: 'absolute',
                                                    zIndex: 1000,
                                                    overflow: 'hidden',
                                                    width: 'auto',
                                                    height: 'auto'
                                                },
                                                shouldUsePositiveSpaceLens: true,
                                                className: 'react-image-magnify'
                                            }}
                                        /> */}
                                    <ProductDetailsImages ProductDetailsImages={products?.ProductPictures} />


                                    {/* </div> */}




                                    <div className="shareOnImage">

                                        <div className="shareBox">
                                            <span className="material-icons" onClick={togglePopover}>
                                                <span className="material-symbols-outlined">ios_share</span>
                                            </span>
                                            <div className="boxshare">
                                                <span>share</span>
                                            </div>
                                        </div>
                                        {showPopover && (
                                            <div ref={popoverRef} className="popover popover2">
                                                <header>
                                                    <button className="close-button" onClick={togglePopover} aria-label="Close Share Popup">
                                                        <span className="material-symbols-outlined">close</span>
                                                    </button>
                                                    <span className="material-symbols-outlined">share</span>
                                                </header>
                                                <div className="popover-body">
                                                    <ul className="share-options">
                                                        <li>
                                                            <a className="share-option email" href="mailto:info@parijathandicraft.com" onClick={togglePopover}>
                                                                <span className="material-symbols-outlined text-dark me-2">mail</span>
                                                                <span className="label">Email</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="share-option pinterest" href="https://in.pinterest.com/handicraftparijat/" onClick={togglePopover}>
                                                                <i className="ri-pinterest-fill text-dark me-2 fs-4"></i>
                                                                <span className="label">Pinterest</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="share-option facebook" href="https://www.facebook.com/prijathandicraft/" onClick={togglePopover}>
                                                                <i className="ri-facebook-circle-fill text-dark me-2 fs-4"></i>
                                                                <span className="label">Facebook</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="share-option twitter" href="https://x.com/handicraftpari1" onClick={togglePopover}>
                                                                <i className="ri-twitter-x-line text-dark me-2 fs-4"></i>
                                                                <span className="label">X</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="share-option copy" href="#" onClick={(e) => { e.preventDefault(); handleCopy(); }}>
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
                                <div className="product__details__pic__slider owl-carousel" id="owlCarousel4">
                                    {thumbnails.map((thumb, index) => (
                                        <img
                                            key={index}
                                            src={thumb.thumb}
                                            alt={`Thumbnail ${index + 1}`}
                                            data-imgbigurl={thumb.full}
                                            onClick={() => handleThumbnailClick(thumb.full)} // Set the main image on click
                                            style={{ cursor: 'pointer' }}
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-5 col-md-5">
                            <div className="product__details__text">
                                <h3>{products?.ProductName}</h3>
                                <div className="product__details__price"><span>&#8377;{products?.Price} <sub><del>{products?.OldPrice}</del></sub></span></div>
                                <div className="product__details__rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-half-o"></i>
                                    <span>({(products?.ProductReviews?.length > 0 ? products?.ProductReviews.length : 0)}) reviews</span>
                                </div>
                                {/* <hr className='horizentalLine' /> */}

                                <div className="moreDetails">
                                    <ul>
                                        <li><b>Vendor</b> <span style={{ fontWeight: "bold" }}>{products?.Menufacturs?.name}</span></li>

                                        <li><b>Availability</b> <span>In Stock {(() => {

                                            if (products?.DisplayStockQuantity != undefined && products.DisplayStockQuantity == true) {

                                                if (products.StockQuantity != null && products.StockQuantity != undefined && products.StockQuantity > 0) {
                                                    return (
                                                        <>

                                                            <span id="lbl_prd_det_instock" style={{ color: '#4CBB17' }}>

                                                                In Stock

                                                            </span>

                                                            <span className="product-info-custom-value"> ({products.StockQuantity} items)</span>

                                                        </>
                                                    );
                                                } else {
                                                    return (
                                                        <>
                                                            <span className="product-info-custom-value text-primary" >Out of stock</span>

                                                        </>
                                                    );
                                                }
                                            }
                                            else {
                                                return (
                                                    <>
                                                        <span id="lbl_prd_det_instock" style={{ color: 'red', fontWeight: "600" }}>
                                                            Out of stock
                                                        </span>
                                                    </>
                                                );
                                            }

                                        })()}</span></li>
                                        {/* <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li> */}
                                        <li><b>SKU</b> <span>{products?.Sku}</span></li>
                                        {
                                            products?.IsShippingFree ?
                                                <li><b>Shipping Charge</b> <span> shipping. <samp>Free pickup today</samp></span></li>
                                                : <li><b>Shipping Charge</b> <span> &#8377; {products?.ShippingCharge}</span></li>
                                        }

                                    </ul>
                                </div>
                                <hr className='horizentalLine' />

                                <div className="qty-container-main">
                                    <div className="letest-section-title mb-3">
                                        <h4>Quantity</h4>
                                    </div>
                                    <div className="qty-container">


                                        <button className="qty-btn-minus  btn-rounded mr-1" type="button" onClick={handelDreaseQty}><i className="fa fa-chevron-left"></i></button>
                                        <input type="number" name="qty" value={quentyProduct ?? 1} className="input-qty input-rounded" onChange={(e) => setQuentyProduct(e.target.value)} />
                                        <button className="qty-btn-plus  btn-rounded ml-1" type="button" onClick={handelIncreaseQty}><i className="fa fa-chevron-right"></i></button>
                                    </div>
                                </div>

                                <div className="productDetailBtn ">
                                    <Link className='btn productDetailBtnCart' onClick={(e) => {
                                        e.preventDefault();
                                        HandleAddToCart(false);
                                    }}>Add to cart</Link>
                                    <Link className='btn productDetailBtnBuyNow' to="#" onClick={(e) => {
                                        e.preventDefault();
                                        HandleAddToCart(true);
                                    }}>buy now</Link>
                                </div>

                                <div className="product-details-manage">

                                    <div className="letest-section-title">

                                        <h4>Product Details</h4>
                                    </div>
                                    <div className="product-details-manage-container" dangerouslySetInnerHTML={{ __html: products?.FullDescription }} />

                                    {/* <ul>
                                            <div className="d-flex">
                                                <i className="ri-arrow-right-fill me-2"></i>
                                                <li> Looking For Something Classic to Gift and something decorative for Your Home / Office?</li>
                                            </div>
                                            <div className="d-flex">
                                                <i className="ri-arrow-right-fill me-2"></i>
                                                <li> Looking For Something Classic to Gift and something decorative for Your Home / Office?</li>
                                            </div>
                                            <div className="d-flex">
                                                <i className="ri-arrow-right-fill me-2"></i>
                                                <li> Looking For Something Classic to Gift and something decorative for Your Home / Office?</li>
                                            </div>
                                            <div className="d-flex">
                                                <i className="ri-arrow-right-fill me-2"></i>
                                                <li> Looking For Something Classic to Gift and something decorative for Your Home / Office?</li>
                                            </div>
                                            <div className="d-flex">
                                                <i className="ri-arrow-right-fill me-2"></i>
                                                <li> Looking For Something Classic to Gift and something decorative for Your Home / Office?</li>
                                            </div>
                                        </ul> */}

                                    {/* {products?.FullDescription} */}

                                    {/* </div> */}
                                </div>


                                <div className="border-product">
                                    <div className="row singleProductReturn">
                                        <div className="col-lg-8 col-12">

                                            <table className="singleProductReturn">
                                                <tr>
                                                    <th>Returns</th>
                                                    <td>
                                                        {products?.IsReturnAble ?
                                                            <div>Returnable until 7 days</div> :
                                                            <span style={{ fontWeight: "bolder", color: "red" }}>Return Not Available.</span>}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Payment</th>
                                                    <td>Secure Payment   </td>
                                                </tr>
                                                <tr>
                                                    <th>Support</th>
                                                    <td>
                                                        <span>Product support included</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Packaging</th>
                                                    <td>
                                                        <span>Ship in product packaging</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Support</th>
                                                    <td>
                                                        <span>Product support included</span>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className="col-lg-4 col-12"></div>

                                    </div>
                                </div>
                                <hr className='horizentalLine' />
                                <div className="footer__widget d-flex">
                                    <div className="footer__widget__social">
                                        <h6 className='text-dark'>follow us</h6>
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
                                    <div className="singleProductWishList">

                                        <Link onClick={(e) => { e.preventDefault(); HandleAddToWishList({ ProductId: products._id, ProductName: products.ProductName, Price: products.Price, IsShippingFree: products.IsShippingFree, ShippingCharge: products.ShippingCharge, OrderMaximumQuantity: products.OrderMaximumQuantity, StockQuantity: products.StockQuantity, ProductPictures: products.ProductPictures[0], DiscountPrice: products.DiscountProductsMappings.DiscountValue, CouponCode: products.DiscountProductsMappings.couponCode, }) }}>
                                            <i className="ri-heart-fill me-1"></i>Add to Wishlist

                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab"
                                            aria-selected="true">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab"
                                            aria-selected="false">Information</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab"
                                            aria-selected="false">Reviews <span>({(products?.ProductReviews?.length > 0 ? products?.ProductReviews.length : 0)})</span></a>
                                    </li>
                                </ul>
                                <div className="container">
                                    <div className="row">


                                        <div className="tab-content ">
                                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                                <div className="product__details__tab__desc">
                                                    {/* <h6>Products Description</h6> */}
                                                    <h5 style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>Products Description</h5>

                                                    <p>{products?.ShortDescription}</p>
                                                    <div className="product-details-manage-container" dangerouslySetInnerHTML={{ __html: products?.FullDescription }} />
                                                </div>
                                            </div>
                                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                                <div className="product__details__tab__desc">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <h5 style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>Products Infomation</h5>
                                                            <table className="singleProductReturn">

                                                                <tr>
                                                                    <th>MenuFacturer</th>
                                                                    <td><span style={{ fontWeight: "bold" }}>{products?.Menufacturs?.name}</span>   </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Country Of Origin</th>
                                                                    <td>
                                                                        <span>India</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Item Model Dimension </th>
                                                                    <td>
                                                                        <span>{products?.Sku}</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Support</th>
                                                                    <td>
                                                                        <span>Product support included</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            {/* <caption>Additional Information</caption> */}
                                                            <h5 style={{ color: "black", fontWeight: "600", fontSize: "24px" }}>Additional Information</h5>

                                                            <table className="singleProductReturn">

                                                                <tr>
                                                                    <th>MenuFacturer</th>
                                                                    <td><span>{products?.Menufacturs?.address}</span>   </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Color</th>
                                                                    <td>
                                                                        <span>
                                                                            <div
                                                                                style={{
                                                                                    width: '25px',
                                                                                    height: '25px',
                                                                                    backgroundColor: `${products?.ProductColor ?? ""}`
                                                                                }}></div>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Size</th>
                                                                    <td>
                                                                        <span>{products?.ProductSize?.fullName}</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Weight</th>
                                                                    <td>
                                                                        <span>{products?.ProductWeight ?? ""} g</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th>Returns</th>
                                                                    <td>
                                                                        {products?.IsReturnAble ?
                                                                            <div>Returnable until 7 days</div> :
                                                                            <span style={{ fontWeight: "bolder", color: "red" }}>Return Not Available.</span>}
                                                                    </td>
                                                                </tr>
                                                                <tr>

                                                                    <th>Support</th>
                                                                    <td>
                                                                        <span>Product support included</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="tab-pane" id="tabs-3" role="tabpanel">
                                                <div className="product__details__tab__desc">
                                                    {
                                                        products?.ProductReviews && products?.ProductReviews.length > 0 ? (
                                                            <div>
                                                                {/* {products?.ProductReviews.map((item, ind) => ( */}
                                                                <h5 style={{ color: "black", fontWeight: "600", fontSize: "24px", borderBottom: "1px solid gray" }}>Customer Reviews</h5>

                                                                {products?.ProductReviews.slice(0, displayedProducts).map((item, ind) => (

                                                                    <div className='ProductReview mt-3' key={ind}>
                                                                        <ProductRatingStars Rating={item?.ReviewRating !== 0 || item.ReviewRating !== null ? item.ReviewRating : ""} />

                                                                        <h5> {item.ReviewerName}</h5>
                                                                        <p> {new Date(item.createdAt).toLocaleDateString()}</p>
                                                                        <p>{item.ReviewBody}</p>
                                                                    </div>
                                                                ))}
                                                                {products?.ProductReviews.length > displayedProducts && (
                                                                    <div className="text-center">
                                                                        <button onClick={loadMoreProducts} className="btn viewMore">
                                                                            View More <i className="ri-arrow-down-s-line"></i>
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ) : (
                                                            ""
                                                        )
                                                    }


                                                    {
                                                        products?.AllowCustomerReviews ?


                                                            <div className='mt-4'>
                                                                <h5 style={{ color: "black", fontWeight: "600", fontSize: "24px", borderBottom: "1px solid gray" }}>Write a Review</h5>
                                                                <form action="" onSubmit={SubmitReviewForm}>
                                                                    <div className="row submitProductReview ">
                                                                        <div className="col-lg-8 col-12">
                                                                            <div className="row">
                                                                                <div className="col-lg-12 col-12 mt-3">
                                                                                    <label htmlFor="">Rating</label>
                                                                                    <div className="star-rating-review-form">
                                                                                        {[1, 2, 3, 4, 5].map((num) => (
                                                                                            <span
                                                                                                key={num}
                                                                                                className={num == 1 || num <= ReviewRating ? 'star-filled' : 'star-empty'}
                                                                                                onClick={() => handleClick(num)}
                                                                                            >
                                                                                                &#9733;
                                                                                            </span>
                                                                                        ))}
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col-lg-6 col-12 mt-3">
                                                                                    <label htmlFor="">Name</label>
                                                                                    <input type="text" className='form-control' placeholder='Enter Your Name ' name='ReviewerName' onChange={(e) => setReviewerName(e.target.value)} />
                                                                                </div>
                                                                                <div className="col-lg-6 col-12 mt-3">
                                                                                    <label htmlFor="">Email</label>
                                                                                    <input type="email" className='form-control' placeholder='Enter Your Email ' name='ReviewerEmail' onChange={(e) => setReviewerEmail(e.target.value)} />
                                                                                </div>
                                                                                <div className="col-lg-12 col-12 mt-3">
                                                                                    <label htmlFor="">Review Title</label>
                                                                                    <input type="text" className='form-control' placeholder='Enter  your Review Subjects ' name='ReviewerTitle' onChange={(e) => setReviewTitle(e.target.value)} />
                                                                                </div>
                                                                                <div className="col-lg-12 col-12 mt-3">
                                                                                    <label htmlFor="">Body of Review(1000)</label>
                                                                                    <textarea type="text" className='form-control' placeholder='Write your Testimonial here  ' rows='5' name='ReviewerBody' onChange={(e) => setReviewBody(e.target.value)} />
                                                                                </div>

                                                                            </div>
                                                                            <input type="submit" value="Submit Review " className='btn  mt-3 reviewSubmitBtn' style={{ backgroundColor: "#002642", padding: "8px 10px", color: "white", fontWeight: "600" }} />
                                                                        </div>
                                                                        <div className="col-lg-4"></div>
                                                                    </div>
                                                                </form>


                                                            </div>

                                                            : <div>
                                                                <h2>Customer Not Allow ?? </h2>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="related-product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title related__product__title">
                                <h2>Related Product</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        {matchedProducts && matchedProducts.length > 0 ? (
                            <div>
                                {matchedProducts.slice(0, displayedProducts).map((item, ind) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={ind}>
                                        <div className="product__item">
                                            <div className="product__item__pic set-bg" data-setbg={item.imageUrl}>
                                                <ul className="product__item__pic__hover">
                                                    <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6><a href="#">{item.title}</a></h6>
                                                <h5>${item.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {matchedProducts.length > displayedProducts && (
                                    <div className="text-center">
                                        <button onClick={loadMoreProducts} className="btn viewMore">
                                            View More <i className="ri-arrow-down-s-line"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <p>No related products found.</p>
                        )}


                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section className="related-product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title related__product__title">
                                <h2>Related Product</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {matchedProducts && matchedProducts.length > 0 ? (
                            <div className='row'>
                                {matchedProducts.slice(0, displayedProducts).map((item, ind) => (
                                    <div className="col-lg-2 col-md-3 col-sm-6 col-6" key={ind}>
                                        <div className="product__item" >
                                            <Link to={`/product-details/${item._id}/${item.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(item.ProductName)}`} key={ind} className="latest-product__item" >
                                                <div className="product__item__pic set-bg" data-setbg={item?.ProductPictures[0].url}>
                                                    <img
                                                        src={item?.ProductPictures[0].url}
                                                        alt={item?.ProductName}
                                                        style={{ width: "100%", height: "100%", }}
                                                    />
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__item__text">
                                                    <h6><a href="#">{item.ProductName.slice(0, 80)}...</a></h6>
                                                    <h5>&#8377; {item.Price}</h5>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                                {matchedProducts.length > displayedProducts && (
                                    <div className="text-center">
                                        <button onClick={loadMoreProducts} className="btn viewMore">
                                            View More <i className="ri-arrow-down-s-line"></i>
                                        </button>
                                    </div>
                                )}

                            </div>
                        ) : (
                            <p>No related products found.</p>
                        )}
                    </div>
                </div>
            </section>


        </>
    )
}
