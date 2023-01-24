import { FC } from "react";
import { Box } from "@mui/material";
import TwitterIcon from "../public/twitter.svg";
import Image from "next/image";

export const TWITTER_INTENT_URL = "https://twitter.com/intent/tweet";

type Props = {
  title: string;
  url: string;
  tags: string[];
  className?: string;
};

// `t.co` shortens urls to a max of 23
// https://developer.twitter.com/en/docs/twitter-api/v1/developer-utilities/configuration/api-reference/get-help-configuration
const TWITTER_SHORT_URL_LENGTH = 23;
const MAX_TWEET_LENGTH = 280;

export const getTwitterHref = ({ url, title, tags }: Props) => {
  const shareUrl = new URL(TWITTER_INTENT_URL);
  const search = new URLSearchParams({
    url,
    text: `${title}`,
    hashtags: tags.join(","),
  }).toString();

  const urlLengthDiff =
    url.length - Math.min(url.length, TWITTER_SHORT_URL_LENGTH);

  if (search.length - Math.max(urlLengthDiff, 0) > MAX_TWEET_LENGTH) {
    throw new Error(`Sharing "${title}" results in a tweet that is too long`);
  }

  shareUrl.search = search;

  return shareUrl.href;
};

export const TweetButton: FC<Props> = (props) => (
  <Box
    component={"a"}
    href={getTwitterHref(props)}
    style={{ color: "white", textDecoration: "none" }}
    sx={{
      color: "white",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      borderRadius: "15px",
      backgroundColor: "#1DA1F2",
      cursor: "pointer",
      fontSize: "1.5rem",
      fontWeight: "bold",
      p: "1rem",
    }}
  >
    <Image src={TwitterIcon} alt="twitter Icon" width={40} height={40} />
    <Box textAlign={"center"}>tweet</Box>
  </Box>
);
