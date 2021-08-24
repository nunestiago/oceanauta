import React, { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";

interface layoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: layoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
