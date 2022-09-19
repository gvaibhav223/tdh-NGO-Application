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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& h2": {
      fontSize: "55px",
      fontWeight: "400px",
      display: "flex",
      justifyContent: "center",
      color: theme.palette.text.black,
      paddingTop: "30px",
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

function Privacy() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headboxPrimary}>
        <Container>
          <Box className={classes.headcontent}>
            <Typography variant="h2">Privacy And Policy</Typography>
            <Box className={classes.headingpara}>
              <RouterLink to="/" style={{ textDecoration: "none" }}>
                <Typography variant="body1">Home</Typography>
              </RouterLink>
              <ChevronRightIcon
                style={{ fontSize: "14px", color: "#262626" }}
              />
              <Typography variant="body1">Privacy and Policy</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className={classes.headbox}>
        <Container>
          <Box>
            <Box className={classes.topsection}>
              <Typography variant="h4">Privacy And Policy</Typography>
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
              <Typography variant="h6">Lorem Ipsom Text </Typography>
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
              <Typography variant="h6">Lorem Text </Typography>
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
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Privacy;
