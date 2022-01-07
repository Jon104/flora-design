import { Box, Grid, IconButton } from "@mui/material";
import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const Subtitle = styled.p`
  font-family: Barlow;
  font-size: 32px;
  font-weight: 300;
  color: #9f2e0e;

  ${(props) =>
    props.primary &&
    css`
      color: #ffffff;
    `};

  @media (max-width: 1300px) {
    font-size: 26px;
  }
  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;

const Boutique = (props) => {
  return (
    <>
      <Box padding={isMobile ? 1 : 16} paddingTop={12}>
        <Grid container xs={12}>
          {props.productsByCategory.length &&
            props.productsByCategory.map((category) => (
              <>
                <Grid item xs={12}>
                  <Box>
                    <Subtitle>{category.name}</Subtitle>
                  </Box>
                </Grid>

                {category.data.map((product) => (
                  <Grid item xs={12}>
                    <Box>
                      <img src={product.image.url} alt="yop" width="300" />
                    </Box>

                    <Grid
                      container
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Grid item xs={6}>
                        <p>{product.name}</p>
                      </Grid>
                      <Grid xs={2}>
                        <IconButton
                          onClick={() => props.onAddToCart(product.id, 1)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default Boutique;
