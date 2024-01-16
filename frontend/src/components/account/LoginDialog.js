import React from "react";
import { Dialog, Box, styled } from "@mui/material";
import { useContext } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";
const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Title = styled("p")({
  fontSize: 26,
  fontFamily: "inherit",
  marginBottom: 25,
});

const List = styled("li")({
  padding: 0,
  marginTop: 15,
  fontSize: 18,
  lineHeight: 2,
});
const dialogstyle = {
  height: "96%",
  width: "60%",
  marginTop: "12%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};
const LoginDialog = () => {

  const {setAccount}=useContext(AccountContext);

  const onLoginSucess = async(res) => {
     const decoded=jwt_decode(res.credential);
     setAccount(decoded);
     await addUser(decoded);
     
    
  };

  const onLoginError = (res) => {
    console.log("login-fail", res);
  };
  return (
    <div>
      <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>Use WhatsApp on your computer</Title>
            <ol type="1">
              <List>Open WhatsApp on your phone</List>
              <List>Go to settings by tapping on your profile photo, </List>
              <List>
                Tap <strong>Linked devices</strong> and then{" "}
                <strong>Link a device</strong>
              </List>
              <List>
                <span>
                  Point your phone to this screen to capture the QR code
                </span>
              </List>
            </ol>
            <Box style={{ borderRadius: "30px", marginTop: "40px" }}>
              <GoogleLogin onSuccess={onLoginSucess} onError={onLoginError} />
            </Box>
          </Container>
        </Component>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
