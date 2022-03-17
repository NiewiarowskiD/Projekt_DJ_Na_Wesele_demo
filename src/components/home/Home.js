import React from 'react';
import Form from "../login/Login";
import './home.css'
import {Link} from "react-router-dom";



function Home(props) {

    return (
        <div className="home_container">
            <header className="App-header">
                <p>Hej! Niedługo Wasze wesele,więc czas wybrać DJ'a! Zaloguj się lub znajdź odpowiednią osobę </p>
            </header>
            <div className="login_chose_dj_container">
                <div className="form_container">
                    <Form />
                </div>
                <div className="chose_dj_button_container">
                     <button className="chose_dj_button" ><Link to="/search" className="s"> Wybierz dj'a! </Link> </button>
                </div>
            </div>

        </div>


    );
}

export default Home;