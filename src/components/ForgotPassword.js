import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formValidationSchema = yup.object({
  email:yup.string().required(),

})

function ForgotPassword() {

    const [message,setMessage] = useState(false)
    const {handleSubmit, values, handleChange,handleBlur,touched, errors} = useFormik({
      initialValues:{
        email:'',
      },
      validationSchema : formValidationSchema,
      onSubmit:(newList) => {
          addUser(newList)
      }
  
  })
    let addUser = (newList) => {
          fetch("http://localhost:4005/users/forgotPassword",{
            method:"POST",
            body: JSON.stringify(newList),
            headers: {
              "Content-Type" : "application/json",
          },
          })
              .then((data) => data.json())
              .then((data) => {console.log(data)
                if(data.msg === "Email Sent Successfully"){
                  setMessage(true)
                }else{
                  toast.error("Invalid Credentials")
                }
                })
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
        <h4>Enter the Email Id which you used to login</h4>

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
            { message ? <p style={{color:"green",fontWeight:600,textAlign:"center",margin:0}}>Reset Link Sent To Your Email Id</p> : null}

        <Button type="submit" sx={{backgroundColor:"#8E3A59",padding:"15px"}} variant="contained">Click here</Button>
        <ToastContainer />
        </Box>
        </form>

</Box>
  </Box>
  </>
}

export default ForgotPassword