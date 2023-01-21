import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function Home() { 

  const [item,setItem] = useState([])
  const [product,setProduct] = useState([])
  const [list,setList] = useState([])
  let [query,setQuery] = useState('')


  const getItems = () => {
    fetch("https://dailydress-backend.onrender.com/dailyDress/products",
    {
        method:"GET",
        headers:{
          Authorization:token
      }
})
    .then((data) => data.json())
    .then((lsts) => {setItem(lsts)
      setProduct(lsts)
      setList(lsts)})
    }

    useEffect(() => {getItems()},[])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const filterItem = (categItem) => {
const updatedItems = product.filter((e) => {
return e.type === categItem
})
setItem(updatedItems)
setAnchorEl(null);
    }

function filterAll(){
  setItem(list)
  setAnchorEl(null);
}

let navigate = useNavigate()

const token = localStorage.getItem("Authorization")

if(!token){
  navigate("/")
}

    const StyledMenu = styled((props) => (
      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        {...props}
      />
    ))(({ theme }) => ({
      '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
          theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
          padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
          '& .MuiSvgIcon-root': {
            fontSize: 18,
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1.5),
          },
          '&:active': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    }));
    

  return<>

<Box sx={{width:{xs:"80%",sm:"75%",md:"65%"},display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:{xs:"column",sm:"row",md:"row"},margin:"0px auto",gap:{xs:2,sm:4,md:15},flexWrap:"wrap",padding:"20px 0px"}}>

<TextField 
        id="outlined-basic" 
        label="Search dress by Entering Type of Dress"
        variant="outlined"
        name="Search"
        value={query}
        type="text"
        onChange = {(e) => setQuery(e.target.value)}
        sx={{width:{xs:"100%",sm:"50%",md:"40%"}}}
        />

<Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Select By Type
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
      <MenuItem onClick={filterAll} disableRipple>

      All
      </MenuItem>
        <MenuItem onClick={() => filterItem('sarees')} disableRipple>

          Sarees
        </MenuItem>
        <MenuItem onClick={() => filterItem('Kurta')} disableRipple>

          Kurta
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem onClick={() => filterItem('Gown')} disableRipple>

          Gown
        </MenuItem>
        <MenuItem onClick={() => filterItem('Salwar')} disableRipple>

          Salwar
        </MenuItem>
        <MenuItem onClick={() => filterItem('Indian Chudidhar')} disableRipple>

         Indian Chudidhar
         </MenuItem>
      </StyledMenu>


</Box>



<Box sx={{width:{xs:"80%",sm:"95%",md:"80%"},display:"flex",alignItems:"center",justifyContent:"center",flexDirection:{xs:"column",sm:"row",md:"row"},margin:"0px auto",gap:{xs:4,sm:4,md:5},flexWrap:"wrap"}}>
  {
    item.filter((e) => e.name.toLowerCase().includes(query)).map((e) => { 
      const { _id, img, name, price, sellingType } = e
     return (
<Paper onClick={() => navigate(`/dailydress/products/${_id}`)} key={_id} sx={{width: { xs: '300px',sm:"220px", md: '250px' },textAlign:"center"}}>
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
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>

        <h1 style={{fontSize:"16px",color:"#8E3A59"}}>{sellingType}</h1>
        <h1 style={{fontSize:"16px"}}>₹{price}</h1>

        </Box>
        
</Paper>
     )
    })
  }

</Box>
  </>
}

export default Home