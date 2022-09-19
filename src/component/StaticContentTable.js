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
      color: theme.palette.text.black,
      fontSize: "25px",
    },
  },
  iconcolor: {
    // color: theme.palette.text.black,
    fontSize: "20px",
    color: "#fff",
    "& path": {
      // stroke: theme.palette.text.black,
      fontSize: "20px",
      color: "#fff",
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
const Userlist = [
  // {
  //   // type: "Splash Screen",
  //   type: "Tutorial Screen",
  //   link: "/team-management",
  //   editlink: "/edit-content",
  //  },
  {
    type: "Privacy Policy",
    link: "/policy",
    editlink: "/edit-content",
  },
  {
    type: "About Us",
    link: "/view-content",
    editlink: "/edit-content",
  },
  {
    type: "Contact Us",
    link: "/view-contact",
    editlink: "/edit-content",
  },
  {
    type: "Terms & Conditions",
    link: "/view-terms",
    editlink: "/edit-content",
  },
  {
    type: "FAQ",
    link: "/view-announcements",
    editlink: "/view-announcements",
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow className={`${classes.tablerow1} tableHead`}>
              <TableCell style={{ width: "50px", padding: "11px" }}>
                Sr.No
              </TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell
                style={{
                  width: "50px",
                }}
              >
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Userlist.map((data, index) => (
              <StyledTableRow className={classes.tablerow}>
                <TableCell>{index + 1} </TableCell>{" "}
                <TableCell>{data.type} </TableCell>{" "}
                <TableCell>
                  <VisibilityIcon
                    // onClick={() => history.push(`${data.link}`)}
                    onClick={() => {
                      history.push({
                        pathname: `${data.link}`,
                        search: `${data.type}`,
                      });
                    }}
                    style={{
                      fontSize: "20px",
                      color: "rgb(243, 133, 0)",
                      cursor: "pointer",
                    }}
                  />
                  &nbsp;&nbsp;
                  {/* <EditIcon
                      style={{
                        fontSize: "20px",
                        color: "rgb(243, 133, 0)",
                        cursor: "pointer",
                      }}
                      onClick={() =>
                        history.push({
                          pathname: "/edit-content",
                          state: data._id,
                        })
                      }
                    /> */}
                  {/* <Dialog
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
  
                       <DialogTitle
                        id="alert-dialog-title"
                        style={{ fontSize: "20px" }}
                      >
                      
                        {"Delete"}
                      </DialogTitle> 
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
                        <Button
                          onClick={handleClose}
                          variant="contained"
                          color="secondary"
                        >
                          Yes
                        </Button>
                      </DialogActions>
                    </Dialog> */}
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
