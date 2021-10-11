import BurgerMenu from "components/tron/BurgerMenu";
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Landing from "./pages/Landing";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:
      Lato
  }
  `

const theme = {
  primary: "#9F2E0E"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BurgerMenu />
        <Landing />
        <GlobalStyle />
      </div>
    </ThemeProvider>
  );
}

export default App;
