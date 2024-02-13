import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import React from 'react';
import { BsJustify } from 'react-icons/bs';
function Header({Toggle}) {

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent ">
      <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}><BsJustify/></i>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation"><i className='bi bi-justify'><BsJustify/></i></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Person
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
