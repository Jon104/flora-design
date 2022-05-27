import LoadingButton from "@mui/lab/LoadingButton";

const Button = (props) => (
  <LoadingButton
    type="submit"
    loading={props.isLoading}
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
  </LoadingButton>
);

export default Button;
