import { Box } from "@material-ui/core";
import React from "react";

const Logo = (props) => {
  return (
    <Box>
      <img src="/images/logo.png" alt="Logo" {...props} width="auto" />
    </Box>
  );
};

export default Logo;
