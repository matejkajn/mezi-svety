import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import global_cz from "./translations/cz/global.json";
import global_en from "./translations/en/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  lng: "cz",
  resources: {
    cz: {
      global: global_cz,
    },
    en: {
      global: global_en,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
