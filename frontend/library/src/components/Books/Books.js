import React from "react";
import style from "./Books.module.css";
import img1 from "./Photo/1.jpg";

const Books = () => {
  return (
    <div>
      <div className={style.h1}>Пошук</div>
      <div className={style.input}>
        <input
          className={style.search}
          type="search"
          placeholder="Знайти книгу"
        />
      </div>
      <div className={style.content}>
        <div className={style.book}>
          <div className={style.img}>
            <img src={img1} alt="1" />
          </div>
          <div className={style.textContent}>
            <div className={style.title}>Незриме життя Адді Лярю</div>
            <div className={style.author}>В. Е. Шваб</div>
          </div>
          <button className={style.button}>Детальніше</button>
        </div>
        <div className={style.book}>
          <div className={style.img}>
            <img src={img1} alt="1" />
          </div>
          <div className={style.textContent}>
            <div className={style.title}>Незриме життя Адді Лярю</div>
            <div className={style.author}>В. Е. Шваб</div>
          </div>
          <button className={style.button}>Детальніше</button>
        </div>
        <div className={style.book}>
          <div className={style.img}>
            <img src={img1} alt="1" />
          </div>
          <div className={style.textContent}>
            <div className={style.title}>Незриме життя Адді Лярю</div>
            <div className={style.author}>В. Е. Шваб</div>
          </div>
          <button className={style.button}>Детальніше</button>
        </div>
        <div className={style.book}>
          <div className={style.img}>
            <img src={img1} alt="1" />
          </div>
          <div className={style.textContent}>
            <div className={style.title}>Незриме життя Адді Лярю</div>
            <div className={style.author}>В. Е. Шваб</div>
          </div>
          <button className={style.button}>Детальніше</button>
        </div>
        <div className={style.book}>
          <div className={style.img}>
            <img src={img1} alt="1" />
          </div>
          <div className={style.textContent}>
            <div className={style.title}>Незриме життя Адді Лярю</div>
            <div className={style.author}>В. Е. Шваб</div>
          </div>
          <button className={style.button}>Детальніше</button>
        </div>
      </div>
      <div className={style.buttonMore}>
        <button className={style.button}>Показати ще</button>
      </div>
    </div>
  );
};

export default Books;
