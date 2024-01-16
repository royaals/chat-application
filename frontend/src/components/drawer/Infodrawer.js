import React from 'react'
import {Box, Drawer,styled } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

const Header =styled(Box)`
    background: #008069;
    height: 101px;
    color: #ffff;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
        
    }
    & > p{
        margin-top: 45px;
        font-size: 18px;
    }

`
const Component =styled(Box)`
   background:#f0f2f5;
   height: 95%;

`
const drawerstyle= {
    left:140,
    top: 18,
    height: "94%",
    width: "23.5%",
    boxShadow: "none",
    
}
const Infodrawer = ({open,setOpen}) => {
    const handleClose =() => {
        setOpen(false);
    }
  return (

       <Drawer
      
      open={open}
      onClose={handleClose}
      PaperProps={{sx: drawerstyle}}
      style={{zIndex: 1500}}
      hideBackdrop={true}
    >
     <Header>
     <ArrowBackIcon  onClick={()=> setOpen(false)}/> 
     <p>Profile</p>
     </Header>
     <Component>
       <Profile/>
     </Component>
    </Drawer>
    
  )
}

export default Infodrawer
