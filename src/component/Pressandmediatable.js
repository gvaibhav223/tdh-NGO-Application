import {
  Box,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  Typography,
  TableBody,
  TableRow,
  Button,
  FormControl,
  withStyles,
  Select,
  Grid,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import React, { useState } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import MenuItem from "@material-ui/core/MenuItem";
import { Delete, GetApp, Search } from "@material-ui/icons";

import ButtonCircularProgress from "src/component/ButtonCircularProgress";
const useStyles = makeStyles((theme) => ({
  deviceSection: {
    display: "flex",
    alignItems: "center",
  },

  devicelistHeading: {
    display: "flex",
    justifyContent: "start",
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
  activeparent: {
    display: "flex",
    alignItems: "center",
  },
  activeDevice: {
    width: "10px",
    height: "10px",
    background: "green",
    borderRadius: "100px",
  },
  tableRow1: {
    "& td": {
      color: theme.palette.text.black,
    },
    "& th": {
      color: theme.palette.text.black,
    },
  },
  formControl: {
    minWidth: "15vh",
    width: "100%",
  },
  iconcolor: {
    color: "#fff",
  },
  mainbox: {
    // padding: "16px 0 40px",
    // paddingTop: "23px",
    "& .tableHead": {
      backgroundColor: "#1EB808",
      "& th": {
        color: "#fff",
        padding: "11px",
      },
    },
  },
  mainbox1: {
    "& .tableHead": {
      backgroundColor: "#1EB808",
      "& th": {
        color: "#fff",
        padding: "11px",
      },
    },
  },

  inputFeild: {
    border: "1px solid #F38500",
    padding: "6px",
    color: "#fff",
    borderRadius: "5px",
    marginTop: "5px",
    "& svg": {
      color: "#F38500",
      fontSize: "16px",
    },
  },
  divider: {
    marginTop: "30px",
  },
  deviceSection: {
    display: "flex",
    alignItems: "center",
  },

  devicelistHeading: {
    display: "flex",
    justifyContent: "start",
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
  activeparent: {
    display: "flex",
    alignItems: "center",
  },
  activeDevice: {
    width: "10px",
    height: "10px",
    background: "green",
    borderRadius: "100px",
  },
  tableRow1: {
    "& td": {
      color: theme.palette.text.black,
    },
    "& th": {
      color: theme.palette.text.black,
    },
  },
  formControl: {
    minWidth: "15vh",
    width: "100%",
  },
  iconcolor: {
    color: "#fff",
  },
  mainbox: {
    // padding: "16px 0 40px",
    // paddingTop: "23px",
    "& .tableHead": {
      backgroundColor: "#1EB808",
      "& th": {
        color: "#fff",
        padding: "11px",
      },
    },
  },
  mainbox1: {
    "& .tableHead": {
      backgroundColor: "#1EB808",
      "& th": {
        color: "#fff",
        padding: "11px",
      },
    },
  },
  filterBox: {
    color: "#fff",
    position: "relative",
    "& h6": {
      position: "absolute",
      top: "-20px",
      background: theme.palette.background.dark1,

      padding: "5px 10px",
      left: "0px",
      fontSize: "19px",
      color: "#5a86ff",
      fontWeight: 600,
    },
    "& input": {
      color: theme.palette.text.black,
    },
    "& label": {
      color: "#000",
      fontSize: "14px",
      fontWeight: "400",
    },
    "& .iconbtn": {
      color: theme.palette.text.black,
    },
  },
  filterLine: {
    marginRight: "10px",
    width: "180px",
    [theme.breakpoints.only("xs")]: {
      width: "145px",
    },
  },
  inputFeild: {
    border: "1px solid #F38500",
    padding: "6px 0px",
    color: "#fff",
    borderRadius: "5px",
    marginTop: "5px",
    "& svg": {
      color: "#F38500",
      fontSize: "16px",
    },
  },
}));
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#ffdead87",
    },
  },
}))(TableRow);
const reportData = [
  {
    img: "",
    title: "",
    lastData: "",
    status: "",
  },
];

export default function (props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleClickOpennew1 = (data) => {
    setidd1(data);
    setOpen1(true);
    console.log("kjhaskjdfhkajsd", data);
  };
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const [deleteId, setDeleteId] = React.useState();
  const [age, setAge] = useState("Active");
  const history = useHistory();
  const handleClickOpennew = (data) => {
    setDeleteId(data);
    setOpen(true);
    console.log("kjhaskjdfhkajsd", data);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [openUserBlockUnblock, setOpenUserBlockUnblick] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();
  const [fromData, setFromData] = useState();
  const [pages, setPages] = useState(1);
  const [numpages, setNumpages] = useState(1);
  const [idd1, setidd1] = React.useState([]);
  const [states, setStates] = useState("Delhi");
  const [destrict, setDistrict] = useState("Delhi");
  const [toData, setToData] = useState();
  const [currentvalue, setCurrentValue] = useState("all");

  return (
    <Box className={classes.mainbox}>
      <Box>
        <Box className={classes.filterBox} mb={5} mt={4}>
          <Box
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <label>State </label>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Box style={{ marginTop: "5px" }}>
                    <Select
                      name="token"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={(e) => setStates(e.target.value)}
                      value={states}
                      style={{ width: "100%" }}
                    >
                      {/* <MenuItem value="Location..."></MenuItem> */}
                      <MenuItem value="Delhi">Delhi</MenuItem>
                      <MenuItem value="Noida">Harayana</MenuItem>
                      <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <label>District </label>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Box style={{ marginTop: "5px" }}>
                    <Select
                      name="token"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={(e) => setDistrict(e.target.value)}
                      value={destrict}
                      style={{ width: "100%" }}
                    >
                      {/* <MenuItem value="Location..."></MenuItem> */}
                      <MenuItem value="Delhi">Meerut</MenuItem>
                      <MenuItem value="Noida">Noida</MenuItem>
                      <MenuItem value="Uttar Pradesh">New Delhi</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <label>Users Ids</label>
                  <Box mt={1}>
                    <Select
                      name="token"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={(e) => setCurrentValue(e.target.value)}
                      value={currentvalue}
                      style={{ width: "100%" }}
                    >
                      <MenuItem value="all">Select User Id</MenuItem>
                      <MenuItem value="ACTIVE">User 001</MenuItem>
                      <MenuItem value="BLOCK">User 002</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <label>Activity</label>
                  <Box mt={1}>
                    <Select
                      name="token"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={(e) => setCurrentValue(e.target.value)}
                      value={currentvalue}
                      style={{ width: "100%" }}
                    >
                      <MenuItem value="all">Select Activity</MenuItem>
                      <MenuItem value="ACTIVE">Mental Health</MenuItem>
                      <MenuItem value="BLOCK">Menstrual Health</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <label>Sub Activity</label>
                  <Box mt={1}>
                    <Select
                      name="token"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={(e) => setCurrentValue(e.target.value)}
                      value={currentvalue}
                      style={{ width: "100%" }}
                    >
                      <MenuItem value="all">Select Sub Activity</MenuItem>
                      <MenuItem value="ACTIVE">Sleep Tracker</MenuItem>
                      <MenuItem value="BLOCK">Mood Tracker</MenuItem>
                    </Select>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <label>From</label>
                <Box>
                  <KeyboardDatePicker
                    className={classes.inputFeild}
                    margin="normal"
                    disableFuture
                    id="date-picker-dialog"
                    format="YYYY-MM-DD HH:mm"
                    value={fromData}
                    onChange={(date) => setFromData(date)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <label>To</label>
                <Box>
                  <KeyboardDatePicker
                    className={classes.inputFeild}
                    margin="normal"
                    id="date-picker-dialog"
                    format="YYYY-MM-DD HH:mm"
                    disableFuture
                    value={toData}
                    onChange={(date) => setToData(date)}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <label style={{ color: "transparent" }}>Status</label>
                <Box style={{ marginTop: "5px" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ padding: "5px 5px" }}
                  >
                    Download Report &nbsp; <GetApp />
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box className={classes.filterLine}></Box>
          </Box>
        </Box>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={`${classes.tablerow1} tableHead`}>
              <TableCell>Sr.No.</TableCell>

              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <StyledTableRow className={classes.tableRow1}>
              <TableCell>1</TableCell> <TableCell>Report One</TableCell>
              <TableCell className="tableToken">
                According to all the information provided by you...
              </TableCell>
              <TableCell>
                <VisibilityIcon
                  style={{
                    fontSize: "20px",
                    color: "#fff",
                    cursor: "pointer",
                    color: "#F38500",
                  }}
                  onClick={() =>
                    history.push({
                      pathname: "/viewReport",
                      // state: data?._id,
                    })
                  }
                />
                &nbsp;&nbsp;
                {/* <EditIcon
                    style={{
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      marginLeft: "7px",
                      color:"#F38500"
                    }}
                    onClick={() =>
                      history.push({
                        pathname: "/edit-media",
                        // search: data?._id,
                        // state: data,
                        // picture: base64Img,
                        // title: values.title,
                        // description: values.desc,
                        // url: values.url,
                      })
                    }
                    className={classes.iconcolor}
                  />
                  &nbsp;&nbsp;
                  
                  <DeleteIcon
                    // onClick={() => handleClickOpen(data?._id)}
                    // onClick={() => handleClickOpennew(data?._id)}
                    style={{
                      fontSize: "1.2rem",
                      marginLeft: "7px",
                      cursor: "pointer",
                      color:"#F38500"
                    }}
                    className={classes.iconcolor}
                  />
                  &nbsp;&nbsp; */}
                {/* <IconButton
                    size="small"
                    style={{ marginTop: "-11px" }}
                  >
                    
                      <BiBlock color="#F38500" />
                    
                  </IconButton> */}
                <Dialog
                  open={open}
                  fullWidth
                  maxWidth="sm"
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <Typography variant="h2" className="deleteText">
                    Delete
                  </Typography>

                  <DialogContent>
                    <DialogContentText
                      id="alert-dialog-description"
                      align="center"
                    >
                      Are you sure you want to delete?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="primary"
                    >
                      No
                    </Button>

                    <Button variant="contained" color="secondary">
                      Yes {isLoading && <ButtonCircularProgress />}
                    </Button>
                  </DialogActions>
                </Dialog>
              </TableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
        {isLoading && <ButtonCircularProgress />}
        {/* {mediaData.length === 0 && <DataNotFound />} */}
      </TableContainer>
      {/* {mediaData && mediaData.length > 0 && (
        <Box mb={2} mt={2} style={{ width: "100%" }}>
          <Pagination
            onChange={(e, v) => setPages(v)}
            count={parseInt(numpages)}
            color="primary"
          />
        </Box>
      )} */}
      <>
        <Dialog
          open={open1}
          fullWidth
          maxWidth="sm"
          onClose={() => {
            setOpenUserBlockUnblick(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            {console.log("lsadjfkls", idd1.status)}
            <DialogContentText id="alert-dialog-description" align="center">
              {`Are you sure you want to 
                              ${idd1.status === "BLOCK" ? "ACTIVE" : "BLOCK"} 
                               the user?`}
              {console.log("84646", idd1.status)}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained" color="primary">
              No
            </Button>
            <Button
              // onClick={() => blockUnblockUserApiHandler(idd1._id)}
              variant="contained"
              color="secondary"
            >
              Yes {isLoading && <ButtonCircularProgress />}
            </Button>
          </DialogActions>
        </Dialog>
      </>
    </Box>
  );
}
