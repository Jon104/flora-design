import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Button,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Slider,
} from "@mui/material";
import { isMobile } from "react-device-detect";
import CloseIcon from "@mui/icons-material/Close";
// import { useDropzone } from "react-dropzone";

const projectTypes = [
  {
    id: 1,
    src: "1.png",
  },
  {
    id: 2,
    src: "2.png",
  },
];

const colorTypes = [
  {
    id: 3,
    src: "3.png",
  },
  {
    id: 4,
    src: "4.png",
  },
  {
    id: 5,
    src: "5.png",
  },
  {
    id: 6,
    src: "6.png",
  },
  {
    id: 7,
    src: "7.png",
  },
  {
    id: 8,
    src: "8.png",
  },
  {
    id: 9,
    src: "9.png",
  },
  {
    id: 10,
    src: "10.png",
  },
  {
    id: 11,
    src: "11.png",
  },
  {
    id: 12,
    src: "12.png",
  },
];

const formatTypes = [
  {
    id: 13,
    src: "13.png",
  },
  {
    id: 14,
    src: "14.png",
  },
  {
    id: 15,
    src: "15.png",
  },
  {
    id: 16,
    src: "16.png",
  },
];

const lookTypes = [
  {
    id: 17,
    src: "17.png",
  },
  {
    id: 18,
    src: "18.png",
  },
];

const motifTypes = [
  {
    id: 19,
    description: "Les feuilles",
    src: "19.png",
  },
  {
    id: 20,
    description: "Les fleurs de lotus et autres formes de fleurs",
    src: "20.png",
  },
  {
    id: 21,
    description: "Les papillons",
    src: "21.png",
  },
  {
    id: 22,
    description: "Les tresses / torsades enchevêtrées",
    src: "22.png",
  },
  {
    id: 23,
    description: "Les plumes",
    src: "23.png",
  },
  {
    id: 24,
    description: "Les pompons",
    src: "24.png",
  },
  {
    id: 25,
    description: "L'effet dentelle",
    src: "25.png",
  },
  {
    id: 26,
    description: "Les formes éclatées",
    src: "26.png",
  },
  {
    id: 27,
    description: "Les zig-zag",
    src: "27.png",
  },
  {
    id: 28,
    description: "Les petits boutons de rose",
    src: "28.png",
  },
  {
    id: 29,
    description: "Les insertions pour plantes",
    src: "29.png",
  },
  {
    id: 30,
    description: "Les arbres de vie / lune / étoile ou autres formes intégrées",
    src: "30.png",
  },
  {
    id: 31,
    description: "Les insertions de laine merino",
    src: "31.png",
  },
  {
    id: 32,
    description: "Les dessins abstraits",
    src: "32.png",
  },
  {
    id: 33,
    description: "Les diamants",
    src: "33.png",
  },
  {
    id: 34,
    description:
      "Surprends-moi (j'ai toujours la tête pleine d'idées à te proposer!)",
    src: "34.png",
  },
];

const PersonalPieceForm = ({ onClose }) => {
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [width, setWidth] = useState([23, 40]);
  const [height, setHeight] = useState([17, 24]);
  const [selectedColorTypes, setSelectedColorTypes] = useState([]);
  const [selectedFormatTypes, setSelectedFormatTypes] = useState([]);
  const [selectedLookTypes, setSelectedLookTypes] = useState([]);
  const [selectedMotifTypes, setSelectedMotifTypes] = useState([]);
  // const [file, setFile] = useState({});

  // const onDrop = useCallback(
  //   (acceptedFiles) => {
  //     console.log(file);
  //     setFile(acceptedFiles[0]);
  //   },
  //   [file]
  // );
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop,
  // });

  const isProjectSelected = (image) =>
    selectedProjectTypes.find((element) => element.id === image.id);

  const handleSelectProject = (image) => {
    const alreadySelected = isProjectSelected(image);
    if (alreadySelected) {
      const index = selectedProjectTypes.findIndex(
        (element) => element.id === image.id
      );
      setSelectedProjectTypes(selectedProjectTypes.splice(index, 0));
      return;
    }
    const result = [...selectedProjectTypes, image];
    setSelectedProjectTypes(result);
  };

  const isColorSelected = (image) =>
    selectedColorTypes.find((element) => element.id === image.id);

  const handleSelectColor = (image) => {
    const alreadySelected = isColorSelected(image);
    if (alreadySelected) {
      const index = selectedColorTypes.findIndex(
        (element) => element.id === image.id
      );
      setSelectedColorTypes(selectedColorTypes.splice(index, 0));
      return;
    }
    const result = [...selectedColorTypes, image];
    setSelectedColorTypes(result);
  };

  const isFormatSelected = (image) =>
    selectedFormatTypes.find((element) => element.id === image.id);

  const handleSelectFormat = (image) => {
    const alreadySelected = isFormatSelected(image);
    if (alreadySelected) {
      const index = selectedFormatTypes.findIndex(
        (element) => element.id === image.id
      );
      setSelectedFormatTypes(selectedFormatTypes.splice(index, 0));
      return;
    }
    const result = [...selectedFormatTypes, image];
    setSelectedFormatTypes(result);
  };

  const isLookSelected = (image) =>
    selectedLookTypes.find((element) => element.id === image.id);

  const handleSelectLook = (image) => {
    const alreadySelected = isLookSelected(image);
    if (alreadySelected) {
      const index = selectedLookTypes.findIndex(
        (element) => element.id === image.id
      );
      setSelectedLookTypes(selectedLookTypes.splice(index, 0));
      return;
    }
    const result = [...selectedLookTypes, image];
    setSelectedLookTypes(result);
  };

  const isMotifSelected = (image) =>
    selectedMotifTypes.find((element) => element.id === image.id);

  const handleSelectMotif = (image) => {
    const alreadySelected = isMotifSelected(image);
    if (alreadySelected) {
      const index = selectedMotifTypes.findIndex(
        (element) => element.id === image.id
      );
      setSelectedMotifTypes(selectedMotifTypes.splice(index, 0));
      return;
    }
    const result = [...selectedLookTypes, image];
    setSelectedMotifTypes(result);
  };

  const widthMarks = [
    {
      value: 45,
      label: "Tête de lit moyen",
    },
  ];

  const valuetext = (value) => `${value} po`;

  /* const handleDrop = (files) => {
    debugger;
    const zip = require("jszip");

    files.forEach((file) => zip.file(file.name, file));

    zip.generateAsync({ type: "blob" }).then((blob) => {
      const zippedFiles = new File([blob], "whatever.zip", {
        lastModified: Date.now(),
        type: "application/zip",
      });

      this.setState({
        zippedFiles,
      });
    });
  }; */

  return (
    <>
      <Box px={{ xs: 2, sm: 6 }} py={2}>
        <Grid container justifyContent="flex-end">
          <IconButton
            aria-label="close-form"
            onClick={onClose}
            size="large"
            right
          >
            <CloseIcon color="primary" fontSize="inherit" />
          </IconButton>
        </Grid>
        <form method="post">
          <input type="hidden" name="form-name" value="personal-piece" />
          <Box pb={6} py={{ xs: 6 }}>
            <Grid container spacing={2} sx={{ paddingBottom: 6 }}>
              <Grid item xs="12">
                <h3>Qui es-tu?</h3>
              </Grid>
              <Grid item xs="12" sm="6">
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Nom complet"
                  color="primary"
                  name="name"
                  type="text"
                />
              </Grid>
              <Grid item xs="12" sm="6" sx={{ paddingBottom: 4 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Courriel"
                  name="email"
                  type="email"
                />
              </Grid>
              <Grid item xs="12" sx={{ marginTop: 6, paddingBottom: 8 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="12">
                    <h3>Quel type de projet t'intéresse: </h3>
                    <ImageList
                      cols={isMobile ? 1 : 3}
                      rowHeight={isMobile ? 350 : 580}
                    >
                      <input
                        hidden
                        name="projectTypes"
                        value={JSON.stringify(selectedProjectTypes)}
                      />
                      {projectTypes.map((item) => (
                        <ImageListItem
                          sx={{
                            border: 4,
                            borderColor: isProjectSelected(item)
                              ? "#9f2e0e"
                              : "transparent",
                          }}
                          key={item.img}
                          onClick={() => handleSelectProject(item)}
                        >
                          <img
                            src={`./img/personalPieceForm/${item.src}`}
                            alt={item.id}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Précise au besoin"
                      name="projectTypes.description"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs="12">
              <h3>
                Quelles dimensions approximatives souhaites-tu pour ton projet?
              </h3>
              <h4>Largeur</h4>
              <input name="width" hidden value={width} />
              <Slider
                onChange={(e, val) => setWidth(val)}
                marks={widthMarks}
                valueLabelDisplay="auto"
                aria-label="width"
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                value={width}
              />
            </Grid>
            <Grid item xs="6">
              <h4>Hauteur</h4>
              <input name="height" hidden value={height} />
              <Slider
                onChange={(e, val) => setHeight(val)}
                valueLabelDisplay="auto"
                aria-label="height"
                defaultValue={[20, 37]}
                valueLabelFormat={valuetext}
                value={height}
              />
            </Grid>
          </Box>

          <Grid item xs="12" sx={{ paddingTop: 10 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs="12">
                <h3>Parlons design!</h3>
                <h4>Quelles couleurs souhaites-tu ?</h4>
              </Grid>
              <Grid item xs="12">
                <ImageList
                  cols={isMobile ? 1 : 3}
                  rowHeight={isMobile ? 350 : 580}
                >
                  <input
                    hidden
                    name="colorTypes"
                    value={JSON.stringify(selectedColorTypes)}
                  />
                  {colorTypes.map((item) => (
                    <ImageListItem
                      sx={{
                        border: 4,
                        borderColor: isColorSelected(item)
                          ? "#9f2e0e"
                          : "transparent",
                      }}
                      key={item.img}
                      onClick={() => handleSelectColor(item)}
                    >
                      <img
                        src={`./img/personalPieceForm/${item.src}`}
                        alt={item.id}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Couleur - Précise au besoin"
                  name="colorTypes.description"
                  type="text"
                />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{ paddingTop: 14 }}
            >
              <Grid item xs="12">
                <h3>Quelles formes de macramé préfères-tu ?</h3>

                <ImageList
                  cols={isMobile ? 1 : 3}
                  rowHeight={isMobile ? 350 : 580}
                >
                  <input
                    hidden
                    name="formatTypes"
                    value={JSON.stringify(selectedFormatTypes)}
                  />
                  {formatTypes.map((item) => (
                    <ImageListItem
                      sx={{
                        border: 4,
                        borderColor: isFormatSelected(item)
                          ? "#9f2e0e"
                          : "transparent",
                      }}
                      key={item.img}
                      onClick={() => handleSelectFormat(item)}
                    >
                      <img
                        src={`./img/personalPieceForm/${item.src}`}
                        alt={item.id}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Formats - Précise au besoin"
                  name="formatTypes.description"
                  type="text"
                />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{ paddingTop: 10 }}
            >
              <Grid item xs="12">
                <h3>Préfères-tu un look:</h3>

                <ImageList
                  cols={isMobile ? 1 : 3}
                  rowHeight={isMobile ? 350 : 580}
                >
                  <input
                    hidden
                    name="lookTypes"
                    value={JSON.stringify(selectedLookTypes)}
                  />
                  {lookTypes.map((item) => (
                    <ImageListItem
                      sx={{
                        border: 4,
                        borderColor: isLookSelected(item)
                          ? "#9f2e0e"
                          : "transparent",
                      }}
                      key={item.img}
                      onClick={() => handleSelectLook(item)}
                    >
                      <img
                        src={`./img/personalPieceForm/${item.src}`}
                        alt={item.id}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              alignItems="center"
              sx={{ paddingTop: 10 }}
            >
              <Grid item xs="12">
                <h3>Quels motifs et effets te plaisent le plus:</h3>
                <ImageList
                  cols={isMobile ? 1 : 3}
                  rowHeight={isMobile ? 350 : 580}
                >
                  <input
                    hidden
                    name="motifTypes"
                    value={JSON.stringify(selectedMotifTypes)}
                  />
                  {motifTypes.map((item) => (
                    <ImageListItem
                      sx={{
                        border: 4,
                        borderColor: isMotifSelected(item)
                          ? "#9f2e0e"
                          : "transparent",
                      }}
                      key={item.img}
                      onClick={() => handleSelectMotif(item)}
                    >
                      <img
                        src={`./img/personalPieceForm/${item.src}`}
                        alt={item.id}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="raised-button-file"
                  type="file"
                  name="image"
                />
                <label htmlFor="raised-button-file">
                  <Button variant="raised" component="span">
                    Téléverser
                  </Button>
                </label>
              </Grid>
            </Grid>
          </Grid>

          {/* <Dropzone onDrop={(acceptedFiles) => handleDrop(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone> */}

          <Grid
            container
            justifyContent="flex-end"
            sx={{ paddingTop: 2 }}
            xs={12}
          >
            <Grid item>
              <Button size="large" type="submit" variant="contained">
                Envoyer
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default PersonalPieceForm;
