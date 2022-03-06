import { Box, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import { formatVariantOptions } from "../helpers/productHelpers";
import Select from "../../components/common/Select";
import { useState } from "react";

const Product = (props) => {
  const [variantOption, setVariantOption] = useState(
    props.product.variant_groups[0]?.options[0].id
  );

  const onAddProduct = () => {
    let variant = {};
    if (props.product.variant_groups.length > 0)
      variant[props.product.variant_groups[0].id] = variantOption;
    props.onAddToCart(props.product.id, 1, variant);
  };

  return (
    <>
      <Box py={2}>
        <Grid container alignItems="center">
          <Grid item>
            <img
              src={props.product.image.url}
              alt="yop"
              height="auto"
              width="100%"
            />
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Grid item xs={12}>
          {props.product.variant_groups.map((variant) => (
            <Select
              onChange={(event) => setVariantOption(event.target.value)}
              value={variantOption}
              options={formatVariantOptions(variant.options)}
            />
          ))}
        </Grid>
      </Grid>

      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={9}>
          <Box pl={1.5}>
            <p>{props.product.name}</p>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <p>{props.product.price.raw}</p>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={onAddProduct}>
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
