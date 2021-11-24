import React from "react";
import Header from "./components/Header"
import Products from "./pages/products";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
