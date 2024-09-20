import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TermsAndConditions = () => {
  return (
    <Box sx={{ width: "80%", margin: "auto", marginTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Banking Terms and Conditions
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">1. Account Opening</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The customer must provide accurate and truthful information when
            opening an account. All accounts are subject to verification of
            personal details and background checks.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">2. Minimum Balance Requirement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A minimum balance of $500 is required for savings accounts, and
            $1000 for current accounts. Failure to maintain this balance may
            result in service fees or account suspension.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">3. Interest Rates on Savings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Interest on savings accounts will be calculated on the minimum
            monthly balance and will be credited on the last day of each month.
            Interest rates may vary based on market conditions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">4. Transaction Limits</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Daily transaction limits apply for withdrawals and transfers. The
            maximum daily withdrawal limit is $10,000, and the transfer limit is
            $5,000. Limits can be adjusted upon request.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">5. Account Closure</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Accounts may be closed by the bank or customer at any time. If
            closed by the bank, a notice will be provided. All funds must be
            withdrawn within 30 days after notice is given.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TermsAndConditions;
