import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Products from "./pages/products";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Products />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
