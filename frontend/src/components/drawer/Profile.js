import React from 'react'
import { Box,Typography,styled } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'

const ImageContainer=styled(Box)`
  display: flex;
  justify-content: center;

`

const Image=styled('img')({

    width: 200,
    height: 200,
    borderRadius:'50%',
    padding: "25px 0px"
})

const BoxWrapper =styled(Box)`
   background: #fff;
   padding: 12px 30px 2px;
   box-shadow:rgba(11,20,26,0.08);
   & :first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
   }
   & :last-child {
     margin: 14px 0;
     color: #4A4A4A;
   }  
`

const DiscriptionContainer=styled(Typography)`
   padding: 15px 20px 28px 30px;
   & > p {
     font-size: 13px;
     color: #667781;
   }
`



const Profile = () => {

    const {account}=useContext(AccountContext);

  return (
    <div>
      <ImageContainer>
        <Image src={account.picture} alt="dp" ></Image>
      </ImageContainer>
      <BoxWrapper>
       <Typography>Your name</Typography>
       <Typography>{account.name}</Typography>
      </BoxWrapper>
      <DiscriptionContainer>
         <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
      </DiscriptionContainer>
      <BoxWrapper>
       <Typography>About</Typography>
       <Typography>Hey there! I am using WhatsApp.</Typography>
      </BoxWrapper>
    </div>
  )
}

export default Profile
