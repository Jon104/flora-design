import { useState } from "react";
import { Slider } from "@mui/material";

const BudgetSlider = () => {
  const [budget, setBudget] = useState([300, 500]);

  const budgetFormat = (value) => `${value} $`;

  return (
    <>
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
    </>
  );
};

export default BudgetSlider;
