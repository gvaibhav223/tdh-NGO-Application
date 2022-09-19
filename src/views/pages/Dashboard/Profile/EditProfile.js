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
  FormHelperText,
  TextField,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import * as yep from "yup";
import { FiUpload } from "react-icons/fi";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCopy } from "react-icons/bi";
import { toast } from "react-toastify";
import Divider from "@material-ui/core/Divider";
import { Form, Formik } from "formik";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingTop: "23px",
    paddingBottom: "30px",
    "& h2 ": {},
  },
  container: {
    marginTop: "3rem",
    backgroundColor: "#FEDDB6",
    border: "1px solid #F38500",
    padding: "35px 40px 40px",
    borderRadius: "15px",
  },
  upload: {
    width: "150px",
    height: "150px",
    margin: "16px 0",
    cursor: "pointer",
    borderRadius: "20px",
    position: "relative",
    "& img": {
      width: "100%",
      height: "100%",
      border: "1px solid #F38500",
      // borderRadius: "50%",
      objectFit: "cover",
    },
    "& button": {
      position: "absolute",
      border: "3px solid black",
      bottom: 0,
      right: 0,
      backgroundColor: "#fff",
      color: "#000",
      fontSize: "15px",
      "&:hover": {
        backgroundColor: "#fff",
        border: "3px solid black",
      },
      "& input": {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        opacity: 0,
      },
    },
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
  LineBtn:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row"
  }
}));

function Viewuser() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [base64Img, setBase64Img] = useState("");
  const imagesec = ""
  useEffect(() => {
    if (imagesec) {
      setBase64Img(imagesec);
    }
  }, [imagesec]);
  function imageUpload(event) {
    // let base64img = userData.profilepic;
    let base64img = ""
    let reader = new FileReader();
    reader.onload = function () {
      base64img = reader.result;
      setBase64Img(base64img);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
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
  const formInitialSchema = {
    namw: "",
    email: "",
    phoneNo: "",
  };
  const formValidationSchema = yep.object().shape({
    
    name: yep
      .string()
      .required(" Name is required")
      .min(2, "Please enter at least 2 characters")
      .max(35, "You can enter only 35 characters")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
        "Only alphabets and white spaces are allowed for this field number are not. "
      ),
      email: yep
      .string()
      .email(
        "Entered Email is invalid"
      )
      .required("Email address is required"),
    phoneNo: yep
      .string()
      // .phoneNo("Phone Number Should Be valid")
      .required(" Phone is required")
      .min(10, "Please enter at least 10 digits")
      .max(10, "You can enter 10 digits"),
  });
  return (
    <Box className={classes.wrapper}>
      <Box className={classes.LineBtn}>
      <Typography variant="h1">Edit Profile</Typography>
      <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push({
              pathname: "/changePassword",
              // search:"Add",
            });
          }}
        >
          Change Password 
        </Button>
</Box>
      <Divider className={classes.divider} />

      <Container maxWidth="md">
        <Box className={classes.container}>
        <Formik
              
              initialValues={{
                email: "",
                password: "",
              }}
              initialStatus={{
                success: false,
                successMsg: "",
              }}
              validationSchema={formValidationSchema}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values,
                setFieldValue,
              }) => (
                <Form>
          <Grid container spacing={1}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <figure className={classes.upload}>
                <img src={base64Img ? base64Img : "/images/t3.jpeg"} />
                <IconButton>
                  <FiUpload />
                  <input type="file" accept="image/*" onChange={imageUpload} />
                </IconButton>
              </figure>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container spacing={1}>
                <Grid item lg={3} md={4} sm={5} xs={12}>
                  <Typography variant="h5">Name &nbsp;:</Typography>
                </Grid>
                <Grid item lg={9} md={6} sm={7} xs={12}>
                  <Box>
                    <TextField
                      variant="outlined"
                      name="name"
                      type="text"
                      
                      error={Boolean(touched.name && errors.name)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="User name"
                      className={classes.textField}
                    />
                    <FormHelperText
                  error
                  style={{ margin: "0px", fontSize: "12px" }}
                >
                  {touched.name && errors.name}
                </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={3} md={4} sm={5} xs={12}>
                  <Typography variant="h5">Email&nbsp;:</Typography>
                </Grid>
                <Grid item lg={9} md={6} sm={7} xs={12}>
                  <Box>
                  <TextField
                      variant="outlined"
                      name="email"
                      type="email"
                      // value="admin@gmail.com"
                      error={Boolean(touched.email && errors.email)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="admin@gmail.com"
                      className={classes.textField}
                    />
                    <FormHelperText
                  error
                  style={{ margin: "0px", fontSize: "12px" }}
                >
                  {touched.email && errors.email}
                </FormHelperText>
                  </Box>
                </Grid>
                <Grid item lg={3} md={4} sm={5} xs={12}>
                  <Typography variant="h5">Mobile Number&nbsp;:</Typography>
                </Grid>
                <Grid item lg={9} md={6} sm={7} xs={12}>
                <Box>
                  <TextField
                      variant="outlined"
                      name="phoneNo"
                      type="number"
                      // value="98568569"
                      error={Boolean(touched.phoneNo && errors.phoneNo)}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="98568569"
                      className={classes.textField}
                    />
                    <FormHelperText
                  error
                  style={{ margin: "0px", fontSize: "12px" }}
                >
                  {touched.phoneNo && errors.phoneNo}
                </FormHelperText>
                  </Box>
                </Grid>

                
              </Grid>
            </Grid>
          </Grid>
          </Form>
              )}
            </Formik>
          <Box mt={4} align="center">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                history.push("/dashboard");
              }}
            >
              Back
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                history.push("/view-profile");
              }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Viewuser;
