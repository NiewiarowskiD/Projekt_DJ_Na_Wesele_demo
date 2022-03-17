import React, { useState } from "react";
import "./calculator.css"

function Calc() {


    return (

        <div className="calc_container">
            <div className="calc_form_container">
                <p>Kalkulator usług weselnych - zaznacz i sprawdź koszt</p>
                <form className="calc_form">
                    <label>
                        Wesele (11h)
                        <input
                            type="checkbox"
                        />
                    </label>

                    <label>
                        Poprawiny (8h)
                        <input
                            type="checkbox"
                        />
                    </label>

                    <label>
                        Tłumacz
                        <input
                            type="checkbox"
                        />
                    </label>

                    <label>
                        Saksofonista
                        <input
                            type="checkbox"
                        />
                    </label>

                    <label>
                        FotoBudka
                        <input
                            type="checkbox"
                        />
                    </label>

                    <label>
                        Dodatkowe oświetlenie sali
                        <input
                            type="checkbox"
                        />
                    </label>

                    <label>
                        Dodatkowy wodzirej
                        <input
                            type="checkbox"
                        />
                    </label>

                    <label>
                        Ciężki dym
                        <input
                            type="checkbox"
                        />
                    </label>



                </form>

            </div>
            <div className="result_container">
                <p> Suma: </p>
            </div>

        </div>


    );
}

export default Calc;
