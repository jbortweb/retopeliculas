import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../logo.webp';
import "./Header.scss";

const Header = (props) => {  //NavLink le añade el parametro a la url

    return <header>
        <div className="cabecera">
            <img alt = 'logo' src ={logo}></img>
            <h1>Jbortweb</h1>        
        </div>
        <nav className="menu">
            <ul>
                <NavLink to='/popular'>
                <li className="populares">Películas Populares</li>
                </NavLink>
                <NavLink to='/upcoming'>
                <li className="proximas">Próximas Películas</li>
                </NavLink>
                <NavLink to = '/top_rated'>
                <li className="votadas">Películas más votadas</li>
                </NavLink>
            </ul>
        </nav>
    </header>
}

export default Header;