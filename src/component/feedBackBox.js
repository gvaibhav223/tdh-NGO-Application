import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Button,
  Box,
  Typography,
  FormControl,
  makeStyles,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import Rating from "@material-ui/lab/Rating";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopy } from "react-icons/bi";
import { toast } from "react-toastify";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: "23px",
    paddingBottom: "30px",
    "& h2 ": {},
  },
  container: {
    marginTop: "3rem",
    backgroundColor: "#FEDDB6",
    padding: "25px 40px",
    border: "1px solid #F38500",
    borderRadius: "15px",
  },

  typo: {
    marginLeft: "3rem",
  },
  btn: {
    textAlign: "center",
    paddingTop: "20px",
  },
  typo: {
    marginBottom: "5px",
  },
  divider: {
    marginTop: "10px",
    backgroundColor: "#F38500",
  },
  walletcopy: {
    "& h6": {
      wordBreak: "break-word",
    },
  },
}));

function Viewuser() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  //   const [idd, setIdd] = useState("");
  //   const [isLoading, setIsLoading] = useState();
  //   const [date, setDate] = useState();
  //   const [second, setSeconddate] = useState();
  //   const [userDetails, setUserDetails] = useState("");

  //   const viewUserApiHandler = async () => {
  //     try {
  //       setIsLoading(true);
  //       const res = await Axios({
  //         method: "GET",
  //         url: ApiConfig.viewUser + idd,
  //         headers: {
  //           token: window.sessionStorage.getItem("token"),
  //         },
  //       });
  //       if (res.data.statusCode === 200) {
  //         setUserDetails(res.data.result);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     if (idd) {
  //       viewUserApiHandler();
  //     }
  //   }, [idd]);

  //   useEffect(() => {
  //     if (location.search.substring(1, location.search.length)) {
  //       const id = location.search.substring(1, location.search.length);
  //       setIdd(id);
  //     }
  //   }, [location.search]);

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h1">View Feedback</Typography>

      <Divider className={classes.divider} />

      <Container maxWidth="md">
        <Box className={classes.container}>
          <Grid container spacing={1}>
            <Grid item lg={3} md={4} sm={5} xs={12}>
              <Typography variant="h5">Feedback Id &nbsp;:</Typography>
            </Grid>
            <Grid item lg={9} md={6} sm={7} xs={12}>
              <Typography variant="h6" style={{ wordBreak: "Break-all" }}>
                35952
              </Typography>
            </Grid>
            <Grid item lg={3} md={4} sm={5} xs={12}>
              <Typography variant="h5">User ID&nbsp;:</Typography>
            </Grid>
            <Grid item lg={9} md={6} sm={7} xs={12}>
              <Typography variant="h6">Sonu 011</Typography>
            </Grid>
            <Grid item lg={3} md={4} sm={5} xs={12}>
              <Typography variant="h5">Rating&nbsp;:</Typography>
            </Grid>
            <Grid item lg={9} md={6} sm={7} xs={12}>
              <Rating name="read-only" value={4} readOnly />
            </Grid>

            <Grid item lg={3} md={4} sm={5} xs={12}>
              <Typography variant="h5">Feedback Date & time&nbsp;:</Typography>
            </Grid>
            <Grid item lg={9} md={6} sm={7} xs={12}>
              <Typography variant="h6">June 20,2022 07:11:38 PM</Typography>
            </Grid>
          </Grid>

          <Box mt={4} align="center">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                history.push("/feedbackMgmt");
              }}
            >
              Back
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Viewuser;
