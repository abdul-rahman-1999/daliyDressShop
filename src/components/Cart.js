import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCartContext } from './ContextApi/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function Cart() {

    const { cart, removeItem, clearCart, setDecrease, setIncrease, total_price, total_items } = useCartContext()
    let navigate = useNavigate()

     const token = localStorage.getItem("Authorization")

     if(!token){
       navigate("/")
     }
     
  return <>
  <Box sx={{width:{xs:"85%",sm:"90%",md:"85%"},margin:"0px auto",padding:"20px 0px"}}>

{
    cart.length > 0  && cart ? cart.map((e,i) => {
        const { _id, name, price, quantity, color, image } = e
        let total = price * quantity
        return (
            <Paper key={_id} sx={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:{xs:1,sm:4,md:15},flexWrap:"wrap",margin:"30px 0px",flexDirection:{xs:"column",sm:"row",md:"row",padding:"12px"}}}>
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
        <p style={{fontSize:"13px",fontWeight:700,margin:"8px 0px"}}>{name}<br/><span style={{color:"#013e2e"}}>color : {color}</span></p>
        <p style={{fontSize:"13px",fontWeight:700,margin:"8px 0px"}}>₹{price}</p>
        <p style={{fontSize:"13px",fontWeight:700,margin:"8px 0px"}}><RemoveIcon onClick={() => setDecrease(_id)} sx={{cursor:"pointer"}}/>{cart ? quantity : null}<AddIcon onClick={() => setIncrease(_id)} sx={{cursor:"pointer"}}/></p>
        <p style={{fontSize:"13px",fontWeight:700,margin:"8px 0px"}}>₹{total}</p>
        <p style={{fontSize:"13px",fontWeight:700,margin:"8px 0px"}} onClick={() => removeItem(_id)}><DeleteIcon sx={{color:"red",cursor:"pointer"}}/></p>
        {/* <p>{name}</p> */}
            </Paper>
        )
    })
    :
    <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Your Cart is Empty</p>
}
<hr/>
<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px",margin:"8px 0px 8px 0px"}} onClick={() => navigate("/dailyDress/products")}>Continue Shopping</Button>
{
    cart.length > 0 && cart ? <Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px",margin:"8px 0px 8px 0px"}} onClick={clearCart}>Clear Cart</Button>
    :
    null
}

</Box>
<hr/>

<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    {
        cart.length > 0  && cart ? <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>TotalItems</p> : null
    }

    {
        cart.length > 0  && cart ? <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>{total_items}</p> : null
    }
</Box>
<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    {
        cart.length > 0  && cart ? <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>OrderTotal</p> : null
    }

    {
        cart.length > 0  && cart ? <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>₹{total_price}/-</p> : null
    }
</Box>
<hr/>
{
    cart.length > 0  && cart ? <Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px",margin:"8px 0px 8px 0px",width:"100%"}} onClick={() => navigate("/dailyDress/products/cart/checkout")}>CheckOut</Button>
    :
    null
}

  </Box>
  </>
}

export default Cart