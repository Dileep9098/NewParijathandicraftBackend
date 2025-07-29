// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import Box from '@mui/material/Box';
// import { styled } from '@mui/system';
// import Rating from '@mui/material/Rating';
// import { useRef } from 'react';
// import Shere from '../../Comman/Shere';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Config from '../../Comman/Config';
// import { showErrorMsg } from '../../../utils/ShowMessage';
// import { replaceWhiteSpacesWithDashSymbolInUrl } from '../../../utils/ConversionHelper';
// const BASE_URL = import.meta.env.VITE_IMG_URL;



// const AmazonLink = styled(Box)`
//   position: absolute;
//   top: 7px;
//   left: 6px;
//   background-image: linear-gradient(to right, #021533, #04347c, #b0d0ff);
//   border-radius: 5px 5px;
//   font-size: 16px;
//   font-weight: bold;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: rgb(255, 255, 255);
//   font-style: italic;
//   cursor: pointer;
//   padding: 2px 15px;
//   box-shadow: rgb(0, 0, 0) 0 10px 20px -5px;

//   &::before {
//     content: '';
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 50%;
//     background: linear-gradient(45deg,
//             rgba(255, 255, 255, 0) 20%,
//             rgba(255, 255, 255, 0.8) 50%,
//             rgba(255, 255, 255, 0) 80%);
//     opacity: 0.8;
//     filter: brightness(3);
//     transform: rotate(45deg);
//     animation: shimmer1 2s linear infinite;
//   }

//   @keyframes shimmer1 {
//     0% {
//       transform: translateX(-100%) rotate(45deg);
//     }
//     100% {
//       transform: translateX(100%) rotate(45deg);
//     }
//   }
// `;

// const OnSaleLink = styled(Box)`
//   position: absolute;
//   top: 7px;
//   left: 6px;
//   background-image: linear-gradient(to right,rgb(164, 7, 151),rgb(145, 1, 148), #b0d0ff);
//   border-radius: 5px 5px;
//   font-size: 16px;
//   font-weight: bold;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: rgb(255, 255, 255);
//   font-style: italic;
//   cursor: pointer;
//   padding: 2px 15px;
//   box-shadow: rgb(0, 0, 0) 0 10px 20px -5px;

//   &::before {
//     content: '';
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 50%;
//     background: linear-gradient(45deg,
//             rgba(255, 255, 255, 0) 20%,
//             rgba(255, 255, 255, 0.8) 50%,
//             rgba(255, 255, 255, 0) 80%);
//     opacity: 0.8;
//     filter: brightness(3);
//     transform: rotate(45deg);
//     animation: shimmer1 2s linear infinite;
//   }

//   @keyframes shimmer1 {
//     0% {
//       transform: translateX(-100%) rotate(45deg);
//     }
//     100% {
//       transform: translateX(100%) rotate(45deg);
//     }
//   }
// `;

// const BestSeller = styled(Box)`
//   position: absolute;
//   top: 7px;
//   left: 6px;
//   background-image: linear-gradient(to right,rgb(49, 239, 249),rgb(9, 197, 214), #b0d0ff);
//   border-radius: 5px 5px;
//   font-size: 16px;
//   font-weight: bold;
//   overflow: hidden;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: rgb(255, 255, 255);
//   font-style: italic;
//   cursor: pointer;
//   padding: 2px 15px;
//   box-shadow: rgb(0, 0, 0) 0 10px 20px -5px;

//   &::before {
//     content: '';
//     position: absolute;
//     top: -50%;
//     left: -50%;
//     width: 200%;
//     height: 50%;
//     background: linear-gradient(45deg,
//             rgba(255, 255, 255, 0) 20%,
//             rgba(255, 255, 255, 0.8) 50%,
//             rgba(255, 255, 255, 0) 80%);
//     opacity: 0.8;
//     filter: brightness(3);
//     transform: rotate(45deg);
//     animation: shimmer1 2s linear infinite;
//   }

//   @keyframes shimmer1 {
//     0% {
//       transform: translateX(-100%) rotate(45deg);
//     }
//     100% {
//       transform: translateX(100%) rotate(45deg);
//     }
//   }
// `;

// export default function NewProduct(props) {

//     const [toggle, setToggle] = useState(true)
//     const [toggle1, setToggle1] = useState(false)
//     const [toggle2, setToggle2] = useState(false)
//     const [toggle3, setToggle3] = useState(false)
//     const [showPopover, setShowPopover] = useState(false);
//     const [copyurl, setCopyUrl] = useState(false);
//     const popoverRef = useRef(null);
//     const [allProduct, setAllProduct] = useState(props.AllProduct);
//     const [initialized, setInitialized] = useState(false);



//     const togglePopover = () => {
//         setShowPopover(!showPopover);
//     };

//     const handleCopy = async () => {
//         const urlViewDetailImage = "http://localhost:3000"; // Adjust with your dynamic URL
//         try {
//             await navigator.clipboard.writeText(urlViewDetailImage);
//             setCopyUrl(true);
//             setTimeout(() => {
//                 setCopyUrl(false);
//                 setShowPopover(false);
//             }, 1500);
//         } catch (err) {
//             console.error('Failed to copy: ', err);
//             alert('Failed to copy link. Please try again.');
//         }
//     };

//     function Toggle() {
//         console.log("Before Toggle", toggle);  // Debugging line
//         setToggle(!toggle);
//         setToggle1(false);
//         setToggle2(false);
//         setToggle3(false);
//     }

//     function Toggle1() {
//         setToggle1(!toggle1)
//         setToggle(false)
//         setToggle2(false)
//         setToggle3(false)
//     }
//     function Toggle2() {
//         setToggle2(!toggle2)
//         setToggle(false)
//         setToggle1(false)
//         setToggle3(false)

//     }
//     function Toggle3() {
//         setToggle3(!toggle3)
//         setToggle(false)
//         setToggle1(false)
//         setToggle2(false)

//     }


//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true });
//     //             if (response.data.success) {
//     //                 setAllProduct(response.data.allProductsFeatures);
//     //             } else {
//     //                 showErrorMsg(response.data.message);
//     //             }
//     //         } catch (error) {
//     //             showErrorMsg(error.response.data.message);
//     //         }
//     //     };
//     //     fetchData();
//     // }, []);
//     useEffect(() => {
//         if (allProduct && allProduct.length > 0 && !initialized) {
//             $('#owlCarousel3').owlCarousel({
//                 loop: true,
//                 margin: 10,
//                 nav: true,
//                 autoplay: true,
//                 autoplayTimeout: 3000,
//                 autoplayHoverPause: true,
//                 smartSpeed: 1000,
//                 responsive: {
//                     0: { items: 1 },
//                     600: { items: 2 },
//                     1000: { items: 4 },
//                 },
//             });
//             setInitialized(true);
//         }
//     }, [allProduct, initialized]);


//     // console.log("hvjhjb", allProduct)
//     const ActiveAndMarkAsNEwProducts = Array.isArray(allProduct) ? allProduct.filter(product => product.IsActive && product.MarkAsNew) : [];
//     // console.log("Active", activeProducts)


//     return (
//         <>
//             <section id='newProduct'>
//                 <div className="container-fluid">
//                     <div className="row">

//                         <div className="col-12">
//                             {/* <div className="newProduct1">
//                                 <h2 className='fontsize2'>E-Commerce store - We have you covered</h2>
//                                 <p className='p'>Grow your business with our 360-degree e-commerce payments suite</p>
//                             </div> */}
//                             <div className="newProduct1">
//                                 <h2 className='fontsize2'>Bringing Heritage to Your Fingertips</h2>
//                                 <p className='p'>Sell & showcase unique handicrafts globally with our powerful e-commerce platform.</p>
//                             </div>

//                             <div className="d-flex justify-content-center">
//                                 <Link className={`toggle ${toggle ? 'toggleBorder' : ""}`} onClick={() => Toggle()} > New Products </Link>
//                                 <Link className={`toggle ${toggle1 ? 'toggleBorder' : ""}`} onClick={() => Toggle1()} style={{ marginLeft: '20px' }}> On sale</Link>
//                                 <Link className={`toggle ${toggle2 ? 'toggleBorder' : ""}`} onClick={() => Toggle2()} style={{ marginLeft: '20px' }}>hot deal</Link>
//                                 <Link className={`toggle ${toggle3 ? 'toggleBorder' : ""}`} onClick={() => Toggle3()} style={{ marginLeft: '20px' }}>Best sellers</Link>

//                             </div>
//                             <hr />
//                         </div>
//                         <div className="">
//                             {toggle && (
//                                 <div id='owlCarousel3' className="owl-carousel">

//                                     {ActiveAndMarkAsNEwProducts && ActiveAndMarkAsNEwProducts.length > 0 ?
//                                         (
//                                             ActiveAndMarkAsNEwProducts.map((product, ind) => (
//                                                 <div key={ind}>
//                                                     <Card sx={{ maxWidth: 300, position: 'relative', marginBottom: "10px" }} >
//                                                         <CardActionArea>
//                                                             <CardMedia
//                                                                 component="img"
//                                                                 height="200"
//                                                                 // image={`/image/products/${product.ProductPictures[0]}`}
//                                                                 image={`${BASE_URL}/${product.ProductPictures[0]}`}
//                                                                 // ${BASE_URL}/${campaign?.file}
//                                                                 alt="green iguana"
//                                                                 className='newProductImage'
//                                                             />

//                                                             <AmazonLink>New</AmazonLink>

//                                                             <CardContent>
//                                                                 <div className="Review" style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
//                                                                     <Rating name="read-only" value={5} readOnly />
//                                                                 </div>
//                                                             </CardContent>
//                                                         </CardActionArea>

//                                                         <div className="detail-title detail-title">
//                                                             <div className="detail-right">
//                                                                 <Shere
//                                                                     ProductId={product._id}
//                                                                     ProductName={product.ProductName}
//                                                                     ProductsCategoriesMappings={product.ProductsCategoriesMappings}
//                                                                 />

//                                                             </div>
//                                                             <div className="detail-left ">
//                                                                 <Link to={`${Config.WEBSITE_IBASE_URL}product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>See More...</Link>
//                                                             </div>
//                                                         </div>
//                                                     </Card>


//                                                 </div>
//                                             ))
//                                         )
//                                         : ""}




//                                 </div>
//                             )}
//                             {toggle1 && (
//                                 <div className='row'>

//                                     {ActiveAndMarkAsNEwProducts && ActiveAndMarkAsNEwProducts.length > 0 ?
//                                         (
//                                             ActiveAndMarkAsNEwProducts.slice(0, 10).map((product, ind) => (
//                                                 <div className='col-lg-3 col-md-3 col-sm-4 col-6 mb-2' key={ind}>
//                                                     <Card sx={{ maxWidth: 300, position: 'relative', marginBottom: "10px" }} >
//                                                         <CardActionArea>
//                                                             <CardMedia
//                                                                 component="img"
//                                                                 height="200"
//                                                                 image={`${BASE_URL}/${product.ProductPictures[0]}`}
//                                                                 alt="green iguana"
//                                                                 className='newProductImage'
//                                                             />

//                                                             <OnSaleLink>On Sale</OnSaleLink>

//                                                             <CardContent>
//                                                                 <div className="Review" style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
//                                                                     <Rating name="read-only" value={5} readOnly />
//                                                                 </div>
//                                                             </CardContent>
//                                                         </CardActionArea>

//                                                         <div className="detail-title detail-title">
//                                                             <div className="detail-right">
//                                                                 <Shere
//                                                                     ProductId={product._id}
//                                                                     ProductName={product.ProductName}
//                                                                     ProductsCategoriesMappings={product.ProductsCategoriesMappings}
//                                                                 />

//                                                             </div>
//                                                             <div className="detail-left ">
//                                                                 <Link to={`${Config.WEBSITE_IBASE_URL}product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>See More...</Link>
//                                                             </div>
//                                                         </div>
//                                                     </Card>

//                                                 </div>
//                                             ))
//                                         )
//                                         : ""}




//                                 </div>

//                             )}
//                             {toggle2 && (
//                                 <div className='row'>

//                                     {ActiveAndMarkAsNEwProducts && ActiveAndMarkAsNEwProducts.length > 0 ?
//                                         (
//                                             ActiveAndMarkAsNEwProducts.slice(0, 8).map((product, ind) => (
//                                                 <div className='col-lg-3 col-md-3 col-sm-4 col-6 mb-2' key={ind}>
//                                                     <Card sx={{ maxWidth: 300, position: 'relative', marginBottom: "10px" }} >
//                                                         <CardActionArea>
//                                                             <CardMedia
//                                                                 component="img"
//                                                                 height="200"
//                                                                 image={`${BASE_URL}/${product.ProductPictures[0]}`}
//                                                                 alt="green iguana"
//                                                                 className='newProductImage'
//                                                             />

//                                                             <OnSaleLink>Hot Deal</OnSaleLink>

//                                                             <CardContent>
//                                                                 <div className="Review" style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
//                                                                     <Rating name="read-only" value={5} readOnly />
//                                                                 </div>
//                                                             </CardContent>
//                                                         </CardActionArea>

//                                                         <div className="detail-title detail-title">
//                                                             <div className="detail-right">
//                                                                 <Shere
//                                                                     ProductId={product._id}
//                                                                     ProductName={product.ProductName}
//                                                                     ProductsCategoriesMappings={product.ProductsCategoriesMappings}
//                                                                 />

//                                                             </div>
//                                                             <div className="detail-left ">
//                                                                 <Link to={`${Config.WEBSITE_IBASE_URL}product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>See More...</Link>
//                                                             </div>
//                                                         </div>
//                                                     </Card>

//                                                 </div>
//                                             ))
//                                         )
//                                         : ""}




//                                 </div>
//                             )}
//                             {toggle3 && (
//                                 <div className='row'>

//                                     {ActiveAndMarkAsNEwProducts && ActiveAndMarkAsNEwProducts.length > 0 ?
//                                         (
//                                             ActiveAndMarkAsNEwProducts.slice(0, 8).map((product, ind) => (
//                                                 <div className='col-lg-3 col-md-3 col-sm-4 col-6 mb-2' key={ind}>
//                                                     <Card sx={{ maxWidth: 300, position: 'relative', marginBottom: "10px" }} >
//                                                         <CardActionArea>
//                                                             <CardMedia
//                                                                 component="img"
//                                                                 height="200"
//                                                                 image={`${BASE_URL}/${product.ProductPictures[0]}`}
//                                                                 alt="green iguana"
//                                                                 className='newProductImage'
//                                                             />

//                                                             <BestSeller>Best Sellers</BestSeller>

//                                                             <CardContent>
//                                                                 <div className="Review" style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
//                                                                     <Rating name="read-only" value={5} readOnly />
//                                                                 </div>
//                                                             </CardContent>
//                                                         </CardActionArea>

//                                                         <div className="detail-title detail-title">
//                                                             <div className="detail-right">
//                                                                 <Shere
//                                                                     ProductId={product._id}
//                                                                     ProductName={product.ProductName}
//                                                                     ProductsCategoriesMappings={product.ProductsCategoriesMappings}
//                                                                 />

//                                                             </div>
//                                                             <div className="detail-left ">
//                                                                 <Link to={`${Config.WEBSITE_IBASE_URL}product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>See More...</Link>
//                                                             </div>
//                                                         </div>
//                                                     </Card>

//                                                 </div>
//                                             ))
//                                         )
//                                         : ""}


//                                 </div>
//                             )}


//                         </div>

//                     </div>
//                 </div>
//             </section>

//         </>
//     )
// }



import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import Rating from '@mui/material/Rating';
import { useRef } from 'react';
import Shere from '../../Comman/Shere';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Config from '../../Comman/Config';
import { showErrorMsg } from '../../../utils/ShowMessage';
import { replaceWhiteSpacesWithDashSymbolInUrl } from '../../../utils/ConversionHelper';
const BASE_URL = import.meta.env.VITE_IMG_URL;



const AmazonLink = styled(Box)`
  position: absolute;
  top: 7px;
  left: 6px;
  background-image: linear-gradient(to right, #021533, #04347c, #b0d0ff);
  border-radius: 5px 5px;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-style: italic;
  cursor: pointer;
  padding: 2px 15px;
  box-shadow: rgb(0, 0, 0) 0 10px 20px -5px;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 50%;
    background: linear-gradient(45deg,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 80%);
    opacity: 0.8;
    filter: brightness(3);
    transform: rotate(45deg);
    animation: shimmer1 2s linear infinite;
  }

  @keyframes shimmer1 {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }
`;

const OnSaleLink = styled(Box)`
  position: absolute;
  top: 7px;
  left: 6px;
  background-image: linear-gradient(to right,rgb(164, 7, 151),rgb(145, 1, 148), #b0d0ff);
  border-radius: 5px 5px;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-style: italic;
  cursor: pointer;
  padding: 2px 15px;
  box-shadow: rgb(0, 0, 0) 0 10px 20px -5px;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 50%;
    background: linear-gradient(45deg,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 80%);
    opacity: 0.8;
    filter: brightness(3);
    transform: rotate(45deg);
    animation: shimmer1 2s linear infinite;
  }

  @keyframes shimmer1 {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }
`;

const BestSeller = styled(Box)`
  position: absolute;
  top: 7px;
  left: 6px;
  background-image: linear-gradient(to right,rgb(49, 239, 249),rgb(9, 197, 214), #b0d0ff);
  border-radius: 5px 5px;
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-style: italic;
  cursor: pointer;
  padding: 2px 15px;
  box-shadow: rgb(0, 0, 0) 0 10px 20px -5px;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 50%;
    background: linear-gradient(45deg,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0) 80%);
    opacity: 0.8;
    filter: brightness(3);
    transform: rotate(45deg);
    animation: shimmer1 2s linear infinite;
  }

  @keyframes shimmer1 {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }
`;

export default function NewProduct(props) {

    const [toggle, setToggle] = useState(true)
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [showPopover, setShowPopover] = useState(false);
    const [copyurl, setCopyUrl] = useState(false);
    const popoverRef = useRef(null);
    const [allProduct, setAllProduct] = useState(props.AllProducts || []);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (props.AllProducts && props.AllProducts.length) {
            setAllProduct(props.AllProducts);
        }
    }, [props.AllProducts]);

    console.log("Bhai kya hua re", props)
    console.log("Bhai kya hua ALl kya hua",allProduct)

    const togglePopover = () => {
        setShowPopover(!showPopover);
    };

    const handleCopy = async () => {
        const urlViewDetailImage = "http://localhost:3000"; // Adjust with your dynamic URL
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

    function Toggle() {
        console.log("Before Toggle", toggle);  // Debugging line
        setToggle(!toggle);
        setToggle1(false);
        setToggle2(false);
        setToggle3(false);
    }

    function Toggle1() {
        setToggle1(!toggle1)
        setToggle(false)
        setToggle2(false)
        setToggle3(false)
    }
    function Toggle2() {
        setToggle2(!toggle2)
        setToggle(false)
        setToggle1(false)
        setToggle3(false)

    }
    function Toggle3() {
        setToggle3(!toggle3)
        setToggle(false)
        setToggle1(false)
        setToggle2(false)

    }

    // useEffect(() => {
    //     if (props.AllProducts && props.AllProducts.length > 0) {
    //         setAllProduct(props.AllProducts); // Set state with the passed prop
    //     }
    // }, [props.AllProducts]);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axiosInstance.get(Config.END_POINT_LIST["GET_ALL_PRODUCTS"], { withCredentials: true });
    //             if (response.data.success) {
    //                 setAllProduct(response.data.allProductsFeatures);
    //             } else {
    //                 showErrorMsg(response.data.message);
    //             }
    //         } catch (error) {
    //             showErrorMsg(error.response.data.message);
    //         }
    //     };
    //     fetchData();
    // }, []);
    useEffect(() => {
        if (allProduct && allProduct.length > 0 && !initialized) {
            $('#owlCarousel3').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                responsive: {
                    0: { items: 2},
                    600: { items: 3 },
                    1000: { items: 4},
                    1200: { items: 6},
                },
            });
            setInitialized(true);
        }
    }, [allProduct, initialized]);


    // console.log("hvjhjb", allProduct)
    // const ActiveAndMarkAsNEwProducts = Array.isArray(allProduct) ? allProduct.filter(product => product.IsActive && product.MarkAsNew) : [];
    // console.log("Active", activeProducts)
    const ActiveAndMarkAsNEwProducts = Array.isArray(allProduct)
    ? allProduct.filter(product => product.IsActive) // Only filter by IsActive for now
    : [];


    // const ActiveAndMarkAsNEwProducts = Array.isArray(allProduct)
    // ? allProduct.filter(product => product.IsActive && product.MarkAsNew)
    // : [];

console.log("Filtered Active and New Products: ", ActiveAndMarkAsNEwProducts);




    return (
        <>
            <section id='newProduct'>
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12">
                            <div className="newProduct1">
                                <h2 className='fontsize2'>Bringing Heritage to Your Fingertips</h2>
                                <p className='p'>Sell & showcase unique handicrafts globally with our powerful e-commerce platform.</p>
                            </div>

                            <div className="d-flex justify-content-center">
                                <Link className={`toggle ${toggle  ? 'toggleBorder' : ""}`} onClick={() => Toggle()} > New Products </Link>
                                <Link className={`toggle ${toggle1 ? 'toggleBorder' : ""}`} onClick={() => Toggle1()} style={{ marginLeft: '20px' }}> On sale</Link>
                                <Link className={`toggle ${toggle2 ? 'toggleBorder' : ""}`} onClick={() => Toggle2()} style={{ marginLeft: '20px' }}>hot deal</Link>
                                <Link className={`toggle ${toggle3 ? 'toggleBorder' : ""}`} onClick={() => Toggle3()} style={{ marginLeft: '20px' }}>Best sellers</Link>

                            </div>
                            <hr />
                        </div>
                        <div className="">
                            {toggle && (
                                <div id='owlCarousel3' className="owl-carousel">

                                    {ActiveAndMarkAsNEwProducts && ActiveAndMarkAsNEwProducts.length > 0 ?
                                        (
                                            ActiveAndMarkAsNEwProducts.map((product, ind) => (
                                                <div key={ind}>
                                                    <Card sx={{ maxWidth: 300, position: 'relative', marginBottom: "10px" }} >
                                                        <CardActionArea>
                                                            <CardMedia
                                                                component="img"
                                                                height="200"
                                                                // image={`/image/products/${product.ProductPictures[0]}`}
                                                                image={product.ProductPictures[0].url||`${BASE_URL}/${product.ProductPictures[0]}`}
                                                                // ${BASE_URL}/${campaign?.file}
                                                                alt="green iguana"
                                                                className='newProductImage'
                                                            />

                                                            <AmazonLink>New</AmazonLink>

                                                            <CardContent>
                                                                <div className="Review" style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                                                                    <Rating name="read-only" value={5} readOnly />
                                                                </div>
                                                            </CardContent>
                                                        </CardActionArea>

                                                        <div className="detail-title detail-title">
                                                            <div className="detail-right">
                                                                <Shere
                                                                    ProductId={product._id}
                                                                    ProductName={product.ProductName}
                                                                    ProductsCategoriesMappings={product.ProductsCategoriesMappings}
                                                                />

                                                            </div>
                                                            <div className="detail-left ">
                                                                <Link to={`${Config.WEBSITE_IBASE_URL}product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>See More...</Link>
                                                            </div>
                                                        </div>
                                                    </Card>


                                                </div>
                                            ))
                                        )
                                        : ""}




                                </div>
                            )}
                            {toggle1 && (
                                <div className='row'>

                                    {ActiveAndMarkAsNEwProducts && ActiveAndMarkAsNEwProducts.length > 0 ?
                                        (
                                            ActiveAndMarkAsNEwProducts.slice(0, 10).map((product, ind) => (
                                                <div className='col-lg-3 col-md-3 col-sm-4 col-6 mb-2' key={ind}>
                                                    <Card sx={{ maxWidth: 300, position: 'relative', marginBottom: "10px" }} >
                                                        <CardActionArea>
                                                            <CardMedia
                                                                component="img"
                                                                height="200"
                                                                image={product.ProductPictures[0].url||`${BASE_URL}/${product.ProductPictures[0]}`}
                                                                alt="green iguana"
                                                                className='newProductImage'
                                                            />

                                                            <OnSaleLink>On Sale</OnSaleLink>

                                                            <CardContent>
                                                                <div className="Review" style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                                                                    <Rating name="read-only" value={5} readOnly />
                                                                </div>
                                                            </CardContent>
                                                        </CardActionArea>

                                                        <div className="detail-title detail-title">
                                                            <div className="detail-right">
                                                                <Shere
                                                                    ProductId={product._id}
                                                                    ProductName={product.ProductName}
                                                                    ProductsCategoriesMappings={product.ProductsCategoriesMappings}
                                                                />

                                                            </div>
                                                            <div className="detail-left ">
                                                                <Link to={`${Config.WEBSITE_IBASE_URL}product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>See More...</Link>
                                                            </div>
                                                        </div>
                                                    </Card>

                                                </div>
                                            ))
                                        )
                                        : ""}




                                </div>

                            )}
                            {toggle2 && (
                                <div className='row'>

                                    {ActiveAndMarkAsNEwProducts && ActiveAndMarkAsNEwProducts.length > 0 ?
                                        (
                                            ActiveAndMarkAsNEwProducts.slice(0, 8).map((product, ind) => (
                                                <div className='col-lg-3 col-md-3 col-sm-4 col-6 mb-2' key={ind}>
                                                    <Card sx={{ maxWidth: 300, position: 'relative', marginBottom: "10px" }} >
                                                        <CardActionArea>
                                                            <CardMedia
                                                                component="img"
                                                                height="200"
                                                                image={product.ProductPictures[0].url||`${BASE_URL}/${product.ProductPictures[0]}`}
                                                                alt="green iguana"
                                                                className='newProductImage'
                                                            />

                                                            <OnSaleLink>Hot Deal</OnSaleLink>

                                                            <CardContent>
                                                                <div className="Review" style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                                                                    <Rating name="read-only" value={5} readOnly />
                                                                </div>
                                                            </CardContent>
                                                        </CardActionArea>

                                                        <div className="detail-title detail-title">
                                                            <div className="detail-right">
                                                                <Shere
                                                                    ProductId={product._id}
                                                                    ProductName={product.ProductName}
                                                                    ProductsCategoriesMappings={product.ProductsCategoriesMappings}
                                                                />

                                                            </div>
                                                            <div className="detail-left ">
                                                                <Link to={`${Config.WEBSITE_IBASE_URL}product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>See More...</Link>
                                                            </div>
                                                        </div>
                                                    </Card>

                                                </div>
                                            ))
                                        )
                                        : ""}




                                </div>
                            )}
                            {toggle3 && (
                                <div className='row'>

                                    {ActiveAndMarkAsNEwProducts && ActiveAndMarkAsNEwProducts.length > 0 ?
                                        (
                                            ActiveAndMarkAsNEwProducts.slice(0, 8).map((product, ind) => (
                                                <div className='col-lg-3 col-md-3 col-sm-4 col-6 mb-2' key={ind}>
                                                    <Card sx={{ maxWidth: 300, position: 'relative', marginBottom: "10px" }} >
                                                        <CardActionArea>
                                                            <CardMedia
                                                                component="img"
                                                                height="200"
                                                                image={product.ProductPictures[0].url||`${BASE_URL}/${product.ProductPictures[0]}`}
                                                                alt="green iguana"
                                                                className='newProductImage'
                                                            />

                                                            <BestSeller>Best Sellers</BestSeller>

                                                            <CardContent>
                                                                <div className="Review" style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                                                                    <Rating name="read-only" value={5} readOnly />
                                                                </div>
                                                            </CardContent>
                                                        </CardActionArea>

                                                        <div className="detail-title detail-title">
                                                            <div className="detail-right">
                                                                <Shere
                                                                    ProductId={product._id}
                                                                    ProductName={product.ProductName}
                                                                    ProductsCategoriesMappings={product.ProductsCategoriesMappings}
                                                                />

                                                            </div>
                                                            <div className="detail-left ">
                                                                <Link to={`${Config.WEBSITE_IBASE_URL}product-details/${product._id}/${product.ProductsCategoriesMappings.map((category) => replaceWhiteSpacesWithDashSymbolInUrl(category.Name)).join('-') ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(product.ProductName)}`}>See More...</Link>
                                                            </div>
                                                        </div>
                                                    </Card>

                                                </div>
                                            ))
                                        )
                                        : ""}


                                </div>
                            )}


                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
