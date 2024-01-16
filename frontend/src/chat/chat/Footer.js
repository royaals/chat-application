import React from "react";
import { Box, InputBase, styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import { useEffect } from "react";
import { uploadFile } from "../../service/api";
const Container = styled(Box)`
  height: 70px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
`;
const Emoji = styled(EmojiEmotionsOutlinedIcon)`
  margin: 5px;
  color: #919191;
`;
const Plus = styled(AddIcon)`
  margin: 5px;
  color: #919191;
`;
const Mic = styled(MicIcon)`
  margin: 8px;
  color: #919191;
`;
const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: 85%;
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let response = await uploadFile(data);
        setImage(response.data);
      }
    };
    getImage();
  }, [file]);
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };

  return (
    <Container>
      <Emoji />
      <label htmlFor="fileInput">
        <Plus />
      </label>

      <input
        
        id="fileInput"
        style={{ display: "none" }}
        onChange={(e) => onFileChange(e)}
      />
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
