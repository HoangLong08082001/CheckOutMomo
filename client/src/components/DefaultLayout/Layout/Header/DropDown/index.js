import React from "react";
import style from "./DropDown.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function DropDown() {
  return (
    <div className={cx("wrapper")}>
      <ul>
        <Link className={cx("link")}>
          <li>Tieu thuyet</li>
        </Link>

        <Link className={cx("link")}>
          <li>Tinh cam</li>
        </Link>

        <Link className={cx("link")}>
          <li>Khoa hoc vien tuong</li>
        </Link>

        <Link className={cx("link")}>
          <li>Tieu su</li>
        </Link>

        <Link className={cx("link")}>
          <li>Hoi ky</li>
        </Link>
      </ul>
      <ul>
        <Link className={cx("link")}>
          <li>Truyen ngan</li>
        </Link>
        <Link className={cx("link")}>
          <li>Lich su</li>
        </Link>
        <Link className={cx("link")}>
          <li>Cong nghe</li>
        </Link>
        <Link className={cx("link")}>
          <li>Kinh doanh</li>
        </Link>
        <Link className={cx("link")}>
          {" "}
          <li>Phat giao</li>
        </Link>
      </ul>
      <ul>
        <Link className={cx("link")}>
          <li>English</li>
        </Link>
        <Link className={cx("link")}>
          <li>Bi an</li>
        </Link>
        <Link className={cx("link")}>
          <li>Pha an</li>
        </Link>
        <Link className={cx("link")}>
          <li>Kinh di</li>
        </Link>
        <Link className={cx("link")}>
          <li>Tu duy</li>
        </Link>
      </ul>
      <ul>
        <Link className={cx("link")}>
          <li>Am thuc</li>
        </Link>
        <Link className={cx("link")}>
          <li>Giao duc</li>
        </Link>
        <Link className={cx("link")}>
          <li>Cho be</li>
        </Link>
      </ul>
    </div>
  );
}
