import {
  Box,
  Container,
  TableCell,
  TableContainer,
  TableHead,
  Table,
  Avatar,
  Typography,
  TextField,
  Dialog,
  InputAdornment,
  DialogContent,
  DialogActions,
  DialogContentText,
  TableBody,
  TableRow,
  Button,
  Grid,
  DialogTitle,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  withStyles,
} from "@material-ui/core";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { BsSearch } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { Visibility, Edit, Delete, GetApp } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import moment from "moment";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import ImageModal from "src/component/ImageModal";
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
      color: "#ffffffde",
      fontSize: "14px",
      fontWeight: "400",
    },
    "& .iconbtn": {
      color: theme.palette.text.black,
    },
  },
  inputFeild: {
    border: "1px solid #F38500",
    padding: "6px 0px",
    color: "#fff",
    borderRadius: "5px",
    // marginTop: "5px",
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
    paddingTop: "23px",
    "& .tableHead": {
      backgroundColor: "#FEDDB6",
      "& th": {
        color: "#000",
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
      color: "#000  ",
      fontSize: "14px",
      fontWeight: "400",
    },
    "& .iconbtn": {
      color: theme.palette.text.black,
    },
  },
  filterLine: {
    marginRight: "20px",
    width: "180px",
    [theme.breakpoints.only("xs")]: {
      width: "145px",
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

const categoryData = [
  {
    productName: "Admin Data",
    imagesCategory: "./images/device.jpeg",
    createdDate: "18.01.2022 01:20 AM",
  },
  {
    productName: "Admin Data",
    imagesCategory: "./images/device.jpeg",
    createdDate: "18.01.2022 01:20 AM",
  },
  {
    productName: "Admin Data",
    imagesCategory: "./images/device.jpeg",
    createdDate: "18.01.2022 01:20 AM",
  },
  {
    productName: "Admin Data",
    imagesCategory: "./images/device.jpeg",
    createdDate: "18.01.2022 01:20 AM",
  },
  {
    productName: "Admin Data",
    imagesCategory: "./images/device.jpeg",
    createdDate: "18.01.2022 01:20 AM",
  },
  {
    productName: "Admin Data",
    imagesCategory: "./images/login.png",
    createdDate: "18.01.2022 01:20 AM",
  },
];

export default function () {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleOpen = () => {
    setOpen(true);
  };
  const [openImageData, setOpenImageData] = useState();
  const setDataImage = (values) => {
    setOpenImage(true);
    setOpenImageData(values);
  };
  const [openImage, setOpenImage] = useState();
  console.log("adsdfarqwrdz", openImageData);
  const [state, setState] = useState();
  const [states, setStates] = useState();
  const [usertype, setusertype] = useState();
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = useState(1);
  const history = useHistory();
  const [search, setSearch] = useState();
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  const [stakeData, setUserData] = useState([]);
  const [isLoading, setLoader] = useState(false);
  console.log("jskdgbdskjagkj", stakeData);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
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
          </Box>
        </Box>
      </Box>
      <Box className={classes.mainbox}>
        <TableContainer>
          <Table
            style={{
              border: "1px solid rgb(243 133 0 / 44%)",
              minWidth: "900px",
            }}
          >
            <TableHead>
              <TableRow className={`${classes.tablerow1} tableHead`}>
                <TableCell>Sr.No</TableCell>
                <TableCell> Category Image</TableCell>

                <TableCell>Category Name</TableCell>
                <TableCell>Created date & time</TableCell>

                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categoryData.map((values, index) => {
                return (
                  <>
                    <StyledTableRow className={classes.tableRow1}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        <Avatar
                          alt="Cindy Baker"
                          width="100%"
                          onClick={() => setDataImage(values)}
                          style={{
                            width: "50px",
                            objectFit: "cover",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          // src={values.imagesCategory}
                          // src="./images/editimg.jpg"
                          src={values.imagesCategory}
                        />
                      </TableCell>
                      <TableCell>{values.productName}</TableCell>
                      <TableCell>{values.createdDate}</TableCell>
                      <TableCell align="center">
                        <IconButton>
                          <Visibility
                            style={{
                              fontSize: "20px",
                              color: "#F38500",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              history.push({
                                pathname: "/stackingDetail",
                                search: "View",
                              })
                            }
                          />
                        </IconButton>
                        &nbsp;&nbsp;
                        <IconButton>
                          <Edit
                            style={{
                              fontSize: "20px",
                              color: "#F38500",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              history.push({
                                pathname: "/stackingDetail",
                                search: "Edit",
                              })
                            }
                          />
                        </IconButton>
                        &nbsp;&nbsp;
                        <IconButton onClick={() => handleOpen()}>
                          <Delete
                            style={{
                              fontSize: "20px",
                              color: "#F38500",
                              cursor: "pointer",
                            }}
                            // onClick={() =>
                            //   history.push({
                            //     pathname: "/stackingDetail",
                            //   })
                            // }
                          />
                        </IconButton>
                        &nbsp;&nbsp;
                      </TableCell>
                    </StyledTableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
          {isLoading && <ButtonCircularProgress />}
          {/* {stakeData.length === 0 && <DataNotFound />} */}
        </TableContainer>
        <Dialog
          open={open}
          fullWidth
          maxWidth="sm"
          onClose={() => {
            setOpen(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle align="center" id="alert-dialog-title">
            <Typography variant="h2">Delete Category</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              style={{ color: "#000" }}
              id="alert-dialog-description"
              align="center"
            >
              Are you sure you want to Delete this Category ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              style={{ border: "1px solid #fff" }}
              variant="contained"
              color="secondary"
            >
              No
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              style={{ border: "1px solid #fff" }}
              color="primary"
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>

        {/* {stakeData && stakeData.length > 0 && (
          <Box mb={2} mt={2} style={{ width: "100%" }}>
            <Pagination
              onChange={(e, v) => setPages(v)}
              count={parseInt(numpages)}
              color="primary"
            />
          </Box>
        )} */}
        {/* {openImage && (
          <ImageModal
            openImageData={openImageData}
            openImage={openImage}
            setOpenImage={(values) => setOpenImage(values)}
          />
        )} */}
      </Box>
    </>
  );
}
