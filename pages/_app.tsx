import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme/theme";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "../src/store/store";
import Loader from "../src/components/loader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Loader />
      <AnimatePresence exitBeforeEnter>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </Provider>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
