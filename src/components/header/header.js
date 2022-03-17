import React,{Component} from "react";
import {Link} from "react-router-dom";
import './header.css';

class Header extends Component{

    render(){
        return (
            <div className="header_container">
                <div className="header_logo">
                    <img className="logo_header" src={require("../../images/logo.png")} alt="logo"/>
                </div>
                <div className="routing_menu">
                    <nav className="navigation_container">
                        <ul class="navigation">
                            <li class="nav_li">
                                <Link to="/home" className="a_nav">Home</Link>
                            </li>
                            <li className="nav_li">
                                <Link to="/search" className="a_nav">Znajdź Dj'a</Link>
                            </li>
                            <li className="nav_li">
                                <Link to="/form" className="a_nav">Ankieta</Link>
                            </li>
                            <li className="nav_li">
                                <Link to="/contact" className="a_nav">Kontakt</Link>
                            </li>
                            <li className="nav_li">
                                <Link to="/about" className="a_nav">O nas</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        );
    }


}

export default Header;