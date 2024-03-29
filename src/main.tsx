import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./route/AppRouter";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AppRouter />
    </ChakraProvider>
  </React.StrictMode>
);
