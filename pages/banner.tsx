import React, { useState } from "react";
import { Box } from "@mui/material";
import { loadImage, createCanvas, Canvas } from "canvas";
import headerTemplate1 from "../public/twitter_header_template_1.png";
import { Button } from "@mui/material";
import Image from "next/image";
import useDownloader from "react-use-downloader";

type Props = {};

const Banner = (props: Props) => {
  const [createdImageUrl, setCreatedImageUrl] = useState("");

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const createBannerHandler = async () => {
    const canvas = createCanvas(1500, 500);
    const ctx = canvas.getContext("2d");
    const template = await loadImage(headerTemplate1.src);
    console.log(
      "🚀 ~ file: banner.tsx:21 ~ createBannerHandler ~ headerTemplate1.src",
      headerTemplate1.src
    );
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

    const imageUrl = canvas.toDataURL();
    console.log(
      "🚀 ~ file: banner.tsx:26 ~ createBannerHandler ~ imageUrl",
      imageUrl
    );

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
