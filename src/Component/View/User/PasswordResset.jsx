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
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../Store/features/authSlice/authSlice';
import { showErrorMsg, showSuccessMsg, showWarningMsg } from '../../../utils/ShowMessage';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Swal from 'sweetalert2';
import axiosInstance from '../../../ApiHendler/axiosInstance';
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
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [loading, setLoading] = useState(false);
    const param=useParams({})
    const token=param.token
    console.log(param.token)
    console.log("Token",token)
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axiosInstance.put(`/api/v1/password/reset/${token}`,{ password,cpassword }, { withCredentials: true });
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

    return (
        <div className="login-container">
                            <MetaData title={"Password Resset"}/>
            
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                     <img src="/assets/img/breadcrumb.jpg" height="50px" alt="" />

                    <h3>Make New Password</h3>
                    <p>Make Stong password and add special symbols</p>
                    {/* <div className="login_option">
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
                    </div> */}
                    

                    <Box
                        component="form"
                        sx={{ '& > :not(style)': { m: 1, width: '100%' } }}
                        noValidate
                        autoComplete="off"
                    >
                       
                        
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
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
                                label="New Password"
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

                    <div className="" style={{ marginLeft: "20px",marginTop:"10px" }}>
                        <Stack direction="row" spacing={2}>
                            <Button className='w-100' variant="contained" endIcon={<LibraryAddIcon />} type='submit'>
                                Save Password
                            </Button>
                        </Stack>
                    </div>
                  
                </form>
            </div>
        </div>
    );
}
