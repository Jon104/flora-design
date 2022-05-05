import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

const RadioButtons = (props) => {
  return (
    <>
      {props.title && <h3>{props.title}</h3>}
      <input name={props.inputName} hidden value={props.value} />
      <RadioGroup name={props.title} onChange={(e, val) => props.setValue(val)}>
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
