import React from "react";

import { useContext } from "react";
import { AccountContext } from "../context/AccountProvider";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "../chat/ChatDialog";

const LoginHeader = styled(AppBar)`
  height: 225px;
  background-color: #00a884;
  box-shadow: none;
`;
const Header = styled(AppBar)`
  height: 120px;
  background-color: #00a884;
  box-shadow: none;
`;
const Component = styled(Box)`
  height: 100vh;
  background-color: whitesmoke;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>

          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
