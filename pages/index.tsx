import Head from "next/head";
import Image from "next/image";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Swiss Knife for Dojo</title>
        <meta name="description" content="A toolkit for Dojo NFt collection" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ mt: 4, textAlign: "center" }}>
        Welcome to Swiss knife for nfts!
      </Box>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        This is a toolkit for Dojo NFt collection.
      </Box>
    </>
  );
}
