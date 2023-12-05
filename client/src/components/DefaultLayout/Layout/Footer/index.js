import React from "react";
import style from "./Footer.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faTags,
  faTicketSimple,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(style);
export default function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("service")}>
        <div className={cx("item")}>
          <p className={cx("icon")}>
            <FontAwesomeIcon icon={faTags} />
          </p>
          <p className={cx("title")}>
            Khuyến mãi hấp dẫn mỗi ngày Hàng ngàn sản phẩm giá hấp dẫn phù hợp
            ngân sách của bạn
          </p>
        </div>
        <div className={cx("item")}>
          <p className={cx("icon")}>
            <FontAwesomeIcon icon={faTruckFast} />
          </p>
          <p className={cx("title")}>
            Miễn phí vận chuyển tại HCM* Click mua hàng và nhận ngay trong vòng
            3-5 ngày
          </p>
        </div>
        <div className={cx("item")}>
          <p className={cx("icon")}>
            <FontAwesomeIcon icon={faMedal} />
          </p>
          <p className={cx("title")}>
            Hỗ trợ lắp đặt, dịch vụ khách hàng 5 sao Đội ngũ kỹ thuật tận tâm
            nhiệt tình luôn sẵn sàng hỗ trợ
          </p>
        </div>
      </div>
      <div className={cx("footer")}>
        <p>@copyRight-2023</p>
      </div>
    </div>
  );
}
