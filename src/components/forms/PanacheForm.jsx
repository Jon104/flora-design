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
import BudgetRadioButtons from "./components/BudgetRadioButtons";
import StyleRadioButton from "./components/StyleFormQuestions";
import UploadFileButton from "./components/UploadFileButton";
import TellMeMore from "./components/TellMeMore";
import { sendForm } from "./FormsService";
import {
  colorTypes,
  formatTypes,
  lookTypes,
  motifTypes,
} from "./PersonalPieceForm";
import { isMobile } from "react-device-detect";
import FormSalutation from "./components/FormSalutation";
import RadioButtons from "./components/common/RadioButtons";
import { yesNoOptions } from "./components/common/RadioButtons/options";

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
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

  const [budget, setBudget] = useState();
  const [doYouHaveAPanache, setDoYouHaveAPanache] = useState();
  const [imagePanache, setImagePanache] = useState();
  const [panacheSize, setPanacheSize] = useState();

  const [selectedPanache, setSelectedPanache] = useState([]);
  const [width, setWidth] = useState([23, 40]);
  const [height, setHeight] = useState([17, 24]);

  const [selectedColorTypes, setSelectedColorTypes] = useState([]);
  const [colorTypeDescription, setColorTypeDescription] = useState();

  const [selectedFormatTypes, setSelectedFormatTypes] = useState([]);
  const [formatTypeDescription, setFormatTypeDescription] = useState();

  const [selectedLookTypes, setSelectedLookTypes] = useState([]);

  const [selectedMotifTypes, setSelectedMotifTypes] = useState([]);
  const [motifTypeDescription, setMotifTypeDescription] = useState();

  const [style, setStyle] = useState();
  const [styleDescription, setStyleDescription] = useState();

  const [imagesInspiration, setImagesInspiration] = useState();
  const [imagesInspirationDescription, setImagesInspirationDescription] =
    useState();
  const [imagesRoom, setImagesRoom] = useState();
  const [imagesRoomDescription, setImagesRoomDescription] = useState();

  const isPanacheSelected = (image) =>
    selectedPanache.find((element) => element.id === image.id);

  const handleSelectPanache = (image) => {
    const alreadySelected = isPanacheSelected(image);
    if (alreadySelected) {
      const index = selectedPanache.findIndex(
        (element) => element.id === image.id
      );
      selectedPanache.splice(index, 1);
      const result = [...selectedPanache];
      setSelectedPanache(result);
    } else {
      const result = [...selectedPanache, image];
      setSelectedPanache(result);
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

  const isMotifSelected = (image) => {
    return selectedMotifTypes.find((element) => element.id === image.id);
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      "form-name": "panache",
      budget,
      name,
      email,
      address,
      doYouHaveAPanache,
      imagePanache,
      panacheSize,
      panachesInStock: selectedPanache,
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
    sendForm(data);
  };

  console.log("Selection");
  console.log(selectedMotifTypes);
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
              <Grid item xs="12" sm="6" sx={{ paddingBottom: 4 }}>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Adresse"
                  name="adresse"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>

              <Grid item xs="12" sx={{ marginTop: 6, paddingBottom: 8 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <RadioButtons
                      inputName="doYouHaveAPanache"
                      options={yesNoOptions}
                      title="As-tu un panache ?"
                      value={doYouHaveAPanache}
                      setValue={setDoYouHaveAPanache}
                    />
                    <input hidden name="file" type="file" />
                  </Grid>
                </Grid>

                {doYouHaveAPanache && (
                  <>
                    <Box py={4}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <UploadFileButton
                            title="Envoie moi une photo de ton panache !"
                            name="imagePanache"
                            handleFileInputChange={setImagePanache}
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    <Box py={4}>
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
                            value={panacheSize}
                            onChange={(e) => setPanacheSize(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </Box>

                    <Box py={4}>
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
                    </Box>
                  </>
                )}

                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="12">
                    <h3>J'aimerais réserver un des panaches en stock </h3>
                    <ImageList
                      cols={isMobile ? 1 : 3}
                      rowHeight={isMobile ? 350 : 580}
                    >
                      <input hidden name="panachesInstock" type="text" />
                      {panachesInStock.map((item) => (
                        <div>
                          <ImageListItem
                            sx={{
                              border: 4,
                              borderColor: isPanacheSelected(item)
                                ? "#9f2e0e"
                                : "transparent",
                              overflow: "hidden",
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
                          <p>{item.description}</p>
                        </div>
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

            <BudgetRadioButtons value={budget} setValue={setBudget} />

            <Box py={4}>
              <h3>Pour m'inspirer</h3>
              <body>
                C'est le moment de me partager ta vibe, ta couleur. Parce que ce
                qu'on veut, c'est que ta pièce soit unique! Et parfaite pour
                toi!
              </body>
              <br />
              <body>
                Montre-moi si tu le désires la pièce de ta maison dans laquelle
                ma création ira. Tu peux aussi me montrer un élément déco avec
                lesquels tu aimerais agencer, Cela me permet de m'inspirer :)
              </body>
            </Box>
            <UploadFileButton
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
          </Grid>

          <FormSalutation />

          <Box p={4}>
            <Grid container xs={12} justifyContent="flex-end">
              <Button size="large" type="submit" variant="contained">
                Envoyer
              </Button>
            </Grid>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default PanacheForm;
