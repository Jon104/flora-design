import { Box, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import { formatVariantOptions } from "../helpers/productHelpers";
import Select from "../../components/common/Select";
import { useState } from "react";

const Product = (props) => {
  const [variantOption] = useState(
    props.product.variant_groups[0]?.options[0].id
  );

  return (
    <>
      <Box py={2}>
        <img
          src={props.product.image.url}
          alt="yop"
          height="auto"
          width="100%"
        />
      </Box>

      <Grid container>
        {props.product.variant_groups.map((variant) => (
          <Grid item xs={12}>
            <Select
              value={variantOption}
              options={formatVariantOptions(variant.options)}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container alignItems="center" justifyContent="flex-end">
        <Grid item xs={10}>
          <p>{props.product.name}</p>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={() => props.onAddToCart(props.product.id, 1)}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

Select.propTypes = {
  onAddToCart: PropTypes.func,
  product: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    name: PropTypes.string,
  }),
};

export default Product;
