import LoadingButton from "@mui/lab/LoadingButton";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Box, Grid } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styled from "styled-components";

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
            <Grid item xs={12}>
              <LoadingButton variant="outlined">
                <FileUploadIcon color="primary" />
                <Box px={2}>Téléverser</Box>
              </LoadingButton>
            </Grid>
          </Box>
          <Grid container>
            <Box px={4}>
              <Grid item>
                {!!file && <CheckCircleOutlineIcon fontSize="x-small" />}
              </Grid>
            </Box>
            <Grid item>{!!file && <FileName>file.name</FileName>}</Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const FileName = styled.p`
  margin: 0;
  font-size: 12px;
`;

export default UploadFileButton;
