import React, { useState } from "react";
import { Box } from "@mui/material";
import { loadImage, createCanvas, Canvas } from "canvas";
import { Button } from "@mui/material";
import NextImage from "next/image";
import useDownloader from "react-use-downloader";
import { useAvailableNftsContext } from "../contexts/AvailableNftsProvider";
import headerTemplate1 from "../public/twitter_header_template_1.png";
import logo from "../public/main_logo_round.png";

type Props = {};

const Banner = (props: Props) => {
  const [createdImageUrl, setCreatedImageUrl] = useState("");
  const { nfts } = useAvailableNftsContext();

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const createBannerHandler = async () => {
    console.log(nfts);

    const canvas = createCanvas(1500, 500);
    const ctx = canvas.getContext("2d");
    const template = await loadImage(headerTemplate1.src);
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

    // const nftImage = new Image();
    // // await loadImage(nfts[0].imageUrl);
    // nftImage.crossOrigin = "Anonymous";
    // nftImage.addEventListener(
    //   "load",
    //   function imageReceived() {
    //     ctx.drawImage(nftImage, 0, 0, 250, 250);
    //   },
    //   false
    // );
    // nftImage.src = nfts[0].imageUrl;

    const imageUrl = canvas.toDataURL();

    setCreatedImageUrl(imageUrl);
  };

  return (
    <Box>
      <Button onClick={createBannerHandler}>Create Banner</Button>
      {createdImageUrl && (
        <NextImage
          src={createdImageUrl}
          alt="created Image"
          width={750}
          height={250}
        />
      )}
      <Button
        onClick={() => download(createdImageUrl, "createdImage.png")}
        disabled={createdImageUrl === ""}
      >
        Download
      </Button>
    </Box>
  );
};

export default Banner;
