import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";
import { useState } from "react";

const StyleRadioButton = () => {
  const [selected, setSelected] = useState();

  return (
    <>
      <Box py={6}>
        <h3>Quel style général souhaites-tu retrouver dans ton projet</h3>
        <input name="style" hidden value={selected} />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          onChange={(e, val) => setSelected(val)}
        >
          <FormControlLabel
            value="bohème"
            control={<Radio />}
            label="Un look plus bohème"
          />
          <FormControlLabel
            value="moderne"
            control={<Radio />}
            label="Un style plus moderne"
          />
        </RadioGroup>
      </Box>
    </>
  );
};

export default StyleRadioButton;
