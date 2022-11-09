
import { useDispatch } from "react-redux";
import {useEffect} from 'react';
import loadBooks from "store/books/loadBooks";
import Cart from 'pages/Cart'
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import Book from "./pages/Book";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loadBooks)
  },[])
  return (
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/book/:id" element={<Book />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
