import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from "@mui/material";

const VerticalIcon= styled(MoreVertIcon)`
    margin-left: 2px;
    padding: 8px;
    color: #54656f;
 `   
const Headermenu = () => {
  return (
    <div>
      <VerticalIcon/>
    </div>
  )
}

export default Headermenu
