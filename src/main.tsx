import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "./components/ErrorFallback/ErrorFallback";
import "./styles/globals.css";
import "./styles/fonts.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <App />
    </ErrorBoundary>
  </Provider>
  // </React.StrictMode>
);
