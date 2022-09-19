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
  Divider,
} from "@material-ui/core";
import * as yep from "yup";
import Button from "@material-ui/core/Button";
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
    // margin: theme.spacing(1),
    minWidth: 120,
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
    // width: "150px",
    // height: "150px",
    height: "250px",
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
}));

export default function CreateNFT(userProfileData) {
  const classes = useStyles();
  const history = useHistory();
  const editor = useRef(null);
  const [base64Img1, setBase64Img1] = useState("");
  const [imgFile, setImgfile] = useState("");
  const [profile, setprofile] = useState();
  const location = useLocation();
  const [currentvalue, setCurrentValue] = useState("Select");
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
    districtname: yep
      .string()
      .required(" District is required")
      .min(2, "Please enter at least 2 characters")
      .max(35, "You can enter only 35 characters")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
        "Only alphabets and white spaces are allowed for this field number are not. "
      ),
    stateName: yep
      .string()
      .required("State is required")
      .min(2, "Please enter at least 2 characters")
      .max(35, "You can enter only 35 characters")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
        "Only alphabets and white spaces are allowed for this field number are not. "
      ),
    locationName: yep
      .string()
      .required(" Location is required")
      .min(2, "Please enter at least 2 characters")
      .max(35, "You can enter only 35 characters")
      .matches(
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/,
        "Only alphabets and white spaces are allowed for this field number are not. "
      ),
  });
  return (
    <Box className={classes.NftBreed}>
      <Box className={classes.devicelistHeading}>
        <Typography variant="h1" className="headingText">
          {`${functionKey} Emergency Details`}
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
          // onSubmit={handleSubmit}
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
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Box>
                        {functionKey === "Add" ? (
                          <>
                            <figure className={classes.upload}>
                              <img
                                src={
                                  base64Img
                                    ? base64Img
                                    : "/images/firefighters.jpg"
                                }
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
                          </>
                        ) : functionKey === "View" ? (
                          <figure className={classes.upload}>
                            <img src="/images/firefighters.jpg" />
                          </figure>
                        ) : (
                          <figure className={classes.upload}>
                            <img
                              src={
                                base64Img
                                  ? base64Img
                                  : "/images/firefighters.jpg"
                              }
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

                        {/* <figure className={classes.upload}>
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
                        </figure> */}
                        {functionKey === "Add" ? (
                          <>
                            <Box className={classes.imgsec}>
                              <Typography variant="h6" color="primary">
                                Please select image
                              </Typography>
                            </Box>
                          </>
                        ) : functionKey === "View" ? (
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              width: "100%",
                            }}
                          >
                            <Typography variant="h6" color="primary">
                              Image
                            </Typography>
                          </Box>
                        ) : (
                          <Box
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              width: "100%",
                            }}
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
                    <Box>
                      <form className="formBox p-0" autoComplete="off">
                        <Grid container spacing={2} className="BreedDetails">
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <Box mt={2}>
                                <Typography
                                  variant="h5"
                                  color="primary"
                                  style={{ paddingBottom: "8px" }}
                                >
                                  Emergency Type :
                                </Typography>

                                {functionKey === "Add" ? (
                                  <>
                                    <FormControl
                                      variant="outlined"
                                      className={classes.formControl}
                                    >
                                      <Box>
                                        <Select
                                          name="token"
                                          labelId="demo-simple-select-outlined-label"
                                          id="demo-simple-select-outlined"
                                          onChange={(e) =>
                                            setCurrentValue(e.target.value)
                                          }
                                          value={currentvalue}
                                          style={{ width: "100%" }}
                                        >
                                          <MenuItem value="Select">
                                            Select Category
                                          </MenuItem>
                                          <MenuItem value="Mental Health">
                                            Mental Health
                                          </MenuItem>
                                          <MenuItem value="Menstrual Health">
                                            {" "}
                                            Menstrual Health
                                          </MenuItem>
                                          <MenuItem value="Personal Safety">
                                            Personal Safety
                                          </MenuItem>
                                          <MenuItem value="Support Service">
                                            Support Service
                                          </MenuItem>
                                        </Select>
                                      </Box>
                                    </FormControl>
                                  </>
                                ) : functionKey === "View" ? (
                                  <Box>
                                    <TextField
                                      readOnly
                                      variant="outlined"
                                      value="Fire"
                                      inputProps={{ readOnly: "true" }}
                                    />
                                  </Box>
                                ) : (
                                  <Box>
                                    <FormControl
                                      variant="outlined"
                                      className={classes.formControl}
                                    >
                                      <Box>
                                        <Select
                                          name="token"
                                          labelId="demo-simple-select-outlined-label"
                                          id="demo-simple-select-outlined"
                                          onChange={(e) =>
                                            setCurrentValue(e.target.value)
                                          }
                                          value={currentvalue}
                                          style={{ width: "100%" }}
                                        >
                                          <MenuItem value="Select">
                                            Select Category
                                          </MenuItem>
                                          <MenuItem value="Mental Health">
                                            Mental Health
                                          </MenuItem>
                                          <MenuItem value="Menstrual Health">
                                            {" "}
                                            Menstrual Health
                                          </MenuItem>
                                          <MenuItem value="Personal Safety">
                                            Personal Safety
                                          </MenuItem>
                                          <MenuItem value="Support Service">
                                            Support Service
                                          </MenuItem>
                                        </Select>
                                      </Box>
                                    </FormControl>
                                  </Box>
                                )}
                              </Box>
                            </Grid>
                          </FormControl>
                        </Grid>
                      </form>
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
                    <Box>
                      <form className="formBox p-0" autoComplete="off">
                        <Grid container spacing={2} className="BreedDetails">
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <Box mt={2}>
                                <Typography
                                  variant="h5"
                                  color="primary"
                                  style={{ paddingBottom: "8px" }}
                                >
                                  Location Name :
                                </Typography>

                                {functionKey === "Add" ? (
                                  <>
                                    <Box>
                                      <TextField
                                        variant="outlined"
                                        name="locationName"
                                        type="text"
                                        value={values.locationName}
                                        error={Boolean(
                                          touched.locationName &&
                                            errors.locationName
                                        )}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Please enter location"
                                        className={classes.textField}
                                      />
                                      <FormHelperText
                                        error
                                        style={{
                                          margin: "0px",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {touched.locationName &&
                                          errors.locationName}
                                      </FormHelperText>
                                    </Box>
                                  </>
                                ) : functionKey === "View" ? (
                                  <Box>
                                    <TextField
                                      readOnly
                                      variant="outlined"
                                      value="Kankarbagh Fire Station"
                                      inputProps={{ readOnly: "true" }}
                                    />
                                  </Box>
                                ) : (
                                  <Box>
                                    <TextField
                                      variant="outlined"
                                      name="locationName"
                                      type="text"
                                      // value={values.locationName}
                                      error={Boolean(
                                        touched.locationName &&
                                          errors.locationName
                                      )}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder="Please enter location"
                                      className={classes.textField}
                                    />
                                    <FormHelperText
                                      error
                                      style={{
                                        margin: "0px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {touched.locationName &&
                                        errors.locationName}
                                    </FormHelperText>
                                  </Box>
                                )}
                              </Box>
                            </Grid>
                          </FormControl>
                        </Grid>
                      </form>
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
                    <Box>
                      <form className="formBox p-0" autoComplete="off">
                        <Grid container spacing={2} className="BreedDetails">
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <Box mt={1}>
                                <Typography
                                  variant="h5"
                                  color="primary"
                                  style={{ paddingBottom: "8px" }}
                                >
                                  District :
                                </Typography>

                                {functionKey === "Add" ? (
                                  <>
                                    <Box>
                                      <TextField
                                        variant="outlined"
                                        name="districtname"
                                        type="text"
                                        value={values.districtname}
                                        error={Boolean(
                                          touched.districtname &&
                                            errors.districtname
                                        )}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Please enter district"
                                        className={classes.textField}
                                      />
                                      <FormHelperText
                                        error
                                        style={{
                                          margin: "0px",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {touched.districtname &&
                                          errors.districtname}
                                      </FormHelperText>
                                    </Box>
                                  </>
                                ) : functionKey === "View" ? (
                                  <Box>
                                    <TextField
                                      readOnly
                                      variant="outlined"
                                      value="Patna"
                                      inputProps={{ readOnly: "true" }}
                                    />
                                  </Box>
                                ) : (
                                  <Box>
                                    <TextField
                                      variant="outlined"
                                      name="districtName"
                                      type="text"
                                      // value={values.districtName}
                                      error={Boolean(
                                        touched.districtName &&
                                          errors.districtName
                                      )}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder="Please enter district"
                                      className={classes.textField}
                                    />
                                    <FormHelperText
                                      error
                                      style={{
                                        margin: "0px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {touched.districtName &&
                                        errors.districtName}
                                    </FormHelperText>
                                  </Box>
                                )}
                              </Box>
                            </Grid>
                          </FormControl>
                        </Grid>
                      </form>
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
                    <Box>
                      <form className="formBox p-0" autoComplete="off">
                        <Grid container spacing={2} className="BreedDetails">
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <Box mt={1}>
                                <Typography
                                  variant="h5"
                                  color="primary"
                                  style={{ paddingBottom: "8px" }}
                                >
                                  State :
                                </Typography>

                                {functionKey === "Add" ? (
                                  <>
                                    <Box>
                                      <TextField
                                        variant="outlined"
                                        name="stateName"
                                        type="text"
                                        value={values.stateName}
                                        error={Boolean(
                                          touched.stateName && errors.stateName
                                        )}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Please enter state"
                                        className={classes.textField}
                                      />
                                      <FormHelperText
                                        error
                                        style={{
                                          margin: "0px",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {touched.stateName && errors.stateName}
                                      </FormHelperText>
                                    </Box>
                                  </>
                                ) : functionKey === "View" ? (
                                  <Box>
                                    <TextField
                                      readOnly
                                      variant="outlined"
                                      value="Bihar"
                                      inputProps={{ readOnly: "true" }}
                                    />
                                  </Box>
                                ) : (
                                  <Box>
                                    <TextField
                                      variant="outlined"
                                      name="stateName"
                                      type="text"
                                      // value={values.stateName}
                                      error={Boolean(
                                        touched.stateName && errors.stateName
                                      )}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder="Please enter state"
                                      className={classes.textField}
                                    />
                                    <FormHelperText
                                      error
                                      style={{
                                        margin: "0px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {touched.stateName && errors.stateName}
                                    </FormHelperText>
                                  </Box>
                                )}
                              </Box>
                            </Grid>
                          </FormControl>
                        </Grid>
                      </form>
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
                    <Box>
                      <form className="formBox p-0" autoComplete="off">
                        <Grid container spacing={2} className="BreedDetails">
                          <FormControl
                            variant="outlined"
                            className={classes.formControl}
                          >
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <Box mt={1}>
                                <Typography
                                  variant="h5"
                                  color="primary"
                                  style={{ paddingBottom: "8px" }}
                                >
                                  Contact Number :
                                </Typography>

                                {functionKey === "Add" ? (
                                  <>
                                    <Box>
                                      <TextField
                                        variant="outlined"
                                        name="contactnumber"
                                        type="text"
                                        value={values.contactnumber}
                                        error={Boolean(
                                          touched.contactnumber &&
                                            errors.contactnumber
                                        )}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Please enter contact number"
                                        className={classes.textField}
                                      />
                                      <FormHelperText
                                        error
                                        style={{
                                          margin: "0px",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {touched.contactnumber &&
                                          errors.contactnumber}
                                      </FormHelperText>
                                    </Box>
                                  </>
                                ) : functionKey === "View" ? (
                                  <Box>
                                    <TextField
                                      readOnly
                                      variant="outlined"
                                      value="100"
                                      inputProps={{ readOnly: "true" }}
                                    />
                                  </Box>
                                ) : (
                                  <Box>
                                    <TextField
                                      variant="outlined"
                                      name="contactNumber"
                                      type="text"
                                      // value={values.contactNumber}
                                      error={Boolean(
                                        touched.contactNumber &&
                                          errors.contactNumber
                                      )}
                                      onBlur={handleBlur}
                                      onChange={handleChange}
                                      placeholder="Please enter contact number"
                                      className={classes.textField}
                                    />
                                    <FormHelperText
                                      error
                                      style={{
                                        margin: "0px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      {touched.contactNumber &&
                                        errors.contactNumber}
                                    </FormHelperText>
                                  </Box>
                                )}
                              </Box>
                            </Grid>
                          </FormControl>
                        </Grid>
                      </form>
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  style={{
                    marginTop: "25px",
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: " center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => history.push("/emergencyMgmt")}
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
                              pathname: "/emergencyView",
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
                      <Button variant="contained" type="submit" color="primary">
                        Update
                      </Button>
                    </Box>
                  )}
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </Box>
  );
}
