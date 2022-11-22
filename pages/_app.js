import "../styles/globals.css";

import { Provider } from "react-redux";
import { store } from "../store";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <Toaster />

          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
