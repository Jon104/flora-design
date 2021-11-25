import React, { useCallback, useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, Grid, ImageList, ImageListItem, Slider } from "@mui/material";
import { useDropzone } from "react-dropzone";

const projectTypes = [
  {
    id: 1,
    src: "1.jpg",
  },
  {
    id: 2,
    src: "2.jpg",
  },
];

const colorTypes = [
  {
    id: 3,
    src: "3.jpg",
  },
  {
    id: 4,
    src: "4.jpg",
  },
  {
    id: 5,
    src: "5.jpg",
  },
  {
    id: 6,
    src: "6.jpg",
  },
  {
    id: 7,
    src: "7.jpg",
  },
  {
    id: 8,
    src: "8.jpg",
  },
  {
    id: 9,
    src: "9.jpg",
  },
  {
    id: 10,
    src: "10.jpg",
  },
  {
    id: 11,
    src: "11.jpg",
  },
  {
    id: 12,
    src: "12.jpg",
  },
];

const formatTypes = [
  {
    id: 13,
    src: "13.jpg",
  },
  {
    id: 14,
    src: "14.jpg",
  },
  {
    id: 15,
    src: "15.jpg",
  },
  {
    id: 16,
    src: "16.jpg",
  },
];

const lookTypes = [
  {
    id: 17,
    src: "17.jpg",
  },
  {
    id: 18,
    src: "18.jpg",
  },
];

const motifTypes = [
  {
    id: 19,
    description: "Les feuilles",
    src: "19.jpg",
  },
  {
    id: 20,
    description: "Les fleurs de lotus et autres formes de fleurs",
    src: "20.jpg",
  },
  {
    id: 21,
    description: "Les papillons",
    src: "21.jpg",
  },
  {
    id: 22,
    description: "Les tresses / torsades enchevêtrées",
    src: "22.jpg",
  },
  {
    id: 23,
    description: "Les plumes",
    src: "23.jpg",
  },
  {
    id: 24,
    description: "Les pompons",
    src: "24.jpg",
  },
  {
    id: 25,
    description: "L'effet dentelle",
    src: "25.jpg",
  },
  {
    id: 26,
    description: "Les formes éclatées",
    src: "26.jpg",
  },
  {
    id: 27,
    description: "Les zig-zag",
    src: "27.jpg",
  },
  {
    id: 28,
    description: "Les petits boutons de rose",
    src: "28.jpg",
  },
  {
    id: 29,
    description: "Les insertions pour plantes",
    src: "29.jpg",
  },
  {
    id: 30,
    description: "Les arbres de vie / lune / étoile ou autres formes intégrées",
    src: "30.jpg",
  },
  {
    id: 31,
    description: "Les insertions de laine merino",
    src: "31.jpg",
  },
  {
    id: 32,
    description: "Les dessins abstraits",
    src: "32.jpg",
  },
  {
    id: 33,
    description: "Les diamants",
    src: "33.jpg",
  },
  {
    id: 34,
    description:
      "Surprends-moi (j'ai toujours la tête pleine d'idées à te proposer!)",
    src: "34.jpg",
  },
];

const PersonalPieceForm = () => {
  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [width] = useState([23, 40]);
  const [height] = useState([17, 24]);
  const [selectedColorTypes, setSelectedColorTypes] = useState([]);
  const [selectedFormatTypes, setSelectedFormatTypes] = useState([]);
  const [selectedLookTypes, setSelectedLookTypes] = useState([]);
  const [selectedMotifTypes, setSelectedMotifTypes] = useState([]);
  const [file, setFile] = useState({});

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  const handleSubmit = (e) => {
    const data = {
      "form-name": "contact",
      selectedProjectTypes,
      width,
      height,
      selectedColorTypes,
      selectedFormatTypes,
      selectedLookTypes,
      selectedMotifTypes,
      file,
    };

    fetch("/", {
      method: "POST",
      // headers: { "Content-Type": 'multipart/form-data; boundary=random' },
      body: encode(data),
    })
      .then(() => console.log("Form Submission Successful!!"))
      .catch((error) => console.error("Form Submission Failed!"));

    e.preventDefault();
  };

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
      <Box sx={{ padding: 10 }}>
        <form onSubmit={handleSubmit} method="post">
          <input type="hidden" name="form-name" value="personal-piece" />
          <Box sx={{ paddingBottom: 6 }}>
            <Grid container spacing={2} sx={{ paddingBottom: 6 }}>
              <Grid item xs="6">
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
              <Grid item xs="6" sx={{ paddingBottom: 4 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Courriel"
                  name="email"
                  type="email"
                />
              </Grid>
              <Grid item xs="12">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="12">
                    <label>Quel type de projet t'intéresse: </label>
                  </Grid>
                  <Grid item xs="12">
                    <ImageList cols={3} rowHeight={470}>
                      <input
                        hidden
                        name="projectTypes"
                        value={selectedProjectTypes}
                      />
                      {projectTypes.map((item) => (
                        <ImageListItem
                          sx={{
                            border: 4,
                            borderColor: isProjectSelected(item)
                              ? "green"
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

            <Grid sx={{ paddingBottom: 6 }} item xs="12">
              <label>
                Quelles dimensions approximatives souhaites-tu pour ton projet?
              </label>
            </Grid>
            <Grid item xs="12">
              Largeur
              <input name="width" hidden value={width} />
              <Slider
                marks={widthMarks}
                valueLabelDisplay="auto"
                aria-label="width"
                getAriaValueText={valuetext}
                valueLabelFormat={valuetext}
                value={width}
              />
            </Grid>
            <Grid item xs="6">
              Hauteur
              <input name="height" hidden value={height} />
              <Slider
                valueLabelDisplay="auto"
                aria-label="height"
                defaultValue={[20, 37]}
                valueLabelFormat={valuetext}
                value={height}
              />
            </Grid>
          </Box>

          <Grid item xs="12">
            <Grid container spacing={2} alignItems="center">
              <Grid item xs="12">
                <label>Parlons design!</label>
              </Grid>
              <Grid item xs="12">
                <label>Quelles couleurs souhaites-tu ?</label>
              </Grid>
              <Grid item xs="12">
                <ImageList cols={4} rowHeight={400}>
                  <input hidden name="colorTypes" value={selectedColorTypes} />
                  {colorTypes.map((item) => (
                    <ImageListItem
                      sx={{
                        border: 4,
                        borderColor: isColorSelected(item)
                          ? "green"
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

            <Grid container spacing={2} alignItems="center">
              <Grid item xs="12">
                <label>Quelles formes de macramé préfères-tu ?</label>
              </Grid>
              <Grid item xs="12">
                <ImageList cols={4} rowHeight={500}>
                  <input
                    hidden
                    name="formatTypes"
                    value={selectedFormatTypes}
                  />
                  {formatTypes.map((item) => (
                    <ImageListItem
                      sx={{
                        border: 4,
                        borderColor: isFormatSelected(item)
                          ? "green"
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

            <Grid container spacing={2} alignItems="center">
              <Grid item xs="12">
                <label>Préfères-tu un look:</label>
              </Grid>
              <Grid item xs="12">
                <ImageList cols={4} rowHeight={400}>
                  <input hidden name="lookTypes" value={selectedLookTypes} />
                  {lookTypes.map((item) => (
                    <ImageListItem
                      sx={{
                        border: 4,
                        borderColor: isLookSelected(item)
                          ? "green"
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

            <Grid container spacing={2} alignItems="center">
              <Grid item xs="12">
                <label>Quels motifs et effets te plaisent le plus:</label>
              </Grid>
              <Grid item xs="12">
                <ImageList cols={4} rowHeight={400}>
                  <input hidden name="motifTypes" value={selectedMotifTypes} />
                  {motifTypes.map((item) => (
                    <ImageListItem
                      sx={{
                        border: 4,
                        borderColor: isMotifSelected(item)
                          ? "green"
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
            </Grid>
          </Grid>

          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Box>
    </>
  );
};

export default PersonalPieceForm;
