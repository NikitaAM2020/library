import React from "react";
import style from "./Author.module.css";
import author from "./author.jpg";

const Author = () => {
  return (
    <div>
      <div className={style.h1}>Автор</div>
      <div className={style.content}>
        <div className={style.img}>
          <img src={author} alt="author" />
        </div>
        <div>
          <div className={style.info}>
            “NIKALIB” - це курсовий проєкт студента 3 курсу Національного
            університету “Львівська політехніка”. Метою цієї роботи було
            розробити сайт за допомогою мови програмування Java.
          </div>
          <div className={style.info}>
            Сайт повинен був містити відомості про книги: прізвище та ініціали
            автора, назву, рік видання, кількість екземплярів цієї книги у
            бібліотеці. Даний функціонал представлено на сторінці “Книжки”, там
            можна обрати будь-яку в наявності книгу та дізнатися про неї,
            натиснувши на кнопку “Детальніше”. Також книжку можна видалити з
            бази даних, натиснувши книпку “Списати книгу”.
          </div>
          <div className={style.info}>
            Також можна здійснити сортування книг за роком видання або ж за прізвищем
            автора.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
