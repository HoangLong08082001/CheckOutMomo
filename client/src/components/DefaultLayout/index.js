import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);
export default function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
