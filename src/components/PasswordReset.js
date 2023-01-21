import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import { useParams, useNavigate } from 'react-router-dom';
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formValidationSchema = yup.object({
  password:yup.string().required(),

})

function PasswordReset() {

    const {email,token} = useParams()
    let navigate = useNavigate()

    const {handleSubmit, values, handleChange,handleBlur,touched, errors} = useFormik({
      initialValues:{
        password:'',
      },
      validationSchema : formValidationSchema,
      onSubmit:(newList) => {
          addUser(newList)
      }
  
  })
    let addUser = (newList) => {
          fetch(`https://dailydress-backend.onrender.com/users/${email}/${token}`,{
            method:"POST",
            body: JSON.stringify(newList),
            headers: {
              "Content-Type" : "application/json",
          },
          })
              .then((data) => data.json())
              .then((data) => {
                if(data.msg === "Success"){
                  toast.success("New Password Added Successfully")
                  navigate('/dailyDress/login')
                }else{
                  toast.error("Please Enter Your New Password")
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
        <h4>Enter Your New Password</h4>

        <form  onSubmit = {handleSubmit}>
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",gap:3}}>

        <TextField
         id="outlined-basic"
          label="New Password"
           variant="outlined"
           name="password"
           value={values.password}
           onBlur={handleBlur}
           onChange={handleChange}
           type="password"
           error = {touched.password && errors.password}
            helperText =  {touched.password && errors.password ? errors.password :null}
            />

        <Button type="submit" sx={{backgroundColor:"#8E3A59",padding:"15px"}} variant="contained">Click here</Button>
        <ToastContainer />
        </Box>
        </form>

</Box>
  </Box>
  </>
}

export default PasswordReset