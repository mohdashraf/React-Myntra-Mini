import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Context from "./context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-870gufr0m0gwqghl.us.auth0.com"
    clientId="IHp7wYQgAar88kuxy9HY2ObZk7NJ0Nka"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <Context>
      <App />
    </Context>
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
