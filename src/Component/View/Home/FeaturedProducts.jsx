


// import React, { useEffect, useState } from 'react'
// import Config from '../../Comman/Config';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import { Link } from 'react-router-dom';

// export default function FeaturedProducts() {

//     const [allProduct, setAllProduct] = useState([]);
//     const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products
//     const [activeFilter, setActiveFilter] = useState("*"); // State to track the active filter

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true });
//                 if (response.data.success) {
//                     setAllProduct(response.data.allProductsFeatures);
//                     setFilteredProducts(response.data.allProductsFeatures); // Set all products initially
//                 } else {
//                     showErrorMsg(response.data.message);
//                 }
//             } catch (error) {
//                 showErrorMsg(error.response.data.message);
//             }
//         };
//         fetchData();
//     }, []);

//     console.log(allProduct)
//     const filterProducts = (filter) => {
//         setActiveFilter(filter); // Update the active filter

//         if (filter === "*") {
//             setFilteredProducts(allProduct); // Show all products
//         } else {
//             const filtered = allProduct.filter(product => {
//                 console.log(product.ProductsCategoriesMappings); // Log to see the category data
//                 return product.ProductsCategoriesMappings.some(category => 
//                     category.ParentCategoryName && category.ParentCategoryName.toLowerCase() === filter.toLowerCase()
//                 );
//             });
//             setFilteredProducts(filtered); // Filter products by category
//         }
//     };




//     return (
//         <>
//             <section className="featured spad">
//                 <div className="container-fluid">
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="section-title">
//                                 <h2>Featured Product</h2>
//                             </div>
//                             <div className="featured__controls">
//                                 <ul>
//                                     <li
//                                         className={activeFilter === "*" ? "active" : ""}
//                                         onClick={() => filterProducts("*")}
//                                     >
//                                         All
//                                     </li>
//                                     <li
//                                         className={activeFilter === "Statues" ? "active" : ""}
//                                         onClick={() => filterProducts("Statues")}
//                                     >
//                                         Statues
//                                     </li>
//                                     <li
//                                         className={activeFilter === "Religious" ? "active" : ""}
//                                         onClick={() => filterProducts("Religious")}
//                                     >
//                                         Religious
//                                     </li>
//                                     <li
//                                         className={activeFilter === "Home Decor" ? "active" : ""}
//                                         onClick={() => filterProducts("Home Decor")}
//                                     >
//                                         Home Decor
//                                     </li>
//                                     <li
//                                         className={activeFilter === "Home & Kitchen" ? "active" : ""}
//                                         onClick={() => filterProducts("Home & Kitchen")}
//                                     >
//                                         Home & Kitchen
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="container">
//                         <div className="row featured__filter">
//                             {
//                                 filteredProducts && filteredProducts.length > 0 ?
//                                     filteredProducts.slice(0,10).map((item, ind) => (
//                                         <div className={`col-lg-3 col-md-4 col-sm-6 mix ${item.category}`} key={ind}>
//                                             <div className="featured__item">
//                                                 <div className="featured__item__pic set-bg" style={{ backgroundImage: `url('/image/products/${item?.ProductPictures[0]}')` }}>
//                                                     <ul className="featured__item__pic__hover">
//                                                         <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
//                                                         <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
//                                                         <li><Link to="#"><i className="fa fa-shopping-cart"></i></Link></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div className="featured__item__text">
//                                                     <h6><Link to="#">{(item?.ProductName).slice(0, 30)}</Link></h6>
//                                                     <h5>&#8377; {item?.Price}</h5>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))
//                                     : <div>No products available</div>
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }


import React, { useEffect, useState } from 'react';
import Config from '../../Comman/Config';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import { Link } from 'react-router-dom';
import "./featured.css"
import { useDispatch } from 'react-redux';
import { showErrorMsg, showInfoMsg } from '../../../utils/ShowMessage';
import { AddCustomerWishList, AddProductToCart } from '../../../utils/CartHelper';
import { setCustomerCart, SetTotalCartItems } from '../../../Store/features/cartSlice/cartSlice';

const BASE_URL = import.meta.env.VITE_IMG_URL;

export default function FeaturedProducts(props) {
    const [allProduct, setAllProduct] = useState(props.AllProducts || []); // default to empty array
    const [filteredProducts, setFilteredProducts] = useState(props.AllProducts || []); // default to empty array
    const [activeFilter, setActiveFilter] = useState("*");
    const [displayedProducts, setDisplayedProducts] = useState(10);
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.AllProducts && props.AllProducts.length) {
            setAllProduct(props.AllProducts);
            setFilteredProducts(props.AllProducts);
        }
    }, [props.AllProducts]);

    const filterProducts = (filter) => {
        setActiveFilter(filter);
        if (filter === "*") {
            setFilteredProducts(allProduct);
        } else {
            const filtered = allProduct.filter(product =>
                product.ProductsCategoriesMappings.some(category =>
                    category.Name && category.Name.toLowerCase() === filter.toLowerCase()
                )
            );
            setFilteredProducts(filtered);
        }
    };

    const loadMoreProducts = () => {
        setDisplayedProducts(displayedProducts + 10); // Load 10 more products
    };

    const HandleAddToCart = ({ id, ProductName, Price, IsShippingFree, ShippingCharge, OrderMaximumQuantity, StockQuantity, ProductPictures, Tax }) => {
        if (!id) {
            showErrorMsg("Invalid product!");
            return false;
        }

        if (StockQuantity && StockQuantity < 1) {
            showInfoMsg("Product is out of stock. Can't add it to the cart!");
            return false;
        }

        const quentyProduct = 1; // Set to 1 for now

        let defaultImage = ProductPictures;

        let cartItems = AddProductToCart(id, quentyProduct, defaultImage, Price, ProductName, IsShippingFree, ShippingCharge, OrderMaximumQuantity, Tax);
        dispatch(setCustomerCart(cartItems));
        dispatch(SetTotalCartItems(JSON.parse(cartItems).length));
    };

    const HandleAddToWishList = ({ ProductId, ProductName, Price, IsShippingFree, ShippingCharge, OrderMaximumQuantity, StockQuantity, ProductPictures, DiscountPrice, CouponCode }) => {
        let customerWishList = AddCustomerWishList(ProductId, ProductName, Price, IsShippingFree, ShippingCharge, OrderMaximumQuantity, StockQuantity, ProductPictures, DiscountPrice, CouponCode);
        localStorage.setItem("customerWishList", customerWishList);
    };

    return (
        <section className="featured">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div className="featured__controls">
                            <ul>
                                <li id='featured__controls_list' className={activeFilter === "*" ? "active" : ""} onClick={() => filterProducts("*")}>All</li>
                                <li id='featured__controls_list' className={activeFilter === "Statues" ? "active" : ""} onClick={() => filterProducts("Statues")}>Statues</li>
                                <li id='featured__controls_list' className={activeFilter === "Religious" ? "active" : ""} onClick={() => filterProducts("Religious")}>Religious</li>
                                <li id='featured__controls_list' className={activeFilter === "Outdoor Indoor Decor" ? "active" : ""} onClick={() => filterProducts("Outdoor Indoor Decor")}>Outdoor Indoor Decor</li>
                                <li id='featured__controls_list' className={activeFilter === "Home & Kitchen" ? "active" : ""} onClick={() => filterProducts("Home & Kitchen")}>Home & Kitchen</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row featured__filter">
                        {filteredProducts.slice(0, displayedProducts).map((item, ind) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 mix" key={ind}>
                                <div className="featured__item">
                                    <div className="featured__item__pic">
                                        <img
                                            src={`${BASE_URL}/${item?.ProductPictures[0]}`}
                                            alt={item?.ProductName}
                                            style={{ width: "100%", height: "100%" }}
                                        />
                                        <ul className="featured__item__pic__hover">
                                            <li><Link to="#" onClick={(e) => {
                                                e.preventDefault();
                                                HandleAddToWishList({
                                                    ProductId: item._id,
                                                    ProductName: item.ProductName,
                                                    Price: item.Price,
                                                    IsShippingFree: item.IsShippingFree,
                                                    ShippingCharge: item.ShippingCharge,
                                                    OrderMaximumQuantity: item.OrderMaximumQuantity,
                                                    StockQuantity: item.StockQuantity,
                                                    ProductPictures: item.ProductPictures[0],
                                                    DiscountPrice: item.DiscountProductsMappings.DiscountValue,
                                                    CouponCode: item.DiscountProductsMappings.couponCode,
                                                });
                                            }}><i className="fa fa-heart"></i></Link></li>
                                            <li><Link to="#"><i className="fa fa-retweet"></i></Link></li>
                                            <li><Link to="#" onClick={(e) => {
                                                e.preventDefault();
                                                HandleAddToCart({
                                                    id: item._id,
                                                    ProductName: item.ProductName,
                                                    Price: item.Price,
                                                    Tax: item.Tax ? item.Tax.tax_rate : 0,
                                                    IsShippingFree: item.IsShippingFree,
                                                    ShippingCharge: item.ShippingCharge,
                                                    OrderMaximumQuantity: item.OrderMaximumQuantity,
                                                    StockQuantity: item.StockQuantity,
                                                    ProductPictures: item.ProductPictures[0],
                                                });
                                            }}><i className="fa fa-shopping-cart"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6><Link to="#">{(item?.ProductName).slice(0, 30)}</Link></h6>
                                        <h5>&#8377;{item?.Price} <sub><del>{item?.OldPrice}</del></sub></h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Load More Button */}
                {filteredProducts.length > displayedProducts && (
                    <div className="text-center">
                        <button onClick={loadMoreProducts} className="btn viewMore">
                            View More <i className="ri-arrow-down-s-line"></i>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
