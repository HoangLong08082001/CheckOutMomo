import React, { useEffect, useState } from "react";
import style from "./Home.module.scss";
import classNames from "classnames/bind";
import img1 from "../../assets/BLACJ.png";
import img2 from "../../assets/BLACJ1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faChevronCircleLeft,
  faChevronLeft,
  faChevronRight,
  faFireFlameSimple,
} from "@fortawesome/free-solid-svg-icons";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const cx = classNames.bind(style);
export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [fire, setFire] = useState(false);
  const dataImgs = [
    {
      id: 1,
      src: img1,
    },
    {
      id: 2,
      src: img2,
    },
  ];
  const book = [
    {
      id: 1,
      name: "The Greate Gastby",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg/423px-The_Great_Gatsby_Cover_1925_Retouched.jpg",
      amout: 200.0,
    },
    {
      id: 2,
      name: "Hoa Nguc",
      src: "https://salt.tikicdn.com/cache/w400/ts/product/c5/80/82/1d578bf1cfd2a2ae4a10a61f628a8711.png",
      amout: 350.0,
    },
    {
      id: 3,
      name: "Mat Ma Da Vinci",
      src: "https://bizweb.dktcdn.net/100/378/470/products/the-da-vinci-code-robert-langdon-paperback-march-31-2009-us.jpg?v=1607750115053",
      amout: 400.0,
    },
    {
      id: 4,
      name: "Thien Than Va Ac Quy",
      src: "https://hoimesach.com/wp-content/uploads/2022/04/thien-than-va-ac-quy-ebook-mien-phi-epub-mobi-pdf-hoimesach.com.png",
      amout: 400.0,
    },
    {
      id: 5,
      name: "Dac Nhan Tam",
      src: "https://nhanvietmedia.edu.vn/publics/files/sach-dac-nhan-tam.jpg",
      amout: 150.0,
    },
    {
      id: 6,
      name: "Dat Rung Phuong Nam",
      src: "https://www.dtv-ebook.com/images/truyen-online/ebook-dat-rung-phuong-nam-full-prc-pdf-epub-azw3.jpg",
      amout: 300.0,
    },
    {
      id: 7,
      name: "The Gioi Ca Phe",
      src: "https://thebookdata.net/wp-content/uploads/2021/02/sach-thanh-kinh-cua-nhung-tin-do-ca-phe-192x300.png",
      amout: 320.0,
    },
    {
      id: 8,
      name: "Ronaldo (Success Stories)",
      src: "https://cdn.bookey.app/20220827160714228/20220830094859093.png",
      amout: 280.0,
    },
    {
      id: 9,
      name: "Javascript",
      src: "https://tutorialzine.com/media/2015/05/eloquent.png",
      amout: 190.0,
    },
    {
      id: 10,
      name: "Tam Quoc Dien Nghia",
      src: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1519909801l/158770.jpg",
      amout: 900.0,
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      setFire(!fire);
    }, 1000);
  }, [fire]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("slider")}>
        <Slide>
          {dataImgs.map((l, i) => (
            <div key={i}>
              <img src={l.src} alt="" />
            </div>
          ))}
        </Slide>
      </div>
      <div className={cx("slider-product")}>
        <p className={cx("title-1")}>
          SACH MOI 2023{" "}
          <FontAwesomeIcon
            className={fire ? cx("icon-fire") : cx("icon-fire-active")}
            icon={faFireFlameSimple}
          />
        </p>
        <div className={cx("list-book-one")}>
          <Carousel
            autoPlay
            draggable
            pauseOnHover
            infinite
            autoPlaySpeed={2000}
            responsive={responsive}
          >
            {book.map((b, i) => {
              return (
                <div className={cx("item")} key={i}>
                  <div className={cx("thumbnail")}>
                    <img src={b.src} alt="" />
                  </div>
                  <p className={cx("name")}>{b.name}</p>
                  <p className={cx("amout")}>{b.amout}</p>
                  <div className={cx("btn")}>
                    <button className={cx("detail")}>Chi tiet</button>
                    <button className={cx("cart")}>
                      <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
