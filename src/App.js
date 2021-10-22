import BurgerMenu from "components/tron/BurgerMenu";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Landing from "./pages/Landing";
import CreateTogether from "./pages/CreateTogether";
import MyApproach from "./pages/MyApproach";
import PersonalPiece from "./pages/PersonalPiece";
import Thanks from "./pages/Thanks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:
      Lato
  }
  `;

const theme = {
  primary: "#9F2E0E",
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <BurgerMenu />
          <GlobalStyle />
          <Switch>
            <Route path="/ma-démarche" component={MyApproach} />
            <Route path="/ensemble" component={CreateTogether} />
            <Route path="/mes-pièces" component={PersonalPiece} />
            <Route path="/thanks" component={Thanks} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
