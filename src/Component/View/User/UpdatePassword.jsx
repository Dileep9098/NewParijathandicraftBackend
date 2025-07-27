import React, { useState } from 'react'; 
import "./login.css"; 
import Box from '@mui/material/Box'; 
import OutlinedInput from '@mui/material/OutlinedInput'; 
import InputLabel from '@mui/material/InputLabel'; 
import InputAdornment from '@mui/material/InputAdornment'; 
import FormControl from '@mui/material/FormControl'; 
import Visibility from '@mui/icons-material/Visibility'; 
import VisibilityOff from '@mui/icons-material/VisibilityOff'; 
import IconButton from '@mui/material/IconButton'; 
import Button from '@mui/material/Button'; 
import Stack from '@mui/material/Stack'; 
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'; 
import Swal from 'sweetalert2'; 
import axiosInstance from '../../../ApiHendler/axiosInstance'; 
import { useParams, useNavigate } from 'react-router-dom';
import { showErrorMsg } from '../../../utils/ShowMessage';
import MetaData from '../Layout/MetaData';

export default function UpdatePassword() {
    const [showOldPassword, setShowOldPassword] = useState(false); 
    const [showPassword, setShowPassword] = useState(false); 
    const [showCpassword, setShowCpassword] = useState(false); 

    const handleClickShowOldPassword = () => setShowOldPassword((show) => !show); 
    const handleClickShowPassword = () => setShowPassword((show) => !show); 
    const handleClickShowCPassword = () => setShowCpassword((show) => !show); 

    const handleMouseDownPassword = (event) => event.preventDefault(); 
    const handleMouseUpPassword = (event) => event.preventDefault(); 

    // State for password fields
    const [oldPassword, setOldPassword] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [cpassword, setCpassword] = useState(''); 
    const [loading, setLoading] = useState(false);

    

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axiosInstance.put(`/api/v1/password/update`, { password, cpassword ,oldPassword}, { withCredentials: true });
            setLoading(false);

            Swal.fire({
                title: 'Success!',
                text: response.data.message,
                icon: 'success',
                confirmButtonText: 'Okay'
            }).then(() => {
                navigate("/");
            });
        } catch (error) {
            setLoading(false);
            showErrorMsg(error.response.data.message)

            // Swal.fire({
            //     title: 'Error!',
            //     text: error.response ? error.response.data.message : 'An unexpected error occurred',
            //     icon: 'error',
            //     confirmButtonText: 'Okay'
            // });
        }
    };

    return (
        <div className="login-container">
                            <MetaData title={"Update Password"}/>
            
            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <img src="/assets/img/breadcrumb.jpg" height="50px" alt="" />
                    <h3>Make New Password</h3>
                    <p>Make a strong password and add special symbols</p>

                    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '100%' } }} noValidate autoComplete="off">
                        {/* Old Password Input */}
                        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-old-password">Old Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-old-password"
                                type={showOldPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={showOldPassword ? 'hide the password' : 'display the password'}
                                            onClick={handleClickShowOldPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        >
                                            {showOldPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Old Password"
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                            />
                        </FormControl>

                        {/* New Password Input */}
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

                        {/* Confirm Password Input */}
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

                    <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                        <Stack direction="row" spacing={2}>
                            <Button className="w-100" variant="contained" endIcon={<LibraryAddIcon />} type="submit">
                                Save Password
                            </Button>
                        </Stack>
                    </div>
                </form>
            </div>
        </div>
    );
}
