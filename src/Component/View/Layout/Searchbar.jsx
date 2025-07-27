// import React from 'react'

// export default function Searchbar() {
//     return (
//         <>

//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <div className="hero__categories">
//                                 <div className="hero__categories__all">
//                                     <i className="fa fa-bars"></i>
//                                     <span>All departments</span>
//                                 </div>
//                                 <ul >
//                                     <li><a href="#">Fresh Meat</a></li>
//                                     <li><a href="#">Vegetables</a></li>
//                                     <li><a href="#">Fruit & Nut Gifts</a></li>
//                                     <li><a href="#">Fresh Berries</a></li>
//                                     <li><a href="#">Ocean Foods</a></li>
//                                     <li><a href="#">Butter & Eggs</a></li>
//                                     <li><a href="#">Fastfood</a></li>
//                                     <li><a href="#">Fresh Onion</a></li>
//                                     <li><a href="#">Papayaya & Crisps</a></li>
//                                     <li><a href="#">Oatmeal</a></li>
//                                     <li><a href="#">Fresh Bananas</a></li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div className="col-lg-9">
//                             <div className="hero__search">
//                                 <div className="hero__search__form">
//                                     <form action="#">
//                                         <div className="hero__search__categories">
//                                             All Categories
//                                             <span className="arrow_carrot-down"></span>
//                                         </div>
//                                         <input type="text" placeholder="What do yo u need?" />
//                                         <button type="submit" className="site-btn">SEARCH</button>
//                                     </form>
//                                 </div>
//                                 <div className="hero__search__phone">
//                                     <div className="hero__search__phone__icon">
//                                         <i className="fa fa-phone"></i>
//                                     </div>
//                                     <div className="hero__search__phone__text">
//                                         <h5>+65 11.188.888</h5>
//                                         <span>support 24/7 time</span>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//         </>
//     )
// }


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSubCategory } from '../../../Store/features/category/categorySlice';
import { getAllProducts } from '../../../Store/features/product/productSlice';
const BASE_URL = import.meta.env.VITE_IMG_URL;


export default function Searchbar() {

    const { isLoading, childCategories } = useSelector((state) => state.category)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllSubCategory())
        // console.log(childCategories)

    }, [])


    const [search,setSearch]=useState("")
   
    const handleSearch = (e) => {
        e.preventDefault();
        if (search && search.length > 1) {
            const categoryId = 0;  // Example category_id
            const categoryName = "all-categories";  // Example category_name
            
            // Replace spaces with '+' in the search term
            const formattedSearchTerm = search.replace(/\s+/g, "+");
            
            // Create the correct URL with query parameters
            const url = `/all-product/${categoryId}/${categoryName}?SearchTerm=${formattedSearchTerm}`;
            window.location.href = url;
        } else {
            showInfoMsg('Enter something to search');
        }
    };
    
    
     

    return (
        <>
            <div className="container hero__categories1">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="dropdown">
                                {/* Dropdown button */}
                                <div
                                    className=" hero__categories__all"

                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fa fa-bars"></i>
                                    <span> Shop By Category</span>
                                </div>




                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ height: "500px", overflow: "auto" }}>
                                    {childCategories && childCategories.length > 0 &&
                                        childCategories.map((category, ind) => (
                                            <div key={ind}>
                                                {
                                                    category?.file ?
                                                        <li >
                                                            <Link to={`/all-product/${category?.Name}`} className="dropdown-item" href="#">
                                                                <img src={`${BASE_URL}/${category?.file}`} alt={category?.Name} style={{ width: "50px", height: "50px", borderRadius: "50%", border: "2px solid gray", padding: "2px", marginLeft: "10px", marginRight: "20px" }} />
                                                                {category?.Name}
                                                            </Link>
                                                        </li>
                                                        : ""
                                                }

                                            </div>
                                        ))
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form onSubmit={handleSearch}>
                                    <div className="hero__search__categories">
                                        All Categories
                                        <span className="arrow_carrot-down"></span>
                                        
                                    </div>

                                    <input type="search" placeholder="What do you need?" onChange={(e)=>setSearch(e.target.value)} value={search} />
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone mainColor"></i>
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>+91-9953567333 </h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getAllSubCategory } from '../../../Store/features/category/categorySlice';

// export default function Searchbar() {

//     const { isLoading, childCategories } = useSelector((state) => state.category);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getAllSubCategory());
//         console.log(childCategories);
//     }, [dispatch]);

//     return (
//         <>
//             <div className="container hero__categories1">
//                 <div className="row">
//                     <div className="col-lg-3">
//                         <div className="hero__categories">
//                             <div className="dropdown">
//                                 {/* Dropdown button */}
//                                 <div
//                                     className="hero__categories__all"
//                                     id="dropdownMenuButton"
//                                     data-bs-toggle="dropdown"
//                                     aria-expanded="false"
//                                 >
//                                     <i className="fa fa-bars"></i>
//                                     <span> Shop By Category</span>
//                                 </div>

//                                 {/* Dropdown menu */}
//                                 <ul
//                                     className="dropdown-menu"
//                                     aria-labelledby="dropdownMenuButton"
//                                     style={{
//                                         maxHeight: "400px",
//                                         overflowY: "auto",
//                                         position: "absolute",
//                                         width: "100%",
//                                         zIndex: 9999, // Ensure it's on top
//                                     }}
//                                 >
//                                     {childCategories &&
//                                         childCategories.length > 0 &&
//                                         childCategories.map((category, ind) => (
//                                             category?.file && (
//                                                 <li key={ind}>
//                                                     <Link
//                                                         to={`/all-product/${category?.Name}`}
//                                                         className="dropdown-item"
//                                                     >
//                                                         <img
//                                                             src={`/image/category/${category?.file}`}
//                                                             alt={category?.Name}
//                                                             style={{
//                                                                 width: "50px",
//                                                                 height: "50px",
//                                                                 borderRadius: "50%",
//                                                                 border: "2px solid gray",
//                                                                 padding: "2px",
//                                                                 marginLeft: "10px",
//                                                                 marginRight: "20px",
//                                                             }}
//                                                         />
//                                                         {category?.Name}
//                                                     </Link>
//                                                 </li>
//                                             )
//                                         ))}
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-lg-9">
//                         <div className="hero__search">
//                             <div className="hero__search__form">
//                                 <form action="#">
//                                     <div
//                                         className="hero__search__categories"
//                                         id="dropdownMenuButton"
//                                         data-bs-toggle="dropdown"
//                                         aria-expanded="false"
//                                         style={{
//                                             position: "relative", // Ensure dropdown works correctly
//                                         }}
//                                     >
//                                         All Categories
//                                         <span className="arrow_carrot-down"></span>
//                                         <ul
//                                             className="dropdown-menu"
//                                             aria-labelledby="dropdownMenuButton"
//                                             style={{
//                                                 maxHeight: "400px",
//                                                 overflowY: "auto",
//                                                 position: "absolute",
//                                                 width: "100%",
//                                                 zIndex: 9999,
//                                             }}
//                                         >
//                                             {childCategories &&
//                                                 childCategories.length > 0 &&
//                                                 childCategories.map((category, ind) => (
//                                                     category?.file && (
//                                                         <li key={ind}>
//                                                             <Link
//                                                                 to={`/all-product/${category?.Name}`}
//                                                                 className="dropdown-item"
//                                                             >
//                                                                 {category?.Name}
//                                                             </Link>
//                                                         </li>
//                                                     )
//                                                 ))}
//                                         </ul>
//                                     </div>

//                                     <input type="text" placeholder="What do you need?" />
//                                     <button type="submit" className="site-btn">
//                                         SEARCH
//                                     </button>
//                                 </form>
//                             </div>
//                             <div className="hero__search__phone">
//                                 <div className="hero__search__phone__icon">
//                                     <i className="fa fa-phone"></i>
//                                 </div>
//                                 <div className="hero__search__phone__text">
//                                     <h5>+91-9953567333 </h5>
//                                     <span>support 24/7 time</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
