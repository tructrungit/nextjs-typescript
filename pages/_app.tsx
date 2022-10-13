import { EmptyLayout } from "../components/layout";
import { AppPropsWithLayout } from "../models/index";


export default function MyApp( { Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
