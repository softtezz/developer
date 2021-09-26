import React from "react";
import "./App.css";
import Main from "./containers/Main";
import ReactGA from 'react-ga';
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

//Unique Google Analytics tracking number
ReactGA.initialize('G-LLXRRYY9EJ');
function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
        useEffect( () => {

        // This line will trigger on a route change
        ReactGA.pageview(window.location.pathname + window.location.search); 

    });
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
