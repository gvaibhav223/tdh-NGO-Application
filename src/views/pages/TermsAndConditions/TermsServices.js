import React from "react";
import { Container, Typography, Box, makeStyles } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  headbox: {
    paddingBottom: "3rem",
    background: theme.palette.background.dark1,
  },
  headboxPrimary: {
    background: theme.palette.background.dark1,
  },
  headcontent: {
    display: "flex",
    padding: "40px 0px",
    flexDirection: "column",
    paddingBottom: "10px",
    alignItems: "center",
    justifyContent: "center",
    "& h2": {
      fontSize: "55px",
      fontWeight: "400px",
      display: "flex",
      justifyContent: "center",
      paddingTop: "30px",
      color: theme.palette.text.black,
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
      },
    },
    "& h6": {
      display: "flex",
      justifyContent: "center",
      paddingBottom: "40px",
    },
  },
  topsection: {
    padding: "15px 0px",
    "& h4": {
      padding: "10px 0px",
      color: theme.palette.text.black,
    },
    "& h5": {
      padding: "10px 0px",
      color: theme.palette.text.black,
    },
    "& h6": {
      color: theme.palette.text.black,
    },
    "& p": {
      color: theme.palette.text.black,
    },
  },
  headingpara: {
    display: "flex",
    alignItems: "center",
    paddingBottom: "50px",
    paddingTop: "20px",
    "& p": {
      color: theme.palette.text.black,
    },
  },
}));

function Terms() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headboxPrimary}>
        <Container>
          <Box className={classes.headcontent}>
            <Typography variant="h2">Terms Of Services.</Typography>
            <Box className={classes.headingpara}>
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <Typography variant="body1">Home</Typography>
              </RouterLink>
              <ChevronRightIcon
                style={{ fontSize: "14px", color: "#262626" }}
              />
              <Typography variant="body1">Terms And Condition's</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className={classes.headbox}>
        <Container>
          <Box>
            <Box className={classes.topsection}>
              <Typography variant="h4">Terms and Conditions</Typography>
              <Typography variant="body1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </Typography>
            </Box>
            <Box className={classes.topsection}>
              <Typography variant="h6">Lorem Text </Typography>
              <Typography variant="body1">
                Allcontributions will be appiledtowards theadvancementp,
                romotingtheresearch. desgi n and developmentof a technical tool,
                to assess therisks of smart contractsin selected blockchains.
                And advocacy to build themissingbridge of trust between the
                crypto developers and investors. TheCompanyi s acting solely
                asanarms'length third partyin relationto the SBME sale, and not
                in thecapacityas a financial adviser or fiduciaryof any person
                with regard to the sale of SBME.
              </Typography>
            </Box>
            <Box className={classes.topsection}>
              <Typography variant="h6">Lorem Text</Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Box>
            <Box className={classes.topsection}>
              <Typography variant="h6">Lorem Text</Typography>
              <Typography variant="body1">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </Typography>
            </Box>
            <Box className={classes.topsection}>
              <Typography variant="h6">Lorem Text</Typography>
              <Typography variant="body1">
                Theinformation setout herein is only conceptual anddescribes the
                future developmentgoals for the BMEproject to bedeveloped. In
                particula.rthe proJ ect roadmap in the Whit epapeirs being
                shared in order to outline someof the plansof the BME team andIs
                provided solely for INFORMAITONALPURPOSES and doesnot
                constituteany binding commitment Please do notrely onthis
                information inmakingpurchasingdecisions because ultimately,
                thedevelopmen, rtelease,andtimingof anyproducts. featuresor
                functionalityremainsat thesole discretion of theCompany
                Moreovre,the Whitepaper or the Websitemaybeamended or replaced
                from time to time.There arenoobligationsto updatethe Whitepaper
                orthe Website,or to providerecipientswith access to
                anyinformation beyond what is provided herein.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Terms;
