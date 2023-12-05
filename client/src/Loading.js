import React from "react";
import style from "./Loading.module.scss";
import classNames from "classnames/bind";
import { ThreeCircles } from "react-loader-spinner";
const cx = classNames.bind(style);
export default function Loading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("loader")}>
        <ThreeCircles
          height="300"
          width="200"
          color="#005fa3"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
        />
      </div>
      <p>Loading...</p>
    </div>
  );
}
