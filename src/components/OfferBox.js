import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function OfferBox() {

        let navigate = useNavigate()
        
        const token = localStorage.getItem("Authorization")

        if(!token){
          navigate("/")
        }

  return <>

   <Paper sx={{backgroundColor:"#FFEFF5",width:"100%"}}>

    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:{xs:1,sm:2,md:4},padding:"30px",flexDirection:{xs:"column",sm:"row"}}}>

    <Box sx={{padding:"0px 20px"}}>

    <p style={{fontSize:"16px",fontWeight:"600",margin:"10px 0px"}}>Party Wear Gown's are Available here</p>
    <p style={{fontSize:"16px",fontWeight:"600",margin:"10px 0px"}}>Ocassions : <span style={{fontWeight:700}}>Wedding</span></p>
    <p style={{fontSize:"16px",fontWeight:"600",margin:"10px 0px"}}>Fabric : <span style={{fontWeight:700}}>Silk</span></p>
    <p style={{fontSize:"16px",fontWeight:"600",margin:"10px 0px"}}>If You Need Color Suggestion On Daily Basis <span onClick={() => navigate("/dailyDress/products/colorsuggestion")} style={{cursor:"pointer",color:"#8E3A59"}}>Click here</span></p>
    <h1 style={{fontSize:"18px"}}>Up To 30% OFF</h1>
    <Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px",margin:"0px 0px 20px 0px"}} onClick={() => navigate("/dailyDress/products")}>Shop Now</Button>

    </Box>


<Box
    component="img"
    sx={{
        margin:0,
      objectFit:'cover',
      objectPosition:"top",
      width: { xs: '90%',sm:"250px", md: '280px' },
      height:{ xs: '90%',sm:"250px", md: '280px' }
    }}
    alt="The house from the offer."
    src="https://stylesatlife.com/wp-content/uploads/2021/07/Digital-Printed-Partywear-Gown.jpg"
    />

    </Box>

   </Paper>

  </>
}

export default OfferBox