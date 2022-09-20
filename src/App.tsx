import React from "react";
import { ThemeStore } from "./contexts/ThemeContext";
import Theme from "./data/Themes";

import Notifications from "./components/Notifications/Notifications";
import GlobalStyle from "./globalStyle";
function App() {
  return (
    <>
      <ThemeStore>
        <Theme>
          <GlobalStyle />
          <Notifications />
        </Theme>
      </ThemeStore>
    </>
  );
}

export default App;
