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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CloseIcon from "@mui/icons-material/Close";
import { isMobile } from "react-device-detect";
import BudgetRadioButtons from "./components/BudgetRadioButtons";
import StyleRadioButton from "./components/StyleFormQuestions";
// import { useDropzone } from "react-dropzone";
import { sendForm } from "./FormsService";

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

const panachesInStock = [
  {
    id: 35,
    description: "J'aimerais une pièce sur un petit panache entier",
    src: "35.jpg",
  },
  {
    id: 36,
    description: "J'aimerais une pièce sur un seul gros bois",
    src: "36.jpg",
  },
  {
    id: 37,
    description:
      "J'aimerais intégrer un panache de chevreuil à une pièce sur bâton",
    src: "37.jpg",
  },
];

const PanacheForm = ({ onClose }) => {
  const [selectedPanache, setSelectedPanache] = useState([]);
  const [width, setWidth] = useState([23, 40]);
  const [height, setHeight] = useState([17, 24]);
  const [selectedColorTypes, setSelectedColorTypes] = useState([]);
  const [selectedFormatTypes, setSelectedFormatTypes] = useState([]);
  const [selectedLookTypes, setSelectedLookTypes] = useState([]);
  const [selectedMotifTypes, setSelectedMotifTypes] = useState([]);
  //   const [file, setFile] = useState({});

  //   const onDrop = useCallback(
  //     (acceptedFiles) => {
  //       console.log(file);
  //       setFile(acceptedFiles[0]);
  //     },
  //     [file]
  //   );
  //   const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //     onDrop,
  //   });

  const isPanacheSelected = (image) =>
    selectedPanache.find((element) => element.id === image.id);

  const handleSelectPanache = (image) => {
    const alreadySelected = isPanacheSelected(image);
    if (alreadySelected) {
      const index = selectedPanache.findIndex(
        (element) => element.id === image.id
      );
      setSelectedPanache(selectedPanache.splice(index, 0));
      return;
    }
    const result = [...selectedPanache, image];
    setSelectedPanache(result);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      "form-name": "personal-piece",
      selectedPanache,
      width,
      height,
      selectedColorTypes,
      selectedFormatTypes,
      selectedLookTypes,
      selectedMotifTypes,
    };
    sendForm(data);
  };

  // const colorsPicker = [
  //   {
  //     id: 3,
  //     src: "https://dsm01pap001files.storage.live.com/y4mImZ-GmJcyhxD1PZzfyDlBWCC_UCA-D3mhBKfWnbGuCXPBlVlMu3pEH8Hb50XWtUuX9N1Is7ruk_jqfgGF3Wtgzia17swnpu0PxFdqYSGCySduoSxOIZDgRZ6Y-4OLH-_5tzn5rEt3TvlAaGc6fAUP37DEly9PK1SWD9NmtI_c1JO0LEMYs7FK5DobDPVHxCo?width=660&height=613&cropmode=none",
  //   },
  //   {
  //     id: 4,
  //     src: "https://dsm01pap001files.storage.live.com/y4m09KCuE5Onsb_LAo1zr7AW_XWASrta745Mje980jZWGibUSn1csVGKJY0bUh5lPE269Da1XorgCqruFzMLStKyxpPU40Ei2NXvwWAKmfu_XeBUi1McBRvcfjBcrtilN8uaUl2oGW8t2Tz6fNo6iAAsFpDYLZXUmsGu5SgRt1K4PVLdwmJdYTNE_8I5t_S7ZlR?width=660&height=660&cropmode=none",
  //   },
  //   {
  //     id: 5,
  //     src: "https://dsm01pap001files.storage.live.com/y4mtPzK0xR_7G-MQV2_LU4-WdEnr2xYu0dAz_F-hu89N0cG4qxmVDZRIQeMwbMUV02dqGLSOsQe49o9sIvV9312f0CWdSiUJ3FQgIXibW0IsI4sBizGEPT7_FOAP2oFLhW7ZAQpgvbssKVDSvrLXCyRpmhehf_Qieiq-0iF4_KPRYg2zSI64uzlJaClWUBx0IE1?width=660&height=660&cropmode=none",
  //   },
  //   {
  //     id: 6,
  //     src: "https://dsm01pap001files.storage.live.com/y4mMt8KT8I5Wn-UVp0LXwgs1ugHFT7wWRC6VHOJL2c87HUbU2-ZyfgIgBpS2j0HhYaQDiLWZ6E1zPSiYFK0sUCPgXqGC3BBzq-rIJYKRBT48zCnMo7IEMusvmdS3X-MGug9SD1JRaoVYE0w0apTvApfHRKD3rlSXXrEwhyTTBfhPoRzO5ZeDZ7HWm7L4wz62rYg?width=660&height=660&cropmode=none",
  //   },
  //   {
  //     id: 7,
  //     src: "https://dsm01pap001files.storage.live.com/y4mA4l0Ef2YAbp_kPOLPMqvoAuTYT__CxST4RKUPerI6KJkuBcUdTo8m_06GoyWnYeaVBnn9Di9PL6mfmK9UTvJDr6Xay6eKIHBu34J5XXGs3v0kh8UVLeavxKwhOcaye9e3xTcymLGN64YDgQ-7LsjNXTh3gEFN81jgRKK_8SAmzC3OnK2_Eos-Fw7rU1vlhU-?width=660&height=660&cropmode=none",
  //   },
  //   {
  //     id: 8,
  //     src: "https://dsm01pap001files.storage.live.com/y4m5wIUnEarEoMmzyg4-d85dv5h9-__NiAysqcHhrAFp2CKNNQ44HHistCvvMgd8Gmpu6UsTNmluAQzOZXECWoU2vJ4K_GUUoQ4QaMkh-mr7UOOp8zqeFtJbjVKayuV1ivgczKHBsooSElliTfr2p1B1fqC4Fh4IrX8-d37AqevI-N_BB19pIRtPMj3QD4RQNZd?width=495&height=660&cropmode=none",
  //   },
  //   {
  //     id: 9,
  //     src: "https://dsm01pap001files.storage.live.com/y4mYmx-SO536Mt6FgQnVli-jrN7R6a1u588jeFRHke8nrWrMfiyyVwBOi0C9sDYqZDuEm57yrgcJzYfJo0oEZYaAI-JPtj9KkH6O4YuMpvc_COqVkAgCZzB89GhJKBlVqLiEuz5eZVBFkNL50VC5bjizv8Lr8SNBD2opTY7Xmk8ULpaQrUPvLKjJ8RyzFKKEqyr?width=660&height=660&cropmode=none",
  //   },
  //   {
  //     id: 10,
  //     src: "https://dsm01pap001files.storage.live.com/y4m9xQkVf0X23tY8LF-eajizdAsuG3zOnJU0JFpy5ObW3PoixyteqZxYT5gEacTU-D9zKLReMHMb5aGrPt3dKZaBW6XAEUKHlk7PtX4Fg4kqQ2eNxwG9i_cUnnnNx_kk8MClUAHE9f9j3rZaY4NNzdcTu56GI5wSyTFPZLX2PZq3fD2OEf81O9ud_u2MFSrB-dY?width=660&height=660&cropmode=none",
  //   },
  //   {
  //     id: 11,
  //     src: "https://dsm01pap001files.storage.live.com/y4m50Pe5TR9q_aj9yi-JOFlQBFHjp225wssTrNavUU_m7xkOuPyVK7Jf_PUX5IC5Wi9ZzpAhU_82hGMpQQfJ_2HyPitLo-6mu4BwV3KkKtAkGc6kji4bm69jDvweaV9iE6M_ebjlPh1xYFoqIEzoV1B3CGG3HkXUXlRCTo28gN4jw0XbQcGHjp0GmeUH_EjGbYI?width=660&height=660&cropmode=none",
  //   },
  // ];

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
        <form method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="panache" />
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
              <Grid item xs="12" sm="6" sx={{ paddingBottom: 4 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Adresse"
                  name="adresse"
                  type="text"
                />
              </Grid>

              <Grid item xs="12" sx={{ marginTop: 6, paddingBottom: 8 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <h3>Montre-moi une photo de ton panache</h3>
                    <input hidden name="file" type="file" />
                  </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <h3>Quelles sont ses dimensions</h3>
                    <input hidden name="size" type="text" />
                    <TextField
                      fullWidth
                      variant="filled"
                      label="Dimensions"
                      name="size"
                      type="text"
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <h3>Livraison</h3>
                    <input hidden name="size" type="text" />
                    <RadioGroup
                      aria-label="livraison"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="stoneham"
                        control={<Radio />}
                        label="Je préfère l'apporter en personne à Stoneham"
                      />
                      <FormControlLabel
                        value="livraison"
                        control={<Radio />}
                        label="Je préfère le faire livrer? (Prévoir entre 30 et 80$ pour la livraison, dépendamment de la taille)"
                      />
                    </RadioGroup>
                  </Grid>
                </Grid>

                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="12">
                    <h3>J'aimerais réserver un des panaches en stock </h3>
                    <ImageList
                      cols={isMobile ? 1 : 3}
                      rowHeight={isMobile ? 350 : 580}
                    >
                      <input hidden name="panachesInstock" type="text" />
                      {panachesInStock.map((item) => (
                        <ImageListItem
                          sx={{
                            border: 4,
                            borderColor: isPanacheSelected(item)
                              ? "#9f2e0e"
                              : "transparent",
                          }}
                          key={item.img}
                          onClick={() => handleSelectPanache(item)}
                        >
                          <img
                            src={`./img/forms/${item.src}`}
                            alt={item.id}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
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

          <Grid item xs="12" sx={{ paddingTop: 4 }}>
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

            <StyleRadioButton />

            <Grid container spacing={2} alignItems="center">
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
              sx={{ paddingTop: 4 }}
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
                <TextField
                  fullWidth
                  variant="filled"
                  label="Motifs - Précise au besoin"
                  name="motifTypes.description"
                  type="text"
                />
              </Grid>
            </Grid>

            <BudgetRadioButtons />

            {/* <Grid container spacing={2} alignItems="center">
              <Grid item>
                <div {...getRootProps()}>
                  <input name="file" {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  )}
                </div>
              </Grid>
            </Grid> */}
          </Grid>

          <Grid
            container
            sx={{ paddingTop: 2 }}
            xs={12}
            justifyContent="flex-end"
          >
            <Button size="large" type="submit" variant="contained">
              Envoyer
            </Button>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default PanacheForm;
