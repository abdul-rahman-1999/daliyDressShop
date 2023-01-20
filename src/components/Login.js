import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { UserAuth } from './ContextApi/AuthContext';
import {useFormik} from "formik";
import * as yup from "yup"
import 'react-toastify/dist/ReactToastify.css';

const formValidationSchema = yup.object({
    email:yup.string().required(),
    password:yup.string().required().min(5),
})

function Login() {

  const { googleSignIn, setUser1 } = UserAuth() 
  
   let navigate = useNavigate()

  const signIn = async () => {
   try{
   await googleSignIn()
    navigate("/dailydress/main")
   }catch(error){
    console.log(error)
   }
  }

  const {handleSubmit, values, handleChange,handleBlur,touched, errors} = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema : formValidationSchema,
    onSubmit:(loginUser) => {
        addList(loginUser)
    }
})

let addList = (loginUser) => {
    fetch("http://localhost:4005/users/login",{
        method:"POST",
        body: JSON.stringify(loginUser),
        headers: {
          "Content-Type" : "application/json",
      },
      })
          .then((data) => data.json())
          .then(data => {setUser1(data.userDetail)
          if(data){
            localStorage.setItem("Authorization", data.token)
            localStorage.setItem("email", data.userDetail.email)
            if (data.msg === "Login Successfully") {
                // navigate('/dailydress/main')
                toast.success('Login Successfully', {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  },navigate("/dailyDress/main"))
            }
            }
          })
      .catch(err => toast.error("Invalid Credentials", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }))
}


  return <>
  <Box sx={{backgroundImage: `url(${"https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?w=1380&t=st=1673363486~exp=1673364086~hmac=2af8aedfdb0cc11a98a34cdadc5b41144c063f24720727b8289d9c550590005b"})`,
  backgroundRepeat: "no-repeat",backgroundPosition:{xs:"right",sm:"top",md:"top"},backgroundSize:"cover",height:{xs:"100vh",md:"100vh"},display:"flex",alignItems:"center"}}>
<Box sx={{padding:"50px 30px",width:{xs:"70%",sm:"400px",md:"400px"},margin:"0px auto",textAlign:"center",
background: "rgba(255, 255, 255, 0.15)",
borderRadius: "16px",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
backdropFilter: "blur(5px)",
webkitBackdropFilter: "blur(5px)",
border: "1px solid rgba(255, 255, 255, 0.3)"}}>
          <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '120px', md: '120px' },
        }}
        alt="The house from the offer."
        src="/images\fcs.png"
        />
        <h4>Login to Your Account</h4>
        <form  onSubmit = {handleSubmit}>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>

        <TextField 
        id="outlined-basic" 
        label="Email" 
        variant="outlined" 
        name="email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        type="text"
        error = {touched.email && errors.email}
         helperText =  {touched.email && errors.email ? errors.email :null}
        />

        <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        type="password"
        error = {touched.password && errors.password}
         helperText =  {touched.password && errors.password ? errors.password :null}
        />

        <Button type="submit" sx={{backgroundColor:"#8E3A59",padding:"15px"}} variant="contained">Login</Button>
        <ToastContainer />
        </Box>
        </form>
        <h5 onClick={signIn} style={{margin:"10px",color:"white"}}>Sign in with Google <span style={{color:"black",cursor:"pointer"}}>Click here</span></h5>
        <h5 style={{margin:"10px",color:"white"}}>Dont have an account <span style={{color:"black",cursor:"pointer"}} onClick={() => navigate("/dailyDress/signup")}>Click here</span></h5>
        <h5 style={{margin:"10px",color:"white"}}>Forgot Password <span style={{color:"black",cursor:"pointer"}} onClick={() => navigate("/dailyDress/forgotpassword")}>Click here</span></h5>

</Box>
  </Box>
  </>
}

export default Login