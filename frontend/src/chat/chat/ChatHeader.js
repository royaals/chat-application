import React from "react";
import { Box, styled, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import MoreVert from "@mui/icons-material/MoreVert";
import { AccountContext } from "../../context/AccountProvider";

const Header = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  height: 40,
  width: 40,
  objectFit: "cover",
  borderRadius: "50%",
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;
const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
`;
const RightContainer = styled(Box)`
  margin-left: auto;
`;
const Search = styled(SearchIcon)`
  padding: 8px;
  font-size: 22px;
  color: #000;
`;

const Vert = styled(MoreVertIcon)`
  padding: 8px;
  font-size: 22px;
  color: #000;
`;

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccountContext);
  return (
    <Header>
      <Image src={person.picture} alt="dp"></Image>
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <RightContainer>
        <Search />
        <Vert />
      </RightContainer>
    </Header>
  );
};

export default ChatHeader;
