import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
class Menu extends Component {
    constructor(){
        super();
        this.openMenu = this.openMenu.bind(this);
    }
    openMenu = () =>{
        document.getElementById('')
    }
  render() {
    return (
      <header className=''>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#home">
              <h2>DP</h2>
            </a>
            <button
              className="navbar-toggler btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id=''
            >
              <span className="navbar-toggler-icon size-btn"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Menu;
