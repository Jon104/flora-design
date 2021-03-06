import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Box,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Slider,
} from "@mui/material";
import Button from "components/buttons/Button";
import { isMobile } from "react-device-detect";
import CloseIcon from "@mui/icons-material/Close";
import BudgetRadioButtons from "./components/BudgetRadioButtons";
import StyleRadioButton from "./components/StyleFormQuestions";
import UploadFileButton from "./components/UploadFileButton";
import TellMeMore from "./components/TellMeMore";
import FormSalutations from "./components/FormSalutations";

import { sendForm } from "./FormsService";

const projectTypes = [
  {
    id: 1,
    src: "1.png",
    description:
      "Une grande pièce murale (par exemple pour suspendre au-dessus d'un lit)",
  },
  {
    id: 2,
    src: "2.png",
    description:
      "Un luminaire / une étagère / une arche de mariage ou autre projet unique!",
  },
];

export const colorTypes = [
  {
    id: 3,
    src: "3.png",
    description: "Blanc naturel",
  },
  {
    id: 4,
    src: "4.png",
    description: "Blanc pur",
  },
  {
    id: 5,
    src: "5.png",
    description: "Teintes de gris",
  },
  {
    id: 6,
    src: "6.png",
    description: "Teintes de vert / forêt / sauge",
  },
  {
    id: 7,
    src: "7.png",
    description: "Noir",
  },
  {
    id: 8,
    src: "8.png",
    description: "Teintes de jaune / moutarde / ocre",
  },
  {
    id: 9,
    src: "9.png",
    description: "Teintes de brun",
  },
  {
    id: 10,
    src: "10.png",
    description: "Teintes de rose",
  },
  {
    id: 11,
    src: "11.png",
    description: "Teintes de bleu / turquoise",
  },
  {
    id: 12,
    src: "12.png",
    description: "Teintes de taupe",
  },
];

export const formatTypes = [
  {
    id: 13,
    src: "13.png",
    description: "Les coupes pointues",
  },
  {
    id: 14,
    src: "14.png",
    description: "Les coupes plus arrondies",
  },
  {
    id: 15,
    src: "15.png",
    description: "Les coupes boho",
  },
  {
    id: 16,
    src: "16.png",
    description: "Les macramés en 3 sections",
  },
];

export const lookTypes = [
  {
    id: 17,
    src: "17.png",
    description: "Plus dense. Où il n'y a pas ou peu d'espaces libres",
  },
  {
    id: 18,
    src: "18.png",
    description: "Plus épuré et fluide. Où il y a des ouvertures",
  },
];

export const motifTypes = [
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
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [projectTypeDescription, setProjectTypeDescription] = useState();

  const [width, setWidth] = useState([23, 40]);
  const [height, setHeight] = useState([17, 24]);

  const [selectedColorTypes, setSelectedColorTypes] = useState([]);
  const [colorTypeDescription, setColorTypeDescription] = useState();

  const [selectedFormatTypes, setSelectedFormatTypes] = useState([]);
  const [formatTypeDescription, setFormatTypeDescription] = useState();

  const [selectedLookTypes, setSelectedLookTypes] = useState([]);

  const [selectedMotifTypes, setSelectedMotifTypes] = useState([]);
  const [motifTypeDescription, setMotifTypeDescription] = useState();

  const [budget, setBudget] = useState();

  const [style, setStyle] = useState();
  const [styleDescription, setStyleDescription] = useState();

  const [imagesInspiration, setImagesInspiration] = useState();
  const [imagesInspirationDescription, setImagesInspirationDescription] =
    useState();
  const [imagesRoom, setImagesRoom] = useState();
  const [imagesRoomDescription, setImagesRoomDescription] = useState();

  const isProjectSelected = (image) =>
    selectedProjectTypes.find((element) => element.id === image.id);

  const handleSelectProject = (image) => {
    const alreadySelected = isProjectSelected(image);
    if (alreadySelected) {
      const index = selectedProjectTypes.findIndex(
        (element) => element.id === image.id
      );
      selectedProjectTypes.splice(index, 1);
      const result = [...selectedProjectTypes];
      setSelectedProjectTypes(result);
    } else {
      const result = [...selectedProjectTypes, image];
      setSelectedProjectTypes(result);
    }
  };

  const isColorSelected = (image) =>
    selectedColorTypes.find((element) => element.id === image.id);

  const handleSelectColor = (image) => {
    const alreadySelected = isColorSelected(image);
    if (alreadySelected) {
      const index = selectedColorTypes.findIndex(
        (element) => element.id === image.id
      );
      selectedColorTypes.splice(index, 1);
      const result = [...selectedColorTypes];
      setSelectedColorTypes(result);
    } else {
      const result = [...selectedColorTypes, image];
      setSelectedColorTypes(result);
    }
  };

  const isFormatSelected = (image) =>
    selectedFormatTypes.find((element) => element.id === image.id);

  const handleSelectFormat = (image) => {
    const alreadySelected = isFormatSelected(image);
    if (alreadySelected) {
      const index = selectedFormatTypes.findIndex(
        (element) => element.id === image.id
      );
      selectedFormatTypes.splice(index, 1);
      const result = [...selectedFormatTypes];
      setSelectedFormatTypes(result);
    } else {
      const result = [...selectedFormatTypes, image];
      setSelectedFormatTypes(result);
    }
  };

  const isLookSelected = (image) =>
    selectedLookTypes.find((element) => element.id === image.id);

  const handleSelectLook = (image) => {
    const alreadySelected = isLookSelected(image);
    if (alreadySelected) {
      const index = selectedLookTypes.findIndex(
        (element) => element.id === image.id
      );
      selectedLookTypes.splice(index, 1);
      const result = [...selectedLookTypes];
      setSelectedLookTypes(result);
    } else {
      const result = [...selectedLookTypes, image];
      setSelectedLookTypes(result);
    }
  };

  const isMotifSelected = (image) =>
    selectedMotifTypes.find((element) => element.id === image.id);

  const handleSelectMotif = (image) => {
    const alreadySelected = isMotifSelected(image);
    if (alreadySelected) {
      const index = selectedMotifTypes.findIndex(
        (element) => element.id === image.id
      );
      selectedMotifTypes.splice(index, 1);
      const result = [...selectedMotifTypes];
      setSelectedMotifTypes(result);
    } else {
      const result = [...selectedMotifTypes, image];
      setSelectedMotifTypes(result);
    }
  };

  const widthMarks = [
    {
      value: 45,
      label: "Tête de lit moyen",
    },
  ];

  const valuetext = (value) => `${value} po`;

  //TODO reusable form component
  const [isSendingForm, setIsSendingForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      "form-name": "personal-piece",
      budget,
      name,
      email,
      projectTypes: selectedProjectTypes.map((element) =>
        JSON.stringify(element.description)
      ),
      "projectTypes.description": projectTypeDescription,
      width,
      height,
      colorTypes: selectedColorTypes.map((element) =>
        JSON.stringify(element.description)
      ),
      "colorTypes.description": colorTypeDescription,
      formatTypes: selectedFormatTypes.map((element) =>
        JSON.stringify(element.description)
      ),
      "formatTypes.description": formatTypeDescription,
      lookTypes: selectedLookTypes.map((element) =>
        JSON.stringify(element.description)
      ),
      motifTypes: selectedMotifTypes.map((element) =>
        JSON.stringify(element.description)
      ),
      "motifTypes.description": motifTypeDescription,
      style: style,
      "style.description": styleDescription,
      "images.inspiration": imagesInspiration,
      "images.inspiration.description": imagesInspirationDescription,
      "images.pièceDeLaMaison": imagesRoom,
      "images.pièceDeLaMaison.description": imagesRoomDescription,
    };

    setIsSendingForm(true);
    await sendForm(data, onClose(true));
    setIsSendingForm(false);
  };

  return (
    <>
      <Box px={{ xs: 2, sm: 6 }} py={2}>
        <Grid container justifyContent="flex-end">
          <IconButton
            aria-label="close-form"
            onClick={() => onClose(false)}
            size="large"
            right
          >
            <CloseIcon color="primary" fontSize="inherit" />
          </IconButton>
        </Grid>
        <form method="post" onSubmit={handleSubmit}>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                        <div>
                          <ImageListItem
                            sx={{
                              border: 4,
                              borderColor: isProjectSelected(item)
                                ? "#9f2e0e"
                                : "transparent",
                              overflow: "hidden",
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
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </ImageList>
                    <TellMeMore
                      label="Précise au besoin"
                      name="projectTypes.description"
                      value={projectTypeDescription}
                      setValue={setProjectTypeDescription}
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
                valueLabelDisplay="auto"
                aria-label="width"
                marks={widthMarks}
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
                    <div>
                      <ImageListItem
                        sx={{
                          border: 4,
                          borderColor: isColorSelected(item)
                            ? "#9f2e0e"
                            : "transparent",
                          overflow: "hidden",
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
                      <p>{item.description}</p>
                    </div>
                  ))}
                </ImageList>
                <TellMeMore
                  label="Couleur - Précise au besoin"
                  name="colorTypes.description"
                  value={colorTypeDescription}
                  setValue={setColorTypeDescription}
                />
              </Grid>
            </Grid>

            <StyleRadioButton
              styleDescription={styleDescription}
              setStyleDescription={setStyleDescription}
              value={style}
              setValue={setStyle}
            />

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
                    <div>
                      <ImageListItem
                        sx={{
                          border: 4,
                          borderColor: isFormatSelected(item)
                            ? "#9f2e0e"
                            : "transparent",
                          overflow: "hidden",
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
                      <p>{item.description}</p>
                    </div>
                  ))}
                </ImageList>
                <TellMeMore
                  label="Formats - Précise au besoin"
                  name="formatTypes.description"
                  value={formatTypeDescription}
                  setValue={setFormatTypeDescription}
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
                    <div>
                      <ImageListItem
                        sx={{
                          border: 4,
                          borderColor: isLookSelected(item)
                            ? "#9f2e0e"
                            : "transparent",
                          overflow: "hidden",
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
                      <p>{item.description}</p>
                    </div>
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
                    <div>
                      <ImageListItem
                        sx={{
                          border: 4,
                          borderColor: isMotifSelected(item)
                            ? "#9f2e0e"
                            : "transparent",
                          overflow: "hidden",
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
                      <p>{item.description}</p>
                    </div>
                  ))}
                </ImageList>
                <TellMeMore
                  label="Motifs - Précise au besoin"
                  name="motifTypes.description"
                  value={motifTypeDescription}
                  setValue={setMotifTypeDescription}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <UploadFileButton
                  title="Montre-moi tes photos inspiration si tu le désires. S'il s'agit de ma photo, je peux m'en inspirer fortement, bien que chaque création soit unique. S'il s'agit du travail de quelqu'un d'autre, je peux m'inspirer du style ou de certains éléments, mais je ne fais bien sûr pas de reproduction. Ceci par respect pour la propriété artistique, et pour m'assurer de mettre ma couleur dans chacune de mes créations!"
                  name="images.inspiration"
                  handleFileInputChange={setImagesInspiration}
                />
                <TellMeMore
                  label="Ta réponse"
                  name="images.inspiration.précision"
                  title="Dis-moi ce qui te plait le plus de cette / ces photo(s)."
                  value={imagesInspirationDescription}
                  setValue={setImagesInspirationDescription}
                />
              </Grid>
            </Grid>
          </Grid>

          <BudgetRadioButtons value={budget} setValue={setBudget} />

          <h3>Pour m'inspirer</h3>
          <h4>
            C'est le moment de me partager ta vibe, ta couleur. Parce que ce
            qu'on veut, c'est que ta pièce soit unique! Et parfaite pour toi!
          </h4>
          <UploadFileButton
            title="Montre-moi si tu le désires la pièce de ta maison dans laquelle ma création ira. Tu peux aussi me montrer un élément déco avec lesquels tu aimerais agencer, Cela me permet de m'inspirer :)"
            name="images.pièceDeLaMaison"
            handleFileInputChange={setImagesRoom}
          />
          <TellMeMore
            label="Ta réponse"
            name="images.pièceDeLaMaison.précision"
            title="Donne-moi ici toute information pertinente que tu souhaites me partager pour me guider dans ma création"
            value={imagesRoomDescription}
            setValue={setImagesRoomDescription}
          />

          <FormSalutations />

          <Grid
            container
            justifyContent="flex-end"
            sx={{ paddingTop: 2 }}
            xs={12}
          >
            <Grid item>
              <Button
                isLoading={isSendingForm}
                size="large"
                variant="contained"
              >
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
