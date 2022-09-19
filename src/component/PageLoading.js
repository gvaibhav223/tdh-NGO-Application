import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    background: "linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(250, 213, 168) 40%, rgb(249, 191, 121) 60%, rgb(247, 168, 75) 80%, rgb(245, 146, 27) 100%)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    left: 0,
    padding: theme.spacing(3),
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 2000,
  },
  loader: {
    width: "500px",
    maxWidth: "100%",
    margin: "auto",
  },
  progressBar: {
    height: "3px",
  },
}));


export default function PageLoading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box width={300}>
        {/* <LinearProgress height={10} /> */}
        <img className={classes.loader} src="/images/logo.png" alt="loader" />
      </Box>
    </div>
  );
}
