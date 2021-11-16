import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const InstagramButton = () => (
  <IconButton
    aria-label="instagram picture"
    component="span"
    onClick={() =>
      window.open(
        "https://www.instagram.com/flora_design_art_textile/",
        "_blank"
      )
    }
  >
    <InstagramIcon sx={{ color: "white", opacity: 0.95 }} fontSize="large" />
  </IconButton>
);

export default InstagramButton;
