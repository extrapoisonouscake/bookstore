import React from "react";
// eslint-disable-next-line no-unused-vars
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
// eslint-disable-next-line no-unused-vars
import Book from './pages/Book'
function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        {/* <Book id={35}/> */}
      </main>
    </>
  );
}

export default App;
