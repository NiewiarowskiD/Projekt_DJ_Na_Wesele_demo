import './App.css'
import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/Footer";
import './reset.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/home/Home";
import Wedding_form from "./components/wedding_form/Wedding_form";
import Search_Dj_comp from "./components/search_dj/Search_dj_comp";
import Contact_form from "./components/contact_form/Contact_form";
import About from "./components/about/About";
import Calc from "./components/calculator/Calculator";

function App() {
  return (
      <div className="root">
        <div className="start_window_container">

            <Router >
                <Header />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>





                    <Route path="/form">
                        <Wedding_form />
                    </Route>

                    <Route path="/search">
                        <Search_Dj_comp />
                    </Route>

                    <Route path="/contact">
                        <Contact_form />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/calc">
                        <Calc />
                    </Route>


                    </Switch>

                <Footer />
            </Router>
        </div>
      </div>
  );
}



export default App;
