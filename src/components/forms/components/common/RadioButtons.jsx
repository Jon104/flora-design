import { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const RadioButtons = (props) => {
  const [selected, setSelected] = useState();

  return (
    <>
      {props.title && <h3>{props.title}</h3>}
      <input name={props.inputName} hidden value={selected} />
      <RadioGroup name={props.title} onChange={(e, val) => setSelected(val)}>
        {props.options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </>
  );
};

export default RadioButtons;
