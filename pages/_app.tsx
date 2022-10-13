import { EmptyLayout } from "../components/layout";
import { AppPropsWithLayout } from "../models/index";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../utils/index";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
