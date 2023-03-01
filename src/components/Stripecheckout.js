import React from 'react'
import { UserAuth } from './ContextApi/AuthContext';
import { useCartContext } from './ContextApi/CartContext';
import StripeCheckout from 'react-stripe-checkout'
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Stripecheckout() {

    const { total_price } = useCartContext()
    let navigate = useNavigate()

   function tokenHandler(token){
    
    if(token){
        toast.success('Payment Done & Your Order is Placed', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        })
                        setTimeout(() => {
                        navigate("/dailyDress/products")
                        }, 5000)
    }
      }

  return <>
  
   <StripeCheckout amount={total_price * 100} shippingAddress token={tokenHandler} currency="INR" stripeKey="pk_test_51MgiTbSFzVFGx5mXeir29Et6NdzZv7uelev0WMvIj3xiJ3bedFpLoJsngwq2g9ZQyZvcpMYbjUGKXM8ZxFERrBu700dxEDcJQC">

   <Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px",margin:"8px 0px 8px 0px",width:"100%"}}>Make Payment</Button>
   <ToastContainer />

   </StripeCheckout>

  </>
}

export default Stripecheckout