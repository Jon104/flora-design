import * as React from "react";
import TextField from "@mui/material/TextField";
import { Box, Grid, ImageList, ImageListItem } from "@mui/material";

const projectTypes = [
  {
    id: 1,
    src: "https://dsm01pap001files.storage.live.com/y4mOX_4Z3QqaFhrtOxAOa7A_iB6LPdtWD4MRZdvuZ2GW_UoJWlAt2CzQU3aRSE2bxumCjkW1HZni23-doNkc8pGuyiIHLQKfiFbiqHXyuPIRg4qLua6OUCQIcn2pSLyKsq_nHH1QFsDKpwPkWT3x1CKkJgeA9VepgD1b8JZRr1fuSwpmv49UGsSQEqWQ3FPODRI?width=637&height=660&cropmode=none",
  },
  {
    id: 2,
    src: "https://dsm01pap001files.storage.live.com/y4mdnV4meZLqVt25nswUU_wW_7CTQfNUJbxGl3mbwAWBwiBOrBQj_y9L1X4YsYjA49DJ3_GPsbtkOzDWMLFuNpKlz1qrTtZdc0EkRgEMRREPiT8ARhGChFKbCB95jefKzhT3vEjNm5_hI2LPs-judBlrlEK7cskxGKxFtv2FGxL8aROtdV79bC_F4IzeHRf7l1o?width=660&height=393&cropmode=none",
  },
];

const PersonalPieceForm = () => {
  const [selectedProjectTypes, setSelectedProjectTypes] = React.useState([]);

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

  // const widthMarks = [
  //   {
  //     value: 45,
  //     label: "Tête de lit moyen",
  //   },
  // ];

  // const valuetext = (value) => `${value} po`;

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
        <form method="post">
          <input type="hidden" name="form-name" value="personal-piece" />
          <Box paddingBottom={4}>
            <Grid container spacing={2}>
              <Grid item xs="5">
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
              <Grid item xs="5">
                <TextField
                  fullWidth
                  id="outlined-disabled"
                  variant="filled"
                  label="Courriel"
                  name="email"
                  type="email"
                />
              </Grid>
              <Grid item xs="12">
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="start"
                >
                  <Grid sx={{ paddingBottom: 2 }} item xs="12">
                    <label>Quel type de projet t'intéresse: </label>
                  </Grid>
                  <ImageList sx={{ width: 600 }} cols={3} rowHeight={200}>
                    <input
                      hidden
                      name="projectType"
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
                          src={`${item.src}`}
                          srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          alt={item.id}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Box>
    </>
  );
};

export default PersonalPieceForm;
