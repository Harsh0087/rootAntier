import * as React from "react";
import "./App.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <Accordion
        className="accordion"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          className="accordionSummary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "50%", flexShrink: 10 }}>
            <h3>Why is CARS24 the best place to sell my car online?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Not only do we offer a great price on each car we buy with Instant
              Payment, we ensure the entire car selling exeprience is a
              hassle-free. The entire process can be completed online, even the
              physical inspection of car is done at your home as per the date
              and time decided by you. We also offer full after sales support to
              ensure you have zero liability until the RC transfer is complete.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion"
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h3>Can I sell a car that has an ongoing loan on it?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Yes you can. Based on the valuation of your car, CARS24 will
              handle the loan closures on your behalf, and will transfer the
              remaining balance to your account.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion"
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h3>
              Is the car owner required to be present at the time of car pick up
              & inspection?
            </h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              No. Anyone can be present during the inspection with the required
              documents and the car keys. The owner only needs to be present to
              sign documents at the time of sale.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion"
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h3>Do I need to be present at the RTO for RC transfer?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              We take care of all documentation, including the free RC transfer.
              In case there is any mismatch in RC like signature mismatch, you
              may need to be present at the RTO. Some States also require the
              previous owner to be present at the RTO in order to register the
              car with the new owner, also known as 'Party Peshi'. A CARS24
              representative will be present with you throughout the process.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion"
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h3>How long does the RC transfer take?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              The timeline of the RC transfer might vary depending on the
              availability of the prospective buyer and the RTO requirements.
              However, you don't need to worry about it at all! All our
              customers are covered under the CARS24 Seller Protection Policy,
              which means until the RC transfer of your car is complete, we take
              full responsibility for the safety of your vehicle. Once the
              ownership has been transferred, we will send you an email with the
              proof of RC transfer.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className="accordion"
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h3>Does CARS24 buy commercial cars ?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Unfortunately, we currently do not deal in commercial vehicles.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion"
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h3>Will CARS24 handle/take care of the paperwork?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Yes! From the initial documentation to the free RC transfer, we
              will take care of everything.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="accordion"
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>
            <h3>How long does it take during car inspection?</h3>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              The inspection usually takes 30-45 mins. During this time our car
              expert will check your car across 140 parameters, including
              bodywork, wheels and tyres, interiors, electricals etc. They will
              also take a short test drive of the vehicle to assess its running
              condition.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className="vaf">
        <a href="#">VIEW ALL FAQS</a>
      </div>
    </div>
  );
}
