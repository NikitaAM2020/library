import React from "react";
import style from "./Main.module.css";
import imgMain from "./imgMain.jpg";

const Main = () => {
  return (
    <div>
      <div className={style.title}>Бібліотека</div>
      <div className={style.h4}>
        Бібліотеки - це скарбниці всіх багатств людства
      </div>
      <div>
        <img className={style.img} src={imgMain} alt="Logo" />
      </div>
      <div className={style.cta}>
        <button className={style.button}>Пошук</button>
      </div>
    </div>
  );
};

export default Main;
