import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { getClient } from "./core/StashService";
import { getPlatformURL } from "./core/createClient";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <>
    <link rel="stylesheet" type="text/css" href={`${getPlatformURL()}css`} />
    <BrowserRouter>
      <ApolloProvider client={getClient()}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
