import React, { useEffect, useState } from "react";
import style from "./Books.module.css";
import img1 from "./Photo/1.jpg";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Button } from "@material-ui/core";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const goto = () => {
    navigate("/MoreBook/" /*+ props.id*/);
  };

  useEffect(() => {
    fetch("http://localhost:8080/books/getAll")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
      });
  }, []);
  return (
    <div>
      <div className={style.h1}>Книги</div>
      {/* <div className={style.input}>
        <input
          className={style.search}
          type="search"
          placeholder="Знайти книгу"
        />
      </div> */}
      <div className={style.content}>
        <div className={style.book}>
          <div className={style.img}>
            <img src={img1} alt="1" />
          </div>
          <div className={style.textContent}>
            <div className={style.title}>{books.bookname}</div>
            <div className={style.author}>{books.author}</div>
          </div>
          <button className={style.button} onClick={goto}>
            Детальніше
          </button>
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
