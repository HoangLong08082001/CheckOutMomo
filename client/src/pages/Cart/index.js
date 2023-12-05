import React from "react";
import style from "./Cart.module.scss";
import classNames from "classnames/bind";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function Cart() {
  const navigate = useNavigate();
  const book = [
    {
      id: 1,
      name: "The Greate Gastby",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/423px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
      amout: 200000,
    },
    {
      id: 2,
      name: "Hoa Nguc",
      src: "https://salt.tikicdn.com/cache/w400/ts/product/c5/80/82/1d578bf1cfd2a2ae4a10a61f628a8711.png",
      amout: 350000,
    },
    {
      id: 3,
      name: "Mat Ma Da Vinci",
      src: "https://bizweb.dktcdn.net/100/378/470/products/the-da-vinci-code-robert-langdon-paperback-march-31-2009-us.jpg?v=1607750115053",
      amout: 400000,
    },
    {
      id: 4,
      name: "Thien Than Va Ac Quy",
      src: "https://hoimesach.com/wp-content/uploads/2022/04/thien-than-va-ac-quy-ebook-mien-phi-epub-mobi-pdf-hoimesach.com.png",
      amout: 400000,
    },
    {
      id: 5,
      name: "Dac Nhan Tam",
      src: "https://nhanvietmedia.edu.vn/publics/files/sach-dac-nhan-tam.jpg",
      amout: 150000,
    },
    {
      id: 6,
      name: "Dat Rung Phuong Nam",
      src: "https://www.dtv-ebook.com/images/truyen-online/ebook-dat-rung-phuong-nam-full-prc-pdf-epub-azw3.jpg",
      amout: 300000,
    },
    {
      id: 7,
      name: "The Gioi Ca Phe",
      src: "https://thebookdata.net/wp-content/uploads/2021/02/sach-thanh-kinh-cua-nhung-tin-do-ca-phe-192x300.png",
      amout: 320000,
    },
    {
      id: 8,
      name: "Ronaldo (Success Stories)",
      src: "https://cdn.bookey.app/20220827160714228/20220830094859093.png",
      amout: 280000,
    },
    {
      id: 9,
      name: "Javascript",
      src: "https://tutorialzine.com/media/2015/05/eloquent.png",
      amout: 190000,
    },
    {
      id: 10,
      name: "Tam Quoc Dien Nghia",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519909801l/158770.jpg",
      amout: 900000,
    },
  ];
  const tongTien = () => {
    let s = 0;
    for (let i = 0; i < book.length; i++) {
      s = s + book[i].amout;
    }
    return s;
  };
  const sumofAmount = tongTien();
  const handleVNPAY = async () => {
    await axios
      .post("http://localhost:3300/thanhtoan/vnpay", { sumofAmount })
      .then((res) => {
        console.log(res);
      });
  };
  const handleMomo = async () => {
    await axios
      .post("http://localhost:3300/thanhtoan/momo", { sumofAmount })
      .then((res) => {
        console.log(res.data.url);
        window.location.href = res.data.url;
      });
  };
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>SHOPPING CART</p>
      <div className={cx("list-cart")}>
        {book.map((b, i) => {
          return (
            <div className={cx("cart")}>
              <div className={cx("form-img")}>
                <img src={b.src} alt="" />
              </div>
              <div className={cx("descrip")}>
                <p className={cx("name")}>{b.name}</p>
                <p className={cx("amout")}>{b.amout}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={cx("sum")}>
        <p>
          Tong tien: {sumofAmount.toLocaleString("en-US", { currency: "VND" })}
        </p>
      </div>
      <div className={cx("btn")}>
        <button className={cx("vnpay")} onClick={handleVNPAY}>
          <p className={cx("vn")}> VN</p>
          <p className={cx("pay")}> PAY </p>
        </button>
        <button className={cx("momo")} onClick={handleMomo}>
          <p>momo</p>
        </button>
        <button className={cx("zalopay")}>
          <p className={cx("zalo")}>Zalo</p>
          <p className={cx("pay")}>Pay</p>
        </button>
      </div>
    </div>
  );
}
