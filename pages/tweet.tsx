import { Box } from "@mui/material";
import React from "react";
import { TweetButton } from "../components/TweetButton";

type Props = {};

const tweet = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box textAlign={"center"}>Tweet About your NFT!</Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box textAlign={"center"}>Share your NFT on Twitter!</Box>
        <Box sx={{ width: "10rem", margin: "auto" }}>
          <TweetButton
            tags={["Cyber_Samurai", "NFT", "SOL"]}
            title={`🎊 Yay! I'm a Cyber Samurai Holder now! 🚀. Wanna join the club? Buy one here:`}
            url="https://magiceden.io/marketplace/cyber_samurai_gen2"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default tweet;
