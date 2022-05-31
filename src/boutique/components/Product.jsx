import { Box, Grid, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import { formatVariantOptions } from "../helpers/productHelpers";
import Select from "../../components/common/Select";
import { useState } from "react";
import Slider from "infinite-react-carousel";
import styled from "styled-components";

const ProductDescription = styled.div`
  font-size: 16px;
  padding: 15%;
  color: white;
`;

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

  const settings = {
    // adaptiveHeight: true,
    // autoplay: true,
    // centerMode: true,
    duration: 300,
    shift: 100,
    autoplaySpeed: 7000,
  };

  const VariantOption = () => {
    if (props.product.variant_groups.length > 0) {
      return props.product.variant_groups.map((variant, i) => (
        <Select
          key={i}
          onChange={(event) => setVariantOption(event.target.value)}
          value={variantOption}
          options={formatVariantOptions(variant.options)}
        />
      ));
    } else {
      return (
        <>
          <Box my={5} />
        </>
      );
    }
  };

  return (
    <>
      <Box pb={1.5}>
        <Slider {...settings}>
          {props.product.assets.map((image, i) => (
            <div key={i} className="container">
              <img
                key={i}
                src={image.url}
                alt="Product Assets"
                height="auto"
                width="100%"
              />
              <div className="overlay">
                <ProductDescription
                  dangerouslySetInnerHTML={{
                    __html: props.product.description,
                  }}
                />
              </div>
            </div>
          ))}
        </Slider>
      </Box>
      <Grid container>
        <Grid item xs={12}>
          {VariantOption()}
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={9}>
          <Box pl={1.5}>
            <p>{props.product.name}</p>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Grid container alignItems="center" justifyContent="end">
            <Grid item>
              <p>{props.product.price.raw}</p>
            </Grid>
            <Grid item>
              <IconButton onClick={onAddProduct}>
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
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
