import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">MernMiniProject</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Registration</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
