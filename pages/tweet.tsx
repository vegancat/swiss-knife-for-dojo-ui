import { Box } from "@mui/material";
import React from "react";
import { TweetButton } from "../components/TweetButton";

type Props = {};

const tweet = (props: Props) => {
  return (
    <Box>
      <Box>Tweet About your NFT!</Box>
      <Box>
        <Box>Share your NFT on Twitter!</Box>
        <Box sx={{ width: "10rem", margin: "auto" }}>
          <TweetButton tags={["nft"]} title="myNft" url="mylink" />
        </Box>
      </Box>
    </Box>
  );
};

export default tweet;
