import Button from "@mui/material/Button";

const UploadFileButton = (props) => {
  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
        name={props.name}
        onChange={(e) => props.handleFileInputChange(e.target.files[0])}
      />
      <label htmlFor="raised-button-file">
        <Button variant="raised" component="span">
          Téléverser
        </Button>
      </label>
    </>
  );
};

export default UploadFileButton;
