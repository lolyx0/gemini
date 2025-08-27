import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/Context.jsx";
import ThemeProvider from "./ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
  <ContextProvider>
    <App />
  </ContextProvider>
  </ThemeProvider>
);
