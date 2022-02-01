const getCountrySubdivisions = (countryCode) => {
  if (countryCode === "CA") return canadianProvinces;
  if (countryCode === "US") return americanStates;
  return [];
};

const getShippingOptions = (countryCode) => {
  if (countryCode === "CA") return canadaCoastsShippingOptions;
  if (countryCode === "US") return unitedStatesShippingOptions;
};

const canadianProvinces = [
  { value: "AB", text: "Alberta" },
  { value: "BC", text: "Colombie-Britanique" },
  { value: "MB", text: "Manitoba" },
  { value: "NB", text: "Nouveau-Brunswick" },
  { value: "NL", text: "Terre-Neuve-et-Labrador" },
  { value: "NS", text: "Nouvelle-écosse" },
  { value: "NT", text: "Territoire du Nord-Ouest" },
  { value: "NU", text: "Nunavut" },
  { value: "ON", text: "Ontario" },
  { value: "PE", text: "Île-du-Prince-Edward" },
  { value: "QC", text: "Québec" },
  { value: "SK", text: "Saskatchewan" },
  { value: "YT", text: "Yukon" },
];

const americanStates = [
  { value: "AK", text: "Alaska" },
  { value: "AL", text: "Alabama" },
  { value: "AR", text: "Arkansas" },
  { value: "AS", text: "American Samoa" },
  { value: "AZ", text: "Arizona" },
  { value: "CA", text: "California" },
  { value: "CO", text: "Colorado" },
  { value: "CT", text: "Connecticut" },
  { value: "DC", text: "District of Columbia" },
  { value: "DE", text: "Delaware" },
  { value: "GA", text: "Georgia" },
  { value: "GU", text: "Guam" },
  { value: "IA", text: "Iowa" },
  { value: "ID", text: "Idaho" },
  { value: "IL", text: "Illinois" },
  { value: "IN", text: "Indiana" },
  { value: "KS", text: "Kansas" },
  { value: "KY", text: "Kentucky" },
  { value: "LA", text: "Louisiana" },
  { value: "MA", text: "Massachusetts" },
  { value: "MD", text: "Maryland" },
  { value: "ME", text: "Maine" },
  { value: "MI", text: "Michigan" },
  { value: "MN", text: "Minnesota" },
  { value: "MO", text: "Missouri" },
  { value: "MP", text: "Northern Mariana Islands" },
  { value: "MS", text: "Mississippi" },
  { value: "MT", text: "Montana" },
  { value: "NC", text: "North Carolina" },
  { value: "ND", text: "North Dakota" },
  { value: "NE", text: "Nebraska" },
  { value: "NH", text: "New Hampshire" },
  { value: "NJ", text: "New Jersey" },
  { value: "NM", text: "New Mexico" },
  { value: "NV", text: "Nevada" },
  { value: "NY", text: "New York" },
  { value: "OH", text: "Ohio" },
  { value: "OK", text: "Oklahoma" },
  { value: "OR", text: "Oregon" },
  { value: "PA", text: "Pennsylvania" },
  { value: "PR", text: "Puerto Rico" },
  { value: "RI", text: "Rhode Island" },
  { value: "SC", text: "South Carolina" },
  { value: "SD", text: "South Dakota" },
  { value: "TN", text: "Tennessee" },
  { value: "TX", text: "Texas" },
  { value: "UM", text: "United States Minor Outlying Islands" },
  { value: "UT", text: "Utah" },
  { value: "VA", text: "Virginia" },
  { value: "VI", text: "Virgin Islands, U.S." },
  { value: "VT", text: "Vermont" },
  { value: "WA", text: "Washington" },
  { value: "WI", text: "Wisconsin" },
  { value: "WV", text: "West Virginia" },
  { value: "WY", text: "Wyoming" },
];

const countries = [
  { value: "CA", text: "Canada" },
  { value: "US", text: "États-Unis" },
];

const canadaCoastsShippingOptions = [
  {
    id: "ship_9BAmwJm89leXdn",
    name: "Ouest Canadien et Maritimes",
    description: "Livraison 2 à 3 semaines",
    price: {
      raw: 20,
      formatted: "20.00",
      formatted_with_symbol: "$20.00",
      formatted_with_code: "20.00 CAD",
    },
  },
];

const canadaTerritoriesShippingOptions = [
  {
    id: "ship_mOVKl4R23oprRP",
    name: "Grand Nord québécois et Territoires du Nord-Ouest",
    description: "Livraison 4 à 5 semaines",
    price: {
      raw: 40,
      formatted: "40.00",
      formatted_with_symbol: "$40.00",
      formatted_with_code: "40.00 CAD",
    },
  },
];

const canadaQuebecOntarioShippingOptions = [
  {
    id: "ship_ZM8X5nezPopv4q",
    name: "Québec et Ontario",
    description: "Livraison 5 à 7 jours",
    price: {
      raw: 10,
      formatted: "10.00",
      formatted_with_symbol: "$10.00",
      formatted_with_code: "10.00 CAD",
    },
  },
];

const unitedStatesShippingOptions = [
  {
    id: "ship_7ZAMo1jEW5NJ4x",
    description: "Par avion",
    price: {
      raw: 20,
      formatted: "20.00",
      formatted_with_symbol: "$20.00",
      formatted_with_code: "20.00 CAD",
    },
    countries: ["US"],
  },
];

export {
  getCountrySubdivisions,
  getShippingOptions,
  canadaCoastsShippingOptions,
  canadaTerritoriesShippingOptions,
  canadaQuebecOntarioShippingOptions,
  countries,
};
