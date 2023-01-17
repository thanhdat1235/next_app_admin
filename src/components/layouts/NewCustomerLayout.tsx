import React from "react";
import Footer from "../includes/Footers/footer";
import { Header } from "../includes/Headers/header";
import { HeaderNotSigin } from "../includes/Headers/headerNotSigin";

const NewCustomerLayout = ({ children }: any) => {
  return (
    <>
      <HeaderNotSigin />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default NewCustomerLayout;
