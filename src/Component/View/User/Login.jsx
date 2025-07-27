import React, { useEffect, useState } from 'react'
// import "./login.css"
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
import { useDispatch, useSelector } from 'react-redux';
import { showErrorMsg, showSuccessMsg } from '../../../utils/ShowMessage';
import { loginUser } from '../../../Store/features/authSlice/authSlice';
import Loader from '../Loader/Loader';
import MetaData from '../Layout/MetaData';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    //Start Login

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, error, isLoading, isAuthentication } = useSelector((state) => state.auth)
    console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        dispatch(loginUser({ email, password })).then((data) => {
            console.log("Login me Kya aaya hai ", data.payload)
            if (data.payload.success) {
                showSuccessMsg("Login Successfully !!")
                // navigate("/")
                if (data.payload.user.role === "admin") {
                    navigate("/admin/dashboard")
                }
                else {
                    navigate('/')
                }
            }
            else {
                showErrorMsg(data.payload.message)
            }
        })
    }
    // useEffect(()=>{
    //     debugger
    //     if(isAuthentication){
    //         if(user.role==="admin"){
    //             navigate("/admin/dashboard")
    //         }
    //         else{
    //             navigate('/')
    //         }
    //     }
    // },[])
    return (
        <>
            {
                isLoading ? <Loader /> :

                    <div className="login-container">

                <MetaData title={"Login"}/>

                        <div className="login_form">
                            <form onSubmit={handleSubmit}>
                                <h3>Log in with</h3>
                                <div className="login_option">
                                    <div className="option">
                                        <a href="#">
                                            <img src="assets/img/google.png" />
                                            <span>Google</span>
                                        </a>
                                    </div>
                                    <div className="option">
                                        <a href="#">
                                            <img src="assets/img/facebook.png" width={40} alt="Apple" />
                                            <span>Facebook</span>
                                        </a>
                                    </div>
                                </div>
                                <p className="separator">
                                    <span>or</span>
                                </p>

                                {/* <div className="input_box">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter email address" required />
                        </div>
                        <div className="input_box">
                            <div className="password_title">
                                <label for="password">Password</label>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <input type="password" id="password" placeholder="Enter your password" required />
                        </div> */}

                                <Box
                                    component="form"
                                    sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-basic" label="Email" variant="outlined" placeholder="abc@gmail.com" onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {/* <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> */}

                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                        <OutlinedInput
                                            id="outlined-adornment-password"
                                            type={showPassword ? 'text' : 'password'}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label={
                                                            showPassword ? 'hide the password' : 'display the password'
                                                        }
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
                                        />
                                    </FormControl>

                                </Box>
                                <div className="m-2">

                                    <Link to="/forgot-password" id='forgot-password'>Forgot your Password ?</Link>
                                </div>

                                <div className="" style={{ marginLeft: "20px" }} >

                                    <Stack direction="row" spacing={2}>

                                        <Button className='w-100' variant="contained" endIcon={<LoginIcon />} type='submit'>
                                            login
                                        </Button>
                                    </Stack>
                                </div>
                                <p className="sign_up">Don't have an account? <Link to="/sign-up" id='forgot-password'>Sign up</Link></p>
                            </form>
                        </div>
                    </div>
            }

        </>
    )
}
