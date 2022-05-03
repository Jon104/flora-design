import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const TellMeMore = (props) => {
  return (
    <Box py={8}>
      <Box pb={2}>
        <h3>{props.title}</h3>
      </Box>
      <TextField
        fullWidth
        variant="filled"
        label={props.label}
        name="photosInspiration.précision"
        type="text"
      />
    </Box>
  );
};

export default TellMeMore;
