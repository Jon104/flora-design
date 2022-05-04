import Box from "@mui/material/Box";
import RadioButtons from "./common/RadioButtons";
import TellMeMore from "./TellMeMore";

const StyleRadioButton = (props) => {
  const options = [
    {
      label: "Un look plus bohème",
      value: "bohème",
    },
    {
      label: "Un style plus moderne",
      value: "moderne",
    },
  ];

  return (
    <>
      <Box py={6}>
        <RadioButtons
          title="Quel style général souhaites-tu retrouver dans ton projet"
          inputName="style"
          options={options}
          value={props.value}
          setValue={props.setValue}
        />
        <TellMeMore
          label="Styles - Précise au besoin"
          name="style.description"
          value={props.styleDescription}
          setValue={props.setStyleDescription}
        />
      </Box>
    </>
  );
};

export default StyleRadioButton;
