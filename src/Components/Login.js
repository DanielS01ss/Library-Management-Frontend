import React from "react";
import "../Styles/LoginAndSignup.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import WebPageIcon from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"

const Login = ()=>{


    const [values, setValues] = React.useState({
     amount: '',
     password: '',
     weight: '',
     weightRange: '',
     showPassword: false,
   });

   const handleChange = (prop) => (event) => {
     setValues({ ...values, [prop]: event.target.value });
   };

   const handleClickShowPassword = () => {
     setValues({
       ...values,
       showPassword: !values.showPassword,
     });
   };

   const handleMouseDownPassword = (event) => {
     event.preventDefault();
   };


  return(
    <div className="login-signup-container ">

      <div className="login-card fixed w-[420px] py-5 bg-white flex flex-col mx-auto ">
        <img src={WebPageIcon}  className="w-[100px] mx-40"/>
        <p className="font-bold text-2xl text-center py-5">BookLand</p>
              <Box component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '43ch' },
                }}
                noValidate
                autoComplete="off"

               >
             <div >
             <TextField

               id="outlined-error-helper-text"
               label="Username"
               defaultValue=""
               helperText=""
               />
              </div>
      </Box>
      <FormControl sx={{ m: 1, width: '43ch' }}  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
           <OutlinedInput
             id="outlined-adornment-password"
             type={values.showPassword ? 'text' : 'password'}
             value={values.password}
             onChange={handleChange('password')}
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   aria-label="toggle password visibility"
                   onClick={handleClickShowPassword}
                   onMouseDown={handleMouseDownPassword}
                   edge="end"
                 >
                   {values.showPassword ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
               </InputAdornment>
             }
             label="Password"
           />
           </FormControl>
          <div className="flex flex-col w-100">
          <button className="button bg-black text-lg font-bold login-btn text-white rounded-md mx-2 py-5 ">Login</button>
          <button className="button sign-with-google hover:bg-black hover:text-white bg-white text-lg font-bold border-2 border-black rounded-md mx-2 py-4 w-96 my-2">Log in with Google<FontAwesomeIcon className="px-5 text-2xl" icon={faGoogle} /></button>
          <button className="button sign-with-google hover:bg-black hover:text-white bg-white bg-white text-lg font-bold border-2 border-black rounded-md mx-2 py-4 w-96">Log in with Facebook <FontAwesomeIcon className="px-5 text-2xl" icon={faFacebook} /></button>
          <p className="text-center text-lg">Don't have an account? <br/> <span className="text-underline font-bold">Sign up!</span></p>
          </div>
      </div>
    </div>
  );

};

export default Login;
