import React from "react";
import style from "./Main.module.css";
import imgMain from "./imgMain.jpg";
import { NavLink, useNavigate } from "react-router-dom";

const Main = () => {
  const setActive = ({ isActive }) => (isActive ? style.active : style.item);
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
        <button className={style.button}>
          <NavLink className={style.button} to="/Books">
            Пошук
          </NavLink>
        </button>
        <button className={style.button}>
          <NavLink className={style.button} to="/AddBook">
            Додати книжку
          </NavLink>
        </button>
        
      </div>
    </div>
  );
};

export default Main;
