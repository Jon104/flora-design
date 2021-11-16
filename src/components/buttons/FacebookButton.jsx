import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

const FacebookButton = () => (
  <IconButton
    aria-label="facebook picture"
    component="span"
    onClick={() =>
      window.open(
        "https://www.facebook.com/Flora-Design-2473490369540452/",
        "_blank"
      )
    }
  >
    <FacebookIcon sx={{ color: "white", opacity: 0.95 }} fontSize="large" />
  </IconButton>
);

export default FacebookButton;
