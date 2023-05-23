import React, { useEffect, useState } from "react";
import style from "./MoreBook.module.css";
import img1 from "../Books/Photo/1.jpg";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MoreBook = () => {
  let navigate = useNavigate();

  const [book, setBook] = useState({
    bookname: "",
    author: "",
    year: "",
    number: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const result = await axios.get(`http://localhost:8080/books/book/${id}`);
    setBook(result.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:8080/books/book/${id}`);
    loadBook();
    navigate("/Books");
  };

  return (
    <div>
      <div className={style.h1}>{book.bookname}</div>
      <div className={style.content}>
        {/* <div>
          <img className={style.img} src={img1} alt="1" />
        </div> */}
        <div className={style.info}>
          <div className={style.data_item}>
            <div className={style.info_l}>Автор:</div>
            <div className={style.info_r}>{book.author}</div>
          </div>
          <div className={style.data_item}>
            <div className={style.info_l}>Рік видання:</div>
            <div className={style.info_r}>{book.year}</div>
          </div>
          <div className={style.data_item}>
            <div className={style.info_l}>Кількість екземплярів:</div>
            <div className={style.info_r}>{book.number}</div>
          </div>
          <div className={style.data_item}>
            <div className={style.info_l}>ISBN:</div>
            <div className={style.info_r}>978-617-801-213-7</div>
          </div>
          <div className={style.btn}>
            <button className={style.button}>
              <NavLink className={style.button} to={`/editBook/${book.id}`}>
                Редагувати книжку
              </NavLink>
            </button>
            <button
              className={style.buttonCancel}
              onClick={() => deleteBook(book.id)}
            >
              Списати книгу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreBook;
