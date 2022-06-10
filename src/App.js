import React, { useState } from "react";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styled_globals/GlobalStyle";

const light = {
  background: "hsl(0, 0%, 98%)",
  foreground: "hsl(200, 15%, 8%)",
  element: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 52%)",
};

const dark = {
  background: "hsl(207, 26%, 17%)",
  foreground: "hsl(0, 0%, 100%)",
  element: "hsl(209, 23%, 22%)",
  input: "hsl(0, 0%, 98%)",
};

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
