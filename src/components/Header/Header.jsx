/* eslint-disable react/prop-types */
import { useState } from "react";
import searchIconPath from "./icon.svg";
// import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const SearchIcon = () => (
  <img className="header-img" src={searchIconPath} />
);

export const Header = () => {
  const [isOpen, setOpen] = useState();

  return (
    <>
      <header className="header">
        <NavLink to="/" className="header_logo">
          MySubd
        </NavLink>
        <nav className={`header_nav ${isOpen ? "active" : ""}`}>
          <ul className="header_nav-list">
            <NavLink to="/" className="header_nav-item">
              Главная
            </NavLink>
            {/* <li className="header_nav-item">Главная</li> */}
            <NavLink to="/table" className="header_nav-item">
              Таблица
            </NavLink>
            <NavLink to="/query" className="header_nav-item">
              Запрос SQL
            </NavLink>
            <NavLink to="/admin" className="header_nav-item">
              Админ
            </NavLink>
            <NavLink to="/logout" className="header_nav-item">
              Выход
            </NavLink>
          </ul>
        </nav>
        <button className="header_menu-button" onClick={() => setOpen(!isOpen)}>
          <SearchIcon />
        </button>
      </header>
    </>
  );
};
