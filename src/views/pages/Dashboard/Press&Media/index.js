import React from "react";
import {
  Button,
  Grid,
  Box,
  InputAdornment,
  FormControl,
  Typography,
  OutlinedInput,
  InputLabel,
  Divider,
} from "@material-ui/core";
import Page from "src/component/Page";
import { FaPlus, FaSearch } from "react-icons/fa";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Pressandmediatable from "../../../../component/Pressandmediatable";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: 0,
  },
  inputAdornment: {
    backgroundColor: "#f5d5da",
    height: 40,
    maxHeight: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  mainbox: {
    padding: "23px 0 36px",

  },
  devicelistHeading: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap:'wrap',
    alignItems: "center",
    "& h3": {
      padding: "1rem 0",
      color: theme.palette.text.black,
    },
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
  buttonApprove: {
    borderRadius: "5px",
    minHeight: "34px",
    color: "rgb(255, 255, 255)",
    backgroundColor: "rgb(228, 106, 118)",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    lineHeight: "1.5",
    fontWeight: "500",
    transition: "0.26s ease",
    paddingBottom: "3px",
    textTransform: "capitalize",
    marginRight: "15px",
    backgroundColor: "rgb(3, 201, 215)",
  },
  divider: {
    marginTop: "10px",
    backgroundColor:'#F38500'
  },
}));
const cardDetails = [
  {
    name: "BASIC",
    price: "50$",
    description: "In publishing and graphic design Lorem . ",
    description: "In publishing and graphic design Lorem . ",
    docName: "PAN Card",
    uploadedDate: "12-12-2020",
    snifer: "Snifer",
  },
  {
    name: "Standard ",
    price: "100$",
    description: "In publishing and graphic design Lorem . ",
    docName: "PAN Card",
    uploadedDate: "12-12-2020",
    active: "Active",
  },
  {
    name: "Premium",
    price: "200$",
    description: "In publishing and graphic design Lorem . ",
    docName: "PAN Card",
    uploadedDate: "12-12-2020",
    active: "Active",
  },
];
export default function PressMedia() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Page title="Report">
      <Box className={classes.mainbox}>
        <Box
         
        >
          <Box className={classes.devicelistHeading}>
          
            <Typography variant="h1" className="headingText">
              Report Management
            </Typography>
          </Box>
        </Box>
        <Divider className={classes.divider} />

        <Pressandmediatable />
      </Box>
    </Page>
  );
}
