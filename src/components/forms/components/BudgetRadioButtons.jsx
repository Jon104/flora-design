import Box from "@mui/material/Box";
import RadioButtons from "./common/RadioButtons";

const BudgetRadioButtons = () => {
  const options = [
    {
      label: "300$-500$",
      value: "300$-500$",
    },
    {
      label: "500$-700$",
      value: "500$-700$",
    },
    {
      label: "700$-900$",
      value: "700$-900$",
    },
    {
      label: "900$ et plus",
      value: "900$ et plus",
    },
    {
      label:
        "Je préfère ne pas établir de budget. Ce faisant, je souhaite que mon projet réponde complètement à mes critères et ne soit pas déterminé par une limite de budget.",
      value: "sky is the limit",
    },
  ];

  return (
    <>
      <Box py={6}>
        <RadioButtons
          inputName="budget"
          options={options}
          title="Quel est ton budget?"
        />
      </Box>
    </>
  );
};

export default BudgetRadioButtons;
