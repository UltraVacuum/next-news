import React from "react";

import { BackTop } from "antd";
import "antd/lib/back-top/style/css";

import Header from "@/components/header";
import Footer from "@/components/footer";

export default ({ children }) => (
  <div>
    <BackTop />
    <Header />
    {children}
    <Footer />
  </div>
);
