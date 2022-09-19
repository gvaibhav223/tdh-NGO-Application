import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";
import MetricsChart from "src/component/MetricsChart";
import Page from "src/component/Page";
import Bargraph from "src/component/Bargraph";
const useStyles = makeStyles((theme) => ({
  headBox: {
    "& h3": {
      color: "black",
      marginBottom: "15px",
    },
  },
  mainbox: {
    background: " #FFD4A0",
    padding: "20px",
    borderRadius: "9px",
    height: "85px",
    boxShadow: "2px 1px 5px black",

    transition: "0.3s",
    "& h4": {
      textAlign: "center",
      justifyContent: "center",
      color: "black",
    },

    "& h2": {
      textAlign: "center",
      marginTop: "10px",
      color: "black",
    },
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
  divider: {
    marginTop: "10px",
    backgroundColor: "#F38500",
  },
}));

const dashboard = [
  {
    heading: "Total Users",
    subheading: "100",
  },
  {
    heading: "Active Users",
    subheading: "100",
  },
  {
    heading: "Inactive Users",
    subheading: "100",
  },
  {
    heading: "Total Articles",
    subheading: "100",
  },
  {
    heading: "Total Feedback",
    subheading: "100",
  },
  {
    heading: "Notifications",
    subheading: "100",
  },
];

export default function Index() {
  const classes = useStyles();
  return (
    <Page title="Dashboard">
      <Box style={{ paddingTop: "23px" }} className={classes.headBox}>
        <Typography variant="h1">Dashboard</Typography>
        <Divider className={classes.divider} />
        <Box mt={5}>
          <Grid container spacing={3}>
            {dashboard.map((data) => {
              return (
                <Grid item lg={3} md={3} sm={6} xs={12}>
                  <Box className={classes.mainbox}>
                    <Box className={classes.subbox}>
                      <Typography variant="h4">{data.heading}</Typography>
                      <Typography variant="h2">{data.subheading}</Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box mt={10}>
          <Typography variant="h3">Registered User Graph</Typography>
          <MetricsChart />
        </Box>
        <Box mt={10}>
          <Typography variant="h3">Activity Status</Typography>
          <Bargraph />
        </Box>
      </Box>
    </Page>
  );
}
