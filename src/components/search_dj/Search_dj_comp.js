
import './search_dj.css';
import PropTypes from "prop-types";
import React, {useState} from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom";

function Search_Dj_comp () {


    const YoutubeEmbed = ({embedId}) => (
        <div className="video-responsive">
            <iframe
                width="240"
                height="100"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );

    YoutubeEmbed.propTypes = {
        embedId: PropTypes.string.isRequired

    };

        const [name, setName] = useState("Kliknij w obrazek żeby wybrać Dj'a");
        const [describe, setDescribe] = useState("");
        const [yt_link,setYt_link]=useState("Pc1fBFlYoK0");
        const [dates,setDates]=useState("20.06");

        //nizej pobieranie danych z db.json

        const change = (event) => {

            setName(event.target.getAttribute("alt"));
            setDescribe("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
                "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor" +
                "is nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess\e" +
                " cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
                " proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
            setYt_link("Pc1fBFlYoK0");

        };

    useEffect(() => {
        fetch(`http://localhost:3000/djs?name=${name}`)
            .then(response => response.json())
            .then(dj => {
                setDescribe(dj);
            });
    }, [name])



        const Date_change = (event) => {

            const [dates, setDates] = useState(false);

             useEffect(() => {
                fetch("http://localhost:3000/dates")
                .then(response => response.text())
                .then(dates1 => {
                   setDates(dates1);
                      });
             });

             if (dates === false) {
                 return <h1>Sprawdzam wolne terminy...</h1>;
             } else {
                 return <h1>{dates.slice(20,-7)}</h1>;
             }
        };





    return (
            <div className="search_dj_container">
                <div className="photos_container">
                    <img onClick={change} className="photo" src={require("../../images/m1.jpeg")} alt="Dj Michał"/>
                    <img onClick={change} className="photo" src={require("../../images/m2.jpeg")} alt="Dj Daniel"/>
                    <img onClick={change} className="photo" src={require("../../images/m3.jpeg")} alt="Dj Maciej"/>
                    <img onClick={change} className="photo" src={require("../../images/m4.jpeg")} alt="Dj Marian"/>
                    <img onClick={change} className="photo" src={require("../../images/m5.jpeg")} alt="Dj Kacper"/>
                    <img onClick={change} className="photo" src={require("../../images/m6.jpeg")} alt="Dj Piotr"/>
                    <img onClick={change} className="photo" src={require("../../images/m7.jpeg")} alt="Dj Łukasz"/>
                    <img onClick={change} className="photo" src={require("../../images/m8.jpeg")} alt="Dj Przemek"/>
                </div>

                <div className="dj_describe">
                    <h1 className="dj_name">{name}</h1>
                    <p className="dj_describe_text"> {describe}</p>
                    <button className="chose_dj_button" ><Link to="/contact" className="s"> Wybieram! </Link> </button>
                    <button className="dj_dates">Wolne terminy</button>
                    <p className="dates"><Date_change /></p>
                    <div className="dj_yt">
                        <YoutubeEmbed embedId={yt_link}/>
                    </div>


                </div>
            </div>
        );
    }


export default Search_Dj_comp;
