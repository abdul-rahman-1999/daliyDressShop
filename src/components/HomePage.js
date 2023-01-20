import React, { useState,useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Banner from '../components/Banner'
import { useNavigate } from 'react-router-dom';
import OfferBox from './OfferBox';

function HomePage() {

  let navigate = useNavigate()
  const token = localStorage.getItem("Authorization")


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const [item,setItem] = useState([])

    
      const getItems = () => {
        fetch("http://localhost:4005/dailyDress/products",
        {
            method:"GET",
            headers:{
              Authorization:token
          }
    })
        .then((data) => data.json())
        .then((lsts) => {setItem(lsts)})
        }
    
        useEffect(() => {getItems()},[])

  return <>
<Banner/>
<Box sx={{width:"80%",margin:{xs:"25px auto",sm:"30px auto",md:"35px auto"},textAlign:"center"}}>

<Carousel responsive={responsive}>
 
 {
   item && item.map((e) => { 
    const { _id, img, name, price, sellingType } = e
    return (
<Box onClick={() => navigate(`/dailydress/products/${_id}`)} key={_id} sx={{textAlign:"center"}}>
<Box
       component="img"
       sx={{
           margin:0,
         objectFit:'cover',
         objectPosition:"top",
         width: { xs: '300px',sm:"220px", md: '250px' },
         height:"350px"
       }}
       alt="The house from the offer."
       src={img}
       />
       <h6 style={{fontSize:"14px",margin:"10px 0px"}}>{name}</h6>
       <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>

<h1 style={{fontSize:"16px",color:"#8E3A59"}}>{sellingType}</h1>
<h1 style={{fontSize:"16px"}}>₹{price}</h1>

</Box>
</Box>
    )
   })
 }


</Carousel>
<Button variant="text" sx={{color:"black",padding:{xs:"3px 20px",sm:"5px 20px",md:"25px 20px"},margin:"0px",fontWeight:600,fontSize:"13px"}} onClick={() => navigate('/dailyDress/products')}>View All</Button>

</Box>
<OfferBox/>

  </>
}

export default HomePage