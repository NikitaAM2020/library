import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Author from "./components/Author/Author";
import Books from "./components/Books/Books";
import MoreBook from "./components/MoreBook/MoreBook";
import AddBook from "./components/AddBook/AddBook";
import EditBook from "./components/EditBook/EditBook";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/author" element={<Author />} />
          <Route path="/books" element={<Books />} />
          <Route path={"/MoreBook/:id"} element={<MoreBook />} />
          <Route path={"/addBook"} element={<AddBook />} />
          <Route path={"/EditBook/:id"} element={<EditBook />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
