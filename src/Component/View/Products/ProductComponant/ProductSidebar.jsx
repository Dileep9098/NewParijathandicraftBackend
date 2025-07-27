import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllParentCategory, getAllSubCategory } from '../../../../Store/features/category/categorySlice';
import axiosInstance from '../../../../ApiHendler/axiosInstance';
import Config from '../../../Comman/Config';
import { GetDefaultCurrencySymbol } from '../../../../utils/CommonHelper';
import ProductRatingStars from './ProductRatingStars';
import { Link, useNavigate } from 'react-router-dom';
import { getAllProducts } from '../../../../Store/features/product/productSlice';
import { showErrorMsg } from '../../../../utils/ShowMessage';
const BASE_URL = import.meta.env.VITE_IMG_URL;


export default function ProductSidebar(props) {
  
    const [isCategoryOpen, setIsCategoryOpen] = useState(true);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isRattingOpen, setIsRattingOpen] = useState(false);

    const [isPopularTagOpen, setIsPopularTagOpen] = useState(false);
    const navigate = useNavigate()


    const [defaultCurrency, setDefaultCurrency] = useState(GetDefaultCurrencySymbol());

    const [radioChecked, setRadioChecked] = useState(null);
    const [PriceValuesArray, setPriceValuesArray] = useState(
        [
            {
                id: "10-100",
                name: `${defaultCurrency}10 - ${defaultCurrency}100`
            },
            {
                id: "100-200",
                name: `${defaultCurrency}100 - ${defaultCurrency}200`
            },
            {
                id: "200-300",
                name: `${defaultCurrency}200 - ${defaultCurrency}300`
            },
            {
                id: "300-400",
                name: `${defaultCurrency}300 - ${defaultCurrency}400`
            },
            {
                id: "400-500",
                name: `${defaultCurrency}400 - ${defaultCurrency}500`
            },
            {
                id: "500-600",
                name: `${defaultCurrency}500 - ${defaultCurrency}600`
            },
            {
                id: "600-1000000000",
                name: `Above ${defaultCurrency}600`
            }
        ]
    );

    const handleToggle = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const handleBrand = () => { setIsBrandOpen(!isBrandOpen) }
    const handleSize = () => { setIsSizeOpen(!isSizeOpen) }
    const handlePrice = () => { setIsPriceOpen(!isPriceOpen) }
    const handleRatting = () => { setIsRattingOpen(!isRattingOpen) }
    const handlePopular = () => { setIsPopularTagOpen(!isPopularTagOpen) }



    // Get All Categrory 

    const { childCategories, parentCategories } = useSelector((state) => state.category)
    // const { isLoading, products, productCount } = useSelector((state) => state.product)
    const dispatch = useDispatch();
    const [allMenufactures, setAllMenufactures] = useState([])
    const [allProductSize, setAllProductSize] = useState([])
    const [allLatestProduct, setAllLatestProduct] = useState([])
    const [activeLatestProducts, setActiveLatestProducts] = useState([]);


    useEffect(() => {
        dispatch(getAllSubCategory());
        dispatch(getAllParentCategory());

        const fatchData = async () => {
            try {
                // debugger
                const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_MENUFACTURES"], { withCredentials: true })
                const productSize = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCT_SIZE"], { withCredentials: true })
                const getAllLetestProduct = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true });


                if (response.data.success) {
                    setAllMenufactures(response.data.menufactures)
                }
                if (productSize.data.success) {
                    setAllProductSize(productSize.data.ProdcutSizes)
                }
                if (getAllLetestProduct.data.success) {
                    setAllLatestProduct(getAllLetestProduct.data.allProductsFeatures)
                    setActiveLatestProducts(response.data.products.filter(product => product.IsActive));

                }
                else {
                    showErrorMsg(response.data.message)
                }

            } catch (error) {
                showErrorMsg(error);

            }
        }

        fatchData();
    }, [dispatch]);


    const clearAllFilter = (e) => {
        e.preventDefault();
        // navigate("/all-product/0/all-categories")
        window.location.reload();

    }


   

    const activeProducts = Array.isArray(allLatestProduct) ? allLatestProduct.filter(product => product.IsActive ) : [];
    // console.log("Letest", activeProducts)

    const chunkProducts = (allLatestProduct, chunkSize) => {
        let result = [];
        for (let i = 0; i < allLatestProduct.length; i += chunkSize) {
            result.push(allLatestProduct.slice(i, i + chunkSize));
        }
        return result;
    };

    // Split the active products into rows of 3 products each
    const productChunks = chunkProducts(activeProducts, 4);
 
    useEffect(() => {
        // Initialize Owl Carousel when the component mounts or productChunks changes
        $('.latest-product__slider').owlCarousel({
            loop: true,               // Infinite loop
            margin: 10,               // Space between items
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            smartSpeed: 1000,         // Show next/prev buttons
            responsive: {
                0: {
                    items: 1,        // Show 1 item on small screens
                },
                600: {
                    items: 1,        // Show 1 item on medium screens
                },
                1000: {
                    items: 1,        // Show 1 item on large screens
                },
            },
        });
    
        // Cleanup Owl Carousel on unmount
        return () => {
            $('.latest-product__slider').owlCarousel('destroy');
        };
    }, [productChunks]); // Add productChunks as a dependency
    

    return (
        <>
            <div className="sidebar sidebar2">
                <div className="sidebar__item CategoryData">
                    <div className="LeftSideCategory" onClick={handleToggle}>
                        <h5 style={{ cursor: 'pointer' }}>
                            Category
                        </h5>
                        <i
                            className={`ri-arrow-right-s-fill ${isCategoryOpen ? 'arrowopen' : ''}`}
                            style={{ transition: 'transform 0.3s ease' }}
                        ></i>
                    </div>

                    {
                        parentCategories && parentCategories.length > 0 ? (
                            parentCategories.map((category, index) => (
                                <div className={`dropdown-content ${isCategoryOpen ? 'open' : ''}`} key={index}>
                                    <p id='ParentCategoryName'>{category?.Name}</p>

                                    {
                                        childCategories && childCategories.length > 0 ? (
                                            // Map through childCategories and filter based on parent
                                            childCategories.filter(child => child.parentCategory?._id === category._id).length > 0 ? (
                                                childCategories.filter(child => child.parentCategory?._id === category._id).map((childCategory, ind) => (
                                                    <div className="form-check" key={ind}>
                                                        <input className="form-check-input" type="checkbox" id={`category_${childCategory._id}`}
                                                            onChange={(e) => {
                                                                props.setFilterValueInParent(e, childCategory._id, "category")

                                                            }}
                                                        />
                                                        <label className="form-check-label" htmlFor={`category_${childCategory._id}`}>
                                                            {childCategory?.Name}
                                                        </label>
                                                    </div>
                                                ))
                                            ) : (
                                                <span id='NotVailabel'>Not Available !</span>
                                            )
                                        ) : (
                                            <p>Not Available</p> 
                                        )
                                    }
                                </div>
                            ))
                        ) : ""
                    }

                </div>


                <div className="sidebar__item">
                    <div className="LeftSideCategory" onClick={handleBrand}>
                        <h5 style={{ cursor: 'pointer' }}>
                            Brand
                        </h5>
                        <i
                            className={`ri-arrow-right-s-fill ${isBrandOpen ? 'arrowopen' : ''}`}
                            style={{ transition: 'transform 0.3s ease' }}
                        ></i>
                    </div>
                    <div className={`dropdown-content ${isBrandOpen ? 'open' : ''}`}>
                        {
                            allMenufactures && allMenufactures.length > 0 ? (
                                allMenufactures.map((manufactures, ind) => (
                                    <div className="form-check" key={ind}>
                                        <input className="form-check-input" type="checkbox" id={`brand_${manufactures._id}`} onChange={(e) => {
                                            props.setFilterValueInParent(e, manufactures._id, "brand")
                                        }} />
                                        <label className="form-check-label" htmlFor={`brand_${manufactures._id}`}>
                                            {manufactures.name}
                                        </label>
                                    </div>
                                )))
                                : ""
                        }



                    </div>
                </div>

                <div className="sidebar__item">
                    <div className="LeftSideCategory" onClick={handleSize}>
                        <h5 style={{ cursor: 'pointer' }}>
                            size
                        </h5>
                        <i
                            className={`ri-arrow-right-s-fill ${isSizeOpen ? 'arrowopen' : ''}`}
                            style={{ transition: 'transform 0.3s ease' }}
                        ></i>
                    </div>
                    <div className={`dropdown-content ${isSizeOpen ? 'open' : ''}`}>
                        {
                            allProductSize && allProductSize.length > 0 ? (
                                allProductSize.map((productSize, ind) => (
                                    <div className="form-check" key={ind}>
                                        <input className="form-check-input" type="checkbox" id={`size${productSize._id}`} onChange={(e) => {
                                            props.setFilterValueInParent(e, productSize?._id, "size")
                                        }} />
                                        <label className="form-check-label" htmlFor={`size${productSize._id}`}>
                                            {productSize?.name}
                                        </label>
                                    </div>
                                )))
                                : ""
                        }



                    </div>
                </div>
                {PriceValuesArray != undefined && PriceValuesArray != null && PriceValuesArray.length > 0
                    ?
                    <div className="sidebar__item">


                        <div className="LeftSideCategory" onClick={handlePrice}>
                            <h5 style={{ cursor: 'pointer' }}>
                                Price
                            </h5>
                            <i
                                className={`ri-arrow-right-s-fill ${isPriceOpen ? 'arrowopen' : ''}`}
                                style={{ transition: 'transform 0.3s ease' }}
                            ></i>
                        </div>
                        <div className={`dropdown-content ${isPriceOpen ? 'open' : ''}`}>
                            {
                                PriceValuesArray?.map((item, idx) =>
                                    <div className="form-check" key={idx}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id={`Price_${item.id}`}
                                            checked={radioChecked === item.id} 
                                            onChange={(e) => {
                                                props.setFilterValueInParent(e, item.id, "price");
                                                setRadioChecked(item.id); 
                                            }}
                                        />
                                        <label className="form-check-label" htmlFor={`Price_${item.id}`}>
                                            {item.name}
                                        </label>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                    : <></>}


                <div className="sidebar__item">
                    <div className="LeftSideCategory" onClick={handleRatting}>
                        <h5 style={{ cursor: 'pointer' }}>
                            Ratting
                        </h5>
                        <i
                            className={`ri-arrow-right-s-fill ${isRattingOpen ? 'arrowopen' : ''}`}
                            style={{ transition: 'transform 0.3s ease' }}
                        ></i>
                    </div>
                    <div className={`dropdown-content ${isRattingOpen ? 'open' : ''}`}>
                        <div className="custom-control custom-checkbox collection-filter-checkbox" >
                            <Link to="#"
                                onClick={(e) => { props.setFilterValueInParent(e, 5, "rating"); }}>
                                <ProductRatingStars Rating={5} />
                            </Link>
                        </div>
                        <div className="custom-control custom-checkbox collection-filter-checkbox" >
                            <Link to="#"
                                onClick={(e) => { props.setFilterValueInParent(e, 4, "rating"); }}
                            >
                                <ProductRatingStars Rating={4} />
                            </Link>
                        </div>
                        <div className="custom-control custom-checkbox collection-filter-checkbox" >
                            <Link to="#"
                                onClick={(e) => { props.setFilterValueInParent(e, 3, "rating"); }}
                            >
                                <ProductRatingStars Rating={3} />
                            </Link>
                        </div>
                        <div className="custom-control custom-checkbox collection-filter-checkbox" >
                            <Link to="#"
                                onClick={(e) => { props.setFilterValueInParent(e, 2, "rating"); }}
                            >
                                <ProductRatingStars Rating={2} />
                            </Link>
                        </div>


                    </div>
                </div>

                <div className="Clera-all-filter">

                    <p className='text-light' style={{ cursor: "pointer" }} onClick={clearAllFilter}>
                        <i className="ri-loop-right-line me-2"></i>Clear All Filter
                    </p>
                </div>

                <div className="sidebar__item">
                    <div className="latest-product__text">
                    <div className="letest-section-title">

                        <h4>Latest Products</h4>
                        </div>
                        <div className="latest-product__slider owl-carousel">
                            {/* Loop through productChunks and render each chunk as a row */}
                            {productChunks.map((chunk, index) => (
                                <div key={index} className="latest-prdouct__slider__item">
                                    {/* Loop through each product in the chunk */}
                                    {chunk.map((product, productIndex) => (
                                        <a href="#" key={productIndex} className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src={`${BASE_URL}/${product.ProductPictures[0]}`} alt={product.ProductName} />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>{product.ProductName.slice(0,50)}...</h6>
                                                {/* <span>&#8377; {product.Price}</span> */}
                                                <span>&#8377;{product.Price} <sub><del>{product.OldPrice}</del></sub></span>

                                            </div>
                                        </a>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}










// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllParentCategory, getAllSubCategory } from '../../../../Store/features/category/categorySlice';
// import axiosInstance from '../../../../ApiHendler/axiosInstance';
// import Config from '../../../Comman/Config';
// import { GetDefaultCurrencySymbol } from '../../../../utils/CommonHelper';
// import ProductRatingStars from './ProductRatingStars';
// import { Link, useNavigate } from 'react-router-dom';
// import { getAllProducts } from '../../../../Store/features/product/productSlice';

// export default function ProductSidebar(props) {
  
//     const [isCategoryOpen, setIsCategoryOpen] = useState(true);
//     const [isBrandOpen, setIsBrandOpen] = useState(false);
//     const [isSizeOpen, setIsSizeOpen] = useState(false);
//     const [isPriceOpen, setIsPriceOpen] = useState(false);
//     const [isRattingOpen, setIsRattingOpen] = useState(false);
//     const [isPopularTagOpen, setIsPopularTagOpen] = useState(false);
//     const navigate = useNavigate();

//     const [defaultCurrency, setDefaultCurrency] = useState(GetDefaultCurrencySymbol());
//     const [radioChecked, setRadioChecked] = useState(null);
//     const [PriceValuesArray, setPriceValuesArray] = useState(
//         [
//             { id: "10-100", name: `${defaultCurrency}10 - ${defaultCurrency}100` },
//             { id: "100-200", name: `${defaultCurrency}100 - ${defaultCurrency}200` },
//             { id: "200-300", name: `${defaultCurrency}200 - ${defaultCurrency}300` },
//             { id: "300-400", name: `${defaultCurrency}300 - ${defaultCurrency}400` },
//             { id: "400-500", name: `${defaultCurrency}400 - ${defaultCurrency}500` },
//             { id: "500-600", name: `${defaultCurrency}500 - ${defaultCurrency}600` },
//             { id: "600-1000000000", name: `Above ${defaultCurrency}600` }
//         ]
//     );

//     const [selectedCategories, setSelectedCategories] = useState({});
//     const { childCategories, parentCategories } = useSelector((state) => state.category);
//     const { isLoading, products, productCount } = useSelector((state) => state.product);
//     const dispatch = useDispatch();
//     const [allMenufactures, setAllMenufactures] = useState([]);
//     const [allProductSize, setAllProductSize] = useState([]);

//     useEffect(() => {
//         dispatch(getAllSubCategory());
//         dispatch(getAllParentCategory());

//         const fetchData = async () => {
//             try {
//                 const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_MENUFACTURES"], { withCredentials: true });
//                 const productSize = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCT_SIZE"], { withCredentials: true });

//                 if (response.data.success) {
//                     setAllMenufactures(response.data.menufactures);
//                 }
//                 if (productSize.data.success) {
//                     setAllProductSize(productSize.data.ProdcutSizes);
//                 } else {
//                     showErrorMsg(response.data.message);
//                 }
//             } catch (error) {
//                 showErrorMsg(error.response.data.message);
//             }
//         };

//         fetchData();
//     }, [dispatch]);

//     const handleCategoryChange = (e, childCategoryId) => {
//         const { checked } = e.target;
//         setSelectedCategories((prevSelectedCategories) => ({
//             ...prevSelectedCategories,
//             [childCategoryId]: checked,
//         }));
//         props.setFilterValueInParent(e, childCategoryId, "category");
//     };

//     const handlePriceChange = (e, item) => {
//         setRadioChecked(item.id);
//         props.setFilterValueInParent(e, item.id, "price");
//     };

//     const clearAllFilter = (e) => {
//         e.preventDefault();
//         setSelectedCategories({});
//         setRadioChecked(null);
//         // You can also dispatch actions to reset the filters if necessary
//     };

//     const chunkProducts = (products, chunkSize) => {
//         let result = [];
//         for (let i = 0; i < products.length; i += chunkSize) {
//             result.push(products.slice(i, i + chunkSize));
//         }
//         return result;
//     };

//     const activeProducts = Array.isArray(products) ? products.filter(product => product.IsActive && product.MarkAsNew) : [];
//     const productChunks = chunkProducts(activeProducts, 4);

//     const handleToggle = () => {
//         setIsCategoryOpen(!isCategoryOpen);
//     };

//     const handleBrand = () => { setIsBrandOpen(!isBrandOpen); }
//     const handleSize = () => { setIsSizeOpen(!isSizeOpen); }
//     const handlePrice = () => { setIsPriceOpen(!isPriceOpen); }
//     const handleRatting = () => { setIsRattingOpen(!isRattingOpen); }
//     const handlePopular = () => { setIsPopularTagOpen(!isPopularTagOpen); }

//     return (
//         <>
//             <div className="sidebar sidebar2">
//                 {/* Category Filter */}
//                 <div className="sidebar__item CategoryData">
//                     <div className="LeftSideCategory" onClick={handleToggle}>
//                         <h5 style={{ cursor: 'pointer' }}>
//                             Category
//                         </h5>
//                         <i className={`ri-arrow-right-s-fill ${isCategoryOpen ? 'arrowopen' : ''}`} style={{ transition: 'transform 0.3s ease' }}></i>
//                     </div>
//                     {
//                         parentCategories && parentCategories.length > 0 &&
//                         parentCategories.map((category, index) => (
//                             <div className={`dropdown-content ${isCategoryOpen ? 'open' : ''}`} key={index}>
//                                 <p id='ParentCategoryName'>{category?.Name}</p>

//                                 {childCategories && childCategories.length > 0 &&
//                                     childCategories.filter(child => child.parentCategory?._id === category._id).length > 0 ?
//                                     childCategories.filter(child => child.parentCategory?._id === category._id).map((childCategory, ind) => (
//                                         <div className="form-check" key={ind}>
//                                             <input
//                                                 className="form-check-input"
//                                                 type="checkbox"
//                                                 id={`category_${childCategory._id}`}
//                                                 checked={selectedCategories[childCategory._id] || false}
//                                                 onChange={(e) => handleCategoryChange(e, childCategory._id)}
//                                             />
//                                             <label className="form-check-label" htmlFor={`category_${childCategory._id}`}>
//                                                 {childCategory?.Name}
//                                             </label>
//                                         </div>
//                                     ))
//                                     : <span id='NotAvailable'>Not Available !</span>
//                                 }
//                             </div>
//                         ))
//                     }
//                 </div>

//                 {/* Brand Filter */}
//                 <div className="sidebar__item">
//                     <div className="LeftSideCategory" onClick={handleBrand}>
//                         <h5 style={{ cursor: 'pointer' }}>Brand</h5>
//                         <i className={`ri-arrow-right-s-fill ${isBrandOpen ? 'arrowopen' : ''}`} style={{ transition: 'transform 0.3s ease' }}></i>
//                     </div>
//                     <div className={`dropdown-content ${isBrandOpen ? 'open' : ''}`}>
//                         {allMenufactures && allMenufactures.length > 0 ?
//                             allMenufactures.map((manufactures, ind) => (
//                                 <div className="form-check" key={ind}>
//                                     <input className="form-check-input" type="checkbox" id={manufactures._id} onChange={(e) => props.setFilterValueInParent(e, manufactures._id, "brand")} />
//                                     <label className="form-check-label" htmlFor={manufactures._id}>
//                                         {manufactures.name}
//                                     </label>
//                                 </div>
//                             )) : ""}
//                     </div>
//                 </div>

//                 {/* Size Filter */}
//                 <div className="sidebar__item">
//                     <div className="LeftSideCategory" onClick={handleSize}>
//                         <h5 style={{ cursor: 'pointer' }}>Size</h5>
//                         <i className={`ri-arrow-right-s-fill ${isSizeOpen ? 'arrowopen' : ''}`} style={{ transition: 'transform 0.3s ease' }}></i>
//                     </div>
//                     <div className={`dropdown-content ${isSizeOpen ? 'open' : ''}`}>
//                         {allProductSize && allProductSize.length > 0 ?
//                             allProductSize.map((productSize, ind) => (
//                                 <div className="form-check" key={ind}>
//                                     <input
//                                         className="form-check-input"
//                                         type="checkbox"
//                                         id={productSize?._id}
//                                         onChange={(e) => props.setFilterValueInParent(e, productSize?._id, "size")}
//                                     />
//                                     <label className="form-check-label" htmlFor={productSize?._id}>
//                                         {productSize?.name}
//                                     </label>
//                                 </div>
//                             )) : ""}
//                     </div>
//                 </div>

//                 {/* Price Filter */}
//                 {PriceValuesArray.length > 0 && (
//                     <div className="sidebar__item">
//                         <div className="LeftSideCategory" onClick={handlePrice}>
//                             <h5 style={{ cursor: 'pointer' }}>Price</h5>
//                             <i className={`ri-arrow-right-s-fill ${isPriceOpen ? 'arrowopen' : ''}`} style={{ transition: 'transform 0.3s ease' }}></i>
//                         </div>
//                         <div className={`dropdown-content ${isPriceOpen ? 'open' : ''}`}>
//                             {PriceValuesArray.map((item) => (
//                                 <div className="form-check" key={item.id}>
//                                     <input
//                                         className="form-check-input"
//                                         type="radio"
//                                         id={item.id}
//                                         checked={radioChecked === item.id}
//                                         onChange={(e) => handlePriceChange(e, item)}
//                                     />
//                                     <label className="form-check-label" htmlFor={item.id}>
//                                         {item.name}
//                                     </label>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {/* Clear Filters Button */}
//                 <div className="sidebar__item">
//                     <button className="btn btn-primary w-100" onClick={clearAllFilter}>
//                         Clear Filters
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }


// /all-product/0/all-categories


{/* <div className="sidebar__item">
                    <div className="LeftSideCategory" onClick={handlePopular}>
                        <h5 style={{ cursor: 'pointer' }}>
                            Popular tag
                        </h5>
                        <i
                            className={`ri-arrow-right-s-fill ${isPopularTagOpen ? 'arrowopen' : ''}`}
                            style={{ transition: 'transform 0.3s ease' }}
                        ></i>
                    </div>
                    <div className={`dropdown-content ${isPopularTagOpen ? 'open' : ''}`}>
                        <p>Statues</p>


                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="flexCheckChecked" />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Checked checkbox
                            </label>
                        </div>

                    </div>
                </div> */}