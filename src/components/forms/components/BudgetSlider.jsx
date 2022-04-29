import { useState } from "react";
import { Box, Grid, Slider } from "@mui/material";

const BudgetSlider = () => {
  const [budget, setBudget] = useState([300, 500]);

  const budgetFormat = (value) => `${value} $`;

  return (
    <>
      <Box py={6}>
        <Grid item xs="12">
          <h3>Et le budget dans tous ça?</h3>
          <h4>Quel est ton budget?</h4>
          <input name="budget" hidden value={budget} />
          <Slider
            onChange={(e, val) => setBudget(val)}
            valueLabelDisplay="auto"
            aria-label="default"
            getAriaValueText={budgetFormat}
            valueLabelFormat={budgetFormat}
            value={budget}
            step={100}
            marks
            min={300}
            max={800}
          />
        </Grid>
      </Box>
    </>
  );
};

export default BudgetSlider;
