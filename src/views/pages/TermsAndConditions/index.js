import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Terms from "./Terms";

function WhitePaper(props) {
  return (
    <Page title="White Paper">
      <Box>
        <Terms />
      </Box>
    </Page>
  );
}

export default WhitePaper;
