import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useCartContext } from './ContextApi/CartContext';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from './ContextApi/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

function Checkout() {

    const { cart, total_price, total_items } = useCartContext()
    const { user, user1 } = UserAuth()

    const email = localStorage.getItem("email")

    let orderItems = () => {
        const orderDetails = {
            email : email || user.email,
            name : user1.fullName || user.displayName,
            quantity : total_items,
            total : total_price
          }
        fetch(`https://dailydress-backend.onrender.com/dailyDress/products/send`,{
          method:"POST",
          body: JSON.stringify(orderDetails),
          headers: {
            "Content-Type" : "application/json",
              Authorization:token

        },
        })
            .then((data) => data.json())
              .then((data) => console.log(data),
              toast.error('Mail Sent Regarding Your Orders', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })
              )
              .then((list) => console.log(list))
      }

      let navigate = useNavigate()

const token = localStorage.getItem("Authorization")

if(!token){
  navigate("/")
}

  return <>
  
  <Box sx={{backgroundColor:"#f2f2f2",display:"flex",alignItems:"center",padding:{xs:"30px 10px",sm:"30px",md:"30px"},height:"100vh"}}>
<Paper sx={{padding:"30px 30px",width:{xs:"95%",sm:"90%",md:"50%"},margin:"0px auto",textAlign:"center"}}>
        <h4 style={{fontSize:"14px",lineHeight:"22px"}}>Make Your Payment here by Entering Your Address to send the Product to Your Address.</h4>


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
        {/* <p>{name}</p> */}
            </Paper>
        )
    })
}
        
        <hr/>

        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Total Order Amount<br/><br/>₹{total_price}</p>

        <hr/>

        <Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px",margin:"8px 0px 8px 0px",width:"100%"}} onClick={orderItems}>Make Payment</Button>
        <ToastContainer />
</Paper>
  </Box>

  </>
}

export default Checkout