import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MaterialSelect,
} from "@mui/material";
import PropTypes from "prop-types";

const Select = (props) => {
  return (
    <FormControl fullWidth disabled={props.isDisabled} size="small">
      <InputLabel id={props.name}>{props.label}</InputLabel>
      <MaterialSelect
        labelId={props.name}
        defaultValue={props.defaultValue}
        label={props.label}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      >
        {props.options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.text}
          </MenuItem>
        ))}
      </MaterialSelect>
    </FormControl>
  );
};

Select.propTypes = {
  defaultValue: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.string,
  }),
  value: PropTypes,
};

Select.defaultProps = {
  label: "Sélectionner une option", // todo translate
};

export default Select;
