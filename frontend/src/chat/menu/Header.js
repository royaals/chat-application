import React, { useState } from "react";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Infodrawer from "../../components/drawer/Infodrawer";

const Component = styled(Box)`
  height: 44px;
  background: whitesmoke;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
`;

const Chaticon = styled(ChatIcon)`
  margin-left: 2px;
  padding: 8px;
  color: #54656f;
`;

const Verticalicon = styled(MoreVertIcon)`
  margin-left: 2px;
  padding: 8px;
  color: #54656f;
`;

const MenuOptions = styled(MenuItem)`
  font-size: 14px;
  padding: 15px 60px 5px 24px;
  color: #4A4A4;
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
});
const Header = () => {
  const [openDrawer,setOpenDrawer]= useState(false);
  const toogleDrawer=() => {
    setOpenDrawer(true);
  }
  const { account } = useContext(AccountContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={() => toogleDrawer()}></Image>
        <Wrapper>
          <Chaticon />
          <Verticalicon  setOpenDrawer={setOpenDrawer}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuOptions onClick={() => {handleClose(); setOpenDrawer(true);}}>Profile</MenuOptions>
            <MenuOptions onClick={handleClose}>My account</MenuOptions>
            <MenuOptions onClick={handleClose}>Logout</MenuOptions>
          </Menu>
        </Wrapper>
      </Component>
      <Infodrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  );
};

export default Header;
