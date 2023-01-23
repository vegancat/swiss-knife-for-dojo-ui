import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <Box>Header</Box>
      {children}
    </Box>
  );
};

export default Layout;
