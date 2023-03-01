import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useCartContext } from './ContextApi/CartContext';
import { useNavigate } from 'react-router-dom';
import Stripecheckout from './Stripecheckout';

function Checkout() {

    const { cart, total_price, total_items } = useCartContext()

      let navigate = useNavigate()

const token = localStorage.getItem("Authorization")

if(!token){
  navigate("/")
}

  return <>
  
  <Box sx={{backgroundColor:"#f2f2f2",display:"flex",alignItems:"center",padding:{xs:"30px 10px",sm:"30px",md:"30px"},height:"100vh"}}>
<Paper sx={{padding:"30px 30px",width:{xs:"95%",sm:"90%",md:"50%"},margin:"0px auto",textAlign:"center"}}>
        <h4 style={{fontSize:"14px",lineHeight:"22px"}}>Card Number : 4242 2424 4242 4242 & MM/YY : 12/23 & CVC : 123.</h4>


        {
     cart.map((e,i) => {
        const { _id, name, price, quantity, color, image } = e
        let total = price * quantity
        return (
            <Paper key={_id} sx={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:{xs:1,sm:3,md:3},flexWrap:"wrap",margin:"30px 0px",flexDirection:{xs:"column",sm:"row",md:"row",padding:"12px"}}}>
             <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:"top",
          width: { xs: '80px',sm:"80px", md: '100px' },
          height:"80px"
        }}
        alt="The house from the offer."
        src={image}
        />
        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Name & Color<br/><br/>{name}<br/><span style={{color:"#8E3A59"}}>color : {color}</span></p>
        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Price<br/><br/>₹{price}</p>
        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Quantity<br/><br/>{quantity}</p>
        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Total Price<br/><br/>₹{total}</p>
            </Paper>
        )
    })
}
        
        <hr/>

        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Total Order Amount<br/><br/>₹{total_price}</p>

        <hr/>

        <Stripecheckout/>
</Paper>
  </Box>

  </>
}

export default Checkout