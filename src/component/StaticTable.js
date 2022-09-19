import {
  Box,
  Container,
  Paper,
  Table,
  TableContainer,
  TableCell,
  Typography,
  TableHead,
  TableRow,
  Grid,
  TableBody,
  withStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/styles";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import { GrFormView } from "react-icons/gr";
import { GoUnverified } from "react-icons/go";
import { MdOutlineVerifiedUser } from "react-icons/md";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";

import { VscUnverified } from "react-icons/vsc";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Delete } from "@material-ui/icons";
import FilterCard from "src/component/FilterCard";
const useStyles = makeStyles((theme) => ({
  tablecell: {
    width: "200px",
  },
  tokenouter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingSection: {
    "& h3": {
      padding: "1rem 0",
      fontSize: "50px",
    },
  },
  currencyBox: {
    height: "20px",
    width: "100%",
    background: "#00dcff40",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  tokenheading: {
    width: "100px",
    "& h5": {
      fontSize: "15px",
      fontWeight: "300",
      width: "150px",
    },
    "& h6": {
      fontSize: "12px",
      fontWeight: "200",
    },
  },
  actionIcons: {
    display: "flex",
  },
  devicelistHeading: {
    "& h3": {
      padding: "0px 0 10px 0",
    },
  },
  tablerow: {
    "& th": {
      color: theme.palette.text.black,
    },
    "& td": {
      color: theme.palette.text.black,
    },
  },
  iconcolor: {
    "& svg": {
      fontSize: "25px",
    },
  },

  mainbox: {
    "& .tableHead": {
      backgroundColor: "#1EB808",
      "& th": {
        color: "#fff",
      },
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
const userdetails = [
  {
    image: "/images/cycle.png",
    title: "Mental Illness",
    category: "Personal Safety",
    datetime: "Jan 25,2022 19:50 PM",
  },
  {
    image: "/images/cycle.png",
    title: "Coping with Depression",
    category: " Mental Health",
    datetime: "Jan 25,2022 19:50 PM",
  },
  {
    image: "/images/cycle.png",
    title: "Impact of Stress",
    category: "Menstrual Health",
    datetime: "Jan 25,2022 19:50 PM",
  },
  {
    image: "/images/cycle.png",
    title: "Understanding human behaviour",
    category: "Personal Safety",
    datetime: "Jan 25,2022 19:50 PM",
  },

  {
    image: "/images/cycle.png",
    title: "Weight loss & diet",
    category: "Mental Health and Well Being",
    datetime: "Jan 25,2022 19:50 PM",
  },
];

export default function (props) {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <Box className={classes.mainbox}>
      <FilterCard />
      <TableContainer>
        <Table style={{ minWidth: "900px" }}>
          <TableHead>
            <TableRow className={`${classes.tablerow1} tableHead`}>
              <TableCell style={{ width: "50px", padding: "11px" }}>
                Sr.No
              </TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              {/* <TableCell>Category</TableCell> */}
              <TableCell>Created Date & Time</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userdetails.map((data, index) => (
              <StyledTableRow className={classes.tablerow}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Box mt={1}>
                    <img
                      src={data.image}
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell>{data.title}</TableCell>
                {/* <TableCell>{data.category}</TableCell> */}
                <TableCell>{data.datetime}</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <VisibilityIcon
                      // onClick={() => history.push("/view-resource")}
                      onClick={() =>
                        history.push({
                          pathname: "/add-resource",
                          search: "View",
                        })
                      }
                      style={{
                        color: "#F38500",
                        cursor: "pointer",
                      }}
                    />
                  </IconButton>

                  <IconButton>
                    <EditIcon
                      style={{
                        color: "#F38500",
                      }}
                      // onClick={() =>
                      //   history.push({
                      //     pathname: "/edit-content",
                      //     state: data._id,
                      //   })
                      // }
                      onClick={() =>
                        history.push({
                          pathname: "/add-resource",
                          search: "Edit",
                        })
                      }
                    />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon
                      style={{
                        color: "#F38500",
                      }}
                      onClick={handleClickOpen}
                    />
                  </IconButton>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle align="center" id="alert-dialog-title">
          <Typography variant="h2">Delete Resource</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" align="center">
            <Typography variant="h5">
              {" "}
              Are you sure you want to delete this resource?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            No
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
