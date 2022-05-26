import MuiButton from "@mui/material/Button";

const Button = (props) => (
  <MuiButton
    onClick={props.onClick}
    variant="contained"
    size="large"
    sx={{
      backgroundColor: "#F2E8DA",
      color: "#9F2E0E",
      fontSize: 15,
      height: "3rem",
      paddingY: "2rem",
      boxShadow: "10px 10px 30px 0px #D0CFDC66",
      "&:hover": {
        backgroundColor: "#dabe96",
      },
    }}
  >
    {props.children}
  </MuiButton>
);

export default Button;
