import React from 'react'
import Box from '@mui/material/Box';
import  Carousel  from 'react-multi-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import saree from '../images/saree.jpg'
import gown from '../images/gown.jpg'
import salwar from '../images/salwar.jpg'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Banner() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1,
          slidesToSlide: 1,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      let navigate = useNavigate()

  return <>
  <Carousel responsive={responsive}>
  <Box sx={{backgroundImage:`url(${saree})`,backgroundSize:'cover',backgroundPosition:'top',backgroundRepeat:"no-repeat",width:"100%",height:{xs:"350px",sm:"350px",md:"550px"}}}>
    
    <Box sx={{width:"70%",margin:"0px auto",display:"flex",alignItems:"center",height:{xs:"350px",sm:"350px",md:"550px"},justifyContent:{xs:"center",sm:"center",md:"start"}}}>

    <Box sx={{padding:"20px 30px",width:{xs:"300px",sm:"400px",md:"400px"},textAlign:"center",
background: "rgba(255, 255, 255, 0.15)",
borderRadius: "16px",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
backdropFilter: "blur(3px)",
webkitBackdropFilter: "blur(5px)"}}>
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
     <h4 style={{fontSize:"16px",margin:"10px"}}>We have Collection of Different Sarees for Different Ocassion</h4>
    <h4 style={{fontSize:"16px",margin:"10px"}}>Up To 30% OFF</h4>

    <Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px"}} onClick={() => navigate("/dailyDress/products")}>Shop Now</Button>

</Box>

    </Box>

  </Box>
  <Box sx={{backgroundImage:`url(${salwar})`,backgroundSize:'cover',backgroundPosition:'top',backgroundRepeat:"no-repeat",width:"100%",height:{xs:"350px",sm:"350px",md:"550px"}}}>
    
  <Box sx={{width:{xs:"90%",sm:"70%"},margin:"0px auto",display:"flex",alignItems:"center",height:{xs:"350px",sm:"350px",md:"550px"},justifyContent:{xs:"center",sm:"center",md:"start"}}}>

<Box sx={{padding:"20px 30px",textAlign:"center",
background: "rgba(255, 255, 255, 0.15)",
borderRadius: "16px",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
backdropFilter: "blur(5px)",
webkitBackdropFilter: "blur(3px)"}}>
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
        <h4 style={{fontSize:"16px",margin:"10px"}}>We have Collection of Different Salwar for Different Ocassion</h4>
    <h4 style={{fontSize:"16px",margin:"10px"}}>Up To 30% OFF</h4>

    <Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px"}} onClick={() => navigate("/dailyDress/products")}>Shop Now</Button>

</Box>

</Box>

    </Box>
    <Box sx={{backgroundImage:`url(${gown})`,backgroundSize:'cover',backgroundPosition:'top',backgroundRepeat:"no-repeat",width:"100%",height:{xs:"350px",sm:"350px",md:"550px"}}}>
    
    <Box sx={{width:"70%",margin:"0px auto",display:"flex",alignItems:"center",height:{xs:"350px",sm:"350px",md:"550px"},justifyContent:{xs:"center",sm:"center",md:"start"}}}>

<Box sx={{padding:"20px 30px",width:{xs:"300px",sm:"400px",md:"400px"},textAlign:"center",
background: "rgba(255, 255, 255, 0.15)",
borderRadius: "16px",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
backdropFilter: "blur(5px)",
webkitBackdropFilter: "blur(3px)"}}>
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
    <h4 style={{fontSize:"16px",margin:"10px"}}>We have Collection of Different Gown for Different Ocassion</h4>
    <h4 style={{fontSize:"16px",margin:"10px"}}>Up To 30% OFF</h4>

    <Button variant="contained" sx={{backgroundColor:"#8E3A59",color:"white",padding:"7px 15px"}} onClick={() => navigate("/dailyDress/products")}>Shop Now</Button>

</Box>

</Box>

    </Box>
  </Carousel>
  </>
}

export default Banner