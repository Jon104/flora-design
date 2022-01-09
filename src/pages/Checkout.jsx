import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Subtitle } from "services/TypoService";
import { commerce } from "../lib/commerce";

const Checkout = (props) => {
  const [checkoutToken, setCheckoutToken] = useState({});
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // Shipping details
    shippingName: "",
    shippingStreet: "",
    shippingCity: "",
    shippingStateProvince: "",
    shippingPostalZipCode: "",
    shippingCountry: "",
    // Payment details
    cardNum: "",
    expMonth: "",
    expYear: "",
    ccv: "",
    billingPostalZipcode: "",
  });
  const [shippingDetails, setShippingDetails] = useState({
    shippingCountries: {},
    shippingSubdivisions: {},
    shippingOptions: [],
    shippingOption: "",
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("UseEffect");
    if (props.cart.line_items) {
      console.log("ToGenerate");
      generateCheckoutToken();
      fetchSubdivisions(customerDetails.shippingCountry);
    }
  }, [props.cart]);

  return (
    <>
      <form className="checkout__form">
        <Box padding={4} pt={16}>
          <Grid container>
            <Grid item xs={12}>
              <Subtitle>Informations client</Subtitle>
            </Grid>

            <Grid item xs={6}>
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                value={customerDetails.firstName}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    firstName: e.target.value,
                  })
                }
                name="firstName"
                required
              />
            </Grid>

            <Grid item xs={6} justifyContent="end">
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                value={customerDetails.lastName}
                name="lastName"
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    lastName: e.target.value,
                  })
                }
                required
              />
            </Grid>

            <Grid item xs={12}>
              <label htmlFor="email">Courriel</label>
              <input
                type="text"
                value={customerDetails.email}
                name="email"
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    email: e.target.value,
                  })
                }
                required
              />
            </Grid>

            <Subtitle>Les détails d'expédition</Subtitle>

            <Grid item xs={12}>
              <label htmlFor="shippingName">Nom complet</label>
              <input
                type="text"
                value={customerDetails.shippingName}
                name="shippingName"
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    shippingName: e.target.value,
                  })
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="shippingStreet">Adresse</label>
              <input
                type="text"
                value={customerDetails.shippingStreet}
                name="shippingStreet"
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    shippingStreet: e.target.value,
                  })
                }
                required
              />
            </Grid>

            <Grid item xs={12}>
              <label htmlFor="shippingCity">Ville</label>
              <input
                type="text"
                value={customerDetails.shippingCity}
                name="shippingCity"
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    shippingCity: e.target.value,
                  })
                }
                required
              />
            </Grid>

            <Grid item xs={12}>
              <label htmlFor="shippingPostalZipCode">Code postal</label>
              <input
                type="text"
                value={customerDetails.shippingPostalZipCode}
                name="shippingPostalZipCode"
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    shippingPostalZipCode: e.target.value,
                  })
                }
                required
              />
            </Grid>
            <Grid item xs={12}>
              <label className="checkout__label" htmlFor="shippingCountry">
                Pays
              </label>
              <select
                value={customerDetails.shippingCountry}
                name="shippingCountry"
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    shippingCountry: e.target.value,
                  })
                }
              >
                <option disabled>Country</option>
                {Object.keys(shippingDetails.shippingCountries).map((index) => {
                  return (
                    <option value={index} key={index}>
                      {shippingDetails.shippingCountries[index]}
                    </option>
                  );
                })}
                ;
              </select>
            </Grid>

            <Grid item xs={12}>
              <label htmlFor="shippingStateProvince">État/Province</label>
              <select
                value={customerDetails.shippingStateProvince}
                name="shippingStateProvince"
              >
                <option className="checkout__option" disabled>
                  State/province
                </option>
                {Object.keys(shippingDetails.shippingSubdivisions).map(
                  (index) => {
                    return (
                      <option value={index} key={index}>
                        {shippingDetails.shippingSubdivisions[index]}
                      </option>
                    );
                  }
                )}
                ;
              </select>
            </Grid>

            <Grid item xs={12}>
              <label className="checkout__label" htmlFor="shippingOption">
                Mode de livraison
              </label>
              <select
                value={shippingDetails.shippingOption}
                name="shippingOption"
                className="checkout__select"
              >
                <option disabled>Select a shipping method</option>
                {shippingDetails.shippingOptions.map((method, index) => {
                  return (
                    <option
                      value={method.id}
                      key={index}
                    >{`${method.description} - $${method.price.formatted_with_code}`}</option>
                  );
                })}
                ;
              </select>
            </Grid>

            <Subtitle>Information de paiement</Subtitle>
            <Grid item xs={12}>
              <label className="checkout__label" htmlFor="cardNum">
                Numéro de Carte de Crédit
              </label>
              <input
                type="text"
                name="cardNum"
                value={customerDetails.cardNum}
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="expMonth">Expiry month</label>
              <input
                type="text"
                name="expMonth"
                value={customerDetails.expMonth}
                placeholder="Card expiry month"
              />
            </Grid>
            <Grid item xs={12}>
              <label htmlFor="expYear">Expiry year</label>
              <input
                className="checkout__input"
                type="text"
                name="expYear"
                value={customerDetails.expYear}
                placeholder="Card expiry year"
              />
            </Grid>
            <Grid item xs={12}>
              <label className="checkout__label" htmlFor="ccv">
                CCV
              </label>
              <input
                className="checkout__input"
                type="text"
                name="ccv"
                value={customerDetails.ccv}
                placeholder="CCV (3 digits)"
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>

          <button className="checkout__btn-confirm">Confirm order</button>
        </Box>
      </form>
    </>
  );
};

export default Checkout;
