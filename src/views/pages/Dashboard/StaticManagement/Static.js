import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  makeStyles,
  Button,
  Grid,
  Typography,
  Divider,
  withStyles,
} from "@material-ui/core";

import Page from "src/component/Page";
import StaticTable from "src/component/StaticTable";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  mainBox: {
    color: "#fff",
    padding: "21px 0 36px",
    "& button": {
      // marginRight: "10px",
      "&.active": {
        background:
          " linear-gradient(272.26deg, #DC668F 36.78%, #DA4378 86.13%)",
        color: "#fff",
        border: "2px solid #DE337A ",
      },
    },

    "& p": {
      fontSize: "16px",
      textTransform: "uppercase",
      color: "#ccc",
    },
  },
  lockddataBtn: {
    margin: "20px 0px 30px",
    paddingBottom: "30px",
    borderBottom: "1px solid #16182e",
    textAlign: "center",
  },
  lockddata: {
    "& label": {
      fontSize: "16px",
      fontWeight: 800,
    },
    "& .output": {
      fontWeight: 300,
      color: "#ccc",
    },
  },
  devicelistHeading: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",

    "& .icon1": {
      height: "20px",
      paddingRight: "20px",
      [theme.breakpoints.only("xs")]: {
        width: "50px",
        height: "8px",
        paddingRight: "7px",
      },
    },
    "& .icon2": {
      height: "20px",
      paddingLeft: "20px",
      [theme.breakpoints.only("xs")]: {
        width: "50px",
        height: "8px",
        paddingLeft: "7px",
      },
    },
  },
  divider: {
    marginTop: "10px",
    backgroundColor: "#F38500",
  },
}));

export default function () {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Page title="Resource">
      <Box className={classes.mainBox}>
        <Box className={classes.devicelistHeading}>
          <Typography variant="h1" className="headingText">
            Resource Management
          </Typography>
        </Box>
        <Divider className={classes.divider} />

        <Box mt={4} mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Box align="right">
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={()=>{history.push("/add-resource")}}
                  onClick={() =>
                    history.push({
                      pathname: "/add-resource",
                      search: "Add",
                    })
                  }
                >
                  Add Resource
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12}>
              <StaticTable />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Page>
  );
}
