import React from "react";
import Footer from "../includes/Footers/footerDefault";
import { Header } from "../includes/Headers/header";

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
