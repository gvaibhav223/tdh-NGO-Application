import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Accordion = withStyles({
  root: {
    "&:not(:last-child)": {
      background: "#000",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      border: " 1px solid #3d3d3d",
      background:
        "linear-gradient( 152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      backdropFilter: "blur(42px)",
    },
  },
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    boxSizing: "border-box",
    // marginTop: "22px",
    borderRadius: "0",
    backdropFilter: "blur(4px)",
    backgroundColor: "#000",
    "&$expanded": {
      minHeight: 50,
      borderBottom: "0",
      color: "#FFF",
      // backgroundColor: "transparent",
      border: " none !important",
    },
    "@media(max-width:605px)": {
      fontSize: "10px",
      minHeight: 50,
      "&$expanded": {
        minHeight: 40,
        borderBottom: "0",
        color: "#FFF",
        backgroundColor: "transparent",
        border: " none !important",
      },
    },
  },
  content: {
    background: "000 !important",
    color: "#fff",
    borderRadius: "5px",
    // background-color: transparent;
    // border: none !important;
    "&$expanded": {
      margin: "0px 0",
      // backgroundColor: "transparent",
      border: " none !important",
    },
  },
  expanded: {
    margin: "0",
  },
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    backdropFilter: "blur(4px)",
    marginTop: "5px",
    background: "linear-gradient(45deg, #083202, transparent)",
    borderRadius: "5px",
    "& h6": {
      color: "#fff",
      paddingBottom: "15px",
      "@media (max-width:767px)": {
        fontSize: "18px !important",
      },
    },
    "& p": {
      color: "#FFFDFD",
      marginTop: "2px",
      maxWidth: "1200px",
      fontSize: "14px",
      fontFamily: "Inter', sans-serif'",
      fontWeight: "400",
      lineHeight: "24px",
    },
  },
}))(MuiAccordionDetails);

export default function FaqData({ data, index }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        style={{  borderRadius: "5px" }}
        square
        defaultExpanded={index == 0 ? true : false}
        // defaultExpanded={false}
        onChange={handleChange(index)}
      >
        <AccordionSummary
          style={{ background: "#262e38" }}
          aria-controls={index}
          expandIcon={
            expanded === index ? (
              <AiOutlineMinus
                style={{
                  fontSize: "20px",
                  fontWeight: "400",

                  color: "#fff",
                }}
              />
            ) : (
              <AiOutlinePlus
                style={{
                  fontSize: "20px",
                  fontWeight: "400",

                  color: "#fff",
                }}
              />
            )
          }
        >
          <Typography
            variant="h6"
            style={{
              color: "#fff",
              fontSize: "20px",
              lineHeight: "25px",
            }}
            className="faqtextheader"
          >
            {data.head}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="body2">{data.summary}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
