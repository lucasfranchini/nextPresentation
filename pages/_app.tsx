import type { AppProps, NextWebVitalsMetric } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme/theme";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
