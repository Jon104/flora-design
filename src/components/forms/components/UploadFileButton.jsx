import LoadingButton from "@mui/lab/LoadingButton";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Box, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const UploadFileButton = (props) => {
  const [file, setFile] = useState();

  const onDrop = useCallback(
    (acceptedFiles) => {
      props.handleFileInputChange(acceptedFiles[0]);
      setFile(acceptedFiles[0]);
    },
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
      />

      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Grid container alignItems="center">
          <Box p={2}>
            <Grid item>
              <LoadingButton variant="outlined">
                <FileUploadIcon color="primary" />
                <Box px={2}>Téléverser</Box>
              </LoadingButton>
            </Grid>
          </Box>
          <Box pt={0.5} px={1}>
            <Grid item>{!!file && <CheckCircleOutlineIcon />}</Grid>
          </Box>
          <Grid item>{!!file && file.name}</Grid>
        </Grid>
      </div>
    </>
  );
};

export default UploadFileButton;
