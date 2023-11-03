import React from "react";
import ReactDOM from "react-dom/client";
import { Routerlist } from "./routes/RouterList";
import "../src/assets/css/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
        <QueryClientProvider client={queryMovie}>
          <Routerlist />
        </QueryClientProvider>
        <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);
