import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { UserAuth } from './ContextApi/AuthContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useCartContext } from './ContextApi/CartContext';



function NavBar() {

  const {user, googleLogout, user1} = UserAuth()

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const { total_items } = useCartContext()

  const token = localStorage.getItem("Authorization")

let navigate = useNavigate();

 let logOut = async () => {
    try{
      if(token){
        await localStorage.removeItem("Authorization")
        await localStorage.removeItem("email")
        await navigate("/")
      }else{
        await googleLogout()
        await navigate("/")
      }
    }catch(error){
console.log(error)
    }

 }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar sx={{backgroundColor:"#8E3A59"}} position="sticky">
      <Container maxWidth="90%">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
                   <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '120px', md: '120px' },
          padding:"10px 0px"
        }}
        alt="The house from the offer."
        src="/images\fcs1.png"
        />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem sx={{display:'flex',flexDirection:{xs:'column'},gap:{xs:1,sm:1,md:2}}} onClick={handleCloseNavMenu}>
                {
                    token || user ? <p onClick={() => navigate("/dailyDress/main")}>Home</p> : null
                }
                {
                    token || user ? <p onClick={() => navigate("/dailyDress/products/colorsuggestion")}>ColorSuggestions</p> : null
                }
                {
                    token || user ? <p onClick={() => navigate("/dailyDress/products")}>Products</p> : null
                }
                {
                  user?.displayName || user1?.fullName ? null : (<Typography sx={{fontSize:"14px",fontWeight:500,margin:"16px 0px"}} onClick={() => navigate("/dailyDress/signup")}>Signup</Typography>)
                }
                                {
                    user ? <p>{user.displayName}</p> : null
                }
                                {
                    token &&  <p>{user1?.fullName}</p>
                }
                                {
                 token || user ? (<Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate("/dailyDress/products/cart")}><Badge badgeContent={total_items} color="primary"><ShoppingCartIcon/></Badge></Typography>) : null
                }
                                               {
                  user?.displayName || user1?.fullName ? (<Typography sx={{fontSize:"14px",fontWeight:500,margin:"16px 0px"}} onClick={logOut}>Logout</Typography>) : (<Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate("/")}>Login</Typography>)
                }
                
                </MenuItem>
              
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 0,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
                   <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:'center',
          width: { xs: '120px', md: '120px' },
          padding:"10px 0px"
        }}
        alt="The house from the offer."
        src="/images\fcs1.png"
        />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white',display: { xs: 'none', md: 'flex' },flexDirection:{xs:'none',md:'row'},gap:4 }}
              >
                                {
                    token || user ? <p onClick={() => navigate("/dailyDress/main")}>Home</p> : null
                }
                {
                    token || user ? <p onClick={() => navigate("/dailyDress/products/colorsuggestion")}>ColorSuggestions</p> : null
                }
                {
                    token || user ? <p onClick={() => navigate("/dailyDress/products")}>Products</p> : null
                }
                                {
                  user || token ? null : (<Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate("/dailyDress/signup")}>SignUp</Typography>)
                }
                {
                    user ? <p>{user.displayName}</p> : null
                }
                {
                    token &&  <p>{user1?.fullName}</p>
                }
                                {
                  token || user ? (<Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate("/dailyDress/products/cart")}><Badge badgeContent={total_items} color="primary"><ShoppingCartIcon/></Badge></Typography>) : null
                }
                                                {
                  user || token ? (<Typography sx={{fontSize:"14px",fontWeight:500}} onClick={logOut}>Logout</Typography>) : (<Typography sx={{fontSize:"14px",fontWeight:500}} onClick={() => navigate("/")}>Login</Typography>)
                }
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;