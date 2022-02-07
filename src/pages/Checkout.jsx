import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Subtitle } from "services/TypoService";
import { commerce } from "../lib/commerce";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputMask from "react-input-mask";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  getCountrySubdivisions,
  getShippingOptions,
  countries,
} from "../boutique/helpers/checkoutHelpers";

const Checkout = (props) => {
  const validationSchema = Yup.object()
    .shape({
      firstName: Yup.string().required("Requis"),
      lastName: Yup.string().required("Requis"),
      email: Yup.string().required("Requis"),
      shippingName: Yup.string().required("Requis"),
      shippingStreet: Yup.string().required("Requis"),
      shippingStateProvince: Yup.string().required("Requis"),
      shippingCity: Yup.string().required("Requis"),
      shippingPostalZipCode: Yup.string().required("Requis"),
      shippingCountry: Yup.string().required("Requis"),
      shippingOption: Yup.string().required("Requis"),
      cardNumber: Yup.string().required("Requis"),
      expMonth: Yup.string().required("Requis"),
      expYear: Yup.string().required("Requis"),
      ccv: Yup.string().required("Requis"),
      billingPostalZipcode: Yup.string().required("Requis"),
    })
    .required();
  const {
    watch,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      shippingName: "",
      shippingStreet: "",
      shippingStateProvince: "",
      shippingCity: "",
      shippingPostalZipCode: "",
      shippingCountry: "",
      shippingOption: "",
      cardNumber: "",
      expMonth: "",
      expYear: "",
      ccv: "",
      billingPostalZipcode: "",
    },
    resolver: yupResolver(validationSchema),
    reValidateMode: "onChange",
  });

  const [checkoutToken, setCheckoutToken] = useState({});

  const generateCheckoutToken = useCallback(() => {
    const { cart } = props;
    if (cart.line_items.length) {
      commerce.checkout
        .generateToken(cart.id, { type: "cart" })
        .then((token) => {
          setCheckoutToken(token);
        })
        .catch((error) => {
          console.log("There was an error in generating a token", error);
        });
    }
  }, [props]);

  const sanitizedLineItems = (lineItems) => {
    return lineItems.reduce((data, lineItem) => {
      const item = data;
      let variantData = null;
      if (lineItem.selected_options.length) {
        variantData = {
          [lineItem.selected_options[0].group_id]:
            lineItem.selected_options[0].option_id,
        };
      }
      item[lineItem.id] = {
        quantity: lineItem.quantity,
        variants: variantData,
      };
      return item;
    }, {});
  };

  const onSubmit = (e) => {
    const formValues = getValues();
    e.preventDefault();
    const orderData = {
      line_items: sanitizedLineItems(props.cart.line_items),
      customer: {
        firstname: formValues.firstName,
        lastname: formValues.lastName,
        email: formValues.email,
      },
      shipping: {
        name: formValues.shippingName,
        street: formValues.shippingStreet,
        town_city: formValues.shippingCity,
        county_state: formValues.shippingStateProvince,
        postal_zip_code: formValues.shippingPostalZipCode,
        country: formValues.shippingCountry,
      },
      billing: {
        name: formValues.shippingName,
        street: formValues.shippingStreet,
        town_city: formValues.shippingCity,
        county_state: formValues.shippingStateProvince,
        postal_zip_code: formValues.shippingPostalZipCode,
        country: formValues.shippingCountry,
      },
      fulfillment: {
        shipping_method: formValues.shippingOption,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: formValues.cardNumber,
          expiry_month: formValues.expiration.substring(0, 2),
          expiry_year: `20${formValues.expiration.substring(3, 5)}`,
          cvc: formValues.ccv,
          postal_zip_code: formValues.shippingPostalZipCode,
        },
      },
    };
    props.onCaptureCheckout(checkoutToken.id, orderData);
  };

  useEffect(() => {
    if (props.cart.line_items && checkoutToken !== {}) generateCheckoutToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isShippingStateProvinceDisabled = !watch("shippingCountry");

  const countrySubdivisions = () =>
    !isShippingStateProvinceDisabled
      ? getCountrySubdivisions(getValues("shippingCountry"))
      : [];

  const isShippingOptionsDisabled = !(
    watch("shippingCountry") && watch("shippingStateProvince")
  );

  const shippingOptions = () =>
    !isShippingOptionsDisabled
      ? getShippingOptions(getValues("shippingCountry"))
      : [];

  return (
    <>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box pt={16} px={{ xs: 4, md: 12 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} justifyContent="space-evenly">
                <Grid item xs={12}>
                  <Subtitle>Informations client</Subtitle>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    variant="outlined"
                    label="Prénom"
                    color="primary"
                    {...register("firstName", { required: true })}
                    name="firstName"
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName?.message}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    variant="outlined"
                    label="Nom"
                    color="primary"
                    {...register("lastName", { required: true })}
                    error={Boolean(errors.lastName)}
                    helperText={errors.lastName?.message}
                    name="lastName"
                    type="text"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    size="small"
                    required
                    fullWidth
                    variant="outlined"
                    label="Courriel"
                    color="primary"
                    name="email"
                    {...register("email", { required: true })}
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Subtitle>Les détails d'expédition</Subtitle>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="Nom complet"
                    color="primary"
                    name="shippingName"
                    {...register("shippingName", { required: true })}
                    error={Boolean(errors.shippingName)}
                    helperText={errors.shippingName?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="Adresse"
                    color="primary"
                    name="shippingStreet"
                    {...register("shippingStreet", { required: true })}
                    error={Boolean(errors.shippingStreet)}
                    helperText={errors.shippingStreet?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="Ville"
                    color="primary"
                    name="shippingCity"
                    {...register("shippingCity", { required: true })}
                    error={Boolean(errors.shippingCity)}
                    helperText={errors.shippingCity?.message}
                  />
                </Grid>

                <Grid item xs={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="shippingCountry">Pays</InputLabel>
                    <Select
                      labelId="shippingCountry"
                      label="Pays"
                      defaultValue=""
                      name="shippingCountry"
                      {...register("shippingCountry", { required: true })}
                      error={Boolean(errors.shippingCountry)}
                      helperText={errors.shippingCountry?.message}
                    >
                      {countries.map((country, index) => {
                        return (
                          <MenuItem key={index} value={country.value}>
                            {country.value}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <FormControl
                    fullWidth
                    disabled={isShippingStateProvinceDisabled}
                    size="small"
                  >
                    <InputLabel id="shippingStateProvince">
                      État/Province
                    </InputLabel>
                    <Select
                      labelId="shippingStateProvince"
                      defaultValue=""
                      label="État/Province"
                      name="shippingStateProvince"
                      {...register("shippingStateProvince", { required: true })}
                      error={Boolean(errors.shippingStateProvince)}
                      helperText={errors.shippingStateProvince?.message}
                    >
                      {countrySubdivisions().map((province, index) => {
                        return (
                          <MenuItem key={index} value={province.value}>
                            {province.text}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    label="Code postal"
                    size="small"
                    variant="outlined"
                    required
                    fullWidth
                    name="shippingPostalZipCode"
                    color="primary"
                    {...register("shippingPostalZipCode", { required: true })}
                    error={Boolean(errors.shippingPostalZipCode)}
                    helperText={errors.shippingPostalZipCode?.message}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    size="small"
                    disabled={isShippingOptionsDisabled}
                  >
                    <InputLabel id="shippingOption">
                      Mode de livraison
                    </InputLabel>
                    <Select
                      size="small"
                      defaultValue=""
                      labelId="shippingOption"
                      label="Mode de livraison"
                      name="shippingOption"
                      {...register("shippingOption", { required: true })}
                      error={Boolean(errors.shippingOption)}
                      helperText={errors.shippingOption?.message}
                    >
                      {shippingOptions().map((method, index) => {
                        return (
                          <MenuItem value={method.id} key={index}>
                            {`${method.description} - $${method.price.formatted_with_code}`}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Subtitle>Information de paiement</Subtitle>
                </Grid>

                <Grid item xs={6}>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    {...register("cardNumber", { required: true })}
                  >
                    {() => (
                      <TextField
                        label="Numéro de carte de Crédit"
                        required
                        fullWidth
                        size="small"
                        variant="outlined"
                        name="cardNumber"
                        color="primary"
                        error={Boolean(errors.cardNumber)}
                        helperText={errors.cardNumber?.message}
                        {...register("cardNumber", { required: true })}
                      />
                    )}
                  </InputMask>
                </Grid>

                <Grid item xs={3}>
                  <InputMask
                    mask="99/99"
                    disabled={false}
                    placeholder="MM/YY"
                    {...register("expiration", { required: true })}
                  >
                    {() => (
                      <TextField
                        required
                        fullWidth
                        size="small"
                        variant="outlined"
                        label="Expiration"
                        color="primary"
                        name="expMonth"
                        error={Boolean(errors.expMonth)}
                        helperText={errors.expMonth?.message}
                        type="text"
                        {...register("expiration", { required: true })}
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid item xs={3}>
                  <InputMask
                    mask="999"
                    {...register("ccv", { required: true })}
                  >
                    {() => (
                      <TextField
                        required
                        fullWidth
                        size="small"
                        variant="outlined"
                        label="CCV"
                        color="primary"
                        name="ccv"
                        placeholder="CCV (3 digits)"
                        {...register("ccv", { required: true })}
                        error={Boolean(errors.ccv)}
                        helperText={errors.ccv?.message}
                        type="text"
                      />
                    )}
                  </InputMask>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          pt={16}
          sx={{
            backgroundColor: "#f2e8da",
            height: "100vh",
          }}
        >
          <Box px={6}>
            <Box pb={6} sx={{ fontWeight: "bold" }}>
              <Grid item xs={12}>
                <label>Résumé de la commande</label>
              </Grid>
            </Box>

            {props.cart.line_items.length > 0 &&
              props.cart.line_items.map((item) => (
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Grid item xs={3}>
                      <img
                        alt="A product of the cart"
                        width="70px"
                        src={item.image.url}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label>
                        {item.quantity} x {item.product_name}
                      </label>
                    </Grid>
                    <Grid item xs={2}>
                      <label>{item.line_total.formatted_with_symbol}</label>
                    </Grid>
                  </Grid>
                </Grid>
              ))}

            <Grid container xs={12} sm={6} justifyContent="end">
              <Box pt={4} sx={{ fontSize: 20, fontWeight: "bold" }}>
                <Grid item xs={12}>
                  <Grid container justifyContent="space-evenly">
                    <Grid item xs={9}>
                      <label>Montant Total:</label>
                    </Grid>
                    <Grid item xs={3}>
                      {props.cart.subtotal &&
                        props.cart.subtotal.formatted_with_symbol}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Box pt={4}>
                    <Button
                      onClick={onSubmit}
                      size="medium"
                      type="submit"
                      variant="contained"
                    >
                      Confirmer la commande
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Checkout;
