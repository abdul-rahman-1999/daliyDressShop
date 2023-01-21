import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { useCartContext } from './ContextApi/CartContext';

function Product() {

    const  { _id } = useParams()
    const [item,setItem] = useState({})
    const [count,setCount] = useState(1)
    const { addtoCart } = useCartContext()

    let navigate = useNavigate()

    const token = localStorage.getItem("Authorization")

    if(!token){
      navigate("/")
    }

    const getProduct = () => {
        fetch(`https://dailydress-backend.onrender.com/dailyDress/products/${_id}`,
        {
            method:"GET",
            headers:{
                Authorization:token
            }
    })
    .then((data) => data.json())
    .then((list) => {setItem(list)})
    }

    useEffect(() => {getProduct()},[])

    let add = () => {
        setCount(count+1)
    }

    let minus = () => {
        setCount(count-1)
        if(count === 1){
            setCount(count-0)
        }
    }

  return <>
  <Box sx={{width:{xs:"90%",sm:"90%",md:"65%"},display:"flex",alignItems:{xs:"center",sm:"start"},justifyContent:"center",flexDirection:{xs:"column",sm:"row",md:"row"},margin:"0px auto",gap:{xs:2,sm:4,md:5},flexWrap:"wrap",padding:"20px 0px"}}>
  <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:"top",
          width: { xs: '90%',sm:"300px", md: '350px' },
          height:{ xs: '90%',sm:"700px", md: '650px' }
        }}
        alt="The house from the offer."
        src={item.img}
        />
        <Box sx={{width: { xs: '90%',sm:"300px", md: '350px' },padding:{xs:"10px 0px",sm:"0px 20px",md:"0px 30px"}}}>
            <h1 style={{fontSize:"20px",color:"#013e2e"}}>{item.name}</h1>
            <h5 style={{fontSize:"18px",margin:"10px 0px",color:"#013e2e"}}>₹{item.price}</h5>
            <h6 style={{fontSize:"16px",margin:"10px 0px",color:"#013e2e"}}>Fabric : {item.fabric}</h6>
            <p style={{fontSize:"14px",margin:"10px 0px",lineHeight:"22px"}}>{item.description}</p>
            <h6 style={{fontSize:"16px",margin:"10px 0px",color:"#013e2e"}}>Ocassion : <span style={{fontSize:"14px",fontWeight:450,color:"black"}}>{item.ocassion}</span></h6>
            <h6 style={{fontSize:"16px",margin:"10px 0px",color:"#013e2e"}}>StyleTip : <span style={{fontSize:"14px",fontWeight:450,color:"black"}}>{item.styleTip}</span></h6>
            <h6 style={{fontSize:"16px",margin:"10px 0px",color:"#013e2e"}}>Color : <span style={{fontSize:"14px",fontWeight:450,color:"black"}}>{item.color}</span></h6>
            <h6 style={{fontSize:"16px",margin:"10px 0px",color:"#013e2e"}}>Day for this Color : <span style={{fontSize:"14px",fontWeight:450,color:"black"}}>{item.day}</span></h6>
            <h6 style={{fontSize:"16px",margin:"10px 0px",color:"#013e2e"}}>Description for this Color : <span style={{fontSize:"14px",fontWeight:450,color:"black"}}>{item.dayDescription}</span></h6>
            <h6 style={{fontSize:"16px",margin:"15px 0px",color:"#013e2e"}}>Quantity : <span style={{fontSize:"14px",fontWeight:450,color:"black",verticalAlign:"middle"}}><RemoveIcon onClick={minus} sx={{cursor:"pointer"}}/>{count}<AddIcon onClick={add} sx={{cursor:"pointer"}}/></span></h6>
            <Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px",margin:"0px 0px 20px 0px",width:"100%"}} onClick={() => addtoCart(item,count)}>Add To Cart</Button>
        </Box>
  </Box>
  </>
}

export default Product