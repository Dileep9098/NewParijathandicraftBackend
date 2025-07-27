

// import React, { useEffect, useState } from 'react'
// // import "./login.css"
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';

// import Stack from '@mui/material/Stack';
// import LoginIcon from '@mui/icons-material/Login';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { showErrorMsg, showSuccessMsg } from '../../../utils/ShowMessage';
// import { loginUser } from '../../../Store/features/authSlice/authSlice';
// import Loader from '../Loader/Loader';
// import axiosInstance from '../../../ApiHendler/axiosInstance';
// import Swal from 'sweetalert2'

// export default function ForgotPassword() {

   
//     const [email, setEmail] = useState()

//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const [loading, setLoading] = useState(false)

//     const { user, error, isLoading, isAuthentication } = useSelector((state) => state.auth)
//     console.log(user)

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(email);
    
//         try {
//             setLoading(true)

//             // Send the request using async/await
//             const response = await axiosInstance.post("/api/v1/password/forgot", { email }, { withCredentials: true });
//             setLoading(false)

//             // Handle the successful response
//             console.log("Response received:", response.data);
            
//             // Show the success alert here
//             Swal.fire({
//                 title: 'Success!',
//                 text: response.data.message,
//                 icon: 'success',
//                 confirmButtonText: 'Okay'
//             });
//             navigate("/login")
//         } catch (error) {
//             setLoading(false)

//             // Log the error if the request fails
//             console.error("Error occurred:", error.response ? error.response.data : error.message);
    
            
    
//             showErrorMsg(error.response ? error.response.data.message : 'An unexpected error occurred');
//         }
//     };
    
//     useEffect(() => {
//         console.log('Loading state changed:', loading)
//         if(loading){
//             return <Loader/>
//         }
        
//     }, [loading]) 
//     return (
//         <>
//             {
//                 isLoading ? <Loader /> :

//                     <div className="login-container">


//                         <div className="login_form">
//                             <form onSubmit={handleSubmit}>
//                                 <img src="assets/img/breadcrumb.jpg" height="50px" alt="" />
//                                 <h3>Forgot Your Password</h3>
//                                 <p>Enter your email address and we'll send you an email with Link to Forgot your password.</p>
//                                 {/* <div className="login_option">
//                                     <div className="option">
//                                         <a href="#">
//                                             <img src="assets/img/google.png" />
//                                             <span>Google</span>
//                                         </a>
//                                     </div>
//                                     <div className="option">
//                                         <a href="#">
//                                             <img src="assets/img/facebook.png" width={40} alt="Apple" />
//                                             <span>Facebook</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <p className="separator">
//                                     <span>or</span>
//                                 </p> */}

//                                 {/* <div className="input_box">
//                             <label for="email">Email</label>
//                             <input type="email" id="email" placeholder="Enter email address" required />
//                         </div>
//                         <div className="input_box">
//                             <div className="password_title">
//                                 <label for="password">Password</label>
//                                 <a href="#">Forgot Password?</a>
//                             </div>
//                             <input type="password" id="password" placeholder="Enter your password" required />
//                         </div> */}

//                                 <Box
//                                     component="form"
//                                     sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
//                                     noValidate
//                                     autoComplete="off"
//                                 >
//                                     <TextField id="outlined-basic" label="Email" variant="outlined" placeholder="abc@gmail.com" onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                     {/* <TextField
//           id="outlined-password-input"
//           label="Password"
//           type="password"
//           autoComplete="current-password"
//         /> */}

                                 

//                                 </Box>
                               

//                                 <div className="" style={{ marginLeft: "20px" ,marginTop:"10px" }} >

//                                     <Stack direction="row" spacing={2}>

//                                         <Button className='w-100' variant="contained" endIcon={<LoginIcon />} type='submit'>
//                                             Send
//                                         </Button>
//                                     </Stack>
//                                 </div>
//                                 {/* <p className="sign_up">Don't have an account? <Link to="/sign-up" id='forgot-password'>Sign up</Link></p> */}
//                             </form>
//                         </div>
//                     </div>
//             }

//         </>
//     )
// }



import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../ApiHendler/axiosInstance';
import Swal from 'sweetalert2';
import Loader from '../Loader/Loader';  // Assuming you have a Loader component
import MetaData from '../Layout/MetaData';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axiosInstance.post("/api/v1/password/forgot", { email }, { withCredentials: true });
            setLoading(false);

            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'Okay'
            }).then(() => {
                navigate("/login");
            });
        } catch (error) {
            setLoading(false);

            Swal.fire({
                title: 'Error!',
                text: error.response ? error.response.data.message : 'An unexpected error occurred',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="login-container">
                            <MetaData title={"Forgot Password"}/>
            
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <img src="assets/img/breadcrumb.jpg" height="50px" alt="" />
                    <h3>Forgot Your Password</h3>
                    <p>Enter your email address and we'll send you an email with Link to Forgot your password.</p>

                    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '100%' } }} noValidate autoComplete="off">
                        <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            placeholder="abc@gmail.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>

                    <div className="" style={{ marginLeft: "20px", marginTop: "10px" }}>
                        <Stack direction="row" spacing={2}>
                            <Button className='w-100' variant="contained" endIcon={<LoginIcon />} type='submit'>
                                Send
                            </Button>
                        </Stack>
                    </div>
                </form>
            </div>
        </div>
    );
}
