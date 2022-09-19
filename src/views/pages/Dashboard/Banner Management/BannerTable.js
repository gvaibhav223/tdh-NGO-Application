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
const useStyles = makeStyles((theme) => ({
  deviceSection: {
    display: "flex",
    alignItems: "center",
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

  divider: {
    marginTop: "30px",
  },
  deviceSection: {
    display: "flex",
    alignItems: "center",
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
    margin: "40px 0px 10px ",
    "& .tableHead": {
      backgroundColor: "#FEDDB6",
      "& th": {
        color: "#000",
        padding: "11px",
      },
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
    position: "1",
    img: "./images/editimg.jpg",
    createdDate: "Jan 25, 2022 19:50 PM",
  },
  {
    position: "2",
    img: "./images/editimg.jpg",
    createdDate: "Jan 25, 2022 19:50 PM",
  },
  {
    position: "3",
    img: "./images/editimg.jpg",
    createdDate: "Jan 25, 2022 19:50 PM",
  },
  {
    position: "4",
    img: "./images/editimg.jpg",
    createdDate: "Jan 25, 2022 19:50 PM",
  },
  {
    position: "5",
    img: "./images/editimg.jpg",
    createdDate: "Jan 25, 2022 19:50 PM",
  },
  {
    position: "6",
    img: "./images/editimg.jpg",
    createdDate: "Jan 25, 2022 19:50 PM",
  },
];

export default function () {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleOpen = () => {
    setOpen(true);
  };
  const [state, setState] = useState();
  const [states, setStates] = useState("select");
  const [usertype, setusertype] = useState();
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = useState(1);
  const history = useHistory();
  const [search, setSearch] = useState();
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  const [isLoading, setLoader] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <>
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
                <TableCell> Image</TableCell>

                <TableCell>Position</TableCell>
                <TableCell>Created Date & Time</TableCell>
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
                        <img
                          alt="Cindy Baker"
                          style={{
                            width: "50px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                          width="100%"
                          src={values.img}
                        />
                      </TableCell>
                      <TableCell>{values.position}</TableCell>
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
                                pathname: "/bannerView",
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
                                pathname: "/bannerView",
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
          {/* {categoryData.length === 0 && <DataNotFound />} */}
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
            <Typography variant="h2">Delete Banner</Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              style={{ color: "#000" }}
              id="alert-dialog-description"
              align="center"
            >
              Are you sure you want to Delete this Banner ?
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

        {/* {categoryData && categoryData.length > 0 && (
          <Box mb={2} mt={2} style={{ width: "100%" }}>
            <Pagination
              onChange={(e, v) => setPages(v)}
              count={parseInt(numpages)}
              color="primary"
            />
          </Box>
        )} */}
      </Box>
    </>
  );
}
