import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Box } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UploadFileButton = (props) => {
  const onDrop = useCallback(
    (acceptedFiles) => props.handleFileInputChange(acceptedFiles[0]),
    [props]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <>
      {props.title && <h3>{props.title}</h3>}

      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
        name={props.name}
        onChange={(e) => props.handleFileInputChange(e.target.files[0])}
      />

      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Button variant="outlined">
          <FileUploadIcon color="primary" />
          <Box px={2}>Téléverser</Box>
        </Button>
      </div>
    </>
  );
};

export default UploadFileButton;
