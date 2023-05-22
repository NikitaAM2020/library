import React, { useState } from "react";
import style from "./AddBook.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  let navigate = useNavigate();

  const [book, setBook] = useState({
    bookname: "",
    author: "",
    year: "",
    number: "",
  });

  const { bookname, author, year, number } = book;

  const onInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
    
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/books/add", book);
    navigate("/");
  };

  return (
    <div>
      <div className={style.h1}>Додавання книжки</div>
      <form onSubmit={(e) => onSubmit(e)} className={style.form}>
        <div>
          <div>Назва</div>
          <input
            type={"text"}
            className={style.input}
            placeholder="Введіть назву книжки"
            name="bookname"
            value={bookname}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <div className={style.label}>Автор</div>
          <input
            type={"text"}
            className={style.input}
            placeholder="Введіть прізвище та ініціали"
            name="author"
            value={author}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <div className={style.label}>Рік видання</div>
          <input
            type={"text"}
            className={style.input}
            placeholder="Введіть рік видання книжки"
            name="year"
            value={year}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div>
          <div className={style.label}>Кількість екземплярів</div>
          <input
            type={"text"}
            className={style.input}
            placeholder="Введіть кількість екземплярів"
            name="number"
            value={number}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className={style.btn}>
          <button className={style.button}>Додати</button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
