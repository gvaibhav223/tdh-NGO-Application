import React, { useContext, useState, useEffect, useRef } from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  TextField,
  FormControl,
  IconButton,
  FormHelperText,
  MenuItem,
  Select,
  Container,
  Button,
  Divider,
} from "@material-ui/core";
import * as yep from "yup";
import { Form, Formik } from "formik";
import { FiUpload } from "react-icons/fi";
import { addImageHandler, getBase64 } from "src/utils";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import apiConfig from "src/APIconfig/ApiConfig";
import JoditEditor from "jodit-react";
const useStyles = makeStyles((theme) => ({
  NftBreed: {
    padding: "23px 0 ",
  },
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,
    width: "100%",
    // margin: "0 10px",
  },
  main: {
    border: "1px solid #F38500",
    padding: "40px",
    borderRadius: "15px",
    backgroundColor: "#FEDDB6",
  },
  divider: {
    marginTop: "10px",
    background: "#F38500",
  },
  textField: {
    maxWidth: "100%",
  },

  image: {
    cursor: "pointer",
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
  newbtn: {
    "@media(max-width:400px)": {
      marginTop: "10px",
    },
  },
  imgsec: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "@media(max-width:600px)": {
      justifyContent: "center",
    },
  },

}));

export default function CreateNFT(userProfileData) {
  const classes = useStyles();
  const history = useHistory();
  const editor = useRef(null);
  const [base64Img1, setBase64Img1] = useState("");
  const [imgFile, setImgfile] = useState("");
  const [profile, setprofile] = useState();
  const location = useLocation();

  const partnerData = location.state;
  const idduserdata = partnerData?._id;
  console.log("asdasdadad", partnerData);

  const imagesec = partnerData?.logo;

  const functionKey = location.search.split("?")[1];
  console.log("Locations key is >>", functionKey);

  const [base64Img, setBase64Img] = useState("");
  useEffect(() => {
    if (imagesec) {
      setBase64Img(imagesec);
    }
  }, [imagesec]);
  function imageUpload(event) {
    let base64img = userData.profilepic;
    let reader = new FileReader();
    reader.onload = function () {
      base64img = reader.result;
      setBase64Img(base64img);
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  const [userData, setUserData] = useState({
    coverPic: "",
    profilePic: "",
    profilePic: "",
    coverPic: "",
  });
  const formInitialValue = {
    partnerName: partnerData?.partnerName,
    url: partnerData?.url,
  };

  const formValidationSchema = yep.object().shape({
    partnerName: yep
      .string()
      .required(" Title is required")
      .min(2, "Please enter at least 2 characters")
      .max(35, "You can enter only 35 characters")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
        "Only alphabets and white spaces are allowed for this field number are not. "
      ),
    name: yep
      .string()
      .required(" Name is required")
      .min(2, "Please enter at least 2 characters")
      .max(35, "You can enter only 35 characters")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
        "Only alphabets and white spaces are allowed for this field number are not. "
      ),
    date: yep
      .string()
      .required(" Date is required")
      .min(2, "Please enter at least 2 characters")
      .max(35, "You can enter only 10 characters")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
        "Only alphabets and white spaces are allowed for this field number are not. "
      ),
    desc: yep
      .string()
      .required(" Descritpion is required")
      .min(10, "Please enter at least 10 characters")
      .max(350, "You can enter only 350 characters"),
  });

  return (
    <Box className={classes.NftBreed}>
      <Box className={classes.devicelistHeading}>
        <Typography variant="h1" className="headingText">
          {`${functionKey} Resource`}
        </Typography>
      </Box>
      <Divider className={classes.divider} />
      <Container maxWidth="md">
        <Formik
          initialValues={formInitialValue}
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
            <Form onSubmit={handleSubmit}>
              {console.log("Sadqeqacc", values)}
              <Box mt={5} mb={2} className={classes.main}>
                <Grid container spacing={2}>
                  <Grid item md={12} sm={12} lg={12} xs={12}>
                    <Box

                      className={classes.imgsec}
                    >
                      <Box>
                        {functionKey === "Add" ? (
                          <>
                            <figure className={classes.upload}>
                              <img
                                src={base64Img ? base64Img : "/images/t3.jpeg"}
                              />
                              <IconButton>
                                <FiUpload />
                                <input
                                  type="file"
                                  // accept="image/*"
                                  accept="image/*, video/*, .mp3,audio/*, docs/*"
                                  onChange={imageUpload}
                                />
                              </IconButton>
                            </figure>
                          </>
                        ) : functionKey === "View" ? (
                          <figure className={classes.upload}>
                            <img src="/images/t3.jpeg" />
                          </figure>
                        ) : (
                          <figure className={classes.upload}>
                            <img
                              src={base64Img ? base64Img : "/images/t3.jpeg"}
                            />
                            <IconButton>
                              <FiUpload />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={imageUpload}
                              />
                            </IconButton>
                          </figure>
                        )}

                        {functionKey === "Add" ? (
                          <>
                            <Box
                              className={classes.imgsec}
                            >
                              <Typography variant="h6" color="primary">
                                Please select image
                              </Typography>
                            </Box>
                          </>
                        ) : functionKey === "View" ? (
                          <Box
                            className={classes.imgsec}
                          >
                            <Typography variant="h6" color="primary">
                              Resource Image
                            </Typography>
                          </Box>
                        ) : (
                          <Box
                            className={classes.imgsec}
                          >
                            <Typography variant="h6" color="primary">
                              Please select image
                            </Typography>
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    md={12}
                    sm={12}
                    lg={12}
                    xs={12}
                    className={classes.image}
                  >
                    <Box mt={1}>
                      <form className="formBox p-0" autoComplete="off">
                        <Grid container spacing={2} className="BreedDetails">
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >

                            <Box>
                              <Typography
                                variant="h5"
                                color="primary"
                                style={{ paddingBottom: "8px" }}
                              >
                                Category Name :
                              </Typography>

                              {functionKey === "Add" ? (
                                <>
                                  <Box>
                                    <TextField
                                      variant="outlined"
                                      name="name"
                                      type="text"
                                      value={values.name}
                                      error={Boolean(
                                        touched.name && errors.name
                                      )}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder="Please enter category Name"
                                      className={classes.textField}
                                    />
                                    <FormHelperText
                                      error
                                      style={{
                                        margin: "0px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {touched.name && errors.name}
                                    </FormHelperText>
                                  </Box>
                                </>
                              ) : functionKey === "View" ? (
                                <Box>
                                  <TextField
                                    readOnly
                                    variant="outlined"
                                    value="Mental Health and Well Being"
                                    inputProps={{ readOnly: "true" }}
                                  />
                                </Box>
                              ) : (
                                <Box>
                                  <TextField
                                    variant="outlined"
                                    name="name"
                                    type="text"
                                    value={values.name}
                                    error={Boolean(touched.name && errors.name)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Please enter category title"
                                    className={classes.textField}
                                  />
                                  <FormHelperText
                                    error
                                    style={{ margin: "0px", fontSize: "12px" }}
                                  >
                                    {touched.name && errors.name}
                                  </FormHelperText>
                                </Box>
                              )}
                            </Box>
                            <Box mt={2}>
                              <Typography
                                variant="h5"
                                color="primary"
                                style={{ paddingBottom: "8px" }}
                              >
                                Resource Title :
                              </Typography>

                              {functionKey === "Add" ? (
                                <>
                                  <Box>
                                    <TextField
                                      variant="outlined"
                                      name="partnerName"
                                      type="text"
                                      value={values.partnerName}
                                      error={Boolean(
                                        touched.partnerName &&
                                        errors.partnerName
                                      )}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder="Please enter resource title"
                                      className={classes.textField}
                                    />
                                    <FormHelperText
                                      error
                                      style={{
                                        margin: "0px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {touched.partnerName &&
                                        errors.partnerName}
                                    </FormHelperText>
                                  </Box>
                                </>
                              ) : functionKey === "View" ? (
                                <Box>
                                  <TextField
                                    readOnly
                                    variant="outlined"
                                    value="Mental Illness"
                                    inputProps={{ readOnly: "true" }}
                                  />
                                </Box>
                              ) : (
                                <Box>
                                  <TextField
                                    variant="outlined"
                                    name="partnerName"
                                    type="text"
                                    value={values.partnerName}
                                    error={Boolean(
                                      touched.partnerName && errors.partnerName
                                    )}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    placeholder="Please enter resource title"
                                    className={classes.textField}
                                  />
                                  <FormHelperText
                                    error
                                    style={{ margin: "0px", fontSize: "12px" }}
                                  >
                                    {touched.partnerName && errors.partnerName}
                                  </FormHelperText>
                                </Box>
                              )}
                            </Box>
                          </FormControl>
                        </Grid>
                      </form>
                    </Box>

                  </Grid>
                </Grid>

                <Grid item
                  md={12}
                  sm={12}
                  lg={12}
                  xs={12}>
                  <Box mt={2}>
                    <Typography
                      variant="h5"
                      color="primary"
                      style={{ paddingBottom: "8px" }}
                    >
                      Resource Description :
                    </Typography>
                    {functionKey === "Add" ? (
                      <>
                        <JoditEditor
                          ref={editor}
                          tabIndex={1}
                          onChange={(newContent) => { }}
                        />
                        <FormHelperText
                          error
                          style={{ margin: "0px", fontSize: "12px" }}
                        >
                          {touched.desc && errors.desc}
                        </FormHelperText>
                      </>
                    ) : functionKey === "View" ? (
                      <TextField
                        variant="outlined"
                        inputProps={{ readOnly: "true" }}
                        aria-readonly
                        value="This is the Description"
                        multiline
                        rows={4}
                        placeholder="https://www.lipsum.com/"
                        className={classes.textField}
                      />
                    ) : (
                      <>
                        <JoditEditor
                          ref={editor}
                          tabIndex={1}
                          onChange={(newContent) => { }}
                        />
                        <FormHelperText
                          error
                          style={{ margin: "0px", fontSize: "12px" }}
                        >
                          {touched.desc && errors.desc}
                        </FormHelperText>
                      </>
                    )}
                  </Box>

                  <Box mt={2}>
                    {functionKey === "Add" ? (
                      ""
                    ) : (
                      <>
                        <Typography
                          variant="h5"
                          color="primary"
                          style={{ paddingBottom: "8px" }}
                        >
                          Created Date and Time :
                        </Typography>
                      </>
                    )}

                    {functionKey === "Add" ? (
                      ""
                    ) : functionKey === "View" ? (
                      <Box>
                        <TextField
                          readOnly
                          variant="outlined"
                          value="Jan 25,2022 19:50 PM"
                          inputProps={{ readOnly: "true" }}
                        />
                      </Box>
                    ) : (
                      <Box>
                        <TextField
                          readOnly
                          variant="outlined"
                          value="Jan 25,2022 19:50 PM"
                          inputProps={{ readOnly: "true" }}
                        />
                      </Box>
                    )}
                  </Box>

                  <Box
                    style={{
                      marginTop: "16px",
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => history.push("/resouceMgmt")}
                      className={classes.newbtn}
                    >
                      Cancel
                    </Button>
                    &nbsp;&nbsp;
                    {functionKey === "Add" ? (
                      <>
                        <Box>
                          <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                          >
                            Submit
                          </Button>
                        </Box>
                      </>
                    ) : functionKey === "View" ? (
                      <>
                        <Box>
                          <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            onClick={() =>
                              history.push({
                                pathname: "/add-resource",
                                search: "Edit",
                              })
                            }
                          >
                            Edit
                          </Button>
                        </Box>
                      </>
                    ) : (
                      <Box>
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                        >
                          Update
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Grid>

              </Box>
            </Form>
          )}
        </Formik>
      </Container >
    </Box >
  );
}
