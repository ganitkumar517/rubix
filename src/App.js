import "./styles.css";
import React from 'react';
import Navbar from "./component/Navbar";
import Home from "./component/Home";

import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar/><br></br>
      <Home/>
      <Contact/>
      <Footer/>
    </div>
  );
}
