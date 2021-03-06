import React, { useState } from "react";
import Button from "@mui/material/Button";
import "./wedding_form.css"

function Wedding_form() {


    const [a1, setA1] = useState("");
    const [a2, setA2] = useState("");
    const [a3, setA3] = useState("");
    const [a4, setA4] = useState("");
    const [a5, setA5] = useState("");
    const [a6, setA6] = useState("");
    const [a7, setA7] = useState("");
    const [a8, setA8] = useState("");
    const [a9, setA9] = useState("");
    const [a10, setA10] = useState("");
    const [a11, setA11] = useState("");
    const [a12, setA12] = useState("");
    const [a13, setA13] = useState("");
    const [a14, setA14] = useState("");
    const [a15, setA15] = useState("");
    const [a16, setA16] = useState("");
    const [a17, setA17] = useState("");
    const [a18, setA18] = useState("");
    const [a19, setA19] = useState("");
    const [a20, setA20] = useState("");
    const [a21, setA21] = useState("");
    const [a22, setA22] = useState("");
    const [a23, setA23] = useState("");
    const [a24, setA24] = useState("");
    const [a25, setA25] = useState("");
    const [a26, setA26] = useState("");
    const [message, setMessage] = useState("");



    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:3000/wedding_form", {
                method: "POST",
                body: JSON.stringify({
                    a1: a1,
                    a2: a2,
                    a3: a3,
                    a4: a4,
                    a5: a5,
                    a6: a6,
                    a7: a7,
                    a8: a8,


                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setA1("");
                setA2("");
                setA3("");
                setA4("");
                setA5("");
                setA6("");
                setA7("");
                setA8("");

            } else {
                setMessage("Uzupelnij wszystkie pola");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="wedding_form_container">
            <form className="wedding_form" onSubmit={handleSubmit}>
                <p className="wedding_form_header"> Ankieta przedweselna </p>

                <label>
                1. Data uroczystosci:
                <input
                    type="text"
                    value={a1}
                    onChange={(e) => setA1(e.target.value)}
                />
                </label>

                <label>
                    2. Imiona Pary M??odej:
                    <input
                        type="text"
                        value={a2}
                        onChange={(e) => setA2(e.target.value)}
                    />
                </label>

                <label>
                    3. Miejsce uroczysto??ci:
                    <input
                        type="text"
                        value={a3}
                        onChange={(e) => setA3(e.target.value)}
                    />
                </label>

                <label>
                    4. Imi?? i nazwisko osoby, menagera lokalu oraz nr tel:
                    <input
                        type="text"
                        value={a4}
                        onChange={(e) => setA4(e.target.value)}
                    />
                </label>

                <label>
                    5. Czy sala jest na parterze?
                    <input
                        type="checkbox"
                        value={a5}
                        onChange={(e) => setA5(e.target.value)}
                    />
                </label>

                <label>
                    6. Przewidywana liczba go??ci:
                    <input
                        type="text"
                        value={a6}
                        onChange={(e) => setA6(e.target.value)}
                    />
                </label>

                <label>
                    7. Ceremonia za??lubin: Ko??ci????, USC czy plener obok Sali? Godzina rozpocz??cia ceremonii.:
                    <input
                        type="text"
                        value={a7}
                        onChange={(e) => setA7(e.target.value)}
                    />
                </label>

                <label>
                    8. Nag??o??nienie ceremonii za??lubin (je??li dotyczy):
                    <input
                        type="text"
                        value={a8}
                        onChange={(e) => setA8(e.target.value)}
                    />
                </label>

                <label>
                    9. Planowane przybycie Pary M??odej lub pierwszych Go??ci:
                    <input
                        type="text"
                        value={a9}
                        onChange={(e) => setA9(e.target.value)}
                    />
                </label>

                <label>
                    10. ??yczenia od Go??ci: Na Sali, w ogrodzie czy Pod Ko??cio??em?:
                    <input
                        type="text"
                        value={a10}
                        onChange={(e) => setA10(e.target.value)}
                    />
                </label>

                <label>
                    11. Imi?? ??wiadkowej:
                    <input
                        type="text"
                        value={a11}
                        onChange={(e) => setA11(e.target.value)}
                    />
                </label>

                <label>
                    12. Imi?? ??wiadka:
                    <input
                        type="text"
                        value={a12}
                        onChange={(e) => setA12(e.target.value)}
                    />
                </label>

                <label>
                    13. Nag??o??nienie ceremonii za??lubin (je??li dotyczy):
                    <input
                        type="text"
                        value={a13}
                        onChange={(e) => setA13(e.target.value)}
                    />
                </label>

                <label>
                    14. Imiona rodzic??w Pani M??odej:
                    <input
                        type="text"
                        value={a14}
                        onChange={(e) => setA14(e.target.value)}
                    />
                </label>

                <label>
                    15. Dodatkowo decydujemy si?? na (opcje dodatkowo p??atne - je??eli s?? ju?? w Twoim pakiecie, prosz?? zaznaczy?? tak??e):
                    <input
                        type="text"
                        value={a15}
                        onChange={(e) => setA15(e.target.value)}
                    />
                </label>

                <label>
                    16. Muzyka podczas krojenia tortu, podaj sw??j utw??r:
                    <input
                        type="text"
                        value={a16}
                        onChange={(e) => setA16(e.target.value)}
                    />
                </label>

                <label>
                    17. Utw??r na pierwszy taniec (czy zagrany do ko??ca czy wyciszenie w kt??rym?? momencie?
                    Prze??lij plik mp3 na mojego maila :
                    <input
                        type="text"
                        value={a18}
                        onChange={(e) => setA18(e.target.value)}
                    />
                </label>

                <label>
                    18. Podzi??kowania dla rodzic??w:
                    <input
                        type="text"
                        value={a19}
                        onChange={(e) => setA19(e.target.value)}
                    />
                </label>

                <label>
                    19. Wznoszenie toast??w:
                    <input
                        type="checkbox"
                        value={a20}
                        onChange={(e) => setA20(e.target.value)}
                    />
                </label>

                <label>
                    20. Oczepiny:
                    <input
                        type="text"
                        value={a21}
                        onChange={(e) => setA21(e.target.value)}
                    />
                </label>

                <label>
                    21. Podobaj?? nam si?? nast??puj??ce konkursy (podaj numerki z listy):
                    <input
                        type="text"
                        value={a22}
                        onChange={(e) => setA22(e.target.value)}
                    />
                </label>


                <label>
                    22. Godziny wydawania posi??k??w i tortu:
                    <input className="posilki"
                        type="text"
                        value={a23}
                        onChange={(e) => setA23(e.target.value)}
                    />
                </label>

                <label>
                    23. Lubimy sie bawi?? przy muzyce:
                    <input
                           type="text"
                           value={a24}
                           onChange={(e) => setA24(e.target.value)}
                    />
                </label>

                <label>
                    24. Czy zgadzasz sie na publikacje instastroies:
                    <input
                        type="checkbox"
                        value={a25}
                        onChange={(e) => setA25(e.target.value)}
                    />
                </label>

                <div className="button_container_form">
                    <button className="wedding_form_button">Wy??lij ankiet??</button>
                </div>
            </form>
        </div>
    );
}

export default Wedding_form;
