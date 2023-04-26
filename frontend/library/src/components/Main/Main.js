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
      <div className={style.img}>
        <img src={imgMain} alt="Logo" />
      </div>
      <div className={style.cta}>
        <button>Пошук</button>
      </div>
    </div>
  );
};

export default Main;
