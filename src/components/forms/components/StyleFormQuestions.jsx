import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import RadioButtons from "./common/RadioButtons";

const StyleRadioButton = () => {
  const options = [
    {
      label: "Un look plus bohème",
      value: "bohème",
    },
    {
      label: "Un style plus moderne",
      value: "moderne",
    },
  ];

  return (
    <>
      <Box py={6}>
        <RadioButtons inputName="style" options={options} />
        <TextField
          fullWidth
          variant="filled"
          label="Styles - Précise au besoin"
          name="style.description"
          type="text"
        />
      </Box>
    </>
  );
};

export default StyleRadioButton;
