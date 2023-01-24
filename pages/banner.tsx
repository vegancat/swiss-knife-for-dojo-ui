import React, { useState } from "react";
import { Box } from "@mui/material";
import { loadImage, createCanvas, Canvas } from "canvas";
import { Button } from "@mui/material";
import Image from "next/image";
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
    console.log(
      "🚀 ~ file: banner.tsx:25 ~ createBannerHandler ~ template",
      template
    );
    const logoPng = await loadImage(logo.src);
    const nftImage = await loadImage(nfts[0].imageUrl);
    console.log(
      "🚀 ~ file: banner.tsx:26 ~ createBannerHandler ~ nftImage",
      nftImage
    );
    // @ts-ignore
    nftImage.crossOrigin = "Anonymous";

    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(nftImage, 0, 0, 250, 250);
    ctx.drawImage(logoPng, 1200, 175, 150, 150);
    const imageUrl = canvas.toDataURL();

    setCreatedImageUrl(imageUrl);
  };

  return (
    <Box>
      <Button onClick={createBannerHandler}>Create Banner</Button>
      {createdImageUrl && (
        <Image
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
