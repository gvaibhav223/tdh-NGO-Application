import {
  Box,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  Typography,
  TableBody,
  TableRow,
  IconButton,
  InputAdornment,
  Button,
  FormControl,
  Divider,
  DialogTitle,
  Slide,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Select,
  makeStyles,
  TextField,
  withStyles,
  Grid,
  MenuItem,
} from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import React, { useState, useEffect, useContext } from "react";
import Page from "src/component/Page";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

import { BiCurrentLocation } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import moment from "moment";

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
    paddingTop: "23px",
    "& .tableHead": {
      backgroundColor: "#FEDDB6",
      "& th": {
        color: "#fff",
        padding: "11px",
      },
    },
  },
  mainbox1: {
    "& .tableHead": {
      backgroundColor: "#FEDDB6",
      "& th": {
        color: "#fff",
        padding: "11px",
      },
    },
  },

  divider: {
    marginTop: "10px",
    backgroundColor: "#F38500",
  },
  deviceSection: {
    display: "flex",
    alignItems: "center",
  },

  devicelistHeading: {
    display: "flex",
    justifyContent: "space-between",
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
      color: "#fff",
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
    paddingTop: "23px",
    "& .tableHead": {
      backgroundColor: "#FEDDB6",
      "& th": {
        color: "black",
        padding: "11px",
      },
    },
  },
  mainbox1: {
    "& .tableHead": {
      backgroundColor: "#FEDDB6",
      "& th": {
        color: "black",
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
      color: "black",
      fontSize: "14px",
      fontWeight: "400",
      // fontFamily: "'Roboto',sans-serif",
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
    border: "1px solid #F38500 !important",
    padding: "6px 0px",
    color: "#fff",
    borderRadius: "5px",

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

const tabledetails = [
  {
    id: "User001",
    name: "user",
    state: "Delhi",
    district: "New Delhi",
    datetime: "Jun 20, 2022,7:11:58",
    status: "Active",
  },
  {
    id: "User002",
    name: "user",
    state: "Delhi",
    district: "New Delhi",
    datetime: "Jun 20, 2022,7:11:58",
    status: "Active",
  },
  {
    id: "User003",
    name: "user",
    state: "Delhi",
    district: "New Delhi",
    datetime: "Jun 20, 2022,7:11:58",
    status: "Active",
  },
  {
    id: "User004",
    name: "user",
    state: "Delhi",
    district: "New Delhi",
    datetime: "Jun 20, 2022,7:11:58",
    status: "Active",
  },
  {
    id: "User005",
    name: "user",
    state: "Delhi",
    district: "New Delhi",
    datetime: "Jun 20, 2022,7:11:58",
    status: "Active",
  },
  {
    id: "User006",
    name: "user",
    state: "Delhi",
    district: "New Delhi",
    datetime: "Jun 20, 2022,7:11:58",
    status: "Active",
  },
];

export default function (props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOpenBlockUnblock = () => {
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = useState([]);
  const [idd1, setidd1] = React.useState([]);
  const [currentvalue, setCurrentValue] = useState("All Users");

  const [currentvalue1, setCurrentValue1] = useState("Delhi");
  const [numpages, setNumpages] = useState(1);
  const [states, setStates] = useState("Delhi");
  const [destrict, setDistrict] = useState("Delhi");
  const history = useHistory();
  const [usertype, setusertype] = useState("All Users");
  const [openUserBlockUnblock, setOpenUserBlockUnblick] = useState(false);
  const [isLoading, setLoader] = useState(false);
  const [pages, setPages] = useState(1);
  const [toDate, settoDate] = useState();
  const [fromDate, setfromDate] = useState();
  const [search, setSearch] = useState();
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <Page title="User Management">
      <Box className={classes.mainbox}>
        <Box>
          <Box className={classes.devicelistHeading}>
            <Typography variant="h1">User Management</Typography>
            {/* <Button
            variant="contained"
            color="primary"
            onClick={() =>
              history.push({
                pathname: "/view-user",
                search: "Add",
              })
            }
          >
            Add User
          </Button> */}
          </Box>
        </Box>
        <Box>
          <Divider className={classes.divider} />
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
                  <label>Search </label>
                  <Box>
                    <TextField
                      id="outlined-basic"
                      type="search"
                      variant="outlined"
                      placeholder="Search Here..."
                      fullWidth
                      onChange={(e) => setSearch(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              style={{ fontSize: "20px", padding: "0px" }}
                              className="iconbtn"
                            >
                              <BsSearch
                                style={{ color: "#F38500", fontSize: "16px" }}
                              />
                            </IconButton>{" "}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <label>User Type </label>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <Box>
                      <Select
                        name="token"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        onChange={(e) => setusertype(e.target.value)}
                        value={usertype}
                        style={{ width: "100%" }}
                      >
                        {/* <MenuItem value="Users Type"></MenuItem> */}
                        <MenuItem value="All Users">All Users</MenuItem>
                        <MenuItem value="Mental Health">Active Users</MenuItem>
                        <MenuItem value="Menstrual Health">
                          Inactive Users
                        </MenuItem>
                      </Select>
                    </Box>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <label>State </label>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <Box>
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
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <Box>
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
                  <label>From</label>

                  <Box>
                    <KeyboardDateTimePicker
                      className={classes.inputFeild}
                      ampm={false}
                      value={fromDate}
                      onChange={(date) => {
                        setfromDate(new Date(date));
                      }}
                      onError={console.log}
                      disableFuture
                      format="YYYY/MM/DD HH:mm"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <label>To</label>
                  <Box>
                    <KeyboardDateTimePicker
                      className={classes.inputFeild}
                      ampm={false}
                      value={toDate}
                      // onChange={(date) => settoDate(date, "toDate")}
                      onChange={(date) => {
                        settoDate(new Date(date));
                      }}
                      onError={console.log}
                      disableFuture
                      minDate={moment(fromDate).format("YYYY-MM-DD HH:mm")}
                      format="YYYY-MM-DD HH:mm"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <label style={{ color: "transparent" }}>Status</label>
                  <Box>
                    <Button variant="contained" color="primary" fullWidth>
                      Submit
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <label style={{ color: "transparent" }}>Status</label>
                  <Box>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      style={{ padding: "5px 5px" }}
                    >
                      Reset
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              <Box
                className={classes.filterLine}
                style={{ marginLeft: "12px" }}
              ></Box>

              <Box
                className={classes.filterLine}
                style={{ marginLeft: "15px" }}
              ></Box>

              <Box className={classes.filterLine}></Box>
            </Box>
          </Box>
        </Box>

        <TableContainer>
          <Table style={{ minWidth: "900px" }}>
            <TableHead>
              <TableRow className={`${classes.tablerow1} tableHead`}>
                <TableCell>S.No.</TableCell>
                <TableCell>User ID</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>State</TableCell>
                <TableCell>District</TableCell>
                <TableCell>Created date & time</TableCell>

                <TableCell>Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tabledetails.map((data, index) => {
                return (
                  <StyledTableRow>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.state}</TableCell>
                    <TableCell>{data.district}</TableCell>
                    <TableCell>{data.datetime}</TableCell>
                    <TableCell>{data.status}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        onClick={() =>
                          history.push({
                            pathname: "/userDetails",
                            search: data?._id,
                          })
                        }
                      >
                        <VisibilityIcon style={{ color: "#F38500" }} />
                      </IconButton>

                      <IconButton onClick={() => handleOpenBlockUnblock()}>
                        <BlockIcon style={{ color: "red" }} />
                      </IconButton>
                    </TableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        onClose={() => {
          setOpenUserBlockUnblick(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          <Typography variant="h2">Block User</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" align="center">
            <Typography variant="h5">
              {" "}
              Are you sure you want to block this user ?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            No
          </Button>
          <Button variant="contained" color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
}
