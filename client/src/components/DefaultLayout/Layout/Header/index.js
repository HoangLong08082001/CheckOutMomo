import React, { useState } from "react";
import style from "./Header.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import logo from "../../../../assets/logobook.jpg";
import {
  faCartShopping,
  faChevronCircleDown,
  faChevronDown,
  faFire,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDown from "./DropDown";
const cx = classNames.bind(style);
export default function Header() {
  const [menu, setMenu] = useState(false);
  const handleShow = () => {
    setMenu(!menu);
  };
  return (
    <>
      {" "}
      <div className={cx("wrapper")}>
        <div className={cx("form-img")}>
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={cx("list-menu")}>
          <Link className={cx("link")}>
            <p>TRANG CHU</p>
          </Link>
          <Link className={cx("link")}>
            <p>
              SACH MOI <FontAwesomeIcon className={cx("fire")} icon={faFire} />
            </p>
          </Link>
          <Link className={cx("link")} onClick={handleShow}>
            <p>
              LOAI SACH{" "}
              <FontAwesomeIcon
                className={menu === false ? cx("drop") : cx("drop-active")}
                icon={faChevronDown}
              />
            </p>
          </Link>
          <Link className={cx("link")}>
            <p>
              <FontAwesomeIcon icon={faSearch} />
            </p>
          </Link>
        </div>
        <div className={cx("service")}>
          <Link className={cx("link")} to='/cart'>
            <p>
              <FontAwesomeIcon icon={faCartShopping} />
            </p>
          </Link>
          <Link className={cx("link")}>
            <p>
              <FontAwesomeIcon icon={faUser} />
            </p>
          </Link>
        </div>
      </div>
      {menu === true && <DropDown />}
    </>
  );
}
