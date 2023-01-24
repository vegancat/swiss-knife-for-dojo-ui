import { PropsWithChildren } from "react";
import { Box } from "@mui/material";
import Header from "./Header";

function Layout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        paddingTop: "1rem",
        width: "100%",
      }}
    >
      <Header />
      <Box sx={{ minHeight: "90vh" }}>{children}</Box>
    </Box>
  );
}

export default Layout;
