import React, { useState } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import { light, dark } from "./styled_globals/Themes";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled_globals/GlobalStyle";

function App() {
  const [theme, setTheme] = useState(dark);

  const toggleThemeHandler = () => {
    setTheme((prevState) => (prevState === light ? dark : light));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header onToggleTheme={toggleThemeHandler} />
      <Main />
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
