import React from "react";
import style from "./MoreBook.module.css";
import img1 from "../Books/Photo/1.jpg";

const MoreBook = () => {
  return (
    <div>
      <div className={style.h1}>Незриме життя Адді Лярю</div>
      <div className={style.content}>
        <div>
          <img className={style.img} src={img1} alt="1" />
        </div>
        <div className={style.info}>
          <div className={style.data_item}>
            <div className={style.info_l}>Автор:</div>
            <div className={style.info_r}>В. Е. Шваб</div>
          </div>
          <div className={style.data_item}>
            <div className={style.info_l}>Рік видання:</div>
            <div className={style.info_r}>2022</div>
          </div>
          <div className={style.data_item}>
            <div className={style.info_l}>Кількість екземплярів:</div>
            <div className={style.info_r}>26</div>
          </div>
          <div className={style.data_item}>
            <div className={style.info_l}>ISBN:</div>
            <div className={style.info_r}>978-617-801-213-7</div>
          </div>
          <div className={style.btn}>
            <button className={style.button}>Списати книгу</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreBook;
