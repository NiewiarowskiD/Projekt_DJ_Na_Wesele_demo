import React, { useState } from "react";
import FakeAPI from "../../data/fakeAPI";
import Button from "@mui/material/Button";
import "./login.css"
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';

export default function Form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [user, setUser] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setPasswordError(password.length < 4);
        setUsernameError(username.length < 2);

        if (password.length < 4 || username.length < 2) {
        } else {
            FakeAPI.login({
                username,
                password,
            })
                .then((user) => {
                    setUser(user);
                })
                .catch((err) => {

                });
        }
    };
    if (user) {
        const { name, surname, username, lastLogin } = user;
        return (
            <div>
                <p>
                    {name} {surname}
                </p>
                <p>{username}</p>
                <p>{lastLogin.toLocaleTimeString()}</p>
            </div>
        );
    }
    return (

        <form onSubmit={handleSubmit} className="login_form_container">
            <input className="input_login"
                type="text"
                placeholder="e-mail"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <p>Za krótki adres e-mail</p>}
            <input className="input_login"
                type="password"
                value={password}
                placeholder="Hasło"
                onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p>Błędne hasło</p>}
            <button className="login_button" type="submit" variant="contained" color="success"> Zaloguj się </button>
        </form>
    );
}


