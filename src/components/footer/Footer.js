import React from 'react';
import './footer.css'
import {Link} from "react-router-dom";
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';


function Footer(props) {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img className="logo_footer" src={require("../../images/logo.png")} alt="logo"/>
            </div>
            <div className="footer_menu">
                <nav className="footer_nav_container">
                    <ul className="footer_navigation">
                        <li className="li_nav">
                            <a href="https://www.facebook.com" className="a_footer"> <FaFacebook /> Facebook</a>
                        </li>
                        <li className="li_nav">
                            <a href="https://www.twitter.com" className="a_footer"> <FaTwitter /> Twitter </a>
                        </li>
                        <li className="li_nav">
                            <a href="https://www.youtube.com" className="a_footer"><FaYoutube /> Kanał Youtube</a>
                        </li>
                    </ul>
                </nav>
            </div>


        </div>
    );
}

export default Footer;