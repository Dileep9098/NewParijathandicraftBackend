// import React from 'react'
// import "./login.css"
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
// import { useState } from 'react';
// import { showErrorMsg, showSuccessMsg, showWarningMsg } from '../../../utils/ShowMessage';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../../../Store/features/authSlice/authSlice';
// export default function SignUp() {
//     const [showPassword, setShowPassword] = useState(false);

//     const handleClickShowPassword = () => setShowPassword((show) => !show);

//     const handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };

//     const handleMouseUpPassword = (event) => {
//         event.preventDefault();
//     };

//     // Start Fill Registation

//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()
//     const [cpassword, setCpassword] = useState()

//     const dispatch=useDispatch()
//     const navigate=useNavigate()


//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // console.log(email, password, cpassword)
//         if(password===cpassword){
//             dispatch(registerUser({ email, password, cpassword })).then((data) => {
//                 console.log("Kya aaya re", data)
//                 console.log("Kya aaya re", data.payload.message)
//                 if (data.payload.success) {
//                     navigate("/admin/dashboard")
//                     showSuccessMsg("User Successfully Inserted !!")
//                 }
//                 else {
//                     showErrorMsg(data.payload.message)
//                 }
//             })
//         }
//         else{
//             showWarningMsg("Password Does not Match")

//         }
        
//     }

//     return (
//         <>
//             <div className="login-container">


//                 <div className="login_form">
//                     <form onSubmit={handleSubmit}>
//                         <h3>Sign Up in with</h3>
//                         <div className="login_option">
//                             <div className="option">
//                                 <a href="#">
//                                     <img src="assets/img/google.png" />
//                                     <span>Google</span>
//                                 </a>
//                             </div>
//                             <div className="option">
//                                 <a href="#">
//                                     <img src="assets/img/facebook.png" width={40} alt="Apple" />
//                                     <span>Facebook</span>
//                                 </a>
//                             </div>
//                         </div>
//                         <p className="separator">
//                             <span>or</span>
//                         </p>

//                         {/* <div className="input_box">
//             <label for="email">Email</label>
//             <input type="email" id="email" placeholder="Enter email address" required />
//         </div>
//         <div className="input_box">
//             <div className="password_title">
//                 <label for="password">Password</label>
//                 <a href="#">Forgot Password?</a>
//             </div>
//             <input type="password" id="password" placeholder="Enter your password" required />
//         </div> */}

//                         <Box
//                             component="form"
//                             sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
//                             noValidate
//                             autoComplete="off"
//                         >
//                             <TextField id="outlined-basic" label="Email" variant="outlined" placeholder="abc@gmail.com" onChange={(e)=>setEmail(e.target.value)} required
//                             />
//                             {/* <TextField
// id="outlined-password-input"
// label="Password"
// type="password"
// autoComplete="current-password"
// /> */}

//                             <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//                                 <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
//                                 <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 aria-label={
//                                                     showPassword ? 'hide the password' : 'display the password'
//                                                 }
//                                                 onClick={handleClickShowPassword}
//                                                 onMouseDown={handleMouseDownPassword}
//                                                 onMouseUp={handleMouseUpPassword}
//                                                 edge="end"
//                                             >
//                                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     }
//                                     label="Password"
//                                     onChange={(e)=>setPassword(e.target.value)}
//                                     required
//                                 />
//                             </FormControl>
//                             <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
//                                 <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
//                                 <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 aria-label={
//                                                     showPassword ? 'hide the password' : 'display the password'
//                                                 }
//                                                 onClick={handleClickShowPassword}
//                                                 onMouseDown={handleMouseDownPassword}
//                                                 onMouseUp={handleMouseUpPassword}
//                                                 edge="end"
//                                             >
//                                                 {showPassword ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     }
//                                     label="Confirm Password"
//                                     onChange={(e)=>setCpassword(e.target.value)}
//                                     required
//                                 />
//                             </FormControl>

//                         </Box>
//                         {/* <div className="m-2">

//                             <Link to="/forgot-password" id='forgot-password'>Forgot your Password ?</Link>
//                         </div> */}
//                         <div className="" style={{ marginLeft: "20px" }} >

//                             <Stack direction="row" spacing={2}>

//                                 <Button className='w-100' variant="contained" endIcon={<LoginIcon />} type='submit'>
//                                     Sign up
//                                 </Button>
//                             </Stack>
//                         </div>
//                         <p className="sign_up">Have you already account? <Link to="/login" id='forgot-password'>Login</Link></p>
//                     </form>
//                 </div>
//             </div>

//         </>
//     )
// }



import React, { useState } from 'react';
import "./login.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../Store/features/authSlice/authSlice';
import { showErrorMsg, showSuccessMsg, showWarningMsg } from '../../../utils/ShowMessage';
import MetaData from '../Layout/MetaData';

export default function PasswordResset() {
    const [showPassword, setShowPassword] = useState(false);
    const [showCpassword, setShowCpassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowCPassword = () => setShowCpassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    // State for registration form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === cpassword) {
            dispatch(registerUser({ email, password, cpassword })).then((data) => {
                if (data.payload.success) {
                    navigate("/admin/dashboard/");
                    showSuccessMsg("User Successfully Inserted !!");
                } else {
                    showErrorMsg(data.payload.message);
                }
            });
        } else {
            showWarningMsg("Password Does not Match");
        }
    };

    return (
        <div className="login-container">
                            <MetaData title={"Sing Up"}/>
            
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <h3>Sign Up with</h3>
                    <div className="login_option">
                        <div className="option">
                            <a href="#">
                                <img src="assets/img/google.png" alt="Google" />
                                <span>Google</span>
                            </a>
                        </div>
                        <div className="option">
                            <a href="#">
                                <img src="assets/img/facebook.png" width={40} alt="Facebook" />
                                <span>Facebook</span>
                            </a>
                        </div>
                    </div>
                    <p className="separator">
                        <span>or</span>
                    </p>

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" 
                            placeholder="abc@gmail.com" 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput 
                                id="outlined-adornment-password" 
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={showPassword ? 'hide the password' : 'display the password'}
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </FormControl>
                        
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-cpassword">Confirm Password</InputLabel>
                            <OutlinedInput 
                                id="outlined-adornment-cpassword" 
                                type={showCpassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={showCpassword ? 'hide the password' : 'display the password'}
                                            onClick={handleClickShowCPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showCpassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                                onChange={(e) => setCpassword(e.target.value)}
                                required
                            />
                        </FormControl>
                    </Box>

                    <div className="" style={{ marginLeft: "20px" }}>
                        <Stack direction="row" spacing={2}>
                            <Button className='w-100' variant="contained" endIcon={<LoginIcon />} type='submit'>
                                Sign up
                            </Button>
                        </Stack>
                    </div>
                    <p className="sign_up">
                        Already have an account? <Link to="/login" id='forgot-password'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
