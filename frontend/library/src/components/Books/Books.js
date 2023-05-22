import React, { useEffect, useState } from "react";
import style from "./Books.module.css";
import img1 from "./Photo/1.jpg";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Button } from "@material-ui/core";
import axios from "axios";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  
  const goto = () => {
    navigate("/MoreBook/" /*+ props.id*/);
  };

  useEffect(() => {
    loadBooks();
    
  },[]);

  const loadBooks =async()=>{
    const result =await axios.get("http://localhost:8080/books/getAll");
    setBooks(result.data);
  }
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
        {books.map((book) => (
          <div>
            <div className={style.textContent}>
              <div className={style.title}>{book.bookname}</div>
              <div className={style.author}>{book.author}</div>
            </div>
            <button className={style.button} onClick={goto}>
              Детальніше
            </button>
          </div>
        ))}
      </div>
      {/* <div className={style.buttonMore}>
        <button className={style.button}>Показати ще</button>
      </div> */}
    </div>
  );
};

export default Books;
