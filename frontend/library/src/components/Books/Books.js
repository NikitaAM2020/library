import React, { useEffect, useState } from "react";
import style from "./Books.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  const [sortedByTitle, setSortedByTitle] = useState(false);
  const [sortedByYear, setSortedByYear] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadBooks();
  }, []);

  useEffect(() => {
    filterBooks();
  }, [books, searchQuery]);

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:8080/books/getAll");
    setBooks(result.data);
  };

  const sortBooksByTitle = () => {
    const sortedBooks = [...books].sort((a, b) =>
      a.bookname.localeCompare(b.bookname)
    );
    setBooks(sortedBooks);
    setSortedByTitle(true);
    setSortedByYear(false);
  };

  const sortBooksByYear = () => {
    const sortedBooks = [...books].sort((a, b) => a.year - b.year);
    setBooks(sortedBooks);
    setSortedByYear(true);
    setSortedByTitle(false);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterBooks = () => {
    const filtered = books.filter((book) =>
      book.bookname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <div className={style.h1}>Книги</div>

      <div className={style.input}>
        <input
          className={style.search}
          type="search"
          placeholder="Знайти книгу"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className={style.sortBtn}>
        <button className={style.button} onClick={sortBooksByTitle}>
          Сортувати за назвою
        </button>
        <button className={style.button} onClick={sortBooksByYear}>
          Сортувати за роком
        </button>
      </div>

      <div className={style.content}>
        {filteredBooks.map((book) => (
          <div key={book.id}>
            <div className={style.textContent}>
              <div className={style.title}>{book.bookname}</div>
              <div className={style.author}>{book.author}</div>
            </div>
            <button className={style.button}>
              <NavLink className={style.button} to={`/MoreBook/${book.id}`}>
                Детальніше
              </NavLink>
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
