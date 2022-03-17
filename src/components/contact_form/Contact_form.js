import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./contact_form.css"

function ContactForm() {


    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:3000/message", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    date: date,
                    email: email,
                    message: message,

                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setName("");
                setDate("");
                setEmail("");
                setMessage("");
            } else {
                setMessage("Wyslano wiadomość");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="contact_form_container">
            <form className="conctact_form" onSubmit={handleSubmit}>
                <p className="contact_form_header"> Masz pytania? Czekamy na Twoją wiadomość </p>
                <input
                    type="text"
                    className="input_contact"
                    value={name}
                    placeholder="Imię"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className="input_contact"
                    value={date}
                    placeholder="Data wesela"
                    onChange={(e) => setDate(e.target.value)}
                />
                <input
                    type="text"
                    className="input_contact"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input className="message_form"
                    type="text"
                    value={message}
                    placeholder="Wiadomość"
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button className="contact_form_button">Wyślij wiadomość</button>

            </form>
        </div>
    );
}

export default ContactForm;
