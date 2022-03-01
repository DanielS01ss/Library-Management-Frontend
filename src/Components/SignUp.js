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

const SignUp = ()=>{


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
      <div>
        <div className="login-card fixed w-[420px] py-5 bg-white flex flex-col mx-auto ">
          <img src={WebPageIcon}  className="w-[20px] mx-[190px]"/>
          <p className="font-bold text-xl text-center py-1">BookLand</p>
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
                 label="Name"
                 defaultValue=""
                 helperText=""
                 />
                </div>
        </Box>
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
               label="Surname"
               defaultValue=""
               helperText=""
               />
              </div>
            </Box>

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
             label="Email"
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
             <FormControl sx={{ m: 1, width: '43ch' }}  variant="outlined">
                 <InputLabel htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
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
            <button className="button bg-black text-lg font-bold login-btn text-white rounded-md mx-2 py-5 ">Sign Up</button>
            <button className="button sign-with-google hover:bg-black hover:text-white bg-white text-lg font-bold border-2 border-black rounded-md mx-2 py-4 w-96 my-2">Sing up with google<FontAwesomeIcon className="px-5 text-2xl" icon={faGoogle} /></button>
            <button className="button sign-with-google hover:bg-black hover:text-white bg-white bg-white text-lg font-bold border-2 border-black rounded-md mx-2 py-4 w-96">Sign up with  Facebook <FontAwesomeIcon className="px-5 text-2xl" icon={faFacebook} /></button>
            <p className="text-center text-lg">Already have an account? <br/> <span className="text-underline font-bold">Log in!</span></p>
            </div>
        </div>

      </div>

    </div>
  );

};

export default SignUp;
