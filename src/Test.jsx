// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';

// export default function Test() {
//   return (
//     <>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea
//         sx={{
//           transition: 'transform 0.3s ease-in-out', // Animation transition
//           '&:hover': {
//             transform: 'scale(1.05)', // Scale the card on hover
//           },
//         }}
//       >
//         <CardMedia
//           component="img"
//           height="140"
//           image="assets/img/banner/banner-1.jpg"
//           alt="green iguana"
//         />

// <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//       </CardActionArea>


//     </Card>
//     <h1>hello</h1>
// </>
//   );
// }


// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';

// export default function MultiActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="assets/img/banner/banner-1.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }



// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import Box from '@mui/material/Box';

// export default function MultiActionAreaCard() {
//   return (
//     <Card sx={{ maxWidth: 345, position: 'relative' }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="assets/img/banner/banner-1.jpg"
//           alt="green iguana"
//         />
//         {/* New Badge */}
//         <Box 
//           sx={{
//             position: 'absolute',
//             top: 10,
//             left: 10,
//             backgroundColor: 'primary.main',
//             color: 'white',
//             padding: '5px 15px',
//             borderRadius: '12px',
//             fontSize: '14px',
//             fontWeight: 'bold',

//           }}
//         >
//           New
//         </Box>
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }



// import * as React from 'react';
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
// import { useState } from 'react';
// import { useRef } from 'react';
// import { Link } from 'react-router-dom';
// import "./test.css"

// // Styled Box for Amazon link animation
// const AmazonLink = styled(Box)`
//   position: absolute;
//   top: 10px;
//   left: 10px;
//     background-image: linear-gradient(to right, #021533, #04347c, #b0d0ff);
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
//   box-shadow:rgb(0, 0, 0) 0 10px 20px -5px;

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

// export default function Test() {
//     // const[showPopover,setShowPopover]=useState()
//     const [showPopover, setShowPopover] = useState(false);
//     const popoverRef = useRef(null);
//     const [copyurl, setCopyUrl] = useState(false)
//     const togglePopover = () => {
//         console.log(showPopover)
//         setShowPopover(!showPopover);
//     };
//     return (
//         <Card sx={{ maxWidth: 345, position: 'relative' }}>
//             <CardActionArea>
//                 <CardMedia
//                     component="img"
//                     height="200"
//                     image="assets/img/banner/banner-1.jpg"
//                     alt="green iguana"
//                 />

//                 {/* Amazon Link Box */}
//                 <AmazonLink>
//                     New
//                 </AmazonLink>

//                 <CardContent>

//                     <div Name="Review" style={{ display: 'flex', alignItems: 'center', }}>
//                         <Rating name="read-only" value={5} readOnly />
//                         {/* <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
//               5.0 (200 reviews)
//             </Typography> */}
//                     </div>
//                 </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <div className="detail-title detail-title1">
//                     <div className="detail-right">


//                         <div className="shareBox">
//                             <span className="material-icons" onClick={togglePopover}><span className="material-symbols-outlined ">ios_share</span></span>
//                             <div className="boxshare">
//                                 <span>share</span>
//                             </div>
//                         </div>
//                         {showPopover && (
//                             <div ref={popoverRef} className="popover ">
//                                 <header>
//                                     <button className="close-button" onClick={togglePopover} aria-label="Close Share Popup">
//                                         <span className="material-symbols-outlined">close</span>
//                                     </button>
//                                     <span className="material-symbols-outlined">share</span>
//                                 </header>
//                                 <div className="popover-body ">
//                                     <ul className="share-options">
//                                         <li>
//                                             <a className="share-option email" href="mailto:info@parijathandicraft.com" onClick={togglePopover}>
//                                                 <span className="material-symbols-outlined text-dark me-2">mail</span>
//                                                 <span className="label">Email</span>
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a className="share-option pinterest" href="https://in.pinterest.com/handicraftparijat/." onClick={togglePopover}>
//                                                 <span className="icon" ></span>
//                                                 <span className="label">Pinterest</span>
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a className="share-option facebook" href="https://www.facebook.com/prijathandicraft/" onClick={togglePopover}>
//                                                 <span className="icon" ></span>
//                                                 <span className="label">Facebook</span>
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a className="share-option twitter" href="https://x.com/handicraftpari1" onClick={togglePopover}>
//                                                 <span className="icon" ></span>
//                                                 <span className="label">X</span>
//                                             </a>
//                                         </li>
//                                         <li>
//                                             {(() => {
//                                                 // Construct and encode the URL
//                                                 // let baseURL = /${getLanguageCodeFromSession()}/product - detail / ${ item.ProductId}/${replaceWhiteSpacesWithDashSymbolInUrl(item.CategoryName) ?? "shop"}/${replaceWhiteSpacesWithDashSymbolInUrl(item.ProductName)};
//                                                 let urlViewDetailImage = "http://localhost:3000${baseURL}"; // Make sure to include full base URL

//                                                 // Function to copy URL
//                                                 const handleCopy = async () => {
//                                                     try {

//                                                         await navigator.clipboard.writeText(urlViewDetailImage);
//                                                         setCopyUrl(true)
//                                                         setTimeout(() => {
//                                                             setCopyUrl(false)
//                                                             setShowPopover(false)

//                                                         }, 1500)
//                                                         // alert('Link copied to clipboard');
//                                                     } catch (err) {
//                                                         console.error('Failed to copy: ', err);
//                                                         alert('Failed to copy link. Please try again.');
//                                                     }
//                                                 };

//                                                 return (
//                                                     <a className="share-option copy" href="#" onClick={(e) => { e.preventDefault(); handleCopy(); }}>
//                                                         <span className="icon" style={{ backgroundImage: 'url(https://m.media-amazon.com/images/G/01/share-icons/link-circular.svg)' }}></span>
//                                                         <span className="label">{copyurl ? <span style={{ color: "green" }}>Link Copied!</span> : "Copy Link"}</span>
//                                                     </a>
//                                                 );
//                                             })()}
//                                         </li>




//                                     </ul>
//                                 </div>
//                                 <div className="arrow"></div>
//                             </div>
//                         )}
//                     </div>
//                     <div className="detail-left">
//                         {/* <ProductRatingStars Rating={item.Rating || 5} /> */}
//                         <Link to="">See More...</Link>
//                     </div>


//                 </div>
//             </CardActions>
//         </Card>
//     );
// }







import * as React from 'react';
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
import { useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import Shere from './Component/Comman/Shere';

// Styled Box for Amazon link animation
const AmazonLink = styled(Box)`
  position: absolute;
  top: 10px;
  left: 10px;
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

export default function Test() {
    const [showPopover, setShowPopover] = useState(false);
    const [copyurl, setCopyUrl] = useState(false);
    const popoverRef = useRef(null);

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

    return (
        <Card sx={{ maxWidth: 300, position: 'relative' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image="assets/img/banner/banner-1.jpg"
                    alt="green iguana"
                />

                {/* Amazon Link Box */}
                <AmazonLink>New</AmazonLink>

                <CardContent>
                    <div className="Review" style={{ display: 'flex', alignItems: 'center', marginBottom: "10px" }}>
                        <Rating name="read-only" value={5} readOnly />
                    </div>


                </CardContent>
            </CardActionArea>

            <div className="detail-title detail-title">
                <div className="detail-right">
                    <Shere />
                </div>
                <div className="detail-left ">
                    <Link to="">See More...</Link>
                </div>
            </div>



        </Card>
    );
}
