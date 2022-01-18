import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Subtitle } from "services/TypoService";
import { commerce } from "../lib/commerce";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputMask from "react-input-mask";
import React from "react";
import NumberFormat from "react-number-format";

const Checkout = (props) => {
  const [checkoutToken, setCheckoutToken] = useState({});
  const handleCreditCardNumberInput = ({ target: { value } }) =>
    setCustomerDetails({ ...customerDetails, cardNumber: value });

  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // Shipping details
    shippingName: "",
    shippingStreet: "",
    shippingStateProvince: "",
    shippingCity: "",
    shippingPostalZipCode: "",
    shippingCountry: "",
    shippingOption: "",
    // Payment details
    cardNumber: "",
    expMonth: "",
    expYear: "",
    ccv: "",
    billingPostalZipcode: "",
  });
  const [shippingDetails, setShippingDetails] = useState({
    shippingCountries: {},
    shippingSubdivisions: {},
    shippingOptions: [],
  });

  const fetchShippingCountries = (checkoutTokenId) => {
    commerce.services
      .localeListShippingCountries(checkoutTokenId)
      .then((countries) => {
        setShippingDetails({
          ...shippingDetails,
          shippingCountries: countries.countries,
        });
      })
      .catch((error) => {
        console.log(
          "There was an error fetching a list of shipping countries",
          error
        );
      });
  };

  const fetchSubdivisions = (countryCode) => {
    commerce.services
      .localeListSubdivisions(countryCode)
      .then((subdivisions) => {
        setShippingDetails({
          ...shippingDetails,
          shippingSubdivisions: subdivisions.subdivisions,
        });
      })
      .catch((error) => {
        console.log("There was an error fetching the subdivisions", error);
      });
  };

  const generateCheckoutToken = () => {
    const { cart } = props;
    if (cart.line_items.length) {
      commerce.checkout
        .generateToken(cart.id, { type: "cart" })
        .then((token) => {
          setCheckoutToken(token);
          fetchShippingCountries(token.id);
          fetchShippingOptions(token.id, customerDetails.shippingCountry);
        })
        .catch((error) => {
          console.log("There was an error in generating a token", error);
        });
    }
  };

  const fetchShippingOptions = (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    commerce.checkout
      .getShippingOptions(checkoutTokenId, {
        country: country,
        region: stateProvince,
      })
      .then((options) => {
        const shippingOption = options[0] || null;
        setShippingDetails({
          ...shippingDetails,
          shippingOptions: options,
          shippingOption: shippingOption,
        });
      })
      .catch((error) => {
        console.log("There was an error fetching the shipping methods", error);
      });
  };

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
    e.preventDefault();
    const orderData = {
      line_items: sanitizedLineItems(props.cart.line_items),
      customer: {
        firstname: customerDetails.firstName,
        lastname: customerDetails.lastName,
        email: customerDetails.email,
      },
      shipping: {
        name: customerDetails.shippingName,
        street: customerDetails.shippingStreet,
        town_city: customerDetails.shippingCity,
        county_state: customerDetails.shippingStateProvince,
        postal_zip_code: customerDetails.shippingPostalZipCode,
        country: customerDetails.shippingCountry,
      },
      fulfillment: {
        shipping_method: customerDetails.shippingOption.id,
      },
      payment: {
        gateway: "test_gateway", // todo
        card: {
          number: customerDetails.cardNumber,
          expiry_month: customerDetails.expMonth,
          expiry_year: customerDetails.expYear,
          cvc: customerDetails.ccv,
          postal_zip_code: customerDetails.billingPostalZipcode,
        },
      },
    };
    debugger;
    props.onCaptureCheckout(checkoutToken, orderData);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("UseEffect");
    if (props.cart.line_items) {
      console.log("ToGenerate");
      generateCheckoutToken();
      fetchSubdivisions(customerDetails.shippingCountry);
    }
  }, [props.cart]);

  const CreditCardNumber = (props) => {
    return (
      <InputMask
        mask="(+1) 999 999 9999"
        value={props.value}
        onChange={props.onChange}
      ></InputMask>
    );
  };

  const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
    props,
    ref
  ) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
      />
    );
  });

  return (
    <>
      <div>
        <Box
          padding={4}
          pt={16}
          sx={{
            width: "50%",
            display: "inline-block",
          }}
        >
          <form className="checkout__form">
            <Grid container spacing={2} justifyContent="start">
              <Grid item xs={12}>
                <Subtitle>Informations client</Subtitle>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Prénom"
                  color="primary"
                  value={customerDetails.firstName}
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      firstName: e.target.value,
                    })
                  }
                  name="firstName"
                  type="text"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Nom"
                  color="primary"
                  value={customerDetails.lastName}
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      lastName: e.target.value,
                    })
                  }
                  name="lastName"
                  type="text"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Courriel"
                  color="primary"
                  value={customerDetails.email}
                  name="email"
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      email: e.target.value,
                    })
                  }
                  type="text"
                />
              </Grid>
              <Grid item xs={6} />

              <Grid item xs={12}>
                <Subtitle>Les détails d'expédition</Subtitle>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Nom complet"
                  color="primary"
                  value={customerDetails.shippingName}
                  name="shippingName"
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      shippingName: e.target.value,
                    })
                  }
                  type="text"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Adresse"
                  color="primary"
                  value={customerDetails.shippingStreet}
                  name="shippingStreet"
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      shippingStreet: e.target.value,
                    })
                  }
                  type="text"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Ville"
                  color="primary"
                  value={customerDetails.shippingCity}
                  name="shippingCity"
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      shippingCity: e.target.value,
                    })
                  }
                  type="text"
                />
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Code postal"
                  color="primary"
                  type="text"
                />
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="shippingCountry">Pays</InputLabel>
                  <Select
                    labelId="shippingCountry"
                    label="Pays"
                    value={customerDetails.shippingCountry}
                    name="shippingCountry"
                    onChange={(e) =>
                      setCustomerDetails({
                        ...customerDetails,
                        shippingCountry: e.target.value,
                      })
                    }
                  >
                    {Object.keys(shippingDetails.shippingCountries).map(
                      (index) => {
                        return (
                          <MenuItem key={index} value={index}>
                            {shippingDetails.shippingCountries[index]}
                          </MenuItem>
                        );
                      }
                    )}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel id="shippingStateProvince">
                    État/Province
                  </InputLabel>
                  <Select
                    labelId="shippingStateProvince"
                    label="État/Province"
                    value={customerDetails.shippingStateProvince}
                    name="shippingStateProvince"
                    onChange={(e) =>
                      setCustomerDetails({
                        ...customerDetails,
                        shippingStateProvince: e.target.value,
                      })
                    }
                  >
                    {Object.keys(shippingDetails.shippingSubdivisions).map(
                      (index) => {
                        return (
                          <MenuItem key={index} value={index}>
                            {shippingDetails.shippingSubdivisions[index]}
                          </MenuItem>
                        );
                      }
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="shippingOption">Mode de livraison</InputLabel>
                  <Select
                    labelId="shippingOption"
                    label="Mode de livraison"
                    value={shippingDetails.shippingOption}
                    name="shippingOption"
                    onChange={(e) =>
                      setShippingDetails({
                        ...shippingDetails,
                        shippingOption: e.target.value,
                      })
                    }
                  >
                    {shippingDetails.shippingOptions.map((method, index) => {
                      return (
                        <MenuItem value={method.id} key={index}>
                          {`${method.description} - $${method.price.formatted_with_code}`}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6} />

              <Grid item xs={12}>
                <Subtitle>Information de paiement</Subtitle>
              </Grid>

              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Numéro de carte de Crédit"
                  color="primary"
                  name="cardNumber"
                  value={customerDetails.cardNumber}
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      cardNumber: e.target.value,
                    })
                  }
                  InputProps={{
                    inputComponent: NumberFormatCustom,
                  }}
                  type="text"
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="Expiration"
                  color="primary"
                  name="expMonth"
                  value={customerDetails.expMonth}
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      expMonth: e.target.value,
                    })
                  }
                  type="text"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  variant="filled"
                  label="CCV"
                  color="primary"
                  name="ccv"
                  value={customerDetails.ccv}
                  placeholder="CCV (3 digits)"
                  onChange={(e) =>
                    setCustomerDetails({
                      ...customerDetails,
                      ccv: e.target.value,
                    })
                  }
                  type="text"
                />
              </Grid>
            </Grid>
          </form>
        </Box>

        {props.cart.line_items > 0 && (
          <Box
            p={4}
            sx={{
              width: "40%",
              position: "absolute",
              border: "1px solid #9f2e0e",
              display: "inline-block",
              top: "150px",
            }}
          >
            <Grid container>
              <Box pb={4} sx={{ fontWeight: "bold" }}>
                <Grid item xs={12}>
                  <label>Résumé de la commande</label>
                </Grid>
              </Box>

              {props.cart.line_items.map((item) => (
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-around"
                  >
                    <Grid item xs={3}>
                      <img
                        alt="A product of the cart"
                        width="100px"
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
              <Grid container justifyContent="end">
                <Box pt={4} sx={{ fontSize: 20, fontWeight: "bold" }}>
                  <Grid item xs={12}>
                    <Grid container justifyContent="space-evenly">
                      <Grid item xs={6}>
                        <label>Montant Total:</label>
                      </Grid>
                      <Grid item xs={6}>
                        {props.cart.subtotal.formatted_with_symbol}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Box pt={4}>
                      <Button
                        onClick={onSubmit}
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Confirmer la commande
                      </Button>
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </div>
    </>
  );
};

export default Checkout;
