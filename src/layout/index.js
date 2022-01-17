import React from "react";
import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;