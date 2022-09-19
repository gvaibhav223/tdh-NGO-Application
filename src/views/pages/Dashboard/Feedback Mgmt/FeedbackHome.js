import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  TextField,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Container,
  Divider,
  TableContainer,
  TableCell,
  Table,
  TableRow,
  TableBody,
  Button,
  TableHead,
  InputAdornment,
  withStyles,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { BsSearch } from "react-icons/bs";
import Page from "src/component/Page";
import moment from "moment";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  NftBreed: {
    padding: "23px 0 ",
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
    marginTop: "10px",
    background: "#F38500",
  },
  filterbox: {
    marginTop: "30px",
    "& label": {
      fontSize: "14px",
      fontWeight: "400",
      color: "#000",
    },
  },
}));

const userfeedback = [
  {
    feedbackid: "278920",
    userid: "User12",
    datetime: "Jan 25,2022 19:50 PM",
    rating: "4",
  },
  {
    feedbackid: "278920",
    userid: "User12",
    datetime: "Jan 25,2022 19:50 PM",
    rating: "4",
  },
  {
    feedbackid: "278920",
    userid: "User12",
    datetime: "Jan 25,2022 19:50 PM",
    rating: "4",
  },
  {
    feedbackid: "278920",
    userid: "User12",
    datetime: "Jan 25,2022 19:50 PM",
    rating: "4",
  },
  {
    feedbackid: "278920",
    userid: "User12",
    datetime: "Jan 25,2022 19:50 PM",
    rating: "4",
  },
  {
    feedbackid: "278920",
    userid: "User12",
    datetime: "Jan 25,2022 19:50 PM",
    rating: "4",
  },
];
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "#ffdead87",
    },
  },
}))(TableRow);
export default function Feedback() {
  const classes = useStyles();
  const history = useHistory();
  const [fromDate, setfromDate] = useState();
  const [toDate, settoDate] = useState();
  const [currentvalue, setCurrentValue] = useState("Rating");

  return (
    <>
      <Page title="Feedback">
        <Box className={classes.NftBreed}>
          <Box className={classes.devicelistHeading}>
            <Typography variant="h1">Feedback Management</Typography>
          </Box>
          <Divider className={classes.divider} />
          <Box className={classes.filterbox}>
            <Grid container spacing={2}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <label>Search </label>
                <Box>
                  <TextField
                    id="outlined-basic"
                    type="search"
                    variant="outlined"
                    placeholder="Search Here"
                    fullWidth
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
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <label>Rating</label>
                <FormControl variant="outlined" className={classes.formControl}>
                  <Box>
                    <Select
                      name="token"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={(e) => setCurrentValue(e.target.value)}
                      value={currentvalue}
                      style={{ width: "100%" }}
                    >
                      <MenuItem value="Rating">Rating</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
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
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <label style={{ color: "transparent" }}>Status</label>
                <Button variant="contained" fullWidth color="primary">
                  Submit
                </Button>
              </Grid>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <label style={{ color: "transparent" }}>Status</label>
                <Button variant="contained" fullWidth color="primary">
                  Reset
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box mt={4}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow className={`${classes.tablerow1} tableHead`}>
                    <TableCell style={{ width: "50px", padding: "11px" }}>
                      Sr.No
                    </TableCell>
                    <TableCell>Feeback ID</TableCell>
                    <TableCell>UserID</TableCell>
                    <TableCell>Feedback Date & Time</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userfeedback.map((data, index) => (
                    <StyledTableRow className={classes.tablerow}>
                      <TableCell>{index + 1}</TableCell>

                      <TableCell>{data.feedbackid}</TableCell>
                      <TableCell>{data.userid}</TableCell>
                      <TableCell>{data.datetime}</TableCell>
                      <TableCell>{data.rating}</TableCell>
                      <TableCell align="center">
                        <IconButton>
                          <VisibilityIcon
                            onClick={() => history.push("/feedbackBox")}
                            style={{
                              color: "#F38500",
                              cursor: "pointer",
                            }}
                          />
                        </IconButton>
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Page>
    </>
  );
}
