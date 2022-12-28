import React from 'react'
export default function Navbar() {
  return (
    <div className="App">
      <nav className="navBar">
      <a class="navbar-brand page-scroll" href="https://rubixe.com/">
      <img src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" id='img' alt="Rubixe Logo"/></a>
        <a href='/'>Home</a>
        <a href='/service'>Service</a>
        <a href='/product'>Product</a>
        <a href='/internship'>AI Internship</a>
        <a href='/career'>Career</a>
        <a href='/blog'>blog</a>
        <a href='/about'>about</a>
        <a href='/contact'>contact us</a>
        <hr/>
      </nav>
    </div>
  );
}
