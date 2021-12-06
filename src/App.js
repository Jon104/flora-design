import BurgerMenu from "components/tron/BurgerMenu";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Landing from "./pages/Landing";
import Panaches from "./pages/Panaches";
import Boutique from "./pages/Boutique";
import CreateTogether from "./pages/CreateTogether";
import MyApproach from "./pages/MyApproach";
import PersonalPiece from "./pages/PersonalPiece";
import Thanks from "./pages/Thanks";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider as Mui } from "@mui/material/styles";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:
      "Lato"
  }
  `;

const theme = {
  primary: "#9F2E0E",
};

const themeMui = createTheme({
  palette: {
    primary: {
      main: "#9F2E0E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "1rem",
        },
      },
    },
  },
});

function App() {
  return (
    <Router>
      <Mui theme={themeMui}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <BurgerMenu />
            <GlobalStyle />
            <Switch>
              <Route path="/boutique" component={Boutique} />
              <Route path="/ma-démarche" component={MyApproach} />
              <Route path="/ensemble" component={CreateTogether} />
              <Route path="/personal-pieces" component={PersonalPiece} />
              <Route path="/panaches" component={Panaches} />
              <Route path="/thanks" component={Thanks} />
              <Route path="/" component={Landing} />
            </Switch>
            <Footer />
          </div>
        </ThemeProvider>
      </Mui>
    </Router>
  );
}

export default App;
