import DefaultLayout from "@/components/layouts/DefaultLayout";
import "@/styles/globals.css";
import "@/styles/scss/style.scss";
import type { AppProps } from "next/app";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
